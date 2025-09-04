// Data for each mode
const quotes = [
    { text: "The only way to do great work is to love what you do. – Steve Jobs", category: "Motivation" },
    { text: "Stay hungry, stay foolish. – Steve Jobs", category: "Motivation" },
    { text: "You miss 100% of the shots you don’t take. – Wayne Gretzky", category: "Motivation" },
    { text: "The journey of a thousand miles begins with a single step. – Lao Tzu", category: "Motivation" },
    { text: "Whether you think you can or think you can’t, you’re right. – Henry Ford", category: "Motivation" },
    { text: "Keep it simple, stupid. – Kelly Johnson", category: "Coding" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill", category: "Success" },
    { text: "The best way to predict the future is to create it. – Peter Drucker", category: "Success" },
    { text: "Don’t let yesterday take up too much of today. – Will Rogers", category: "Motivation" },
    { text: "It always seems impossible until it’s done. – Nelson Mandela", category: "Success" },
    { text: "Code is like humor: when you have to explain it, it’s bad. – Cory House", category: "Coding" },
    { text: "Programming isn't about what you know; it's about what you can figure out. – Chris Pine", category: "Coding" },
    { text: "Simplicity is the soul of efficiency. – Austin Freeman", category: "Coding" },
    { text: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. – Patrick McKenzie", category: "Coding" },
    { text: "The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie", category: "Coding" },
    { text: "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar", category: "Motivation" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown", category: "Success" },
    { text: "Dream big, work hard, stay focused. – Unknown", category: "Motivation" },
    { text: "Mistakes are proof that you are trying. – Unknown", category: "Motivation" },
    { text: "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt", category: "Motivation" },
    { text: "Do what you can, with what you have, where you are. – Theodore Roosevelt", category: "Motivation" },
    { text: "Believe you can and you’re halfway there. – Theodore Roosevelt", category: "Motivation" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill", category: "Success" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt", category: "Motivation" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar", category: "Success" },
    { text: "If you can dream it, you can do it. – Walt Disney", category: "Motivation" },
    { text: "The secret of getting ahead is getting started. – Mark Twain", category: "Motivation" },
    { text: "Opportunities don’t happen, you create them. – Chris Grosser", category: "Success" },
    { text: "Don’t watch the clock; do what it does. Keep going. – Sam Levenson", category: "Motivation" },
    { text: "Start where you are. Use what you have. Do what you can. – Arthur Ashe", category: "Motivation" }
];

const musics = [
    { src: 'assets/musics/music1.mp3', caption: 'Music 1 is playing ...' },
    { src: 'assets/musics/music2.mp3', caption: 'Music 2 is playing ...' },
    { src: 'assets/musics/music3.mp3', caption: 'Music 3 is playing ...' },
    { src: 'assets/musics/music4.mp3', caption: 'Music 4 is playing ...' }
];

const pictures = [
    { src: 'assets/images/image1.jpg', caption: 'You can do it!' },
    { src: 'assets/images/image2.jpg', caption: 'Have a dream!' },
    { src: 'assets/images/image3.jpg', caption: 'Dream big!' },
    { src: 'assets/images/image4.jpg', caption: 'Make the day great!' },
    { src: 'assets/images/image5.jpg', caption: 'Smile!' },
    { src: 'assets/images/image6.jpg', caption: 'Randomizing!' }
];

const videos = [
    { src: 'assets/videos/video1.mp4', caption: 'Desert traveling ...' },
    { src: 'assets/videos/video2.mp4', caption: 'Cloud traveling ...' },
    { src: 'assets/videos/video3.mp4', caption: 'Coding ...' }
];

// Get DOM elements
const modeSelect = document.getElementById('modeSelect');
const generateBtn = document.getElementById('generateBtn');
const outputDisplay = document.getElementById('outputDisplay');
const inputForm = document.getElementById('inputForm');
const customInput = document.getElementById('customInput');
const addBtn = document.getElementById('addBtn');
const quoteCategories = document.getElementById('quoteCategories');
const quoteOptions = document.getElementById('quoteOptions');
const categorySelect = document.getElementById('categorySelect');
const themeToggle = document.getElementById('themeToggle');
const errorMessage = document.getElementById('errorMessage');
const modeDescription = document.getElementById('modeDescription');
const loading = document.getElementById('loading');
const randomInfo = document.getElementById('randomInfo');

// Mode descriptions
const modeDescriptions = {
    quote: "Get inspired with a random motivational, coding, or success quote!",
    music: "Play a random music clip to set the mood!",
    picture: "Discover a random inspirational image!",
    video: "Watch a random short video clip!"
};

// Function to get a random item from an array
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return { item: array[randomIndex], index: randomIndex };
}

// Function to clear output display
function clearOutput() {
    outputDisplay.innerHTML = '';
    loading.style.display = 'block';
    randomInfo.style.display = 'none';
}

// Function to update button text and description
function updateModeUI(mode) {
    generateBtn.textContent = mode === 'quote' ? 'Get Quote' : mode === 'music' ? 'Play Music' : mode === 'picture' ? 'Show Picture' : 'Play Video';
    modeDescription.textContent = modeDescriptions[mode] || '';
}

// Handle mode change
modeSelect.addEventListener('change', () => {
    const isQuoteMode = modeSelect.value === 'quote';
    quoteOptions.style.display = isQuoteMode ? 'block' : 'none';
    if (!isQuoteMode) {
        quoteOptions.removeAttribute('open');
    }
    updateModeUI(modeSelect.value);
    errorMessage.style.display = 'none';
});

// Handle custom quote input
addBtn.addEventListener('click', () => {
    const input = customInput.value.trim();
    if (!input) {
        errorMessage.style.display = 'block';
        return;
    }
    errorMessage.style.display = 'none';
    quotes.push({ text: input, category: categorySelect.value !== 'all' ? categorySelect.value : 'Motivation' });
    outputDisplay.textContent = `Added quote: ${input}`;
    customInput.value = '';
    localStorage.setItem('lastOutput', outputDisplay.innerHTML);
});

// Handle theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
});

// Load saved state
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }
    const savedMode = localStorage.getItem('lastMode');
    const savedOutput = localStorage.getItem('lastOutput');
    if (savedMode) {
        modeSelect.value = savedMode;
        quoteOptions.style.display = savedMode === 'quote' ? 'block' : 'none';
        quoteOptions.removeAttribute('open');
        updateModeUI(savedMode);
    }
    if (savedOutput) {
        outputDisplay.innerHTML = savedOutput;
    }
});

// Generate output
function generateOutput() {
    clearOutput();
    outputDisplay.classList.add('fade');
    setTimeout(() => {
        const mode = modeSelect.value;
        let outputContent = '';
        let randomIndex = null;

        switch (mode) {
            case 'quote':
                let filteredQuotes = quotes;
                if (categorySelect.value !== 'all') {
                    filteredQuotes = quotes.filter(quote => quote.category === categorySelect.value);
                }
                const { item: quote, index } = getRandomItem(filteredQuotes);
                outputContent = quote.text;
                randomIndex = index;
                break;
            case 'music':
                const { item: musicItem, index: musicIndex } = getRandomItem(musics);
                const audio = document.createElement('audio');
                audio.src = musicItem.src;
                audio.controls = true;
                audio.autoplay = true;
                audio.style.height = "40px";
                outputDisplay.appendChild(audio);
                const audioCaption = document.createElement('p');
                audioCaption.textContent = musicItem.caption;
                outputDisplay.appendChild(audioCaption);
                randomIndex = musicIndex;
                break;
            case 'picture':
                const { item: picture, index: pictureIndex } = getRandomItem(pictures);
                const img = document.createElement('img');
                img.src = picture.src;
                img.alt = picture.caption;
                outputDisplay.appendChild(img);
                const imgCaption = document.createElement('p');
                imgCaption.textContent = picture.caption;
                outputDisplay.appendChild(imgCaption);
                randomIndex = pictureIndex;
                break;
            case 'video':
                const { item: videoItem, index: videoIndex } = getRandomItem(videos);
                const video = document.createElement('video');
                video.src = videoItem.src;
                video.controls = true;
                video.autoplay = true;
                outputDisplay.appendChild(video);
                const videoCaption = document.createElement('p');
                videoCaption.textContent = videoItem.caption;
                outputDisplay.appendChild(videoCaption);
                randomIndex = videoIndex;
                break;
            default:
                outputContent = 'Select a mode and click Surprise Me!';
        }

        if (outputContent) {
            outputDisplay.textContent = outputContent;
        }
        if (randomIndex !== null) {
            randomInfo.textContent = `Random Index: ${randomIndex} (via Math.random())`;
            randomInfo.style.display = 'block';
        }
        loading.style.display = 'none';
        localStorage.setItem('lastMode', mode);
        localStorage.setItem('lastOutput', outputDisplay.innerHTML);
        outputDisplay.classList.remove('fade');
    }, 500);
}

// Event listener for generate button
generateBtn.addEventListener('click', generateOutput);

// Display initial message
outputDisplay.textContent = 'Select a mode and click Surprise Me!';
updateModeUI(modeSelect.value);