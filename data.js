// ============================================================
// RHIZOME · indhold
//
// Her redigerer du sidens indhold. Resten (script.js, index.html) rører du normalt ikke.
//
// NY UDGIVELSE: kopier en eksisterende udgivelse, sæt den øverst i listen
// og ret felterne. Rækkefølgen i listen er rækkefølgen på siden (nyeste øverst).
//
// felter (alle undtagen name, slug og date er valgfrie):
//   name         "Kunstner: Titel"  (kolon + mellemrum skiller kunstner og titel)
//   slug         bruges i linket, fx rhz000.com/#nina-liv-softwired
//   date         ÅÅÅÅ-MM-DD, vises som "released October 23, 2026"
//   catalog      fx "RHZ-031" (året efter vises automatisk ud fra date)
//   bandcamp     { slug: "...", albumId: "..." }
//                slug = det sidste stykke af album-linket, albumId = tallet i embed-koden (album=XXXX)
//   description  fri tekst (HTML tilladt, fx <a href="...">)
//   credits      én linje pr. credit
//   images       første billede er cover. { src, caption }
//   links        ekstra links under Bandcamp-linket, fx YouTube. { text, url }
//
// Tekst står i `backticks`, så den kan fylde flere linjer. Hold tekstlinjerne
// helt ude i venstre side (ingen indrykning), ellers vises indrykningen på siden.
// ============================================================

const data = {

    releases: [

        {
            name: "Samler På Dig: Første Samling",
            slug: "samler-paa-dig-foerste-samling",
            date: "2026-10-30",
            bandcamp: { slug: "f-rste-samling", albumId: "4031438363" },
            credits: `
Music by Aria Leth Schütze
Guitar by Lola Hammerich on “Ud Af Støjen”
Guitar by Emma Louise Ottsen Knudsen on “Tiden Går I Din Tid”
Trumpet by Carlo Becker Adrian on “Stille Styrke” and “Kun Du Ved”
Saxophone by Astrid Nørgaard on “Morgenrød”
Mixed by Mads Krue Bugge
Mastered by Joel Krozer at Six Bit Deep
Photography by Amanda Bødker
`,
            images: [
                { src: "billeder/releases/foerste-samling.jpg", caption: "Første Samling artwork © Amanda Bødker" },
                { src: "billeder/artists/samler-paa-dig-foerste-samling.jpg", caption: "Samler På Dig © Amanda Bødker" }
            ]
        },

        {
            name: "Nina Liv: Softwired",
            slug: "nina-liv-softwired",
            date: "2026-10-23",
            bandcamp: { slug: "softwired", albumId: "4248753318" },
            credits: `
Music and composition by Nina Liv
Nyckelharpa by Peter John Warner
Mix by Rasmus Meyer
Master by Joel Krozer
Artwork by Karoline Schapiro
Press photos by Amanda Bødker
Supported by Koda Kultur and Statens Kunstfond
`,
            images: [
                { src: "billeder/releases/softwired.jpg", caption: "Softwired artwork © Karoline Schapiro" },
                { src: "billeder/artists/nina-liv-softwired.jpg", caption: "Nina Liv © Amanda Bødker" },
                { src: "billeder/releases/physical/softwired-cd.jpg", caption: "Softwired CD & amulets © Mads Krue Bugge" }
            ]
        },

        {
            name: "Markus Sollid: Elastic Embrace",
            slug: "markus-sollid-elastic-embrace",
            date: "2026-09-25",
            catalog: "RHZ-031",
            bandcamp: { slug: "elastic-embrace", albumId: "3240911523" },
            description: `
On Markus Sollid's debut album 'Elastic Embrace', we are taken on a sonic journey where worlds exist side by side, contributing to a unified whole, unfolding one another, complementing each other. It is an album that points to the ambivalence we live with when we experience our foundations or relationships transforming into something new. Light and darkness, melancholy and hopefulness become two sides of the same coin; seemingly contradictory emotions coexist and turn into something entirely different, something that expands us. Musically, this coexistence is expressed through Sollid's exploration of breaking away from the horizontal in music, through his use of vertical synth roles, as heard in 'Redeeming Horizon', which almost yearns to break through a sense of heaviness. Or as in 'Vertical Longing', where a flute finds its footing within metallic synthesizers — warmth and cold, lightness and weight meet in an elastic embrace. The album takes shape within an experimental electroacoustic space that fluctuates and explores different states of mind and exists most fully in the threshold in between.

On the album Sollid weaves together the hand played and the programmed, balancing these elements and lets them converse rather than oppose each other. With affinities to visual artists such as James Turrell and Hicham Berrada, and composers like Caterina Barbieri, Sollid, in his own distinctive way, creates music that affects our perception of time, as circular movements unfold and refer back to themselves.
`,
            credits: `
Transverse flute by Mette Hommel
Double bass by Asbjørn Horne
Trumpet by Petra Schultz
Trombone by Anine Messmann
Lap steel by Eigil Fauerskov
Computer and synths by Markus Sollid
Composed, produced and mixed by Markus Sollid
Mastered by Emil Thomsen
Artwork by Frederik Tøt Godsk
Supported by Koda Kultur
`,
            images: [
                { src: "billeder/releases/elastic-embrace.jpg", caption: "Elastic Embrace artwork © Frederik Tøt Godsk" },
                { src: "billeder/artists/markus-sollid-elastic-embrace.jpg", caption: "Markus Sollid © Aria Leth Schütze" }
            ]
        },

        {
            name: "Alto Aria: Ephemeral",
            slug: "alto-aria-ephemeral",
            date: "2025-11-14",
            catalog: "RHZ-029",
            bandcamp: { slug: "ephemeral", albumId: "4142164073" },
            description: `
A porous heart
Cracked open
A thousand spores
Drawing images in the sky

Lines of the past
Reach out for the future
Soil is forming
Seasons return

You blossom in fall
An eclipse revolving
Soft as summer snow

Guided by the moon
Under the stars
You're not alone
Never have been

We always need more time
But a moment can last forever

The body knows ephemeral
More open than ever

No words for this
But angel
`,
            credits: `
Music by Aria Leth Schütze
Featuring Croatian Amor
Featuring Dimming
Featuring Skarv
Featuring Space Afrika
Featuring Yan Higa
Cover of Olive's 'You're Not Alone'. Words & music by Robin Taylor-Firth / Tim Kellett. © 1996 Edward Kassner Music Co. Ltd / Downtown Music UK Ltd. Used by permission. All rights reserved.
Double bass by Mark Ibsgaard Gregersen
Saxophone by Astrid Nørgaard
Creative consultancy by Laura Cecilie Krogtoft
Poem guidance by Gabriel René Franjou
Produced with Mads Krue Bugge
Mixed by Mads Krue Bugge
Mastered by Joel Krozer at Six Bit Deep
Painting by Elsebet Schütze
Promoted by Modern Matters
Supported by Koda Kultur
`,
            images: [
                { src: "billeder/releases/ephemeral.jpg", caption: "Ephemeral artwork © Elsebet Schütze" },
                { src: "billeder/artists/alto-aria-ephemeral.jpeg", caption: "Alto Aria © Laura Cecilie Krogtoft" }
            ],
            links: [
                { text: "video for Stars Align on YouTube", url: "https://www.youtube.com/watch?v=nCp6DOmevjY" }
            ]
        },

        {
            name: "Nemo: Blue is the color of infinity",
            slug: "nemo-blue-is-the-color-of-infinity",
            date: "2025-10-24",
            catalog: "RHZ-027",
            bandcamp: { slug: "blue-is-the-color-of-infinity", albumId: "4277062771" },
            credits: `
Music by Emma Louise Ottsen Knudsen
Mixed by Mads Krue Bugge
Stem mastered by Joel Krozer
'Monster' piano by Johan August Dyrløv Høegh
'Mini' backing vocals by Amalie Hannibal Petri
'Lonely Car' co-writing by Viola Wendelboe Faber
'No Sphere' and 'Ocean' electric bass by Mark Ibsgaard Gregersen
'Paranoia Galaxy' electric bass by Mads Krue Bugge
Press photos by Marthe Bleu
Artwork by Inge Maria Maier and Iben April Hegreberg
Promoted by Fomo
`,
            images: [
                { src: "billeder/releases/blue-is-the-color-of-infinity.jpg", caption: "Blue is the color of infinity artwork © Inge Maria Maier & Iben April Hegreberg" },
                { src: "billeder/artists/nemo-blue-is-the-color-of-infinity.jpeg", caption: "Nemo © Marthe Bleu" }
            ],
            links: [
                { text: "video for Monster on YouTube", url: "https://www.youtube.com/watch?v=MBOrwCX8C_4" }
            ]
        },

        {
            name: "Margos: End of Greatness",
            slug: "margos-end-of-greatness",
            date: "2025-09-26",
            catalog: "RHZ-028",
            bandcamp: { slug: "end-of-greatness", albumId: "2082044297" },
            credits: `
Music by Isidore De Souza
Mixed and mastered by Isidore De Souza
Artwork by Constantin Schlachter
Press photos by Aria Leth Schütze
`,
            images: [
                { src: "billeder/releases/end-of-greatness.jpg", caption: "End of Greatness artwork © Constantin Schlachter" },
                { src: "billeder/releases/physical/end-of-greatness-print.jpg", caption: "End of Greatness poster © Margos" },
                { src: "billeder/artists/margos-end-of-greatness.jpeg", caption: "Margos © Aria Leth Schütze" }
            ]
        },

        {
            name: "Skarv: Polymer Veil",
            slug: "skarv-polymer-veil",
            date: "2024-10-25",
            catalog: "RHZ-025",
            bandcamp: { slug: "polymer-veil", albumId: "1780342992" },
            description: `
Polymer Veil weaves parallel narratives about artificiality, with each track exploring what it means to be fake in a world increasingly shaped by differing technologies. Borrowing its title from the long-chain molecules that form DNA, cellulose, and plastics alike, the album mirrors its process of construction, each note linking fluidly to the next. Tracks like 'Narrative Exploit' feature video game-esque beats, while stumbling synthesizers wander through 'Spit Gold Lip Gloss'. 'Composite A/B', featuring collaborators ill and Nemo, offers moments of softness, contrasting the foreboding 'False Progress', which cautions listeners with the refrain, “don't trust the industry”, echoing Aïsha Devi's 'Uupar-Theory'. Ambient stretches are woven throughout, balancing the intensity of tracks such as the ASMR-inspired sonic nightmare 'Nylon Fuses With Skin'.

Skarv's collaboration with GPT-3, an outdated LLM, plays a pivotal role in shaping the album's lyrical landscape. On the tracks 'Skin Across Deep', 'Success', and 'Non-Stick Bead Of Insight', Skarv integrates AI-generated text in the lyrics, giving a disorienting perspective on cognition and creativity. Reflecting on this posthuman process, Skarv notes, “The experience of generating and selecting text shifted how I view my own cognition, my creative process. I slowly began to see the world around me as data, and my nervous system a filter, a constantly updated generative model. I grew up thinking the fake, the plastic, the synthetic were inherently bad - now, I'm questioning if that's what we all are”.
`,
            credits: `
Music & artwork by Mads Krue Bugge
Composite A co-written & co-produced by Anna Wærum Hansen
Composite B co-written by Emma Ottsen Knudsen
Skin Across Deep co-written by Laura Marie Madsen & co-produced by Aria Leth Schütze
Success co-written by Aria Leth Schütze
`,
            images: [
                { src: "billeder/releases/polymer-veil.jpg", caption: "Polymer Veil artwork © Mads Krue Bugge" },
                { src: "billeder/artists/skarv-polymer-veil.jpeg", caption: "Skarv © Laura Cecilie Krogtoft" }
            ]
        },

        {
            name: "Lau Andersson: The Weeping Siege",
            slug: "lau-andersson-the-weeping-siege",
            date: "2024-05-10",
            catalog: "RHZ-024",
            bandcamp: { slug: "the-weeping-siege", albumId: "2457061344" },
            credits: `
Music and artwork by Lau Andersson
Cello by Markus Tange
Mastered by Mads Krue Bugge
Artwork by Orgaphine
`,
            images: [
                { src: "billeder/releases/the-weeping-siege.jpg", caption: "The Weeping Siege artwork © Orgaphine" },
                { src: "billeder/artists/lau-andersson-the-weeping-siege.jpeg", caption: "Lau Andersson © Orgaphine" }
            ],
            links: [
                { text: "video for Chasing What's To Come on YouTube", url: "https://www.youtube.com/watch?v=R-K12bNfZ4A" }
            ]
        },

        {
            name: "Messell: envelope follower",
            slug: "messell-envelope-follower",
            date: "2024-04-19",
            catalog: "RHZ-023",
            bandcamp: { slug: "envelope-follower", albumId: "607139796" },
            credits: `
Music by Martin Messell
Master by Valdemar Kragelund
Artwork by Christian Kingo
Video by Christian Kingo
Press photo by Martin Messell
`,
            images: [
                { src: "billeder/releases/envelope-follower.jpg", caption: "envelope follower artwork © Christian Kingo" },
                { src: "billeder/artists/messell-envelope-follower.jpeg", caption: "Messell" }
            ],
            links: [
                { text: "video for envelope follower_III on YouTube", url: "https://www.youtube.com/watch?v=5L5N7LkcBKc" }
            ]
        },

        {
            name: "Alto Aria: Limerence",
            slug: "alto-aria-limerence",
            date: "2024-02-14",
            catalog: "RHZ-022",
            bandcamp: { slug: "limerence", albumId: "269538200" },
            description: `
'Limerence' is an album dedicated to the brokenhearted - for those whose hearts aren't mirrored. The songs together are manifold, insisting on the variety of emotions that arise when you have a broken heart but at the same time do not see yourself as broken.

Sonically, the album deals with softness and hardness. It weaves these two together to create tension and release. Throughout the album whispering voices, field recordings, strings, and hard cold beats create the foundation for different feelings to unfold.
`,
            credits: `
Music by Aria Leth Schütze
Featuring Frederik Lehmann, Holger Seidelin,
Laura Cecilie and Viola Faber
Mixed with Mads Krue Bugge
Mastered by Joel Krozer
Artwork and amulet by Nikolaj Exner
Press photos by Amanda Bødker
Outfit by Alectra Rothschild
Promo by Fomo
`,
            images: [
                { src: "billeder/releases/limerence.jpg", caption: "Limerence artwork © Nikolaj Exner" },
                { src: "billeder/artists/alto-aria-limerence.jpeg", caption: "Alto Aria © Amanda Bødker" }
            ]
        },

        {
            name: "Ingri Høyland: Ode To Stone",
            slug: "ingri-hoyland-ode-to-stone",
            date: "2023-11-24",
            catalog: "RHZ-021",
            bandcamp: { slug: "ode-to-stone", albumId: "1830630299" },
            description: `
The Copenhagen-based composer and sound artist Ingri Høyland releases a new album - a sound collage in 7 pieces.

The album 'Ode To Stone' is created together with the artists Ida Urd, Sofie Birch and Lea Gulditte Hestelund. The 7 compositions investigates the small and big movements and synergies between the stone, the wind, the dunes, the light at the coast of Northern Denmark. The album attempts to physically and abstractly expand our sensation of time and is drawn towards the slow, the extended, and the fluid. A movement and longing towards the earth and the stone.
`,
            credits: `
Concept and idea by Ingri Høyland & Lea Guldditte Hestelund
Composed, produced and performed by Ingri Høyland & Ida Urd
Mixed by Sofie Birch
Mastered by Ingrid Loftsgarden
Artwork by Tali Bayer
Supported by Koda Kultur
`,
            images: [
                { src: "billeder/releases/ode-to-stone.jpg", caption: "Ode To Stone artwork © Tali Bayer" },
                { src: "billeder/releases/physical/ode-to-stone-cassette.jpg", caption: "Ode To Stone cassette © Tali Bayer" },
                { src: "billeder/artists/ingri-høyland-ode-to-stone.jpeg", caption: "Ingri Høyland © Mads Krue Bugge" }
            ]
        },

        {
            name: "Irmgard: Irmgard Irmgaard",
            slug: "irmgard-irmgard-irmgaard",
            date: "2023-10-13",
            catalog: "RHZ-020",
            bandcamp: { slug: "irmgard-irmgaard", albumId: "3591353645" },
            description: `
'Irmgard Irmgaard' is an investigation and unfolding of the character Irmgard, a project made by composer Astrid Nørgaard. The debut album draws inspiration from weavings made by Astrids mother, Dorthe Nørgaard, and circles around the themes of interweavings, connections, heritage and patterns that repeat without finding a final form.

Irmgard [irmin = “all, strong, whole, entire” + gard = “enclosure, protection, encircle, garden] is a place of care and rest, a safe enclosure around one's inner world. Irmgard takes many forms: A caregiving sister, a fortress, a garden, a small insect-like person, a weaving to lie on or wrap around you.

Irmgard is a place to withdraw and shield yourself from too many external influences - while staying connected to the beings around you.

The music of the album seeks to interpret the repetitiveness, tactility and simplicity of the weavings by incorporating airy, circular melodies contrasting with shimmering fluctuations and undulating soundscapes. Irmgard is dialogues, gentle duets interweaving rooms for longing with room for caregiving, the harmonious acoustics with synthetic noise.

Connecting fibres to connect threads into a strong fabric, and the opposite movement; the unraveling of the strong enclosure to reveal the vulnerable softness underneath.
`,
            credits: `
Written by Astrid Emilie Nørgaard
Alto saxophone and electronics by Astrid Emilie Nørgaard
Violin by Astrid Marie Forsberg Thysk
Flugelhorn by Carlo Janusz Becker Lauritsen
Recorded and mixed by Astrid Emilie Nørgaard and Johanna Nielsen
Mastered by Mads Krue Bugge
`,
            images: [
                { src: "billeder/releases/irmgard-irmgaard.jpg", caption: "Irmgard Irmgaard artwork © Astrid Emilie Nørgaard" },
                { src: "billeder/artists/irmgard-irmgard-irmgaard.jpeg", caption: "Irmgard © Phie Beckett Stenbæk" }
            ]
        },

        {
            name: "Various artists: Hypersea",
            slug: "various-artists-hypersea",
            date: "2023-09-01",
            catalog: "RHZ-019",
            bandcamp: { slug: "hypersea", albumId: "2706095624" },
            description: `
'Hypersea' is a collection of pieces inspired by Astrida Neimanis 'Hydrofeminism: Or, On Becoming a Body of Water'. A palette of artists, which we find inspiring, have been invited in to make a piece of music with the text as a point of departure, and it has been up to the artist to find a way to interpret the text and let it find its way into their work.

The album has become a collection of pieces containing a watery quest, fast footsteps, shifting and fragmented choirs, broken beats and hearts, soothing synthesisers, harsh winds, caring bodies, enchanting laughter, uplifting melodies, polyphonic saxophones, and long reverbs.

'Hypersea' has been curated by Alto Aria and presents works by Hôy la, ilinx, Saltmother, Julia Becker, ill, Angel Wei, Lyra Valenza, Faber, Jason Lee, Bysund, Holger Seidelin, Astrid Nørgaard, KRY, Laenz, Varnrable, Messell, Alto Aria, and Skarv.
`,
            credits: `
Music by Hôy la, ilinx, Saltmother, Julia Becker, ill, Angel Wei, Lyra Valenza, Faber, Jason Lee, Bysund, Holger Seidelin, Astrid Nørgaard, KRY, Laenz, Varnrable, Messell, Alto Aria, and Skarv
Mastered by Jason Lee Cameron
Artwork by Mads Krue Bugge
`,
            images: [
                { src: "billeder/releases/hypersea.jpg", caption: "Hypersea artwork © Mads Krue Bugge" }
            ]
        },

        {
            name: "Alto Aria, Skarv: Time Stretches (Stretched Version)",
            slug: "alto-aria-skarv-time-stretches-stretched-version",
            date: "2023-05-07",
            catalog: "RHZ-018",
            bandcamp: { slug: "time-stretches-stretched-version", albumId: "3260242288" },
            description: `
Marking the 3 year anniversary of Rhizome's first release, 'Tides' by Alto Aria, Rhizome releases a Skarv rework of its closing track 'Time Stretches'. Speaking to the sorrowful nature of 'Tides', the rework takes a step back in time and zooms in on a single moment, expanding on its melancholic phrasing.

The track, originally based on a 1 second violin sample stretched to the song's 5 minute duration, has here been elongated even further, reaching a total length of 21 minutes and 16 seconds. Apart from processed stems of the original track, the rework contains vocal samples picked from 'Tides' as well as fresh synth-parts, and field recordings made in Northern Jutland.
`,
            credits: `
Music and mixed by Aria Leth Schütze and Mads Krue Bugge
Mastered by Mads Krue Bugge
Artwork by Aria Leth Schütze and Mads Krue Bugge
`,
            images: [
                { src: "billeder/releases/time-stretches.jpg", caption: "Time Stretches (Stretched Version) artwork © Aria Leth Schütze & Mads Krue Bugge" }
            ]
        },

        {
            name: "ill: íra",
            slug: "ill-ira",
            date: "2023-05-05",
            catalog: "RHZ-015",
            bandcamp: { slug: "ra", albumId: "2279857020" },
            description: `
'íra' is the first release from Anna Wærum under the name ill.

íra means anger and revenge in Latin and is one of the Seven Deadly Sins.
íra is feisty arpeggio synthesizers, delicately collected live recordings, proud acoustic guitars and introspectively greedy pop melodies. íra is shiny soft ring armor, of t-shirts of images of t-shirts is armor is music. íra is breakup songs with the patriarchy, reading aloud on the dance floor and lazer pointers in bed. íra is the fight for access to our common resources, institutions, education, influence, sustenance and medical help. íra is the shield against the resistance bodies that ill's encounters, bodies that are called permanently disabled, hysterical.

What if it's not my body that's wrong? What if I can make music in bed? What if my bed is my studio? What if it doesn't need to be mixed more than that? What if the first take was the only take and it mattered to me? What if the first take laughs in the face of the seventh take, saying “fuck takes!! I'm not a take!! I'm a fucking song from eternity and you can't delete me no matter how many times you press apple Z”? What if I'm just too exhausted… but I'm a star? What if my armor is my friends mixing it for me exaaaaaaactly the way I want it, even if we disagree? What if my sword is that I can lie here and experience the whole world and I don't need drugs or to live the (dudy) bohemian lifestyle because my antennae are longer than yours? What if the real work is to let it happen? To honor the moment and what was present? What if I don't have to feel bad to do something good? What if what comes must come from a body that feels safe? A body that can feel? What if that was my battle cry?

I work from a body broken, but also, I work from a body, one that is continuously broken down, breaking. I work from trembling nerves, too exposed, unshielded. I work from a glittering body, shivering nerves too unshielded, a corner beaming with light. I work from a sunbeamed corner.
`,
            credits: `
Co.mix on the entire EP: Mads Krue Bugge
Master: Mads Krue Bugge
Publishing and press work: Mads Krue Bugge and Aria Leth Schütze
Co. production on Plead From The Patient: Mads Krue Bugge, Emma Ottsen Knudsen
Lyrics, voice, collaboration on Complaint In The Making: Deirdre J. Humphrys
Co. production on Battlefield: Simon Formann, Mads Krue Bugge
Piano and co. production on Bruises Of Armor: Agnes Hartvig
Recording and interview on íra iii: Emma Ottsen Knudsen
Press photos: Aria Leth Schütze
Cover art and t-shirt/armor art: Frederikke Jul Vedelsby
Choreography on live performance: Karis Zidore
All lyrics, recordings, fieldrecordings, vocals, production, mix, outfits: Anna Wærum Hansen
`,
            images: [
                { src: "billeder/releases/ira.jpg", caption: "íra artwork © Frederikke Jul Vedelsby" },
                { src: "billeder/artists/ill-ira.jpeg", caption: "ill © Aria Leth Schütze" }
            ]
        },

        {
            name: "Ida Urd: Future Woman Am Pm",
            slug: "ida-urd-future-woman-am-pm",
            date: "2023-03-24",
            catalog: "RHZ-016",
            bandcamp: { slug: "future-woman-am-pm", albumId: "1584678563" },
            description: `
The compositions is taking its point of departure with the three characters Future Woman, Modern Girl and Me, and reflects upon how it is to be a young woman and human today. The characters' life unfolds in a fictional world where past, present and future exist side by side, and where the characters merge and morph within a day where the story takes place.

Future Woman Am Pm is a piece within the field of a science fiction-inspired world which deals with social media. The music is made with care for the three characters which carry the story, and care and thoughts for the generation of people growing up in a time where the real world does not seem to be easy to define.
`,
            credits: `
Music and libretto Ida Urd
Guitar and keyboard by Daniel Scheffmann
Mixed by Anja Tietze Lahrmann
Mastered by Mads Krue Bugge
Artwork by Mads Krue Bugge
`,
            images: [
                { src: "billeder/releases/future-woman-am-pm.jpg", caption: "Future Woman Am Pm artwork © Mads Krue Bugge" },
                { src: "billeder/releases/physical/future-woman-am-pm-libretto.jpg", caption: "Future Woman Am Pm libretto © Mads Krue Bugge" },
                { src: "billeder/artists/ida-urd-future-woman-am-pm.jpeg", caption: "Ida Urd © Mads Krue Bugge" }
            ]
        },

        {
            name: "Laenz: Letter",
            slug: "laenz-letter",
            date: "2023-01-20",
            catalog: "RHZ-014",
            bandcamp: { slug: "letter", albumId: "4084777639" },
            description: `
The two tracks in many ways draw from the most exposed source of creative compulsion. They are the bookends of one's surrender to a yearning outside of one's own. 'Burning' is the precursor, 'The Sequel' is a declaration. Taking from an observation of nuance from Barthes, the two tracks are fragments of an enduring preoccupation with devotion. Their sonic approach is indistinguishable from the feelings inscribed. In 'Burning, the production is a dizzying navigation of emotions under fire, from wonky quips and glossy lasers to cavernous susurration. 'The Sequel', on the other hand, is a soft, continuous ride — a glow from a distance. A combination of pining and avowal bleeds through ghostly sonics and unrelenting drum patterns. The two together comprise a letter, one that proposes renewal and return over a lifetime of loving.
`,
            credits: `
Music by Christina Lan
Mastered by Mads Krue Bugge
Artwork by Christina Lan and Caitlin Young
`,
            images: [
                { src: "billeder/releases/letter.jpg", caption: "Letter artwork © Christina Lan & Caitlin Young" },
                { src: "billeder/artists/laenz-letter.jpeg", caption: "Laenz © Rona Akbari" }
            ]
        },

        {
            name: "Polly: Invitation",
            slug: "polly-invitation",
            date: "2022-11-25",
            catalog: "RHZ-010",
            bandcamp: { slug: "invitation", albumId: "1508284608" },
            description: `
The album is about relations - to friends, family, lovers and oneself. The songs are small scenes from where I dive into these relations; here I've found themes such as longing, frustration, joy and care to sing about. With the album I'd like to encourage leaving bad encounters and being with the ones you love instead.
`,
            images: [
                { src: "billeder/releases/invitation.jpg", caption: "Invitation artwork © Amanda Bødker" },
                { src: "billeder/artists/polly-invitation.jpeg", caption: "Polly © Frederikke Aaes" }
            ]
        },

        {
            name: "l_m: intimacy issues",
            slug: "l_m-intimacy-issues",
            date: "2022-02-18",
            catalog: "RHZ-008",
            bandcamp: { slug: "intimacy-issues", albumId: "178693442" },
            description: `
5 songs for everyone with bruised hearts, everyone who fell for a bad boy (again), everyone who went home with the wrong person, and everyone who felt that they were too much or too little <3
`,
            credits: `
Composed, produced, and performed by l_m
Mixed with Simon Mariegaard
Mastered by Emil Thomsen
`,
            images: [
                { src: "billeder/releases/intimacy-issues.jpg", caption: "intimacy issues artwork © l_m" },
                { src: "billeder/releases/physical/intimacy-issues-songbook.jpg", caption: "intimacy issues songbook © Mads Krue Bugge" },
                { src: "billeder/artists/l_m-intimacy-issues.jpeg", caption: "l_m © Amanda Bødker" }
            ]
        },

        {
            name: "Skarv: Haptic Feedback",
            slug: "skarv-haptic-feedback",
            date: "2021-11-18",
            catalog: "RHZ-007",
            bandcamp: { slug: "haptic-feedback", albumId: "1509302419" },
            description: `
“In an apartment framed by smooth concrete walls is a large single-paned glass window revealing lights in the windows of far apartment blocks. When you open the window the air feels cold and dry and you hear a faint boombox playing bass music over distant yells of protests. Through the wall to your left, you hear someone scratching it from the other side. As you place your head against the wall, the sound is transduced and you hear the scratching from within your skull.

Closing the window you see the reflection of the lights inside the apartment, two pastel magenta LED panels on the walls and a cold white fluorescent tube hanging over the desk. On the desk is a notebook and a couple of loose hard drives. Opposing the desk is the bed on which there is an open, glowing laptop and a pair of headphones. When you sit down, take the headphones on, plug them in and press play,”



'Haptic Feedback' is the second record and first EP by Skarv, moniker of composer and electronic musician Mads Krue Bugge.

On 'Haptic Feedback' Skarv leaves the biosphere behind and embarks on a search for intimacy on a trip into the digital void of a laptop computer. Picking samples and synthesized sounds, he unfolds connections to each sound through moving but thorned compositions. The EP is a set of five tracks separated by abrupt transitions and continues the sonic investigation of his own alienation from and discontentment with the world that started with his first record, 'A Memory Like Any Other'.
`,
            credits: `
Music, text and artwork by Skarv
Featuring Alto Aria on 'Realistic Touch'
Mastered with Aria Leth Schütze
`,
            images: [
                { src: "billeder/releases/haptic-feedback.jpg", caption: "Haptic Feedback artwork © Mads Krue Bugge" },
                { src: "billeder/artists/skarv-haptic-feedback.jpeg", caption: "Skarv © Aria Leth Schütze" }
            ]
        },

        {
            name: "Various artists: bag/belly/box",
            slug: "various-artists-bag-belly-box",
            date: "2021-03-26",
            catalog: "RHZ-005",
            bandcamp: { slug: "bag-belly-box", albumId: "3744965488" },
            description: `
'bag/belly/box' is a collection of pieces inspired by Ursula K. Le Guin's 'The Carrier Bag Theory of Fiction'. In its entirety, the compilation acts as a container of experiences and expressions of the artists involved.

The container holds the local park, repressed feelings, internalized change, a list of plants, the gatherer, nerve endings, openings, and a glimpse of everyday life. It unfolds emotions and feelings of alienation, sensitivity, distrust, liminality, curiosity, uncertainty, loneliness, and care. Ready to be opened and closed. For you to keep as you move on.

'bag/belly/box' has been curated by Alto Aria and Skarv and presents works by Helena Gao, ioulus, J Sliwa, KRY, L.Mantis, Lucas Chikhieo, Messell, Ryong, as well as the curators.

All proceeds from album purchases on Bandcamp will be donated to Close Ellebæk, a group of activists continuing the work of resistance against Ellebæk Prison at Center Sandholm.
`,
            credits: `
Music by Lucas Chikhieo, L.Mantis, Messell, ioulus, Ryong, J Sliwa, Helena Gao, Alto Aria, Skarv, KRY
Artwork by Amanda Bødker
Mastered by Mads Krue Bugge and Aria Leth Schütze
`,
            images: [
                { src: "billeder/releases/bag-belly-box.jpg", caption: "bag/belly/box artwork © Amanda Bødker" }
            ]
        },

        {
            name: "ioulus: oddkin",
            slug: "ioulus-oddkin",
            date: "2021-03-05",
            catalog: "RHZ-004",
            bandcamp: { slug: "oddkin", albumId: "3710295318" },
            description: `
a new experience of time created bell jar
(2)-b focused on past and present
c relationships
dive drunk eyes of my reality
embellished mind-patterns i entangle
fast destiny in card collection and
great great sorrow
hill roads and bare drawers
i try not to-
judge myself_cmd shift s
knowing little do I know // knowing i cant fix u
love eats self love eats co star
mind blown and walking in clue of clay
narrow forms of kinships
on top of hallucinations
performing society structures
qt while sad listening to common coquis
remember to forget what I've been taught
surrounding myself with critters
tentacles of empathy
unite care now unite care
very
witches web
x
y x y cross my heart
zen and cu cynical
`,
            credits: `
Music by Julia Becker
Mastered by Emil Thomsen
Artwork and prints by Organs named they like you
Guitar on 'can't fix you' sampled from 'Vine 1' by Synd og Skam
'cmd shift s' is a cover of 'Lyse Nætter' by Alberte Winding and Aske Bentzon
`,
            images: [
                { src: "billeder/releases/oddkin.jpg", caption: "oddkin artwork © Organs named they like you" },
                { src: "billeder/releases/physical/oddkin-poster.jpg", caption: "oddkin poster © Mads Krue Bugge & Aria Leth Schütze" },
                { src: "billeder/artists/ioulus-oddkin.jpeg", caption: "ioulus © Aria Leth Schütze" }
            ],
            links: [
                { text: "video for oddkin on YouTube", url: "https://www.youtube.com/watch?v=0N-f7hVQ6Ak" }
            ]
        },

        {
            name: "Skarv: A Memory Like Any Other",
            slug: "skarv-a-memory-like-any-other",
            date: "2020-08-14",
            catalog: "RHZ-002",
            bandcamp: { slug: "a-memory-like-any-other", albumId: "3285666982" },
            description: `
'A Memory Like Any Other' is the first album by Skarv, moniker of composer and electronic musician Mads Krue Bugge.

Like the flowers growing through floors of forgotten concrete, 'A Memory Like Any Other' presents a view of human life as seen from the point of alienation. The music, driven by a constant pacing between the building up and tearing down of forms, becomes a continuous construction and destruction of the relatable. Consisting of seven digital structures, the album operates through timbral exploration and dynamic variation.

Each track is a figment of the architecture of industry; stripped of all ornaments and laid bare to reveal its functions. The album appears as a memory of a never-materialising future - one devoid of, yet shaped by human intent and interference.

The music is accompanied by a 250x250x2mm steel plate with engraved graphics by Skarv.
`,
            credits: `
Music and steel plate by Skarv
Mastered with Aria Leth Schütze
Photography by Aria Leth Schütze
48°38'35.8"N 20°13'04.8"E
`,
            images: [
                { src: "billeder/releases/a-memory-like-any-other.jpg", caption: "A Memory Like Any Other artwork © Aria Leth Schütze & Mads Krue Bugge" },
                { src: "billeder/releases/physical/amlao-steel1.jpg", caption: "A Memory Like Any Other steel plate © Mads Krue Bugge & Aria Leth Schütze" },
                { src: "billeder/artists/skarv-amlao.jpeg", caption: "Skarv © Aria Leth Schütze" }
            ]
        }

    ],


    // ------------------------------------------------------------
    // EVENTS
    // Ny event: kopier en eksisterende og sæt den øverst i listen.
    // date: ÅÅÅÅ-MM-DD (vises som DD.MM.ÅÅÅÅ)
    // artists: én pr. linje i listen
    // ------------------------------------------------------------
    events: {
        list: [
            { title: "Nina Liv 'Softwired' release", place: "Brønshøj Vandtårn", date: "2026-10-22", artists: ["Sara Frost", "Nina Liv"] },
            { title: "Markus Sollid 'Elastic Embrace' release", place: "Mayhem", date: "2026-09-24", artists: ["Margo Sanda", "Margos", "Markus Sollid"] },
            { title: "Alto Aria 'Ephemeral' release", place: "Alice", date: "2025-11-14", artists: ["Alto Aria", "Space Afrika"] },
            { title: "Nemo 'Blue is the color of infinity' release", place: "Harbo Bar", date: "2025-10-24", artists: ["Nemo"] },
            { title: "Margos 'End of Greatness' release", place: "Proton Records", date: "2025-09-27", artists: ["Margos"] },
            { title: "Skarv 'Polymer Veil' release", place: "Mayhem", date: "2024-11-23", artists: ["Skarv", "Ryong", "Soli City"] },
            { title: "Lau Andersson 'The Weeping Siege' release", place: "Mayhem", date: "2024-04-10", artists: ["Lau Andersson", "Ryong", "Scarpia", "Barbora Kovacova"] },
            { title: "Messell 'envelope follower' release", place: "Christianshavns Beboerhus", date: "2024-04-20", artists: ["Messell", "Heva Vaupel", "Nova Varnrable", "Grammar of Movement"] },
            { title: "Alto Aria 'Limerence' release", place: "Sum", date: "2024-02-23", artists: ["Alto Aria", "Lau Andersson", "Polly"] },
            { title: "Ingri Høyland 'Ode To Stone' release", place: "Mayhem", date: "2023-12-02", artists: ["Ingri Høyland", "Gel", "Pamela Angela"] },
            { title: "Irmgard 'Irmgard Irmgaard' release", place: "Proton Records", date: "2023-10-13", artists: ["Irmgard", "Ginte"] },
            { title: "'Hypersea' release", place: "Fitzroy", date: "2023-09-06", artists: ["ill", "Alto Aria", "Nova Varnrable", "Ryong"] },
            { title: "'Hypersea' release", place: "Christianshavns Beboerhus", date: "2023-09-01", artists: ["ill", "Skarv", "Ingri Høyland", "Ryong"] },
            { title: "ill 'íra' release", place: "Proton Records", date: "2023-05-05", artists: ["ill", "Asta Olivia Nordenhof"] },
            { title: "Polly 'Invitation' release", place: "Christianshavns Beboerhus", date: "2022-11-26", artists: ["Polly", "Nemo", "Viola Faber", "Helena Gao"] },
            { title: "Rhizomatic Extensions", place: "Mayhem", date: "2022-09-16", artists: ["Lucas Chikhieo", "Skarv", "Xenia Xamanek", "Lyra Valenza"] },
            { title: "Swell 'intimacy issues' release", place: "Flere Fugle", date: "2022-03-25", artists: ["Swell", "Irmgard"] },
            { title: "Øen x Rhizome", place: "Øen", date: "2020-09-11", artists: ["Alto Aria", "ioulus", "Ryong"] }
        ],
        images: [
            { src: "billeder/events/event-3.jpeg", caption: "Øen x Rhizome © Amanda Bødker" },
            { src: "billeder/events/softwired-release.jpg", caption: "Nina Liv, Softwired release © Aria Leth Schütze" },
            { src: "billeder/events/markus-sollid-release.jpg", caption: "Markus Sollid, Elastic Embrace release © Aria Leth Schütze" },
            { src: "billeder/events/event-5.jpg", caption: "Space Afrika, Ephemeral release © Aria Leth Schütze" },
            { src: "billeder/events/event-6.jpeg", caption: "Alto Aria, Ephemeral © Laura Cecilie Krogtoft" },
            { src: "billeder/events/event-8.jpeg", caption: "Skarv, envelope follower release © Aria Leth Schütze" },
            { src: "billeder/events/event-7.jpeg", caption: "Ingri Høyland & Ida Urd, Ode To Stone release © Aria Leth Schütze" },
            { src: "billeder/events/event-9.jpeg", caption: "Nova Varnrable, Hypersea release © Aria Leth Schütze" },
            { src: "billeder/events/event-10.jpeg", caption: "Rhizomatic Extensions © Aria Leth Schütze" },
            { src: "billeder/events/event-1.jpeg", caption: "Øen x Rhizome © Amanda Bødker" },
            { src: "billeder/events/event-2.jpeg", caption: "Ryong, Øen x Rhizome © Aria Leth Schütze" },
            { src: "billeder/events/event-4.jpeg", caption: "Øen x Rhizome © Aria Leth Schütze" }
        ]
    },


    // ------------------------------------------------------------
    // ABOUT
    // ------------------------------------------------------------
    about: {
        text: `
<strong>about</strong>
Founded in the Spring of 2020 by <a href="https://altoaria.com" target="_blank">Aria Leth Schütze</a> (they/them) and <a href="https://www.madskruebugge.dk" target="_blank">Mads Krue Bugge</a> (he/him), Rhizome is a Copenhagen-based record label dealing in experimental electronic music and alternative release formats, exploring the boundaries of sound and form.

<a href="mailto:rhizomecph@gmail.com" target="_blank">rhizomecph@gmail.com</a>
<a href="https://www.rhz000.bandcamp.com" target="_blank">bandcamp</a>
<a href="https://soundcloud.com/rhz000" target="_blank">soundcloud</a>
<a href="https://www.instagram.com/rhz000" target="_blank">instagram</a>
`,
        images: [
            { src: "billeder/rhz2025.jpeg", caption: "© Mads Krue Bugge" }
        ]
    }

};
