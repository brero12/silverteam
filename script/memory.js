window.onload = function () {

    var images = [];

    function rand() { return Math.floor(Math.random() * 90) };

    // get images, place them in an array & randomize the order
    for (var i = 0; i < 8; i++) {
        var img = 'https://picsum.photos/' + (200 + rand()) + '/' + (300 + rand()) + '?random=1';
        images.push(img);
        images.push(img);
    }
    randomizeImages();

    // output images then hide them
    var output = "<ol>";
    for (var i = 0; i < 16; i++) {
        output += "<li>";
        output += "<img src = '" + images[i] + "' style='display:none'/>";
        output += "</li>";
    }
    output += "</ol>";
    document.getElementById("container").innerHTML = output;

    var guess1 = '';
    var guess2 = '';
    var count = 0;

    document.getElementsByTagName('li').item(1).addEventListener('click', function () {
        if ((count < 2) && (document.querySelector(this).children('img').classList.contains('face-up')) === false) {

            // increment guess count, show image, mark it as face up
            count++;
            document.querySelector(this).children('img').style.display = '';
            document.querySelector(this).children('img').classList.add('face-up');

            //guess #1
            if (count === 1) {
                guess1 = document.querySelector(this).children('img').getAttribute('src');
            }

            //guess #2
            else {
                guess2 = document.querySelector(this).children('img').getAttribute('src');

                // since it's the 2nd guess check for match
                if (guess1 === guess2) {
                    console.log('match');
                    document.querySelector('li').children("img[src=" + guess2 + "]").classList.add('match');
                }

                // else it's a miss
                else {
                    console.log('miss');
                    setTimeout(function () {
                        document.querySelector('img').not('.match').style.display = 'none';
                        document.querySelector('img').not('.match').classList.remove('face-up');
                    }, 1000);
                }

                // reset
                count = 0;
                setTimeout(function () { console.clear(); }, 60000);
            }
        }
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
}
