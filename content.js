var autoplayThreshold = 5; // Establece el umbral de tiempo en segundos

function handleVideo() {
    var video = document.querySelector("video");
        if (video && video.currentTime < autoplayThreshold && video.paused) {
    video.play();
}
}

// Manejar el video en la carga inicial
handleVideo();

// Observador de mutaciones para detectar cambios en el DOM
var observer = new MutationObserver(handleVideo);
observer.observe(document.body, { childList: true, subtree: true });
