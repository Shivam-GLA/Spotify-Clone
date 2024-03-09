console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");

// audioElement.play();

let songs = [
    { songName: "GLA By Shivam Soni", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo-Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV-Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EDHE-My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Call Me Maybe", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Lost In Wave", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Warriyo-Mortals", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Check It Out", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "On My Way", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Girls Like You", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

// change Song Name & Img Song
songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})

// Listen to Events (progressBar change hoga automatic)
audioElement.addEventListener("timeupdate", () => {
    // console.log("timeupdate");
    // console.log(audioElement.currentTime);
    // console.log(audioElement.duration);

    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

// jha le kar jayenge ush current time ka song
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

// On Click event on songItem Play Button
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.id);
        makeAllPlays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})

// on click next button
document.getElementById("next").addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
})

// on click previous button
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = songs.length-1;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
})

