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

const maaneder = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



// byg siderne ud fra data.js
// hver side har: name, slug, text (html), images [{src, caption}], albumId (bandcamp, valgfri)
const sider = {
    releases: data.releases.map(lavReleaseSide),
    events: [lavEventsSide(data.events)],
    about: [lavAboutSide(data.about)]
};



// "2026-10-23" -> "October 23, 2026"
function formaterDato (iso) {
    const [aar, maaned, dag] = iso.split('-').map(Number);
    return `${maaneder[maaned - 1]} ${dag}, ${aar}`;
}

// "2026-10-22" -> "22.10.2026"
function formaterEventDato (iso) {
    const [aar, maaned, dag] = iso.split('-');
    return `${dag}.${maaned}.${aar}`;
}

function lavReleaseSide (r) {
    const titel = r.name.split(': ')[1] || r.name;

    const dele = ['released ' + formaterDato(r.date)];
    if (r.description) dele.push(r.description.trim());
    if (r.credits) dele.push('<strong>credits</strong>\n' + r.credits.trim());
    if (r.catalog) dele.push(r.catalog + '\n' + r.date.slice(0, 4) + ' Rhizome');

    const links = [];
    if (r.bandcamp) {
        links.push(`<a href="https://rhz000.bandcamp.com/album/${r.bandcamp.slug}" target="_blank">${titel} on Bandcamp</a>`);
    }
    (r.links || []).forEach(l => {
        links.push(`<a href="${l.url}" target="_blank">${l.text}</a>`);
    });
    if (links.length > 0) dele.push(links.join('\n'));

    return {
        name: r.name,
        slug: r.slug,
        text: dele.join('\n\n'),
        images: r.images || [],
        albumId: r.bandcamp ? r.bandcamp.albumId : null
    };
}

function lavEventsSide (e) {
    const events = e.list.map(ev => {
        return `<div class="event"><strong>${ev.title}</strong>\n${ev.place} ${formaterEventDato(ev.date)}\n\n${ev.artists.join('\n')}</div>`;
    });

    return {
        name: 'events',
        slug: 'events',
        text: '<strong>past events</strong>\n\n' + events.join('\n\n'),
        images: e.images || [],
        albumId: null
    };
}

function lavAboutSide (a) {
    return {
        name: 'about',
        slug: 'about',
        text: a.text.trim(),
        images: a.images || [],
        albumId: null
    };
}

// bandcamp-playeren
function lavPlayer (albumId) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=small/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/`;
    iframe.style.border = '0';
    iframe.style.width = '100%';
    iframe.style.height = '42px';
    return iframe;
}



// rydder siden
function nulstil () {
    document.title = 'Rhizome';
    window.location.hash = '';
    submenu.innerHTML = '';
    content.innerHTML = '';
    images.innerHTML = '';
    billedet.classList.remove('sløret');
    aktivtItem = null;
    submenuGeneration++;
}



// header-klik, rydder indhold
header.addEventListener('click', nulstil);



// find side med link-hash
window.addEventListener('DOMContentLoaded', () => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;

    if (hash === 'releases') {
        visSubmenu(hash);
        return;
    }

    for (const items of Object.values(sider)) {
        const fundet = items.find(item => item.slug === hash);
        if (fundet) {
            visIndhold(fundet);
            return;
        }
    }
});



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



// menu lytter efter klik
menu.querySelectorAll('p').forEach(punkt => {
    punkt.addEventListener('click', () => {
        const key = punkt.dataset.target;

        // hvis sektionen allerede vises, luk den
        if (key === window.location.hash.slice(1)) {
            nulstil();
            return;
        }

        visSubmenu(key);
    })
});



// vis submenu
function visSubmenu (key) {
    const items = sider[key];

    submenuGeneration++;
    const minGeneration = submenuGeneration;

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
    document.title = 'Rhizome · ' + key;
    aktivtItem = null;

    // lav release-kort
    items.forEach((item, index) => {
        setTimeout(() => {
        if (submenuGeneration !== minGeneration) return;
        const box = document.createElement('div');
        box.className = 'release-kort';

        if (item.images.length > 0) {
            const førsteImg = document.createElement('img');
            førsteImg.src = item.images[0].src;
            box.appendChild(førsteImg);
        }

        const boxTekst = document.createElement('div');
        boxTekst.className = 'release-kort-tekst';

        const navn = item.name.split(': ');
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

    }, index * 20);
    });
};



// vis indhold
function visIndhold (item) {
    aktivtItem = item;
    const mobil = window.innerWidth <= 600;
    const billeder = item.images;

    // ryd indhold
    content.innerHTML = '';
    images.innerHTML = '';
    submenu.innerHTML = '';
    billedet.classList.add('sløret');

    window.location.hash = item.slug; //sæt location-hash
    document.title = 'Rhizome · ' + item.name; //sæt sidetitel

    // første billede (på mobil ligger det i content)
    if (billeder.length > 0 && mobil) {
        const førsteImg = document.createElement('img');
        førsteImg.src = billeder[0].src;
        content.appendChild(førsteImg);
        if (billeder[0].caption) {
            const cap = document.createElement('p');
            cap.textContent = billeder[0].caption;
            cap.className = 'image-caption';
            content.appendChild(cap);
        }
    }

    // titel og bandcamp-playknap
    if (item.albumId) {
        const knap = document.createElement('div');
        const knapTitel = document.createElement('div');
        const knapKnap = document.createElement('div');
        knapTitel.className = 'knap-titel';
        knapKnap.className = 'knap-knap';
        knapTitel.textContent = item.name;
        knapKnap.textContent = '▶︎';
        knap.appendChild(knapTitel);
        knap.appendChild(knapKnap);
        knap.className = 'play-knap';

        knapKnap.addEventListener('click', () => {
            playerdiv.style.transition = 'none';
            playerdiv.style.opacity = '0';
            playerdiv.innerHTML = '';
            playerdiv.appendChild(lavPlayer(item.albumId));
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
    if (item.text) {
        const tekstNode = document.createElement('div');
        tekstNode.innerHTML = item.text;
        content.appendChild(tekstNode);
    }

    // de sidste billeder
    const startIndex = mobil ? 1 : 0;
    billeder.slice(startIndex).forEach(img => {
        const el = document.createElement('img');
        el.src = img.src;
        images.appendChild(el);

        if (img.caption) {
            const cap = document.createElement('p');
            cap.textContent = img.caption;
            cap.className = 'image-caption';
            images.appendChild(cap);
        }
    });

};
