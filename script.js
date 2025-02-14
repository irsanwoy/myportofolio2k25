document.addEventListener('DOMContentLoaded', () => {
    const soundIcon = document.getElementById("sound-icon");
    const audio = document.getElementById("background-music");

    soundIcon.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            soundIcon.classList.add("playing");
            createParticles(); // Efek partikel saat musik diputar
            startJedagJedug(); // Efek jedag jedug
        } else {
            audio.pause();
            soundIcon.classList.remove("playing");
            stopJedagJedug(); // Stop jedag jedug
        }
    });

    // Efek Partikel Glowing
    function createParticles() {
        for (let i = 0; i < 20; i++) {
            let particle = document.createElement("div");
            particle.className = "particle";
            document.body.appendChild(particle);

            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let size = Math.random() * 10 + 5;
            let duration = Math.random() * 2 + 1;

            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDuration = `${duration}s`;

            setTimeout(() => {
                particle.remove();
            }, duration * 1000);
        }
    }

    // Efek Jedag Jedug (Mengubah Scale Body)
    function startJedagJedug() {
        document.body.classList.add("jedag-jedug");
    }

    function stopJedagJedug() {
        document.body.classList.remove("jedag-jedug");
    }

    // Smooth scrolling untuk navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Tombol Back-to-Top
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
