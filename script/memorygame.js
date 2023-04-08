window.onload = function () {

    let images = [];
    let idcontrol = [];
    let matches = 8;

    function rand() { return Math.floor(Math.random() * 90) };

    // get images, place them in an array & randomize the order
    for (let i = 0; i < 8; i++) {
        let randNumber = rand();
        let img = 'https://picsum.photos/' + (200 + rand()) + '/' + (300 + rand()) + '?random=1';
        images.push(img);
        images.push(img);
        idcontrol.push(randNumber);
        idcontrol.push(randNumber);
    }
    randomizeImages();

    // output images then hide them
    let output = "<ol>";
    for (let i = 0; i < 16; i++) {
        output += "<li>";
        output += "<img src = '" + images[i] + "' style='display:none'/ id='imgBox"+ (i+1) +"' idcontrol='" + idcontrol[i] + "'>";
        output += "</li>";
    }
    output += "</ol>";
    document.getElementById("gamecontainer").innerHTML = output;

    let guess1 = '';
    let guess2 = '';
    let count = 0;

    let element = document.querySelectorAll('#gamecontainer > ol > li');


    element.forEach((box) => {
        box.addEventListener('click', () => {
            
            let imgBox = box.getElementsByTagName('img')[0];
            //alert(imgBox);
            

            let childrenNodeArr = Array.from(box.children);
            

            let elemFound = childrenNodeArr.find(
                e =>
                  e.classList.contains("face-up")
              );

              
            if (count < 2 && (elemFound === undefined || elemFound === false)) {
                count++;                
                imgBox.style.display = '';
                imgBox.classList.add('face-up');

                if (count === 1) {
                    guess1 = imgBox.getAttribute('src');
                    idGuess1 = imgBox.getAttribute('id');
                }else{
                    guess2 = imgBox.getAttribute('src');
                    idGuess2 = imgBox.getAttribute('id');
                    
                    if (guess1 === guess2) {
                        //console.log('match');
                        document.getElementById(idGuess1).classList.add('match');
                        document.getElementById(idGuess2).classList.add('match');
                        matches--;

                        if(matches===0)
                        {
                            stopTimer();
                        }
                    } else {
                        //console.log('miss');
                        
                        setTimeout(function () {
                            document.getElementById(idGuess1).style.display = 'none';
                            document.getElementById(idGuess1).classList.remove('face-up');
                            
                            document.getElementById(idGuess2).style.display = 'none';
                            document.getElementById(idGuess2).classList.remove('face-up');                            
                        }, 100);
                    }
    
                    // reset
                    count = 0;
                    setTimeout(function () { console.clear(); }, 60000);
                }

            }

        });
      });

    // randomize array of images
    function randomizeImages() {
        Array.prototype.randomize = function () {
            var i = this.length, j, temp;
            while (--i) {
                j = Math.floor(Math.random() * (i - 1));
                temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        };

        images.randomize();
    }

    /***
     * Timer Zone
     */
    let minutesLabel = document.getElementById("minutes");
    let secondsLabel = document.getElementById("seconds");
    let totalSeconds = 0;
    let timer = setInterval(setTime, 1000);

    function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = timeParser(totalSeconds % 60);
    minutesLabel.innerHTML = timeParser(parseInt(totalSeconds / 60));
    }

    function timeParser(val) {
        let valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

    function stopTimer(){
        clearInterval(timer);
    }
}

function resetGameBoard(){
    location.reload();
}
