//Script untuk membuat carousel  
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.carousel-btn.right');
const prevButton = document.querySelector('.carousel-btn.left'); 

let currentIndex = 0;

function updateCarousel() {
const width = items[currentIndex].clientWidth;
track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextButton.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % items.length;
updateCarousel();
});

prevButton.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + items.length) % items.length;
updateCarousel();
});

setInterval(() => {
currentIndex = (currentIndex + 1) % items.length;
updateCarousel();
}, 3000); // Carousel auto-rotate setiap 3 detik  ;

//Script untuk membuat sidebar
    
const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const searchButton = document.getElementById('searchButton');
const searchForm = document.getElementById('searchForm');


menuButton.addEventListener('click', () => {
sidebar.classList.add('open');
overlay.classList.add('show');
});

overlay.addEventListener('click', () => {
sidebar.classList.remove('open');
overlay.classList.remove('show');
});

const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(item => {
item.addEventListener('click', () => {
const submenu = item.nextElementSibling;
submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});
});

//script untuk membuat form pencarian

// Toggle tampilkan form pencarian dengan animasi
// Toggle tampilkan form pencarian dengan animasi
searchButton.addEventListener('click', () => {
searchForm.classList.toggle('show'); // Menggunakan kelas untuk menangani animasi
});

// Menutup form pencarian jika klik di luar form pencarian
document.addEventListener('click', (event) => {
if (!searchButton.contains(event.target) && !searchForm.contains(event.target)) {
searchForm.classList.remove('show');
}
});

const searchInput = document.getElementById('searchInput');
const resultsBox = document.querySelector('.result-box');

searchInput.addEventListener('keyup', function() {
    let result = [];
    let input = searchInput.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if (!result.length) {
        resultsBox.innerHTML = '';
    }
});

function display(result) {
    const content = result.map((list) => {
        return "<li onclick='selectInput(this)'>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    searchInput.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

let availableKeywords = [
    '<a href="https://id.wikipedia.org/wiki/HTML">HyperText Markup Language (HTML)</a>',
    '<a href="Post/Panggonan Wingit (2023).html">Panggonan Wingit 2023</a>',
    'Easy Tutorial',
    'Web Design Tutorial',
    'JavaScript',
    'Where to learn online',
    'Where to learn web design',
    'How to create a website',
];
