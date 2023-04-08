const images = [
  {
    src: "images/puzzle/Mona_Lisa_by_Fernando_Botero.jpg",
    title: "Mona Lisa - Fernando Botero",
  },
  {
    src: "images/puzzle/Guernica_Pablo_Picasso.jpg",
    title: "Guernica - Pablo Picasso",
  },
  {
    src: "images/puzzle/The_Kiss_Gustav_Klimt.jpg",
    title: "The Kiss - Gustav Klimt",
  },
  {
    src: "images/puzzle/Bansky_Red_balloon.jpg",
    title: "Red Balloon - Bansky",
  },
  {
    src: "images/puzzle/Noche_estrellada_Vincent_Van_Gogh.jpg",
    title: "Starry Night - Vincent Van Gogh",
  },
];

 

window.onload = function () {
 
  let imagePuzzle = new ImagePuzzle(); 

  let gridSize = document
    .querySelector('#levelPanel input[type="radio"]:checked')
    .getAttribute("value");
  imagePuzzle.startGame(images, gridSize);
  startTime();
};

function restart() {
  imagePuzzle = new ImagePuzzle();  
  let gridSize = document
    .querySelector('#levelPanel input[type="radio"]:checked')
    .getAttribute("value");
  imagePuzzle.startGame(images, gridSize);
  restartTime();
}
class ImagePuzzle {
  constructor(stepCount = 0) {
    this.stepCount = stepCount;
  }

  startGame(images, gridSize) {
    this.setImage(images, gridSize);
    helper.doc("playPanel").style.display = "block";
    this.shufflePuzzle("sortable");
    this.stepCount = 0;
    
  }

  setImage(images, gridSize = 4)
  {
    let percentage = 100 / (gridSize - 1);
    let image = images[Math.floor(Math.random() * images.length)];
    if (image.title != "") {
      helper.doc("imgTitle").innerHTML = image.title;
    }
    helper.doc("actualImage").setAttribute("src", image.src);
    helper.doc("sortable").innerHTML = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
      let xpos = percentage * (i % gridSize) + "%";
      let ypos = percentage * Math.floor(i / gridSize) + "%";

      let li = document.createElement("li");
      li.id = i;
      li.setAttribute("data-value", i);
      li.style.backgroundImage = "url(" + image.src + ")";
      li.style.backgroundSize = gridSize * 100 + "%";
      li.style.backgroundPosition = xpos + " " + ypos;
      li.style.width = 280 / gridSize + "px";
      li.style.height = 280 / gridSize + "px";

      li.setAttribute("draggable", "true");
      li.ondragstart = (event) =>
        event.dataTransfer.setData("data", event.target.id);
      li.ondragover = (event) => event.preventDefault();
      li.ondrop = (event) => {
        let origin = helper.doc(event.dataTransfer.getData("data"));
        let dest = helper.doc(event.target.id);
        let p = dest.parentNode;

        if (origin && dest && p) {
          let temp = dest.nextSibling;
          p.insertBefore(dest, origin);
          p.insertBefore(origin, temp);

          let vals = Array.from(helper.doc("sortable").children).map(
            (x) => x.id
          );
          let now = new Date().getTime();
          helper.doc("stepCount").textContent = ++this.stepCount;
          document.querySelector(".timeCount").textContent = parseInt(
            (now - this.startTime) / 1000,
            10
          );

          if (isSorted(vals)) {
            helper.doc("actualImageBox").innerHTML =
              helper.doc("gameOver").innerHTML;
            helper.doc("stepCount").textContent = this.stepCount;
          }
        }
      };
      li.setAttribute("dragstart", "true");
      helper.doc("sortable").appendChild(li);
    }
    this.shufflePuzzle("sortable");
  }

  shufflePuzzle(id){
    let ul = document.getElementById(id);
    for (let i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[(Math.random() * i) | 0]);
    }
  }  
}

isSorted = (arr) =>
  arr.every((elem, index) => {
    return elem == index;
  });

let helper = {
  doc: (id) => document.getElementById(id) || document.createElement("div"),
};

/***
     * Timer Zone
     */
let timerPanel = document.getElementById("timerPanel");
let timer = setInterval(startTime, 1000);
let totalSeconds = 0;


function startTime() {
++totalSeconds;
timerPanel.innerHTML = timeParser(totalSeconds % 60);
}

function restartTime(){
    totalSeconds = 0;
    startTime();
}

function timeParser(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function stopTimer(){
    clearInterval(timer);
}
