// Create twinkling stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create floating hearts
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-20px';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }, 300);
}

// Yes button click - triggers surprise journey
function yesClick() {
    const response = document.getElementById('response');
    response.classList.add('happy');
    response.innerHTML = `
        <div style="text-align: center;">
            <p>🎉 YES! I KNEW IT! 🎉</p>
            <p style="font-size: 1em; color: #d63031; margin-top: 10px;">
                You've made me the happiest person! Let's begin our beautiful journey...
            </p>
            <div style="margin-top: 20px; font-size: 2em;">
                🌹 💕 🌹
            </div>
        </div>
    `;
    
    // Create multiple hearts
    const container = document.querySelector('.floating-hearts');
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-float';
            heart.textContent = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '-20px';
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 4000);
        }, i * 100);
    }
    
    // Move to next page after 2 seconds
    setTimeout(() => {
        goToPage(2);
    }, 2000);
}

// Navigate to a specific page
function goToPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the target page
    const targetPage = document.getElementById('page' + pageNumber);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Special effects for each page
    triggerPageEffects(pageNumber);
}

// Trigger special effects based on page
function triggerPageEffects(pageNumber) {
    const container = document.querySelector('.floating-hearts');
    
    switch(pageNumber) {
        case 2:
            // Create burst of hearts and sparkles
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart-float';
                    heart.textContent = '✨';
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.bottom = '-20px';
                    container.appendChild(heart);
                    setTimeout(() => heart.remove(), 4000);
                }, i * 100);
            }
            break;
            
        case 3:
            // Timeline fade-in animation
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                }, index * 200);
            });
            break;
            
        case 4:
            // Promise items pop in
            const promiseItems = document.querySelectorAll('.promise-item');
            promiseItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                }, index * 200);
            });
            break;
            
        case 5:
            // Final page - shower of hearts and sparkles
            for (let i = 0; i < 25; i++) {
                setTimeout(() => {
                    const emoji = document.createElement('div');
                    emoji.className = 'heart-float';
                    emoji.textContent = Math.random() > 0.5 ? '❤️' : '✨';
                    emoji.style.left = Math.random() * 100 + '%';
                    emoji.style.bottom = '-20px';
                    container.appendChild(emoji);
                    setTimeout(() => emoji.remove(), 5000);
                }, i * 80);
            }
            break;
    }
}

// Riddle answer checker
const RIDDLE_ANSWERS = ['keyboard', 'a keyboard']; // Acceptable answers

function checkRiddle(event) {
    if (event.key !== 'Enter') return;
    
    const riddleInput = document.getElementById('riddleAnswer');
    const answer = riddleInput.value.toLowerCase().trim();
    
    const isCorrect = RIDDLE_ANSWERS.includes(answer);
    
    if (isCorrect) {
        riddleInput.classList.add('correct');
        riddleInput.classList.remove('incorrect');
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'riddle-success';
        successMsg.innerHTML = `
            <p>🎉 Correct! 🎉</p>
            <p>You've unlocked the secret! Let's continue your love journey...</p>
            <div class="emoji-celebration">💕✨💕</div>
        `;
        
        riddleInput.parentElement.appendChild(successMsg);
        riddleInput.disabled = true;
        
        // Auto-advance to page 2 after 2 seconds
        setTimeout(() => {
            yesClick();
        }, 2000);
    } else {
        riddleInput.classList.add('incorrect');
        riddleInput.classList.remove('correct');
        riddleInput.value = '';
        riddleInput.placeholder = 'Try again! 💭';
    }
}

// Generate romantic replies based on user message
function generateReply(message) {
    const replies = [
        {
            keywords: ['love', 'love you'],
            responses: [
                "I love you too, more than words can say! 💕",
                "You are my greatest love story! 💕",
                "I love everything about you! 💕"
            ]
        },
        {
            keywords: ['miss', 'miss you'],
            responses: [
                "I miss you too when we're apart. You're always on my mind! 💭",
                "Missing you already! Can't wait to see your beautiful smile! 😊",
                "You're always in my heart, no matter the distance! 💖"
            ]
        },
        {
            keywords: ['beautiful', 'pretty', 'gorgeous', 'stunning'],
            responses: [
                "You're the most beautiful person inside and out! 😍",
                "Your beauty takes my breath away every single day! ✨",
                "You make my heart skip a beat! 💕"
            ]
        },
        {
            keywords: ['happy', 'smile', 'laugh'],
            responses: [
                "Your smile lights up my entire world! 😊",
                "Making you happy is my favorite thing in the world! 💖",
                "Your laugh is the sweetest sound I know! 🎵"
            ]
        },
        {
            keywords: ['forever', 'always', 'eternity'],
            responses: [
                "Forever with you sounds like a beautiful dream! 💕",
                "I want to spend forever loving you! 🌹",
                "You are my forever and always! ✨"
            ]
        },
        {
            keywords: ['thank', 'thanks'],
            responses: [
                "Thank YOU for being the most amazing person! 💖",
                "I'm the one who's grateful for you! 🙏💕",
                "You make every day special, thank you for that! ✨"
            ]
        },
        {
            keywords: ['valentine', 'valentine\'s day'],
            responses: [
                "Every day with you feels like Valentine's Day! 💝",
                "You're the best Valentine I could ever ask for! 💕",
                "Happy Valentine's Day to my love! 🌹"
            ]
        }
    ];
    
    // Default romantic replies if no keywords match
    const defaultReplies = [
        "That's so sweet! I love your words! 💕",
        "You just made my heart skip a beat! 💖",
        "You're everything to me! 💝",
        "I love you so much! 😍💕",
        "You always know what to say! 💖",
        "You're my favorite person in the world! 🌟",
        "My heart is yours completely! 💕",
        "You make every moment magical! ✨💖"
    ];
    
    const messageLower = message.toLowerCase();
    
    // Check if message contains any keywords
    for (let replySet of replies) {
        for (let keyword of replySet.keywords) {
            if (messageLower.includes(keyword)) {
                const randomIndex = Math.floor(Math.random() * replySet.responses.length);
                return replySet.responses[randomIndex];
            }
        }
    }
    
    // Return random default reply
    const randomIndex = Math.floor(Math.random() * defaultReplies.length);
    return defaultReplies[randomIndex];
}

// Send message and display reply
function sendMessage() {
    const userMessage = document.getElementById('userMessage').value.trim();
    const replyDiv = document.getElementById('reply');
    
    if (!userMessage) {
        replyDiv.classList.remove('active');
        return;
    }
    
    // Generate reply
    const reply = generateReply(userMessage);
    
    // Display reply with animation
    replyDiv.innerHTML = `
        <p style="font-weight: bold; color: #d63031; margin-bottom: 10px;">You said:</p>
        <p style="color: #333; font-style: italic; margin-bottom: 15px;">"${userMessage}"</p>
        <p style="font-weight: bold; color: #d63031; margin-bottom: 10px;">My reply:</p>
        <p>${reply}</p>
        <div class="emoji-reply">💕 💕 💕</div>
    `;
    
    replyDiv.classList.add('active');
    
    // Create floating hearts
    const container = document.querySelector('.floating-hearts');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-float';
            heart.textContent = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '-20px';
            container.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 100);
    }
    
    // Clear input
    document.getElementById('userMessage').value = '';
}

// Allow sending message with Enter key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const userMessage = document.getElementById('userMessage');
        if (userMessage && document.activeElement === userMessage) {
            sendMessage();
        }
    }
});

// No button hover - moves away from cursor
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createFloatingHearts();
});

// Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const activePage = document.querySelector('.page.active');
        if (activePage && activePage.id === 'page1') {
            const noBtn = document.getElementById('noBtn');
            if (noBtn && !noBtn.style.transform) {
                yesClick();
            }
        }
    }
});

