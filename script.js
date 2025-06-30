// Globalūs duomenys (tekstai, nuotraukos ir t.t.)
const appData = {
    lt: {
        nav: {
            home: "Pagrindinis",
            gallery: "Galerija",
            about: "Apie mane",
            contact: "Kontaktai"
        },
        hero: {
            title: "Akimirkos, užfiksuotos amžinybei",
            subtitle: "Kiekviena nuotrauka pasakoja istoriją. Atraskite jas čia.",
            button: "Peržiūrėti galeriją"
        },
        gallery: {
            title: "Mūsų darbai",
            subtitle: "Įsigykite Išskirtines Autorines Fotografijas",
            description: "Atraskite ir įsigykite aukščiausios raiškos menines fotografijas, idealiai tinkančias spausdinimui, internetui ar jūsų internetiniams projektams.",
            qualityTitle: "Nepriekaištinga Fotografijos Kokybė – Tinka Spausdinimui ir Skaitmeniniam Naudojimui",
            qualityDescription: "Kiekvienas mūsų sukūrimas kadras – tai profesionalumo ir preciziškumo garantas. Šios aukštos raiškos fotografijos sukurtos taip, kad atrodytų nepriekaištingai tiek spausdintiniame dideliu formatu, tiek skaitmeniniame pavidale internetiniams platformoms. Įsigykite originalias, licencijuojamas nuotraukas tiesiai iš autoriaus.",
            noResults: "Nerasta nuotraukų, atitinkančių jūsų kriterijus."
        },
        filters: {
            all: "Visi",
            nature: "Gamta",
            city: "Miestas",
            animals: "Gyvūnai",
            transport: "Transportas",
            people: "Žmonės",
            abstract: "Abstrakcija"
        },
        modal: {
            defaultTitle: "Nuotrauka dideliame lange",
            buy: "Pirkti",
            addedToCart: "Nuotrauka pridėta į krepšelį!",
            alreadyInCart: "Ši nuotrauka jau yra krepšelyje."
        },
        cart: {
            title: "Jūsų krepšelis",
            total: "Viso:",
            checkout: "Apmokėti",
            clear: "Išvalyti krepšelį",
            empty: "Jūsų krepšelis tuščias.",
            purchaseSuccess: "Dėkojame už pirkimą! Netrukus su jumis susisieksime dėl apmokėjimo ir pristatymo detalių.",
            clearConfirm: "Ar tikrai norite išvalyti krepšelį?"
        },
        aboutPage: {
            title: "Apie mane - Linas Buragas Photography",
            aboutMeSectionTitle: "Apie mane",
            description: `
**Aš esu Linas Buragas, fotografijos entuziastas, kurio aistra menui pasireiškia per objektyvą.**

Nuo mažų dienų buvau žavimas gamtos grožio, miesto šurmulio ir kiekvienos akimirkos unikalumo. Fotografija man tapo ne tik hobiu, bet ir būdu užfiksuoti tai, kas nematoma plika akimi, ir pasidalinti savo perspektyva su pasauliu.

Mano kūryboje dominuoja peizažai, laukinė gamta, urbanistiniai vaizdai ir portretai. Kiekviename kadre siekiu perteikti istoriją, emociją ir grožį, kuris mus supa. Tikiu, kad nuotrauka gali pasakyti daugiau nei tūkstantis žodžių, ir mano tikslas yra sukurti paveikslus, kurie kalba patys už save.

Esu atviras bendradarbiavimui ir naujiems projektams. Jei turite idėjų ar norite užsisakyti individualią fotosesiją, susisiekite su manimi.

* **Fotografijos sritys:** Peizažai, portretai, renginiai, gamta, urbanistika.
* **Technika:** Dirbu su profesionalia Nikon įranga, užtikrinančia aukščiausią kokybę.
* **Paslaugos:** Nuotraukų pardavimas, individualios fotosesijos, renginių fotografavimas, postprodukcija.
`
        },
        search: {
            placeholder: "Ieškoti nuotraukų..."
        }
    },
    en: {
        nav: {
            home: "Home",
            gallery: "Gallery",
            about: "About Me",
            contact: "Contact"
        },
        hero: {
            title: "Moments, Captured for Eternity",
            subtitle: "Every photo tells a story. Discover them here.",
            button: "View Gallery"
        },
        gallery: {
            title: "Our Works",
            subtitle: "Acquire Exclusive Author Photos",
            description: "Discover and purchase high-resolution artistic photographs, ideal for printing, web use, or your online projects.",
            qualityTitle: "Impeccable Photo Quality – Suitable for Print and Digital Use",
            qualityDescription: "Every frame we create is a guarantee of professionalism and precision. These high-resolution photographs are designed to look flawless in large print formats, as well as in digital form for online platforms. Purchase original, licensed photos directly from the author.",
            noResults: "No photos found matching your criteria."
        },
        filters: {
            all: "All",
            nature: "Nature",
            city: "City",
            animals: "Animals",
            transport: "Transport",
            people: "People",
            abstract: "Abstract"
        },
        modal: {
            defaultTitle: "Photo in Large View",
            buy: "Buy",
            addedToCart: "Photo added to cart!",
            alreadyInCart: "This photo is already in your cart."
        },
        cart: {
            title: "Your Cart",
            total: "Total:",
            checkout: "Checkout",
            clear: "Clear Cart",
            empty: "Your cart is empty.",
            purchaseSuccess: "Thank you for your purchase! We will contact you shortly regarding payment and delivery details.",
            clearConfirm: "Are you sure you want to clear the cart?"
        },
        aboutPage: {
            title: "About Me - Linas Buragas Photography",
            aboutMeSectionTitle: "About Me",
            description: `
**I am Linas Buragas, a photography enthusiast whose passion for art manifests through the lens.**

From a young age, I've been fascinated by the beauty of nature, the hustle and bustle of the city, and the uniqueness of every moment. Photography has become not just a hobby for me, but a way to capture what is unseen by the naked eye and share my perspective with the world.

My work primarily features landscapes, wildlife, urban scenes, and portraits. In every frame, I aim to convey the story, emotion, and beauty that surrounds us. I believe that a picture can say more than a thousand words, and my goal is to create images that speak for themselves.

I am open to collaborations and new projects. If you have ideas or would like to book a private photoshoot, please contact me.

* **Photography areas:** Landscapes, portraits, events, nature, urban, abstract.
* **Equipment:** I work with professional Nikon gear, ensuring the highest quality.
* **Services:** Photo sales, individual photoshoots, event photography, post-production.
`
        },
        search: {
            placeholder: "Search photos..."
        }
    }
};

// Nuotraukų duomenys
const photos = [
    { id: 1, src: 'images/Nuotrauka1.jpg', title: 'Raudona Gėlė Ant Akmenų', description: 'Išskirtinė detalė gamtos fone.', price: 25.00, category: 'nature' },
    { id: 2, src: 'images/Nuotrauka2.jpg', title: 'Šachmatai Parke', description: 'Strategijos ir poilsio derinys.', price: 30.00, category: 'city' },
    { id: 3, src: 'images/Nuotrauka3.jpg', title: 'Pavasario Žiedai Artimu Planu', description: 'Subtilus pavasario šauklys.', price: 20.00, category: 'nature' },
    { id: 4, src: 'images/Nuotrauka4.jpg', title: 'Šakos su Žiedais', description: 'Gyvybės pabudimas gamtoje.', price: 22.00, category: 'nature' },
    { id: 5, src: 'images/Nuotrauka5.jpg', title: 'Voras Tinkle', description: 'Mažas gamtos gyventojas savo aplinkoje.', price: 18.00, category: 'animals' },
    { id: 6, src: 'images/Nuotrauka6.jpg', title: 'Bitė Ant Žiedų', description: 'Darbininkė rinkdama nektarą.', price: 27.00, category: 'animals' },
    { id: 7, src: 'images/Nuotrauka7.jpg', title: 'Raudona Rožė Stikle', description: 'Elegancija ir ramybė.', price: 35.00, category: 'abstract' },
    { id: 8, src: 'images/Nuotrauka8.jpg', title: 'Kalnų Peizažas su Upe', description: 'Didybės ir ramybės oazė.', price: 40.00, category: 'nature' },
    { id: 9, src: 'images/Nuotrauka9.jpg', title: 'Šuo Ganykloje', description: 'Laimingas šuo laukų platybėse.', price: 28.00, category: 'animals' },
    { id: 10, src: 'images/Nuotrauka10.jpg', title: 'Motociklas Prie Ežero', description: 'Laisvės dvasia ir gamtos grožis.', price: 38.00, category: 'transport' },
    { id: 11, src: 'images/Nuotrauka11.jpg', title: 'Motociklas Parkinge', description: 'Galingumo ir stiliaus atspindys.', price: 32.00, category: 'transport' },
    { id: 14, src: 'images/Nuotrauka14.jpg', title: 'Parasparnininkas Saulėlydyje', description: 'Nuotykiai danguje.', price: 50.00, category: 'people' },
    { id: 16, src: 'images/Nuotrauka16.jpg', title: 'Saulėlydis Virš Vandenyno', description: 'Ramus vakaras prie jūros.', price: 37.00, category: 'nature' },
    { id: 17, src: 'images/Nuotrauka17.jpg', title: 'Palma Prie Kelio', description: 'Egzotikos atspindys.', price: 29.00, category: 'nature' },
    { id: 18, src: 'images/Nuotrauka18.jpg', title: 'Du Parasparnininkai Virš Jūros', description: 'Laisvės pojūtis ir beribis horizontas.', price: 55.00, category: 'people' }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentLang = localStorage.getItem('lang') || 'lt'; // Nustatyta numatytoji kalba
let currentCategoryFilter = 'all'; // Pridėtas kintamasis aktyviam filtrui
let currentSearchTerm = ''; // Pridėtas kintamasis paieškos terminui

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const searchInput = document.getElementById('searchInput');

    // Pagalbinė funkcija pasiekti įdėtas reikšmes
    function getNestedValue(obj, keyString) {
        const keys = keyString.split('.');
        return keys.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : null, obj);
    }

    // Kalbos perjungimas
    document.querySelectorAll('.lang-button').forEach(button => {
        button.addEventListener('click', (event) => {
            currentLang = event.target.id.replace('lang-', '');
            localStorage.setItem('lang', currentLang);
            updateContent();
            updateLanguageButtons();
            if (galleryGrid) { // Tik jei esame pagrindiniame puslapyje
                filterAndSearchPhotos();
            }
        });
    });

    // Pradinis turinio atnaujinimas ir kalbos mygtukų būsenos nustatymas
    updateContent();
    updateLanguageButtons();

    // Filtravimas
    if (galleryGrid) { // Tik jei esame pagrindiniame puslapyje
        document.querySelectorAll('.filter-button').forEach(button => {
            button.addEventListener('click', (event) => {
                document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
                event.target.classList.add('active');
                currentCategoryFilter = event.target.dataset.filter;
                filterAndSearchPhotos();
            });
        });

        // Paieškos lauko funkcionalumas
        if (searchInput) {
            searchInput.addEventListener('input', (event) => {
                currentSearchTerm = event.target.value.toLowerCase();
                filterAndSearchPhotos();
            });
        }
    }


    // Modalo funkcionalumas
    const photoModal = document.getElementById('photoModal');
    const closeButton = document.querySelector('.close-button');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const modalBuyButton = document.getElementById('modalBuyButton');

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            photoModal.style.display = 'none';
        });
    }

    if (photoModal) {
        window.addEventListener('click', (event) => {
            if (event.target === photoModal) {
                photoModal.style.display = 'none';
            }
        });
    }

    // Pirkimo mygtuko paspaudimas modale
    if (modalBuyButton) {
        modalBuyButton.addEventListener('click', () => {
            const photoId = parseInt(modalBuyButton.dataset.photoId);
            const photoToAdd = photos.find(p => p.id === photoId);
            if (photoToAdd) {
                addToCart(photoToAdd);
                photoModal.style.display = 'none';
            }
        });
    }

    // Krepšelio funkcionalumas (jei esame pagrindiniame puslapyje)
    const cartSection = document.getElementById('cart-section');
    if (cartSection) {
        renderCart();

        document.getElementById('checkout-button').addEventListener('click', () => {
            if (cart.length > 0) {
                alert(getNestedValue(appData[currentLang], 'cart.purchaseSuccess'));
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            } else {
                alert(getNestedValue(appData[currentLang], 'cart.empty'));
            }
        });

        document.getElementById('clear-cart-button').addEventListener('click', () => {
            if (confirm(getNestedValue(appData[currentLang], 'cart.clearConfirm'))) {
                cart = [];
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            }
        });
    }


    // Funkcija, kuri atvaizduoja nuotraukas galerijoje
    function renderPhotos(filteredPhotos) {
        if (!galleryGrid) return;

        galleryGrid.innerHTML = '';
        if (filteredPhotos.length === 0) {
            galleryGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: #aaa;">${getNestedValue(appData[currentLang], 'gallery.noResults')}</p>`;
            return;
        }

        filteredPhotos.forEach(photo => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.dataset.id = photo.id;

            galleryItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}">
                <div class="gallery-item-info">
                    <h3>${photo.title}</h3>
                    <p>${photo.description}</p>
                    <span>${photo.price.toFixed(2)} €</span>
                    <button class="add-to-cart-button" data-id="${photo.id}">${getNestedValue(appData[currentLang], 'modal.buy')}</button>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);

            galleryItem.querySelector('img').addEventListener('click', () => {
                openPhotoModal(photo);
            });
            galleryItem.querySelector('.add-to-cart-button').addEventListener('click', (event) => {
                event.stopPropagation();
                addToCart(photo);
            });
        });
    }

    // Funkcija nuotraukų filtravimui ir paieškai
    function filterAndSearchPhotos() {
        let filtered = photos;

        if (currentCategoryFilter !== 'all') {
            filtered = filtered.filter(photo => photo.category === currentCategoryFilter);
        }

        if (currentSearchTerm) {
            const searchTermLower = currentSearchTerm.toLowerCase();
            filtered = filtered.filter(photo =>
                photo.title.toLowerCase().includes(searchTermLower) ||
                photo.description.toLowerCase().includes(searchTermLower) ||
                (appData[currentLang].filters[photo.category] && appData[currentLang].filters[photo.category].toLowerCase().includes(searchTermLower))
            );
        }
        renderPhotos(filtered);
    }

    // Funkcija atidaryti modalą su nuotraukos informacija
    function openPhotoModal(photo) {
        if (!photoModal) return;
        modalImage.src = photo.src;
        modalImage.alt = photo.title;
        modalTitle.textContent = photo.title || getNestedValue(appData[currentLang], 'modal.defaultTitle');
        modalDescription.textContent = photo.description;
        modalPrice.textContent = `${photo.price.toFixed(2)} €`;
        modalBuyButton.dataset.photoId = photo.id;
        photoModal.style.display = 'flex';
    }

    // Funkcija pridėti nuotrauką į krepšelį
    function addToCart(photo) {
        const existingItem = cart.find(item => item.id === photo.id);
        if (existingItem) {
            alert(getNestedValue(appData[currentLang], 'modal.alreadyInCart'));
        } else {
            cart.push({ ...photo, quantity: 1 });
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
            alert(getNestedValue(appData[currentLang], 'modal.addedToCart'));
        }
    }

    // Funkcija atvaizduoti krepšelio turinį
    function renderCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        if (!cartItemsContainer) return;

        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p>${getNestedValue(appData[currentLang], 'cart.empty')}</p>`;
        } else {
            let total = 0;
            cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.innerHTML = `
                    <div class="cart-item-info">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                    </div>
                    <span class="cart-item-price">${(item.price * item.quantity).toFixed(2)} €</span>
                    <button class="remove-from-cart-button" data-id="${item.id}">X</button>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
                total += item.price * item.quantity;

                cartItemDiv.querySelector('.remove-from-cart-button').addEventListener('click', (event) => {
                    const idToRemove = parseInt(event.target.dataset.id);
                    cart = cart.filter(cartItem => cartItem.id !== idToRemove);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                });
            });
            document.getElementById('cart-total').textContent = `${total.toFixed(2)} €`;
        }
    }

    // Funkcija, kuri atnaujina tinklalapio tekstą pagal pasirinktą kalbą
    function updateContent() {
        const lang = currentLang;

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            const value = getNestedValue(appData[lang], key);

            if (value !== null) {
                if (element.tagName === 'INPUT' && element.id === 'searchInput' && key === 'search.placeholder') {
                    element.placeholder = value;
                } else {
                    element.textContent = value;
                }
            } else {
                console.warn(`Missing translation for key: ${key} in language: ${lang}`);
            }
        });

        document.title = getNestedValue(appData[lang], 'nav.home') || 'Photography';

        if (galleryGrid) {
            filterAndSearchPhotos();
        }
        renderCart();
    }

    // Funkcija atnaujinti kalbos mygtukų būseną
    function updateLanguageButtons() {
        document.querySelectorAll('.lang-button').forEach(button => {
            if (button.id === `lang-${currentLang}`) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Pirmasis galerijos ir paieškos atvaizdavimas įkėlus DOM
    if (galleryGrid) {
        filterAndSearchPhotos();
    }
});