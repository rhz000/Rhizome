// hent det der skal bruges
const header = document.querySelector('header');
const menu = document.getElementById('menu');
const submenu = document.getElementById('submenu');
const content = document.getElementById('content');
const images = document.getElementById('images');
const playerdiv = document.getElementById('player');
const billedet = document.getElementById('billedet');
let aktivtItem = null;
let erMobil = window.innerWidth <= 600;
let submenuGeneration = 0;



// header-klik, rydder indhold
header.addEventListener('click', () => {
    window.location.hash = '';
    submenu.innerHTML = '';
    aktivtItem = null;
    content.innerHTML = '';
    images.innerHTML = '';
    billedet.classList.remove('sløret');
    submenuGeneration++;
});



// find side med link-hash
window.addEventListener('DOMContentLoaded', () => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;

    const releases = ['releases'];
    if (releases.includes(hash)) {
        visSubmenu(hash);
        return;
    }

    document.querySelectorAll('template').forEach(template => {
        template.content.querySelectorAll('item').forEach(item => {
            if (item.getAttribute('slug') === hash) {
                visIndhold(item);
            }
        });
    });
});



// menu lytter efter klik
menu.querySelectorAll('p').forEach(punkt => {
    punkt.addEventListener('click', () => {
        const key = punkt.dataset.target;
        visSubmenu(key);
    })
});



// vis submenu
function visSubmenu (key) {
    const template = document.getElementById(`data-${key}`);
    const items = template.content.querySelectorAll('item');

    submenuGeneration++;
    const minGeneration = submenuGeneration;

    // hvis subemenuen allerede vises, luk den
    if (key === window.location.hash.slice(1)) {
        submenu.innerHTML = '';
        content.innerHTML = '';
        images.innerHTML = '';
        billedet.classList.remove('sløret');
        window.location.hash = '';
        return;
    };

    billedet.classList.add('sløret');

    // hvis der kun er et item, gå direkte til indhold
    if (items.length === 1) {
        submenu.innerHTML = '';
        visIndhold(items[0]);
        return;
    };

    // ryd siden for indhold
    submenu.innerHTML = '';
    content.innerHTML = '';
    images.innerHTML = '';
    window.location.hash = key; //sæt location-hash for den valgte submenu
    aktivtItem = null;

    // lav release-kort
    items.forEach((item, index) => {
        setTimeout(() => {
        if (submenuGeneration !== minGeneration) return;
        const box = document.createElement('div');
        box.className = 'release-kort';

        const billeder = item.querySelectorAll('img');
        const førsteImg = document.createElement('img');
        førsteImg.src = billeder[0].getAttribute('src');
        box.appendChild(førsteImg);

        const boxTekst = document.createElement('div');
        boxTekst.className = 'release-kort-tekst';

        const navn = item.getAttribute('name').split(': ');
        const kunstner = document.createElement('p');
        kunstner.textContent = navn[0];
        kunstner.className = 'release-kort-kunstner';
        const titel = document.createElement('p');
        titel.textContent = navn[1] || '';
        titel.className = 'release-kort-titel';

        boxTekst.appendChild(titel);
        boxTekst.appendChild(kunstner);
        box.appendChild(boxTekst);

        box.addEventListener('click', () => {
            visIndhold(item);
        });

        box.style.opacity = '0';
        submenu.appendChild(box);
        requestAnimationFrame(() => {
        box.style.transition = 'opacity 0.25s';
        box.style.opacity = '1';
        });

    }, index * 25);
    });
};



// vis indhold
function visIndhold (item) {
    aktivtItem = item;
    const tekst = item.querySelector('tekst');
    const billeder = item.querySelectorAll('img');
    const player = item.querySelector('player');
    const video = item.querySelector('video-embed');

    // ryd indhold
    content.innerHTML = '';
    images.innerHTML = '';

    window.location.hash = item.getAttribute('slug'); //sæt location-hash

    // første billede
    if (billeder.length > 0 && window.innerWidth <= 600) {
    const førsteImg = document.createElement('img');
    førsteImg.src = billeder[0].getAttribute('src');
    content.appendChild(førsteImg);
    const caption = billeder[0].getAttribute('caption');
    if (caption) {
        const cap = document.createElement('p');
        cap.textContent = caption;
        cap.className = 'image-caption';
        content.appendChild(cap);
    }
    }

    // titel og bandcamp-playknap
    if (player) {
        const knap = document.createElement('div');
        const knapTitel = document.createElement('div');
        const knapKnap = document.createElement('div');
        knapTitel.className = 'knap-titel';
        knapKnap.className = 'knap-knap';
        knapTitel.textContent = item.getAttribute('name');
        knapKnap.textContent = '▶︎';
        knap.appendChild(knapTitel);
        knap.appendChild(knapKnap);
        knap.className = 'play-knap';

        knapKnap.addEventListener('click', () => {
            playerdiv.style.transition = 'none';
            playerdiv.style.opacity = '0';
            playerdiv.innerHTML = '';
            playerdiv.appendChild(player.cloneNode(true));
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    playerdiv.style.transition = 'opacity 1s';
                    playerdiv.style.opacity = '1';
                });
            });
        });

        content.appendChild(knap);
    };



    // tekst
    if (tekst) {
    const tekstNode = document.createElement('div');
    tekstNode.innerHTML = tekst.innerHTML;
    content.appendChild(tekstNode);
    }

    

    // de sidste billeder
    const startIndex = window.innerWidth <= 600 ? 1 : 0;
    Array.from(billeder).slice(startIndex).forEach(img => {
        const el = document.createElement('img');
        el.src = img.getAttribute('src');
        images.appendChild(el);

        const caption = img.getAttribute('caption');
        if (caption) {
            const cap = document.createElement('p');
            cap.textContent = caption;
            cap.className = 'image-caption';
            images.appendChild(cap);
        }
    });



    // video
    if (video) {
        const wrapper = document.createElement('div');
        const ratio = video.getAttribute('ratio') || '16/9';
        wrapper.style.aspectRatio = ratio;
        wrapper.style.width = '100%';
        wrapper.innerHTML = video.innerHTML;
        images.appendChild(wrapper);
    }

    submenu.innerHTML = '';
};



// genopbygger indhold hvis skærmstørrelse ændres
window.addEventListener('resize', () => {
    const mobilNu = window.innerWidth <= 600;
    
    if (mobilNu !== erMobil) {
        erMobil = mobilNu;
        
        if (aktivtItem) {
            visIndhold(aktivtItem);
        }
    }
});