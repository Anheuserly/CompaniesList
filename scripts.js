document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('https://cdn.discordapp.com/attachments/1251898246075514911/1256315695659089940/mixkit-cinematic-tribal-flute-2306.wav');
    const audioButton = document.getElementById('toggle-audio');
    let isPlaying = false;

    audio.loop = true;

    audioButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
    });

    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        }
    });

    gsap.from('.location', { duration: 1, opacity: 0, stagger: 0.2, y: 20 });
});
