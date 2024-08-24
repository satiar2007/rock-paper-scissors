const imageList = {
    1: "images/rock.png",
    2: "images/paper.png",
    3: "images/scissors.png"
}

var win = 0;
var lost = 0;
var draw = 0;

imageDiv = document.querySelector(".image-div");
const newImage = document.createElement("img")
var label = document.getElementById("label")

const handleClick = ('click', (e) => {
    const images = document.querySelectorAll(".image")

    images.forEach((item) => {
        if (item.id !== e.id) {
            item.classList.add("none")
        }
        else {
            item.classList.add("notpoint")
        }
    })

    var random = getRandomDifferentFromLast(3);
    console.log(random)
    newImage.src = imageList[random]
    newImage.className = "image"
    imageDiv.append(newImage)


    if (e.id == random) {
        draw++;
        label.textContent = "Draw!";
    }
    else if ((e.id == 1 && random == 3) || (e.id == 2 && random == 1) || (e.id == 3 && random == 2)) {
        win++;
        label.textContent = "Win :)";
    }
    else if ((e.id == 1 && random == 2) || (e.id == 2 && random == 3) || (e.id == 3 && random == 1)) {
        lost++;
        label.textContent = "Lost :(";
    }

    var winSpan = document.getElementById("win")
    winSpan.textContent = win

    var lostSpan = document.getElementById("lost")
    lostSpan.textContent = lost;

    var drawSpan = document.getElementById("draw")
    drawSpan.textContent = draw
})

function reset() {
    const images = document.querySelectorAll(".image")

    images.forEach((item) => {
        item.classList.remove("none")
        item.classList.remove("notpoint")
    })

    if (imageDiv.contains(newImage)) {
        imageDiv.removeChild(newImage);
    }
    label.textContent = "try";
}


function getRandomDifferentFromLast(max) {
    let lastRandom = -1; // Initialize with a value that is not a valid index

    let random;
    do {
        random = Math.floor(Math.random() * max);
    } while (random === lastRandom);

    lastRandom = random + 1;
    return random + 1;
}