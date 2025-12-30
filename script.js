// Müzik Kontrolü
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.innerHTML = '<i class="fas fa-play"></i> Müzik';
    } else {
        bgMusic.play().catch(e => {
            console.log("Müzik otomatik oynatma engellendi. Lütfen butona tıklayın.");
        });
        musicBtn.innerHTML = '<i class="fas fa-pause"></i> Müzik';
    }
    isPlaying = !isPlaying;
});

// Başla Butonu
document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('letter').scrollIntoView({
        behavior: 'smooth'
    });
});

// Floating Hearts
const heartsContainer = document.querySelector('.floating-hearts');
for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.1;
    heart.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
    heart.style.animationDelay = Math.random() * 5 + 's';
    heartsContainer.appendChild(heart);
}

// CSS for floating animation
const style = document.createElement('style');
style.textContent = `
@keyframes float {
    0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 0.7;
    }
    90% {
        opacity: 0.7;
    }
    100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

// Gizli Mesaj
const secretBtn = document.getElementById('secretBtn');
const hiddenMessage = document.getElementById('hiddenMessage');

secretBtn.addEventListener('click', () => {
    if (hiddenMessage.style.display === 'block') {
        hiddenMessage.style.display = 'none';
        secretBtn.innerHTML = '<i class="fas fa-star"></i> Gizli Mesaj';
    } else {
        hiddenMessage.style.display = 'block';
        secretBtn.innerHTML = '<i class="fas fa-star"></i> Mesajı Gizle';
        
        // Gizli mesaj okunduğunda küçük bir efekt
        hiddenMessage.style.animation = 'fadeIn 0.5s ease';
    }
});

// Sayfa yüklendiğinde hoş geldin efekti
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        
        // İlk mesaj
        setTimeout(() => {
            const welcomeMsg = document.createElement('div');
            welcomeMsg.innerHTML = '✨ Berra için hazırlandı ✨';
            welcomeMsg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 107, 139, 0.9);
                color: white;
                padding: 20px 40px;
                border-radius: 50px;
                font-size: 1.2rem;
                z-index: 9999;
                animation: fadeOut 2s ease 1s forwards;
            `;
            document.body.appendChild(welcomeMsg);
        }, 500);
    }, 100);
});

// CSS for fadeOut
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
@keyframes fadeOut {
    0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); display: none; }
}
`;
document.head.appendChild(fadeOutStyle);

// Sayfa kaydırma efekti
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, options);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Tıklama efekti
document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
        const clickEffect = document.createElement('div');
        clickEffect.innerHTML = '❤';
        clickEffect.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 9999;
            animation: clickFloat 1s ease forwards;
            color: #ff6b8b;
        `;
        document.body.appendChild(clickEffect);
        
        setTimeout(() => {
            clickEffect.remove();
        }, 1000);
    }
});

// CSS for click effect
const clickStyle = document.createElement('style');
clickStyle.textContent = `
@keyframes clickFloat {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -100px) scale(0);
        opacity: 0;
    }
}
`;
document.head.appendChild(clickStyle);

// Sayfa başlığı efekti
let originalTitle = document.title;
let isBlurred = false;

window.addEventListener('blur', () => {
    document.title = "💔 Geri gel...";
    isBlurred = true;
});

window.addEventListener('focus', () => {
    if (isBlurred) {
        document.title = "❤️ Teşekkürler!";
        setTimeout(() => {
            document.title = originalTitle;
        }, 2000);
        isBlurred = false;
    }
});
