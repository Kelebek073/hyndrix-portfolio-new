console.log(modal);
console.log(video);
console.log(document.querySelectorAll(".open-video"));


document.querySelectorAll(".open-video").forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        source.src = this.dataset.video;
        video.load();

        modal.classList.add("show");

        video.play();

    });

});

function closeVideo(){

    modal.classList.remove("show");

    video.pause();

    video.currentTime = 0;

}

document.querySelector(".close-video").onclick = closeVideo;

modal.addEventListener("click", function(e){

    if(e.target === modal){

        closeVideo();

    }

});