// hent det der skal bruges
const header = document.querySelector('header');
const menu = document.getElementById('menu');
const submenu = document.getElementById('submenu');
const submenuContainer = document.getElementById('submenu-container');
const content = document.getElementById('content');
const images = document.getElementById('images');
const playerdiv = document.getElementById('player');
const billedet = document.getElementById('billedet');
let aktivKey = null;
let aktivtItem = null;
let erMobil = window.innerWidth <= 600;

// header-klik, rydder indhold
header.addEventListener('click', () => {
    window.location.hash = '';
    submenu.innerHTML = '';
    aktivKey = null;
    aktivtItem = null;
    content.innerHTML = '';
    images.innerHTML = '';
    billedet.classList.remove('sløret');
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

    if (key === aktivKey) {
        submenu.innerHTML = '';
        aktivKey = null;
        return;
    }
    
    billedet.classList.add('sløret');

    if (items.length === 1) {
        submenu.innerHTML = '';
        visIndhold(items[0]);
        return;
    };

    submenu.innerHTML = '';
    content.innerHTML = '';
    images.innerHTML = '';
    window.location.hash = 'releases';
    aktivtItem = null;
    aktivKey = key;

    items.forEach(item => {
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

        submenu.appendChild(box);
    });
};

// vis indhold
function visIndhold (item) {
    aktivtItem = item;

    const tekst = item.querySelector('tekst');
    const billeder = item.querySelectorAll('img');

    content.innerHTML = '';
    images.innerHTML = '';

    window.location.hash = item.getAttribute('slug'); //sæt location-hash

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

    const player = item.querySelector('player');
    if (player) {
        const knap = document.createElement('p');
        knap.textContent = '▶︎ ' + item.getAttribute('name');
        knap.style.cursor = 'pointer';
        knap.className = 'play-knap';

        knap.addEventListener('click', () => {
            playerdiv.innerHTML = '';
            playerdiv.appendChild(player.cloneNode(true));
        });

        content.appendChild(knap);
    }

    if (tekst) {
    const tekstNode = document.createElement('div');
    tekstNode.innerHTML = tekst.innerHTML;
    content.appendChild(tekstNode);
    }

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

    submenu.innerHTML = '';
    aktivKey = null;
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