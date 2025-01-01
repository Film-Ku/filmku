        const menuBtn = document.querySelector('.menu-btn');
        const container = document.querySelector('.container');
        const overlay = document.querySelector('.overlay');
        const collapsibles = document.querySelectorAll('.collapsible');

        // Fungsi untuk membuka sidebar
        function openSidebar() {
            container.style.left = '0';
            overlay.style.display = 'block';
        }

        // Fungsi untuk menutup sidebar
        function closeSidebar() {
            container.style.left = '-250px';
            overlay.style.display = 'none';
        }

        // Event listener untuk tombol menu
        menuBtn.addEventListener('click', openSidebar);

        // Event listener untuk klik di luar container
        overlay.addEventListener('click', closeSidebar);

        // Event listener untuk toggle submenu
        collapsibles.forEach(item => {
            item.addEventListener('click', () => {
                const submenu = item.nextElementSibling;
                if (submenu && submenu.classList.contains('submenu')) {
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                }
            });
        });

        //script untuk membuat form pencarian

        // Toggle tampilkan form pencarian dengan animasi
        searchButton.addEventListener('click', () => {
            searchContainer.classList.toggle('show'); // Menggunakan kelas untuk menangani animasi
            if (searchContainer.classList.contains('show')) {
                searchInput.focus(); // Fokus pada input pencarian
            }
            overlay.style.display = 'block';
        });

        // Menutup form pencarian jika klik di luar form pencarian
        document.addEventListener('click', (event) => {
            if (!searchButton.contains(event.target) && !searchContainer.contains(event.target)) {
                searchContainer.classList.remove('show');
                searchInput.value = ''; // Menghapus input pada search form
                resultsBox.innerHTML = ''; // Menghapus hasil pencarian
            }
        });

        const searchInput = document.getElementById('searchInput');
        const resultsBox = document.querySelector('.result-box');
        let availableKeywords = [];

        // Fetch keywords from JSON file
        fetch('keywords.json')
            .then(response => response.json())
            .then(data => {
                availableKeywords = data;
            });

        searchInput.addEventListener('keyup', function() {
            let result = [];
            let input = searchInput.value;
            if (input.length) {
                result = availableKeywords.filter((keyword) => {
                    return keyword.name.toLowerCase().includes(input.toLowerCase());
                });
                console.log(result);
            }
            display(result);
            });

        function display(result) {
            const content = result.map((item) => {
                return `<li onclick='selectInput(this)'><a href="${item.url}">${item.name}</a></li>`;
            });

            resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
        }

        function selectInput(list) {
            searchInput.value = list.textContent;
            resultsBox.innerHTML = '';
        }

        /*script untuk membuat carousel*/
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
