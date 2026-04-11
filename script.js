const header = document.querySelector('header');
const menu = document.getElementById('menu');
const submenu = document.getElementById('submenu');
const submenuContainer = document.getElementById('submenu-container');
const content = document.getElementById('content');
const images = document.getElementById('images');
const playerdiv = document.getElementById('player');
const billedet = document.getElementById('billedet');
let aktivKey = null;

header.addEventListener('click', () => {
    submenu.innerHTML = '';
    aktivKey = null;
    content.innerHTML = '';
    images.innerHTML = '';
    billedet.classList.remove('sløret');
});

menu.querySelectorAll('p').forEach(punkt => {
    punkt.addEventListener('click', () => {
        const key = punkt.dataset.target;
        visSubmenu(key);
    })
});

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

    aktivKey = key;

    items.forEach(item => {
        const el = document.createElement('p');
        el.textContent = item.getAttribute('name');

        el.addEventListener('click', () => {
            visIndhold(item);
        });

        submenu.appendChild(el);
    });
};

function visIndhold (item) {
    const tekst = item.querySelector('tekst')
    content.innerHTML = tekst ? tekst.innerHTML : '';
    images.innerHTML = '';

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

        content.prepend(knap);
    }

    const billeder = item.querySelectorAll('img');
    billeder.forEach(img => {
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