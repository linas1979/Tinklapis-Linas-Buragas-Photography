// Globalūs duomenys (tekstai, nuotraukos ir t.t.)
// PASTEBĖJIMAS: appData turėtų būti deklaruotas tik vieną kartą visame projekte.
// Jei šis failas naudojamas TIK apie-mane.html, tuomet kartojimas yra OK.
// Jei script.js ir apie-mane.js būtų įkelti į tą patį puslapį,
// tuomet reikėtų appData deklaruoti viename faile ir naudoti abiejuose.
// Kadangi jūsų atveju index.html naudoja script.js, o apie-mane.html naudoja apie-mane.js,
// tai yra tinkamas būdas.

const appData = {
    lt: {
        nav: {
            home: "Pagrindinis",
            gallery: "Galerija",
            about: "Apie mane",
            contact: "Kontaktai"
        },
        aboutMeSectionTitle: "Apie mane",
        aboutPage: {
            title: "Apie mane - Linas Buragas Photography",
            description: `
**Aš esu Linas Buragas, fotografijos entuziastas, kurio aistra menui pasireiškia per objektyvą.**

Nuo mažų dienų buvau žavimas gamtos grožio, miesto šurmulio ir kiekvienos akimirkos unikalumo. Fotografija man tapo ne tik hobiu, bet ir būdu užfiksuoti tai, kas nematoma plika akimi, ir pasidalinti savo perspektyva su pasauliu.

Mano kūryboje dominuoja peizažai, laukinė gamta, urbanistiniai vaizdai ir portretai. Kiekviename kadre siekiu perteikti istoriją, emociją ir grožį, kuris mus supa. Tikiu, kad nuotrauka gali pasakyti daugiau nei tūkstantis žodžių, ir mano tikslas yra sukurti paveikslus, kurie kalba patys už save.

Esu atviras bendradarbiavimui ir naujiems projektams. Jei turite idėjų ar norite užsisakyti individualią fotosesiją, susisiekite su manimi.

* **Fotografijos sritys:** Peizažai, portretai, renginiai, gamta, urbanistika.
* **Technika:** Dirbu su profesionalia Nikon įranga, užtikrinančia aukščiausią kokybę.
* **Paslaugos:** Nuotraukų pardavimas, individualios fotosesijos, renginių fotografavimas, postprodukcija.
`
        }
    },
    en: {
        nav: {
            home: "Home",
            gallery: "Gallery",
            about: "About Me",
            contact: "Contact"
        },
        aboutMeSectionTitle: "About Me",
        aboutPage: {
            title: "About Me - Linas Buragas Photography",
            description: `
**I am Linas Buragas, a photography enthusiast whose passion for art manifests through the lens.**

From a young age, I've been fascinated by the beauty of nature, the hustle and bustle of the city, and the uniqueness of every moment. Photography has become not just a hobby for me, but a way to capture what is unseen by the naked eye and share my perspective with the world.

My work primarily features landscapes, wildlife, urban scenes, and portraits. In every frame, I aim to convey the story, emotion, and beauty that surrounds us. I believe that a picture can say more than a thousand words, and my goal is to create images that speak for themselves.

I am open to collaborations and new projects. If you have ideas or would like to book a private photoshoot, please contact me.

* **Photography areas:** Landscapes, portraits, events, nature, urban, abstract.
* **Equipment:** I work with professional Nikon gear, ensuring the highest quality.
* **Services:** Photo sales, individual photoshoots, event photography, post-production.
`
        }
    }
};

let currentLang = localStorage.getItem('lang') || 'lt'; // Nustatyta numatytoji kalba

document.addEventListener('DOMContentLoaded', () => {
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
        });
    });

    // Pradinis turinio atnaujinimas ir kalbos mygtukų būsenos nustatymas
    updateContent();
    updateLanguageButtons();


    // Funkcija, kuri atnaujina tinklalapio tekstą pagal pasirinktą kalbą
    function updateContent() {
        const lang = currentLang;

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            const value = getNestedValue(appData[lang], key);

            if (value !== null) {
                element.textContent = value;
            } else {
                console.warn(`Missing translation for key: ${key} in language: ${lang}`);
            }
        });

        document.title = getNestedValue(appData[lang], 'aboutPage.title') || 'About Page';

        const aboutDescription = document.getElementById('aboutDescription');
        if (aboutDescription) {
            const descriptionText = getNestedValue(appData[lang], 'aboutPage.description');
            if (descriptionText) {
                if (typeof marked !== 'undefined') {
                    aboutDescription.innerHTML = marked.parse(descriptionText);
                } else {
                    console.warn("Marked.js biblioteka nerasta. Biografija nebus tinkamai formatuojama.");
                    aboutDescription.textContent = descriptionText;
                }
            }
        }
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

});