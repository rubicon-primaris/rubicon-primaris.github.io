// Banco de preguntas de las Pruebas del Saber.
// Los datos son una copia compacta del saber de /genealogia y /mapa
// (si se actualiza el lore alli, revisar tambien este banco).

// ---- LEGIONES ----
// [id, nombre, leal?, primarca, mundo, nombre previo, destino del primarca, dios del caos]
const LEGIONS = [
  ['I', 'Ángeles Oscuros', true, 'Lion El’Jonson', 'Caliban', null, 'Retornado', null],
  ['III', 'Hijos del Emperador', false, 'Fulgrim', 'Chemos', null, 'Príncipe demonio', 'Slaanesh'],
  ['IV', 'Guerreros de Hierro', false, 'Perturabo', 'Olympia', null, 'Príncipe demonio', null],
  ['V', 'Cicatrices Blancas', true, 'Jaghatai Khan', 'Chogoris', null, 'Desaparecido', null],
  ['VI', 'Lobos Espaciales', true, 'Leman Russ', 'Fenris', null, 'Desaparecido', null],
  ['VII', 'Puños Imperiales', true, 'Rogal Dorn', 'Terra', null, 'Muerto en combate', null],
  ['VIII', 'Señores de la Noche', false, 'Konrad Curze', 'Nostramo', null, 'Asesinado', null],
  ['IX', 'Ángeles Sangrientos', true, 'Sanguinius', 'Baal', null, 'Mártir de Terra', null],
  ['X', 'Manos de Hierro', true, 'Ferrus Manus', 'Medusa', null, 'Muerto en Istvaan V', null],
  ['XII', 'Devoradores de Mundos', false, 'Angron', 'Nuceria', 'Sabuesos de Guerra', 'Príncipe demonio', 'Khorne'],
  ['XIII', 'Ultramarines', true, 'Roboute Guilliman', 'Macragge', null, 'Retornado', null],
  ['XIV', 'Guardia de la Muerte', false, 'Mortarion', 'Barbarus', 'Incursores del Crepúsculo', 'Príncipe demonio', 'Nurgle'],
  ['XV', 'Mil Hijos', false, 'Magnus el Rojo', 'Prospero', null, 'Príncipe demonio', 'Tzeentch'],
  ['XVI', 'Hijos de Horus', false, 'Horus', 'Cthonia', 'Lobos Lunares', 'Muerto', null],
  ['XVII', 'Portadores de la Palabra', false, 'Lorgar', 'Colchis', 'Heraldos Imperiales', 'Príncipe demonio', null],
  ['XVIII', 'Salamandras', true, 'Vulkan', 'Nocturne', null, 'Desaparecido', null],
  ['XIX', 'Guardia del Cuervo', true, 'Corvus Corax', 'Deliverance', null, 'Desaparecido', null],
  ['XX', 'Legión Alfa', false, 'Alpharius Omegon', 'Desconocido', null, 'Incierto', null]
].map(([id, name, loyal, primarch, world, prev, fate, god]) => ({ id, name, loyal, primarch, world, prev, fate, god }))

// ---- LINAJES (capitulos sucesores por legion leal) ----
const LINEAGES = {
  'Ángeles Oscuros': ['Á. de la Absolución', 'Á. de la Redención', 'Á. de la Venganza', 'Consagradores', 'Discípulos de Caliban', 'Guardianes del Pacto', 'Ángeles del Desafío'],
  'Cicatrices Blancas': ['Señores de la Tormenta', 'Saqueadores', 'Destructores', 'Merodeadores', 'Halcones Solares'],
  'Lobos Espaciales': ['Hermanos del Lobo'],
  'Puños Imperiales': ['Puños Carmesíes', 'Templarios Negros', 'Excoriadores', 'Puños Ejemplares', 'Bebedores de Almas', 'Verdugos', 'Martillos de Dorn', 'Caballeros de Hierro', 'Retribuidores'],
  'Ángeles Sangrientos': ['Desgarradores de Carne', 'Á. Encarnadinos', 'Á. Sanguinos', 'Á. Bermellón', 'Bebedores de Sangre', 'Devoradores de Carne', 'Lamentadores'],
  'Manos de Hierro': ['Garras Rojas', 'Zarpas de Bronce', 'Hijos de Medusa', 'Señores de Hierro'],
  'Ultramarines': ['Novamarines', 'Capítulo Génesis', 'Águilas de la Perdición', 'Mortifactores', 'Cónsules Negros', 'Cónsules Blancos', 'Pretores de Orfeo', 'Grifos Aulladores', 'Capítulo Aurora', 'Hijos de Orar', 'Guadañas del Emperador', 'Águilas Plateadas', 'Libadores', 'Marines Errantes'],
  'Salamandras': ['Dragones Negros'],
  'Guardia del Cuervo': ['Guardia Negra', 'Injuriadores', 'Raptores']
}

// ---- COLORES por capitulo (hex del diagrama) ----
const COLORS = {
  'Ángeles Oscuros': ['#25523b'], 'Á. de la Absolución': ['#d8cfae'], 'Á. de la Redención': ['#8a1f1f', '#111111'],
  'Cicatrices Blancas': ['#e8e6e0'], 'Señores de la Tormenta': ['#2a4a8a', '#e8e6e0'],
  'Lobos Espaciales': ['#6b7f8f'], 'Puños Imperiales': ['#c9a227'], 'Puños Carmesíes': ['#1c2a5a'],
  'Templarios Negros': ['#111111'], 'Bebedores de Almas': ['#5a2a6a'],
  'Ángeles Sangrientos': ['#8a1f1f'], 'Lamentadores': ['#e0b31f'],
  'Manos de Hierro': ['#111111'], 'Zarpas de Bronce': ['#b87333', '#111111'],
  'Ultramarines': ['#1c3a8a'], 'Novamarines': ['#1c3a8a', '#e8e6e0'], 'Capítulo Génesis': ['#8a1f1f', '#1c3a8a'],
  'Grifos Aulladores': ['#e0b31f', '#8a1f1f'], 'Guadañas del Emperador': ['#e0b31f', '#111111'],
  'Salamandras': ['#2a7a4a'], 'Dragones Negros': ['#111111'],
  'Guardia del Cuervo': ['#111111'], 'Raptores': ['#4a5a3a'],
  'Caballeros Grises': ['#8a8f96', '#c8c6c0'], 'Minotauros': ['#b87333'], 'Cuervos Sangrientos': ['#7a2a2a', '#d8cfae'],
  'Hijos del Emperador': ['#5a2a6a', '#c9a227'], 'Guerreros de Hierro': ['#8a8f96', '#e0b31f'],
  'Señores de la Noche': ['#1c2a5a'], 'Devoradores de Mundos': ['#8a1f1f', '#b87333'],
  'Guardia de la Muerte': ['#b8b4a8'], 'Mil Hijos': ['#1c3a8a', '#c9a227'], 'Hijos de Horus': ['#3a5a4a'],
  'Legión Negra': ['#111111', '#c9a227'], 'Portadores de la Palabra': ['#7a2a2a'], 'Legión Alfa': ['#2a6a6a', '#4a7a3a']
}

// ---- Pintura Citadel principal por capitulo ----
const PAINTS = {
  'Ángeles Oscuros': 'Caliban Green', 'Ultramarines': 'Macragge Blue', 'Ángeles Sangrientos': 'Mephiston Red',
  'Puños Imperiales': 'Averland Sunset', 'Puños Carmesíes': 'Kantor Blue', 'Templarios Negros': 'Abaddon Black',
  'Lobos Espaciales': 'Russ Grey', 'Salamandras': 'Warpstone Glow', 'Cicatrices Blancas': 'White Scar',
  'Hijos del Emperador': 'Phoenician Purple', 'Señores de la Noche': 'Night Lords Blue',
  'Portadores de la Palabra': 'Word Bearers Red', 'Mil Hijos': 'Thousand Sons Blue',
  'Hijos de Horus': 'Sons of Horus Green', 'Legión Alfa': 'Sotek Green', 'Devoradores de Mundos': 'Khorne Red',
  'Caballeros Grises': 'Leadbelcher', 'Cráneos Plateados': 'Runefang Steel', 'Lamentadores': 'Averland Sunset',
  'Raptores': 'Death World Forest', 'Guardia de la Muerte': 'Rakarth Flesh'
}

// ---- Señores de capitulo / de la guerra ----
const MASTERS = {
  'Ángeles Oscuros': 'Azrael', 'Cicatrices Blancas': 'Jubal Khan', 'Lobos Espaciales': 'Logan Grimnar',
  'Ángeles Sangrientos': 'Comandante Dante', 'Manos de Hierro': 'Kardan Stronos',
  'Ultramarines': 'Marneus Calgar', 'Salamandras': 'Tu’Shan', 'Guardia del Cuervo': 'Aethon Shaan',
  'Puños Carmesíes': 'Pedro Kantor', 'Templarios Negros': 'Helbrecht', 'Desgarradores de Carne': 'Gabriel Seth',
  'Caballeros Grises': 'Kaldor Draigo', 'Minotauros': 'Asterion Moloc',
  'Devoradores de Mundos': 'Angron', 'Guardia de la Muerte': 'Mortarion', 'Mil Hijos': 'Magnus el Rojo',
  'Legión Negra': 'Abaddon el Saqueador'
}
// señores de capitulos oscuros: solo para el nivel extremo
const MASTERS_X = {
  'Puños Imperiales': 'Gregor Dessian', 'Escorpiones Rojos': 'Carab Culln',
  'Cuervos Sangrientos': 'Gabriel Angelos', 'Guadañas del Emperador': 'Thracian',
  'Lamentadores': 'Malakim Phoros'
}

// ---- Mundos y regiones del mapa ----
// [nombre, que es, controlador, segmentum]
const WORLDS = [
  ['Sagrada Terra', 'Mundo Trono del Imperio', 'Imperium', 'Solar'],
  ['Marte', 'Mundo Forja primigenio', 'Adeptus Mechanicus', 'Solar'],
  ['Cadia', 'Mundo Fortaleza destruido en la 13ª Cruzada Negra', 'Imperium (perdido)', 'Obscurus'],
  ['Vigilus', 'Guardián del Pasaje de Nachmund', 'Imperium', 'Obscurus'],
  ['Armageddon', 'Mundo Colmena en guerra perpetua contra los orkos', 'Imperium', 'Solar'],
  ['Catachan', 'El Mundo Letal más famoso del Imperio', 'Imperium', 'Ultima'],
  ['Necromunda', 'Mundo Colmena industrial', 'Imperium', 'Solar'],
  ['Krieg', 'Mundo devastado, cuna de los Korps de la Muerte', 'Imperium', 'Solar'],
  ['Prospero', 'Mundo muerto, arrasado por los Lobos Espaciales', 'Abandonado', 'Solar'],
  ['Badab', 'Epicentro de la rebelión del Tirano', 'Renegados', 'Ultima'],
  ['Imperio T’au', 'Dominio xenos en expansión', 'T’au', 'Ultima'],
  ['Imperio de Charadon', 'El imperio orko más antiguo', 'Orkos', 'Ultima'],
  ['Golgotha', 'Mundo desértico donde Ghazghkull capturó a Yarrick', 'Orkos', 'Ultima'],
  ['Dinastía Sautekh', 'La dinastía necrona más agresiva', 'Necrones', 'Ultima'],
  ['El Maelstrom', 'Tormenta warp, feudo de los Corsarios Rojos', 'Caos', 'Ultima'],
  ['Ojo del Terror', 'Tormenta warp, refugio de las legiones traidoras', 'Caos', 'Obscurus'],
  ['Estrellas Azote', 'Feudo de la Guardia de la Muerte en el espacio real', 'Caos — Nurgle', 'Ultima'],
  ['Ophelia VII', 'Mundo Cardenalicio del Culto Imperial', 'Eclesiarcado', 'Tempestus'],
  ['Bakka', 'Mundo Forja naval de la Flota Tempestus', 'Adeptus Mechanicus', 'Tempestus'],
  ['Hydraphur', 'Fondeadero de la Flota Pacificus', 'Imperium', 'Pacificus']
].map(([n, what, fac, seg]) => ({ n, what, fac, seg }))

// mundo capitular → capitulo
const FORTRESS = {
  Macragge: 'Ultramarines', Baal: 'Ángeles Sangrientos', Fenris: 'Lobos Espaciales',
  Nocturne: 'Salamandras', Medusa: 'Manos de Hierro', Chogoris: 'Cicatrices Blancas',
  Deliverance: 'Guardia del Cuervo', 'Rynn’s World': 'Puños Carmesíes'
}


// ---- DINASTÍAS NECRONAS (copia compacta de /necrones) ----
// [nombre, lema, faerón, mundo corona, esquema de color, swatches, personaje]
const NEC = [
  ['Szarekhan', 'Orgullosa preeminencia', 'Szarekh, el Rey Silente', null, 'Verde oscuro con hueso y oro', ['#1f4a2c', '#d9cfae', '#b8912f'], 'Szarekh, el Rey Silente'],
  ['Sautekh', 'Legiones del Señor de la Tormenta', 'Imotekh, el Señor de la Tormenta', 'Mandrágora', 'Plata con bronce y brillo verde', ['#8f8f93', '#5a4a2e', '#3de08a'], 'Nemesor Zahndrekh'],
  ['Nephrekh', 'Guerreros de las estrellas doradas', 'Sylphek', 'Aryand', 'Oro Retributor con turquesa', ['#c9a227', '#e8d27a', '#2f9e8a'], 'Sylphek'],
  ['Nihilakh', 'Destinados a conquistar', null, 'Gheden', 'Óxido Nihilakh (turquesa) con oro', ['#4fa39a', '#c7a24a', '#1b3a33'], 'Trazyn el Infinito'],
  ['Mephrit', 'Ejecutores solares', null, null, 'Metal negro con naranja solar', ['#2a2a2e', '#e0742a', '#8a5a2b'], 'Zarathusa el Inefable'],
  ['Novokh', 'Carniceros salpicados de sangre', 'Galmakh', 'Dhol VI', 'Rojo Khorne con plata', ['#7a1c1c', '#b3262b', '#9a9a9e'], 'Galmakh']
].map(([n, sub, ruler, world, col, sw, char]) => ({ n, sub, ruler, world, col, sw, char }))

// ---- KLANES ORKOS (copia compacta de /orkos) ----
// [nombre, lema, "lo suyo", esquema de color, swatches, personaje/unidad asociada]
const ORK = [
  ['Goffs', 'Los más grandes y los más brutos', 'El cuerpo a cuerpo y pegar más fuerte que nadie', 'Negro con cuadros blancos y negros', ['#111111', '#d8d8d8'], 'Ghazghkull Thraka'],
  ['Evil Sunz', '¡El rojo va más rápido!', 'Kamiones, motos y cualquier cosa con motor', 'Rojo', ['#e0382a', '#ffb300'], 'Los motoristas y bombarderos'],
  ['Bad Moons', 'Los más ricos y los más ruidosos', 'Dakka: nunca hay suficiente dakka', 'Amarillo con lunas negras', ['#f2c21b', '#111111'], 'Los dientes que crecen más rápido'],
  ['Deathskulls', 'Saqueadores con suerte', 'Robar cualquier cosa que no esté clavada', 'Azul', ['#3b7bd4', '#d8d8d8'], 'Los saqueadores y mekánikos chatarreros'],
  ['Blood Axes', 'Demasiado listos para ser de fiar', 'Táktika: emboscadas, kamuflaje y retiradas', 'Camuflaje verde oliva', ['#6b7d3c', '#3f4a24'], 'Los komandos'],
  ['Snakebites', 'Salvajes de la vieja escuela', 'Squigs, jabalís de guerra y tradición', 'Marrón y tonos terrosos', ['#8a5a2b', '#d9cfae'], 'Los criadores de bestias'],
  ['Freebooterz', 'Piratas del vacío', 'Saqueo a sueldo y flotas de pecios', 'Lo que roban (sin color propio)', ['#2c9e8c', '#f2c21b'], 'Los kapitanes piratas']
].map(([n, sub, thing, col, sw, who]) => ({ n, sub, thing, col, sw, who }))

const SEGMENTUMS = ['Solar', 'Obscurus', 'Ultima', 'Tempestus', 'Pacificus']
const GODS = ['Khorne', 'Nurgle', 'Tzeentch', 'Slaanesh']

// ---------------------------------------------------------------
const rnd = (arr) => arr[Math.floor(Math.random() * arr.length)]
const shuffle = (arr) => {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
const pickOthers = (pool, exclude, n) => shuffle([...new Set(pool)].filter(x => x !== exclude)).slice(0, n)

// Q(categoria, dificultad f/m/d, pregunta, opciones-incorrectas, correcta, explicacion, swatches?)
const Q = (cat, diff, q, wrong, ok, exp, sw) => ({ cat, diff, q, opts: shuffle([ok, ...wrong]), ok, exp, sw })

export function buildPool () {
  const P = []
  const loyal = LEGIONS.filter(l => l.loyal)
  const traitor = LEGIONS.filter(l => !l.loyal)
  const primarchs = LEGIONS.map(l => l.primarch)
  const worlds = LEGIONS.map(l => l.world).filter(w => w !== 'Desconocido')

  // ---- ASTARTES ----
  loyal.forEach(l => {
    P.push(Q('astartes', 'f', `¿Qué primarca forjó a la legión ${l.name}?`,
      pickOthers(primarchs, l.primarch, 3), l.primarch,
      `${l.primarch} es el primarca de la ${l.id} Legión, ${l.name}.`))
    P.push(Q('astartes', 'm', `¿Cuál es el mundo natal de los ${l.name}?`,
      pickOthers(worlds, l.world, 3), l.world,
      `Los ${l.name} reclutan en ${l.world}.`))
  })
  // linajes: ¿de que legion desciende X?
  const legNames = Object.keys(LINEAGES)
  for (const leg of legNames) {
    for (const ch of LINEAGES[leg]) {
      const hard = ['Lamentadores', 'Dragones Negros', 'Halcones Solares', 'Hijos de Medusa', 'Marines Errantes', 'Grifos Aulladores', 'Bebedores de Almas'].includes(ch)
      P.push(Q('astartes', hard ? 'd' : 'm', `¿De qué linaje desciende el capítulo ${ch}?`,
        pickOthers(legNames, leg, 3), leg,
        `Los ${ch} llevan la semilla genética de los ${leg}.`))
    }
  }
  // ¿cual NO desciende? (trampa)
  for (const leg of ['Puños Imperiales', 'Ultramarines', 'Ángeles Sangrientos', 'Ángeles Oscuros']) {
    const propios = shuffle(LINEAGES[leg]).slice(0, 3)
    const otro = rnd(LINEAGES[rnd(legNames.filter(x => x !== leg))])
    P.push(Q('astartes', 'd', `¿Cuál de estos capítulos NO desciende de los ${leg}?`,
      propios, otro,
      `${otro} pertenece a otro linaje; los demás son hijos de los ${leg}.`))
  }
  // señores del capitulo
  const masterNames = Object.values(MASTERS)
  for (const ch in MASTERS) {
    const famous = ['Ultramarines', 'Ángeles Sangrientos', 'Lobos Espaciales'].includes(ch)
    const isChaos = ['Devoradores de Mundos', 'Guardia de la Muerte', 'Mil Hijos', 'Legión Negra'].includes(ch)
    P.push(Q(isChaos ? 'caos' : 'astartes', famous ? 'f' : 'm',
      isChaos ? `¿Quién es el Señor de la Guerra de ${ch === 'Legión Negra' ? 'la' : 'los'} ${ch}?` : `¿Quién es el Señor del Capítulo de los ${ch}?`,
      pickOthers(masterNames, MASTERS[ch], 3), MASTERS[ch],
      `${MASTERS[ch]} lidera a los ${ch}.`))
  }
  // colores → capitulo (con muestras visuales)
  const colorChaps = Object.keys(COLORS)
  for (const ch of ['Novamarines', 'Capítulo Génesis', 'Grifos Aulladores', 'Guadañas del Emperador', 'Zarpas de Bronce', 'Señores de la Tormenta', 'Cuervos Sangrientos', 'Á. de la Redención', 'Hijos del Emperador', 'Legión Negra', 'Legión Alfa', 'Guerreros de Hierro']) {
    P.push(Q('astartes', 'm', '¿Qué capítulo o legión luce estos colores?',
      pickOthers(colorChaps, ch, 3), ch,
      `Esos son los colores de heráldica de ${ch}.`, COLORS[ch]))
  }
  // pintura Citadel
  const paintNames = [...new Set(Object.values(PAINTS))]
  for (const ch in PAINTS) {
    P.push(Q('astartes', 'd', `Según el catálogo Citadel, ¿con qué pintura se pinta el color principal de ${ch}?`,
      pickOthers(paintNames, PAINTS[ch], 3), PAINTS[ch],
      `El color de ${ch} es ${PAINTS[ch]}.`))
  }
  // trampas Astartes
  P.push(Q('astartes', 'f', '¿Quién escribió el Codex Astartes?',
    ['Rogal Dorn', 'El Emperador', 'Malcador el Sigilita'], 'Roboute Guilliman',
    'Guilliman lo escribió tras la Herejía y dividió las legiones en capítulos.'))
  P.push(Q('astartes', 'd', '¿Qué se sabe de las legiones II y XI?',
    ['Fueron absorbidas por los Ultramarines... y nada más', 'Cayeron al Caos en la Herejía', 'Custodian el Trono Dorado'],
    'Nada: sus registros fueron expurgados de los archivos',
    'Toda mención fue borrada. Preguntar es peligroso. (Lo de los Ultramarines es solo un rumor.)'))
  P.push(Q('astartes', 'd', '¿De qué legión descienden los Caballeros Grises?',
    ['Ultramarines', 'Ángeles Oscuros', 'Puños Imperiales'],
    'De ninguna: se dice que su semilla procede del propio Emperador',
    'Su origen es un secreto del Ordo Malleus, ajeno a las veinte legiones.'))
  P.push(Q('astartes', 'd', '¿Son los Adeptus Custodes un capítulo de marines espaciales?',
    ['Sí, el primero de todos', 'Sí, descendientes de los Puños Imperiales', 'Sí, aunque rechazan el Codex'],
    'No: son una creación única del propio Emperador',
    'Cada Custodio es una obra maestra individual, superior a cualquier Astartes.'))
  P.push(Q('astartes', 'd', '¿Cuántas legiones marcharon en la Gran Cruzada?',
    ['18', '12', '9'], '20',
    '20, aunque solo 18 permanecen en los archivos: la II y la XI fueron expurgadas.'))
  P.push(Q('astartes', 'd', '¿Cuál de estos capítulos NO existe en los archivos imperiales?',
    ['Marines Malevolentes', 'Fantasmas Estelares', 'Excoriadores'], 'Lanzas de Vhal',
    'Las Lanzas de Vhal jamás existieron. Los otros tres, por improbable que parezca, sí.'))
  P.push(Q('astartes', 'd', '¿De quién se rumorea que descienden los Cuervos Sangrientos?',
    ['De la Guardia del Cuervo', 'De los Ángeles Sangrientos', 'De los Ultramarines'], 'De los Mil Hijos',
    'Su sed de conocimiento alimenta el rumor de que su semilla es de la XV Legión.'))
  P.push(Q('astartes', 'd', '¿Qué capítulo fue reconstruido con mayoría Primaris tras ser casi exterminado en Sotha?',
    ['Puños Carmesíes', 'Lamentadores', 'Novamarines'], 'Guadañas del Emperador',
    'Los tiránidos los aniquilaron casi por completo; la Fundación Ultima los reconstruyó.'))
  P.push(Q('astartes', 'm', '¿Qué capítulo rechazó dividirse tras el Codex Astartes y conserva el espíritu de legión?',
    ['Templarios Negros', 'Puños Imperiales', 'Ángeles Oscuros'], 'Lobos Espaciales',
    'Los Lobos de Fenris solo aceptaron un sucesor, y acabó en tragedia.'))

  // ---- ASTARTES · EXTREMO ----
  const allMastersX = [...Object.values(MASTERS), ...Object.values(MASTERS_X)]
  for (const ch in MASTERS_X) {
    P.push(Q('astartes', 'x', `¿Quién es el Señor del Capítulo de los ${ch}?`,
      pickOthers(allMastersX, MASTERS_X[ch], 3), MASTERS_X[ch],
      `${MASTERS_X[ch]} lidera a los ${ch}. Pocos archivos lo recogen.`))
  }
  P.push(Q('astartes', 'x', '¿Qué capítulo pertenece a la 21ª Fundación, la "Fundación Maldita"?',
    ['Puños Carmesíes', 'Novamarines', 'Raptores'], 'Lamentadores',
    'Los Lamentadores nacieron malditos por la fortuna; los Dragones Negros también son de la 21ª.'))
  P.push(Q('astartes', 'x', '¿Qué sucesor de los Lobos Espaciales fue disuelto por la degeneración de su semilla?',
    ['Los Merodeadores', 'Los Destructores', 'Los Verdugos'], 'Los Hermanos del Lobo',
    'El único capítulo hermano de los Lobos; su semilla inestable los condenó.'))
  P.push(Q('astartes', 'x', '¿Qué capítulo de las Cicatrices Blancas fue aniquilado y borrado de los registros?',
    ['Los Saqueadores', 'Los Merodeadores', 'Los Halcones Solares'], 'Los Destructores',
    'Aniquilados en campaña; su nombre fue retirado de los registros.'))
  P.push(Q('astartes', 'x', '¿Qué capítulo nació de un cisma tecnológico dentro de las Manos de Hierro en M36?',
    ['Las Garras Rojas', 'Las Zarpas de Bronce', 'Los Señores de Hierro'], 'Los Hijos de Medusa',
    'Un cisma sobre la relación entre carne y máquina los separó de Medusa.'))
  P.push(Q('astartes', 'x', '¿Qué dos capítulos de Ultramar tienen un linaje solo "probable"?',
    ['Novamarines y Libadores', 'Mortifactores y Capítulo Aurora', 'Cónsules Negros y Cónsules Blancos'],
    'Grifos Aulladores y Marines Errantes',
    'Sus registros de fundación se perdieron; el linaje de Guilliman se les supone.'))
  P.push(Q('astartes', 'x', '¿Qué capítulo expía el dolor de Dorn flagelando su propia carne?',
    ['Los Verdugos', 'Los Puños Ejemplares', 'Los Retribuidores'], 'Los Excoriadores',
    'Herederos del sufrimiento de Dorn: la penitencia es su credo.'))
  P.push(Q('astartes', 'x', '¿Cuál de estos capítulos NO viste de negro?',
    ['Templarios Negros', 'Consagradores', 'Dragones Negros'], 'Guardianes del Pacto',
    'Los Guardianes del Pacto visten de gris; los otros tres, Abaddon Black.'))
  P.push(Q('astartes', 'x', '¿Qué complica el Rubicón Primaris a los Exorcistas?',
    ['Su semilla mutada', 'Su voto de pobreza', 'La prohibición del Ordo Xenos'],
    'Sus ritos de iniciación por posesión',
    'Cada Exorcista sobrevive a una posesión ritual; nadie sabe cómo afectaría a un Primaris.'))
  P.push(Q('astartes', 'x', '¿Qué capítulo no entra en batalla sin leer antes los presagios?',
    ['Los Exorcistas', 'Los Fantasmas Estelares', 'Los Mortifactores'], 'Los Cráneos Plateados',
    'Sus augures leen los presagios antes de cada campaña. Sin presagio, no hay guerra.'))
  P.push(Q('astartes', 'x', '¿Qué capítulo surge del vacío exterior y practica el canibalismo ritual?',
    ['Los Devoradores de Carne', 'Los Injuriadores', 'Los Marines Malevolentes'], 'Los Carcharodons',
    'Los Tiburones del Vacío aparecen sin aviso, silenciosos, y vuelven a la oscuridad.'))
  P.push(Q('astartes', 'x', '¿Qué capítulo actúa como arma de choque del Alto Senado de Terra, incluso contra otros Astartes?',
    ['Los Carcharodons', 'Los Escorpiones Rojos', 'Los Verdugos'], 'Los Minotauros',
    'El Alto Senado los desata cuando un capítulo se desvía. No hacen preguntas.'))

  // ---- CAOS ----
  traitor.forEach(l => {
    P.push(Q('caos', 'f', `¿Qué primarca lideraba a los ${l.name}?`,
      pickOthers(primarchs, l.primarch, 3), l.primarch,
      `${l.primarch} llevó a la ${l.id} Legión a la traición.`))
    P.push(Q('caos', 'm', `¿Cuál fue el destino de ${l.primarch}?`,
      pickOthers([...new Set(LEGIONS.map(x => x.fate))], l.fate, 3), l.fate,
      `${l.primarch}: ${l.fate}.`))
    if (l.prev) {
      P.push(Q('caos', 'd', `¿Cómo se llamaba la legión ${l.name} antes de la Herejía?`,
        pickOthers(['Sabuesos de Guerra', 'Incursores del Crepúsculo', 'Lobos Lunares', 'Heraldos Imperiales', 'Guerreros del Alba', 'Espadas del León'], l.prev, 3), l.prev,
        `Antes de caer se llamaban ${l.prev}.`))
    }
    if (l.god) {
      P.push(Q('caos', 'm', `¿A qué Dios del Caos se entregaron los ${l.name}?`,
        GODS.filter(g => g !== l.god), l.god,
        `Los ${l.name} sirven a ${l.god}.`))
    }
  })
  for (let i = 0; i < 4; i++) {
    const leal = rnd(loyal), t3 = shuffle(traitor).slice(0, 3).map(x => x.name)
    P.push(Q('caos', 'f', '¿Cuál de estas legiones se mantuvo LEAL al Emperador?',
      t3, leal.name, `Los ${leal.name} nunca traicionaron. Las otras tres cayeron al Caos.`))
    const trai = rnd(traitor), l3 = shuffle(loyal).slice(0, 3).map(x => x.name)
    P.push(Q('caos', 'f', '¿Cuál de estas legiones TRAICIONÓ al Emperador?',
      l3, trai.name, `Los ${trai.name} siguieron a Horus. Las otras tres son leales.`))
  }
  P.push(Q('caos', 'f', '¿En qué se convirtieron los Hijos de Horus tras la muerte de su primarca?',
    ['Los Corsarios Rojos', 'La Matanza Carmesí', 'Los Portadores de la Palabra'], 'La Legión Negra',
    'Abaddon los rebautizó como Legión Negra y destruyó el cuerpo clonado de Horus.'))
  P.push(Q('caos', 'd', '¿Qué banda renegada nació del capítulo de las Garras Astrales?',
    ['La Legión Negra', 'La Matanza Carmesí', 'Los Hijos de la Malicia'], 'Los Corsarios Rojos',
    'Tras perder la Guerra de Badab, Lufgt Huron renació en el Maelstrom como Huron Blackheart.'))
  P.push(Q('caos', 'd', '¿Qué capítulo leal se convirtió en la Matanza Carmesí?',
    ['Garras Astrales', 'Hijos de la Venganza', 'Bebedores de Almas'], 'Sables Carmesíes',
    'Purgaron un mundo entero sin saber que las voces que oían eran demonios.'))
  P.push(Q('caos', 'd', '¿Por qué traicionó la Legión Alfa?',
    ['Por la gloria de Horus', 'Por devoción a Tzeentch', 'Por venganza contra Dorn'],
    'Nadie lo sabe con certeza; quizá ni siquiera sean traidores',
    'Maestros del engaño: ni el Imperio ni el Caos conocen su verdadero juego.'))
  P.push(Q('caos', 'd', '¿Qué legión fue la PRIMERA en caer al Caos?',
    ['Hijos de Horus', 'Devoradores de Mundos', 'Mil Hijos'], 'Portadores de la Palabra',
    'La fe desmedida de Lorgar encontró en el Caos los dioses que el Emperador le negó.'))
  P.push(Q('caos', 'm', '¿Quién guarda el trono vacío de Leman Russ en el Colmillo?',
    ['Los Hermanos del Lobo', 'Los Custodios', 'Nadie: fue destruido'], 'Los Lobos Espaciales',
    'Russ partió hacia el Ojo del Terror; sus hijos aún lo esperan.'))
  P.push(Q('caos', 'd', '¿Quién decapitó a Ferrus Manus en Istvaan V?',
    ['Horus', 'Angron', 'Perturabo'], 'Fulgrim',
    'Su hermano más querido. Las Manos de Hierro jamás lo han perdonado.'))
  P.push(Q('caos', 'd', '¿Quién acabó con la vida de Konrad Curze?',
    ['Rogal Dorn', 'Un Custodio del Emperador', 'Sus propios hijos'], 'La asesina imperial M’Shen',
    'Curze aceptó su muerte como prueba final de que el terror engendra justicia.'))
  P.push(Q('caos', 'd', '¿Qué hechicero redujo a los Mil Hijos a polvo dentro de sus armaduras?',
    ['Magnus el Rojo', 'Kairos Fateweaver', 'Erebus'], 'Ahriman',
    'La Rubrica de Ahriman quiso salvarlos de la mutación... y los condenó.'))

  // ---- CAOS · EXTREMO ----
  P.push(Q('caos', 'x', '¿Quiénes lideran a los Portadores de la Palabra?',
    ['Lorgar y Argel Tal', 'Ahriman y Amon', 'Typhus y Mortarion'], 'Erebus y Kor Phaeron',
    'Los dos arquitectos de la Herejía; Lorgar medita en Sicarus desde hace milenios.'))
  P.push(Q('caos', 'x', '¿Desde qué fortaleza-mundo forja Perturabo sus máquinas de guerra?',
    ['Sicarus', 'Barbarus', 'Cthonia'], 'Medrengard',
    'Un mundo-fortaleza del Ojo del Terror, entre fosos y murallas sin fin.'))
  P.push(Q('caos', 'x', '¿En qué mundo-demonio medita Lorgar escribiendo el credo del Caos?',
    ['Medrengard', 'El Planeta de los Hechiceros', 'Nuceria'], 'Sicarus',
    'El primer hereje lleva milenios sin salir de su templo.'))
  P.push(Q('caos', 'x', '¿Sobre qué mundo muerto flota el Planeta de los Hechiceros?',
    ['Barbarus', 'Colchis', 'Nostramo'], 'Prospero',
    'Magnus lo ancló sobre las ruinas de cristal de su antiguo hogar.'))
  P.push(Q('caos', 'x', '¿Cuándo se libró la Guerra de Badab?',
    ['999.M41', '444.M40', '013.M42'], '901–912.M41',
    'Once años de guerra entre capítulos hermanos por la rebelión del Tirano.'))
  P.push(Q('caos', 'x', '¿En qué año cayeron los Sables Carmesíes al Caos?',
    ['999.M41', '901.M41', '745.M40'], '926.M41',
    'Purgaron un mundo guiados por voces demoníacas y nacieron como la Matanza Carmesí.'))
  P.push(Q('caos', 'x', '¿Qué adoran los Hijos de la Malicia?',
    ['A Slaanesh', 'Al Emperador corrompido', 'A los Cuatro por igual'],
    'A una potestad oscura que odia al propio Caos',
    'Excomulgados que sirven a un poder renegado incluso entre los Dioses Oscuros.'))
  P.push(Q('caos', 'x', '¿Qué significa que el primarca de la XX Legión fuera "Alpharius Omegon"?',
    ['Que cambió de nombre tras la Herejía', 'Que era un demonio disfrazado', 'Que nunca existió'],
    'Que eran dos gemelos compartiendo una sola identidad',
    'Dos cuerpos y un nombre. Uno murió... ¿o los dos? Nadie lo sabe.'))
  P.push(Q('caos', 'x', '¿Cómo mataron los Guerreros de Hierro al planeta Tallarn?',
    ['Con un cañón cíclico', 'Hundiendo sus colmenas', 'Con la Plaga del Destructor'],
    'Con un bombardeo viral',
    'La superficie murió; la batalla siguió bajo blindaje, la mayor guerra de tanques de la historia.'))
  P.push(Q('caos', 'x', '¿Quién destruyó el cuerpo clonado de Horus?',
    ['El Emperador', 'Erebus', 'Fabius Bile'], 'Abaddon',
    'Abaddon lo redujo a cenizas y rebautizó a la legión como Legión Negra.'))
  P.push(Q('caos', 'x', '¿Qué apodo tomó Lufgt Huron al renacer en el Maelstrom?',
    ['El Tirano de Badab', 'El Señor de la Tormenta', 'El Despojado'], 'Huron Blackheart',
    'El Tirano de Badab murió; Blackheart gobierna a los Corsarios Rojos.'))

  // ---- GALAXIA ----
  for (const w in FORTRESS) {
    P.push(Q('galaxia', 'f', `¿Qué capítulo tiene su fortaleza en ${w}?`,
      pickOthers(Object.values(FORTRESS), FORTRESS[w], 3), FORTRESS[w],
      `${w} es el mundo capitular de los ${FORTRESS[w]}.`))
    P.push(Q('galaxia', 'm', `¿En qué mundo tienen su fortaleza los ${FORTRESS[w]}?`,
      pickOthers(Object.keys(FORTRESS), w, 3), w,
      `Los ${FORTRESS[w]} defienden ${w}.`))
  }
  WORLDS.forEach(w => {
    P.push(Q('galaxia', 'm', `¿Quién controla ${w.n}?`,
      pickOthers([...new Set(WORLDS.map(x => x.fac))], w.fac, 3), w.fac,
      `${w.n}: ${w.what}.`))
    P.push(Q('galaxia', 'd', `¿En qué segmentum se encuentra ${w.n}?`,
      SEGMENTUMS.filter(s => s !== w.seg).slice(0, 3), w.seg,
      `${w.n} pertenece al Segmentum ${w.seg}.`))
  })
  P.push(Q('galaxia', 'f', '¿Qué es el Ojo del Terror?',
    ['Una estrella moribunda', 'La nave insignia de Abaddon', 'Un arma necrona'],
    'Una herida warp, refugio de las legiones traidoras',
    'Nació de la Caída de los Aeldari; de ahí parten las Cruzadas Negras.'))
  P.push(Q('galaxia', 'f', '¿Dónde se alza el Palacio Imperial y el Trono Dorado?',
    ['Marte', 'Macragge', 'Cadia'], 'Sagrada Terra',
    'El corazón del Imperio, donde el Emperador vela desde hace diez mil años.'))
  P.push(Q('galaxia', 'f', '¿Qué es la Cicatrix Maledictum?',
    ['Una flota tiránida', 'La espada de Horus', 'Un ritual de los Mil Hijos'],
    'La Gran Grieta warp que partió la galaxia en dos',
    'Se abrió tras la caída de Cadia y separó el Imperium Sanctus del Nihilus.'))
  P.push(Q('galaxia', 'm', '¿Qué mundo fue destruido por Abaddon en la 13ª Cruzada Negra?',
    ['Vigilus', 'Armageddon', 'Krieg'], 'Cadia',
    'Cadia cayó en 999.M41... pero Cadia resiste.'))
  P.push(Q('galaxia', 'm', '¿Contra quién libra Armageddon sus guerras interminables?',
    ['Los necrones', 'Los t’au', 'Los tiránidos'], 'Los orkos de Ghazghkull',
    'Dos Waaagh! de Ghazghkull Thraka, y antes la invasión demoníaca de Angron.'))
  P.push(Q('galaxia', 'd', '¿Qué comisario fue capturado por Ghazghkull en Golgotha?',
    ['Comisario Cain', 'Lord Solar Macharius', 'Comisario Gaunt'], 'Comisario Yarrick',
    'Escapó jurando venganza. Ghazghkull lo respeta tanto que lo dejó vivir.'))
  P.push(Q('galaxia', 'd', '¿Quién despertó en Macragge en 999.M41?',
    ['El Emperador', 'Lion El’Jonson', 'Sanguinius'], 'Roboute Guilliman',
    'Resucitado diez mil años después, hoy gobierna el Imperio como Lord Comandante.'))
  P.push(Q('galaxia', 'd', '¿Qué guarda el mundo de Vigilus?',
    ['El Trono Dorado', 'La tumba de Horus', 'El Astronomican'], 'El Pasaje de Nachmund',
    'Una de las pocas rutas estables a través de la Gran Grieta.'))

  // ---- GALAXIA · EXTREMO ----
  P.push(Q('galaxia', 'x', '¿Qué mundo alberga una Fortaleza Negra que nadie ha logrado despertar?',
    ['Naogeddon', 'Molov', 'Balor'], 'Bane’s Landing',
    'Una estructura anterior al Imperio duerme allí. Todavía.'))
  P.push(Q('galaxia', 'x', '¿Qué mundo forja es célebre por sus reactores de plasma?',
    ['Cypra Mundi', 'Agripinaa', 'Bakka'], 'Ryza',
    'Sitiado una y otra vez por las Waaagh! orkas que codician sus forjas.'))
  P.push(Q('galaxia', 'x', '¿Qué mundo forja fue devorado por la Flota Enjambre Leviatán?',
    ['Ryza', 'Marte', 'Agripinaa'], 'Gryphonne IV',
    'Sus titanes no bastaron contra el enjambre.'))
  P.push(Q('galaxia', 'x', '¿Dónde tiene su cuartel la Flota Imperial del Ultima Segmentum?',
    ['Hydraphur', 'Cypra Mundi', 'Bakka'], 'Kar Duniash',
    'Cada segmentum tiene su fondeadero: Hydraphur (Pacificus), Cypra Mundi (Obscurus), Bakka (Tempestus).'))
  P.push(Q('galaxia', 'x', '¿Qué sistema imperial tiene nueve soles?',
    ['Chinchare', 'Perdus', 'Solstice'], 'Luther McIntyre',
    'Un sistema de nueve soles en el Segmentum Solar.'))
  P.push(Q('galaxia', 'x', '¿De qué mundo era natal el Lord Solar Macharius?',
    ['Ultima Macharia', 'Terra', 'Chiros'], 'Macharia',
    'El mayor conquistador desde la Gran Cruzada; su cruzada murió donde sus ejércitos se negaron a seguir.'))
  P.push(Q('galaxia', 'x', '¿Dónde quebraron los Ultramarines el avance de la Flota Enjambre Kraken?',
    ['Macragge', 'Black Reach', 'Sotha'], 'Ichar IV',
    'La colmena de Ichar IV resistió gracias a la XIII.'))
  P.push(Q('galaxia', 'x', '¿Qué mundo cayó ante la plaga zombi de la Cruz Oscura?',
    ['Agrax', 'San Leor', 'Solstice'], 'Antagonis',
    'Su colmena fue arrasada; Agrax sobrevivió a una plaga similar y fue reconsagrado.'))
  P.push(Q('galaxia', 'x', '¿Qué mundo es la cuna de las Hijas del Emperador, precursoras del Adepta Sororitas?',
    ['Ophelia VII', 'Gathalamor', 'Dimmamar'], 'San Leor',
    'De San Leor salieron las órdenes que hoy forman la Sororitas.'))
  P.push(Q('galaxia', 'x', '¿Qué anomalía warp "susurra" sobre el sector Charadon?',
    ['La Tormenta de la Sirena', 'Las Estrellas Somnium', 'El Lunaphage'], 'La Anomalía Hadex',
    'Los astrópatas afirman que lo que susurra está vivo.'))
  P.push(Q('galaxia', 'x', '¿Quién gobierna la dinastía necrona Sautekh?',
    ['El Rey Silente', 'Trazyn el Infinito', 'Anrakyr el Viajero'], 'Imotekh el Señor de la Tormenta',
    'La más agresiva de las dinastías, expandiéndose mundo tumba a mundo tumba.'))
  P.push(Q('galaxia', 'x', '¿Qué tormenta warp aísla sistemas enteros del Segmentum Obscurus desde la Herejía?',
    ['La Tormenta de la Sirena', 'El Maelstrom', 'Las Estrellas Azote'], 'La Tormenta de la Ira',
    'La Tormenta de la Ira del Emperador les niega la luz del Astronomican.'))

  // ---- NECRONES · dinastías (copia compacta de /necrones) ----
  NEC.forEach((d) => {
    P.push(Q('necrones', 'f', `¿Qué lema identifica a la dinastía ${d.n}?`,
      pickOthers(NEC.map(x => x.sub), d.sub, 3), d.sub,
      `${d.n}: «${d.sub}».`))
    if (d.ruler) {
      P.push(Q('necrones', 'm', `¿Quién gobierna la dinastía ${d.n}?`,
        pickOthers(NEC.filter(x => x.ruler).map(x => x.ruler).concat(['Anrakyr el Viajero', 'Illuminor Szeras']), d.ruler, 3), d.ruler,
        `${d.ruler} rige la dinastía ${d.n}.`))
    }
    if (d.world) {
      P.push(Q('necrones', 'd', `¿Cuál es el mundo corona de la dinastía ${d.n}?`,
        pickOthers(NEC.filter(x => x.world).map(x => x.world).concat(['Solemnace', 'Zantragora', 'Gidrim']), d.world, 3), d.world,
        `${d.world} es el mundo corona de los ${d.n}.`))
    }
    P.push(Q('necrones', 'm', `¿Qué esquema de color luce la dinastía ${d.n}?`,
      pickOthers(NEC.map(x => x.col), d.col, 3), d.col,
      `Los ${d.n} visten ${d.col.toLowerCase()}.`, d.sw))
    P.push(Q('necrones', 'd', `¿A qué dinastía pertenece ${d.char}?`,
      pickOthers(NEC.map(x => x.n), d.n, 3), d.n,
      `${d.char}: dinastía ${d.n}.`))
  })

  // ---- NECRONES · fácil ----
  P.push(Q('necrones', 'f', '¿Cómo se llamaban los necrones antes de la biotransferencia?',
    ['Los C’tan', 'Los Antiguos', 'Los Aeldari'], 'Los necrontyr',
    'Una especie de vida corta y cuerpos enfermos que cambió la carne por metal viviente.'))
  P.push(Q('necrones', 'f', '¿Qué es un mundo tumba?',
    ['Un mundo devorado por los tiránidos', 'Un cementerio imperial', 'Una luna de los orkos'],
    'Un planeta donde las legiones necronas durmieron durante sesenta millones de años',
    'Los mundos tumba despiertan dinastía a dinastía desde finales del M41.'))
  P.push(Q('necrones', 'f', '¿Quién es el Rey Silente?',
    ['Imotekh', 'Trazyn el Infinito', 'Orikan el Adivino'], 'Szarekh, señor de la dinastía Szarekhan',
    'Selló el pacto con los C’tan, ordenó el Gran Sueño y ha regresado para gobernar de nuevo.'))
  P.push(Q('necrones', 'f', '¿Qué dinastía es la más agresiva y expansionista?',
    ['Nihilakh', 'Novokh', 'Nephrekh'], 'Sautekh',
    'Tanto, que muchos enemigos confunden sus colores con los de toda la raza.'))
  P.push(Q('necrones', 'f', '¿Qué son los C’tan?',
    ['Máquinas de asedio necronas', 'Una dinastía rebelde', 'Los ingenieros de los mundos tumba'],
    'Dioses estelares que engañaron a los necrontyr',
    'Los necrones los destrozaron y encerraron sus fragmentos para usarlos como armas.'))
  P.push(Q('necrones', 'f', '¿Qué dinastía practica rituales de sangre y prefiere el cuerpo a cuerpo?',
    ['Mephrit', 'Szarekhan', 'Nihilakh'], 'Novokh',
    'Sus cuerpos de metal viviente acaban cubiertos de vísceras como en las matanzas de antaño.'))
  P.push(Q('necrones', 'f', '¿Qué dinastía domina la tecnología de translocación y viste de oro?',
    ['Sautekh', 'Novokh', 'Mephrit'], 'Nephrekh',
    'Guerreros de las estrellas doradas: cruzan distancias imposibles como haces de luz.'))
  P.push(Q('necrones', 'f', '¿Qué título recibe el gobernante de una dinastía necrona?',
    ['Kaudillo', 'Archonte', 'Etéreo'], 'Faerón',
    'Por debajo están los señores supremos, los señores y los nobles de la corte.'))

  // ---- NECRONES · media ----
  P.push(Q('necrones', 'm', '¿Contra quién libraron los necrontyr la Guerra en el Cielo?',
    ['El Imperio de la Humanidad', 'Los tiránidos', 'Los orkos'], 'Los Antiguos y sus creaciones',
    'Los Aeldari y los orkos fueron creados por los Antiguos para esa guerra.'))
  P.push(Q('necrones', 'm', '¿Qué dinastía tiene fama de conquistadora pero libra sobre todo guerras defensivas?',
    ['Sautekh', 'Mephrit', 'Novokh'], 'Nihilakh',
    'Solo marchan cuando sus oráculos lo dictan, con formaciones de precisión aterradora.'))
  P.push(Q('necrones', 'm', '¿Qué dinastía era famosa, antes del Gran Sueño, por aniquilar sistemas enteros con energía solar?',
    ['Szarekhan', 'Nihilakh', 'Nephrekh'], 'Mephrit',
    'Los «ejecutores solares». Despertaron sin faerón y con el trono en disputa.'))
  P.push(Q('necrones', 'm', '¿Qué dinastía es la del Rey Silente?',
    ['Sautekh', 'Nihilakh', 'Mephrit'], 'Szarekhan',
    'Orgullosa preeminencia: para los Szarekhan no hay rivales, hay subordinados.'))
  P.push(Q('necrones', 'm', '¿Qué guardia de élite acompaña al Rey Silente?',
    ['Los Destructores', 'Los Inmortales', 'Los Guerreros Necrones'], 'Los Pretorianos de la Triarca',
    'Guardianes de los códigos dinásticos, leales a la Triarca antes que a cualquier faerón.'))
  P.push(Q('necrones', 'm', '¿Qué sistema estelar baña a la dinastía Nephrekh con su energía?',
    ['El sistema de Gheden', 'Mandrágora', 'Solemnace'], 'Las tres estrellas de Aryand',
    'Su obsesión por la luz solar roza el delirio divino.'))
  P.push(Q('necrones', 'm', '¿Quiénes son los criptotecnólogos?',
    ['Los sacerdotes de los C’tan', 'Los generales de las legiones', 'Los guardianes de los mundos tumba'],
    'Los científicos-magos que dominan la tecnología necrona',
    'Crónomantes, plasmantes, geomantes… cada disciplina tiene sus adeptos.'))

  // ---- NECRONES · difícil ----
  P.push(Q('necrones', 'd', '¿Qué ocurrió con las mentes de muchos nobles necrones durante el Gran Sueño?',
    ['Fueron transferidas a los C’tan', 'Se fusionaron en una sola conciencia', 'Fueron borradas por completo'],
    'Se deterioraron hasta la locura o la paranoia',
    'Eones de éstasis convirtieron a muchos señores en pesadillas andantes.'))
  P.push(Q('necrones', 'd', '¿Qué noble Nihilakh colecciona los tesoros de la galaxia en Solemnace?',
    ['Orikan el Adivino', 'Imotekh', 'Anrakyr el Viajero'], 'Trazyn el Infinito',
    'Sus galerías guardan desde reliquias imperiales hasta ejércitos enteros en éstasis.'))
  P.push(Q('necrones', 'd', '¿Qué nemesor Sautekh cree seguir combatiendo en la Guerra en el Cielo?',
    ['Imotekh', 'Vargard Obyron', 'Szarekh'], 'Nemesor Zahndrekh',
    'Su mente dañada ve a sus enemigos como necrontyr rebeldes; Obyron lo protege y le sigue el juego.'))
  P.push(Q('necrones', 'd', '¿Qué fenómeno mantiene a los necrones esclavos de su forma metálica?',
    ['El Gran Sueño', 'La maldición de la carne', 'El protocolo de reanimación'], 'La biotransferencia',
    'Ganaron la inmortalidad a cambio de sus almas: el precio del pacto con los C’tan.'))
  P.push(Q('necrones', 'd', '¿Qué despierta a las legiones necronas tras el Gran Sueño?',
    ['El regreso de los C’tan', 'La Gran Grieta', 'Una señal del Rey Silente'], 'Los protocolos de sus mundos tumba, programados para sesenta millones de años',
    'Muchos despertaron tarde, dañados o saqueados: la galaxia había cambiado de sitio.'))
  P.push(Q('necrones', 'd', '¿Qué cinco rangos componen, de mayor a menor, la nobleza de una dinastía?',
    ['Rey, duque, conde, barón, señor', 'Faerón, nemesor, criptek, señor, destructor', 'Triarca, faerón, nemesor, noble, guerrero'],
    'Faerón, señor supremo, señor, noble de la corte, nemesor',
    'El nemesor es el rango militar: manda una legión, no un territorio.'))

  // ---- NECRONES · extremo ----
  P.push(Q('necrones', 'x', '¿Qué dinastía despertó con su faerón asesinado y el trono disputado entre Zarathusa, Eknothet y Anubtar?',
    ['Nihilakh', 'Novokh', 'Sautekh'], 'Mephrit',
    'La guerra civil de los ejecutores solares continúa, y cualquier mundo en medio lo paga.'))
  P.push(Q('necrones', 'x', '¿Qué vidente guía a los Nihilakh con sus visiones?',
    ['Orikan', 'Szeras', 'Anrakyr'], 'El Vidente Yth',
    'Sus oráculos dictan cuándo marchan las legiones de Gheden.'))
  P.push(Q('necrones', 'x', '¿Qué dinastía rival saqueó el sistema de Aryand mientras los Nephrekh dormían?',
    ['Sautekh', 'Mephrit', 'Nihilakh'], 'Altymhor',
    'La venganza del faerón Sylphek fue tan rápida como un rayo.'))
  P.push(Q('necrones', 'x', '¿Qué mundo corona es la necrópolis de los Sautekh?',
    ['Gheden', 'Dhol VI', 'Aryand'], 'Mandrágora',
    'Una fortaleza sepulcral de belleza macabra, centro del poder de Imotekh.'))
  P.push(Q('necrones', 'x', '¿Cómo ganó Imotekh el trono Sautekh?',
    ['Por herencia del Rey Silente', 'Asesinando al faerón anterior', 'Por un pacto con un C’tan'],
    'Con victorias militares: no es noble de sangre',
    'Un estratega que absorbe dinastías menores como vasallos y aplasta a las que resisten.'))
  P.push(Q('necrones', 'x', '¿Qué mundo corona rige el faerón Galmakh?',
    ['Mandrágora', 'Gheden', 'Solemnace'], 'Dhol VI',
    'Trono de los Novokh, los carniceros salpicados de sangre.'))
  P.push(Q('necrones', 'x', '¿Qué criptek traicionó a su dinastía y vende sus servicios de mejora biotecnológica a cualquiera?',
    ['Orikan el Adivino', 'Trazyn el Infinito', 'El Vidente Yth'], 'Illuminor Szeras',
    'Experimenta con cautivos para descubrir el secreto de recuperar la carne.'))
  P.push(Q('necrones', 'x', '¿Qué orden de la Triarca hizo huir Szarekh de la galaxia tras despertar?',
    ['El regreso de los C’tan', 'Una guerra contra los orkos', 'La apertura de la Gran Grieta'],
    'Ninguna: huyó por la vergüenza de la biotransferencia y regresó al ver la amenaza tiránida',
    'Volvió para reunificar las dinastías: los necrones son la única raza capaz de frenar a la Gran Devoradora.'))

  P.push(Q('necrones', 'x', '¿Qué necrón de la dinastía Pyrrhia recorre la galaxia despertando mundos tumba y reclutando a sus legiones?',
    ['Trazyn el Infinito', 'Orikan el Adivino', 'Nemesor Zahndrekh'], 'Anrakyr el Viajero',
    'Exige un diezmo de guerreros a cada mundo que despierta; los que se niegan los pierden igualmente.'))
  P.push(Q('necrones', 'x', '¿Qué crónomante Sautekh manipula el tiempo y puede volver a su forma energética de la Era de los Necrontyr?',
    ['Illuminor Szeras', 'Anrakyr el Viajero', 'El Vidente Yth'], 'Orikan el Adivino',
    'Sus profecías se cumplen siempre... aunque a veces tenga que retroceder en el tiempo para asegurarlo.'))

  // ---- ORKOS · klanes (copia compacta de /orkos) ----
  ORK.forEach((k) => {
    P.push(Q('orkos', 'f', `¿Qué lema identifica al klan ${k.n}?`,
      pickOthers(ORK.map(x => x.sub), k.sub, 3), k.sub,
      `${k.n}: «${k.sub}».`))
    P.push(Q('orkos', 'm', `¿Qué es "lo suyo" para el klan ${k.n}?`,
      pickOthers(ORK.map(x => x.thing), k.thing, 3), k.thing,
      `${k.n}: ${k.thing.toLowerCase()}.`))
    P.push(Q('orkos', 'm', `¿De qué color van los ${k.n}?`,
      pickOthers(ORK.map(x => x.col), k.col, 3), k.col,
      `Los ${k.n}: ${k.col.toLowerCase()}.`, k.sw))
    P.push(Q('orkos', 'd', `¿Con qué klan se asocia a ${k.who}?`,
      pickOthers(ORK.map(x => x.n), k.n, 3), k.n,
      `${k.who}: klan ${k.n}.`))
  })

  // ---- ORKOS · fácil ----
  P.push(Q('orkos', 'f', '¿Cómo se reproducen los orkos?',
    ['Poniendo huevos', 'Por clonación en los mundos forja', 'Se crean en cubas de los mekánikos'], 'Por esporas',
    'Son hongos de guerra: donde muere un orko, brotan más.'))
  P.push(Q('orkos', 'f', '¿Qué es una Waaagh!?',
    ['Un tipo de kamión orko', 'Una enfermedad fúngica', 'El nombre del dios de los orkos'],
    'Una migración bélica masiva impulsada por el campo psíquico de millones de orkos',
    'Cuando un kaudillo crece lo bastante, arrastra sistemas enteros tras él.'))
  P.push(Q('orkos', 'f', '¿Quiénes son los dioses de los orkos?',
    ['Khorne y Nurgle', 'Los Antiguos', 'El Emperador y Horus'], 'Gork y Mork',
    'Uno es brutalmente astuto y el otro astutamente brutal. Nadie se pone de acuerdo en cuál es cuál.'))
  P.push(Q('orkos', 'f', '¿Por qué funciona la tecnología orka?',
    ['Porque copia la de los necrones', 'Porque la fabrica el Adeptus Mechanicus', 'Porque es muy sencilla'],
    'Porque los orkos creen que funciona',
    'Su campo psíquico colectivo hace realidad lo que esperan: el rojo va más rápido.'))
  P.push(Q('orkos', 'f', '¿Qué es un kaudillo?',
    ['Un mekániko jefe', 'Un orko piloto', 'Un sacerdote de Gork'], 'El orko más grande y fuerte que lidera a los demás',
    'Los orkos obedecen al más grande. Siempre. Hasta que llega uno más grande.'))
  P.push(Q('orkos', 'f', '¿Cuál es la moneda de los orkos?',
    ['Los cráneos', 'Los squigs', 'Las balas'], 'Los dientes',
    'Se les caen y vuelven a crecer: una economía que nunca se hunde.'))
  P.push(Q('orkos', 'f', '¿Qué kaudillo lidera la mayor Waaagh! vista en diez mil años?',
    ['Grukk Kara-Roja', 'Nazdreg', 'Wazdakka Gutsmek'], 'Ghazghkull Mag Uruk Thraka',
    'La Bestia de Armageddon, profeta de Gork y Mork.'))
  P.push(Q('orkos', 'f', '¿Qué es un squig?',
    ['Un arma orka', 'Un kamión pequeño', 'Un tipo de orko enano'], 'Una criatura fúngica de los orkos: mascota, comida o arma',
    'Desde el squig de ataque hasta el squig-bomba, los hay para todo.'))

  // ---- ORKOS · media ----
  P.push(Q('orkos', 'm', '¿Qué klan usa camuflaje y táctica aprendidas de los humanos?',
    ['Goffs', 'Deathskulls', 'Snakebites'], 'Blood Axes',
    'Por eso el resto de klanes no se fía de ellos.'))
  P.push(Q('orkos', 'm', '¿Quién construye y truca los vehículos y armas de los orkos?',
    ['Los kaudillos', 'Los matasanos', 'Los kamorros'], 'Los mekánikos',
    'Saben cómo funciona la tecnología instintivamente; no preguntes cómo.'))
  P.push(Q('orkos', 'm', '¿Qué orko se encarga de "curar" a los heridos con sierras y trasplantes?',
    ['El mekániko', 'El kaudillo', 'El pelotón de gretchins'], 'El matasanos',
    'La tasa de supervivencia es… variable. La de diversión del matasanos, altísima.'))
  P.push(Q('orkos', 'm', '¿Qué son los gretchins?',
    ['Orkos veteranos', 'Los pilotos de los kamiones', 'Squigs domesticados'], 'Orkos pequeños que hacen el trabajo sucio',
    'Cargan munición, arreglan cosas y sirven de escudo cuando hace falta.'))
  P.push(Q('orkos', 'm', '¿Qué klan considera a los Bad Moons unos blandos por ser ricos?',
    ['Evil Sunz', 'Blood Axes', 'Freebooterz'], 'Goffs',
    'Los Goffs presumen de no necesitar más que sus puños y sus cuadros negros.'))
  P.push(Q('orkos', 'm', '¿Qué dos Waaagh! de Ghazghkull golpearon el mismo mundo imperial?',
    ['Las de Cadia', 'Las de Vigilus', 'Las de Golgotha'], 'Las de Armageddon',
    'La Segunda y la Tercera Guerra de Armageddon, ambas con Ghazghkull al frente.'))
  P.push(Q('orkos', 'm', '¿Cómo se llaman los orkos con poderes psíquicos?',
    ['Mekánikos', 'Kaudillos', 'Matasanos'], 'Weirdboyz (los raroz)',
    'Canalizan el campo psíquico de la Waaagh!; a veces les explota la cabeza.'))

  // ---- ORKOS · difícil ----
  P.push(Q('orkos', 'd', '¿En qué mundo capturó Ghazghkull al comisario Yarrick?',
    ['Armageddon', 'Ryza', 'Octarius'], 'Golgotha',
    'Le dejó escapar porque le divierte tener un enemigo digno.'))
  P.push(Q('orkos', 'd', '¿Qué guerra eterna enfrenta a los orkos con los tiránidos en el Ultima Segmentum?',
    ['La guerra de Armageddon', 'La Cruzada de Charadon', 'La Waaagh! Ghazghkull'], 'La Guerra de Octarius',
    'La Inquisición la provocó desviando una flota enjambre hacia el imperio orko de Octarius.'))
  P.push(Q('orkos', 'd', '¿Qué klan monta jabalís y desconfía de la tecnología nueva?',
    ['Goffs', 'Freebooterz', 'Blood Axes'], 'Snakebites',
    'Los más conservadores: tatuajes, huesos y bestias de guerra.'))
  P.push(Q('orkos', 'd', '¿Cuál es el imperio orko más antiguo conocido?',
    ['Octarius', 'Golgotha', 'Armageddon'], 'El Imperio de Charadon',
    'Sus Waaagh! han asediado el mundo forja de Ryza una y otra vez.'))
  P.push(Q('orkos', 'd', '¿Quién es el Kaudillo Supremo de los Freebooterz más famoso, piloto de su propio pecio espacial?',
    ['Ghazghkull', 'Nazdreg', 'Grotsnik'], 'Kaptin Badrukk',
    'Lleva un sombrero enorme, un loro-squig y más armas de las que puede sostener.'))
  P.push(Q('orkos', 'd', '¿Qué le pasa a un orko cuando gana batallas y acumula poder?',
    ['Se vuelve más inteligente', 'Cambia de klan', 'Pierde el color'], 'Crece físicamente',
    'Los orkos crecen con la victoria: el kaudillo siempre es el más grande.'))
  P.push(Q('orkos', 'd', '¿Qué matasanos famoso acompaña a Ghazghkull y ha operado a la mitad de sus jefes?',
    ['Kaptin Badrukk', 'Boss Zagstruk', 'Wurrzag'], 'Mad Dok Grotsnik',
    'Se hizo implantar una armadura en el cráneo. Él mismo. Sin anestesia.'))

  // ---- ORKOS · extremo ----
  P.push(Q('orkos', 'x', '¿Qué orko profeta "descubrió" que el rojo va más rápido y predicó sobre Gork y Mork?',
    ['Ghazghkull', 'Kaptin Badrukk', 'Nazdreg'], 'Wurrzag Ud Ur Ghostmaker',
    'El raroz más famoso de Armageddon, pintado de blanco y azul, que baila para invocar a los dioses.'))
  P.push(Q('orkos', 'x', '¿Quién fue "La Bestia", el kaudillo que casi conquistó Terra en el M32?',
    ['Ghazghkull', 'Wazdakka', 'Badrukk'], 'Urrlak Urruk, la Bestia de las Guerras de la Bestia',
    'Sus lunas de ataque llegaron hasta el sistema solar; los Puños Imperiales murieron deteniéndola.'))
  P.push(Q('orkos', 'x', '¿Qué orko Bad Moon lideró la Waaagh! sobre Piscina IV usando tecnología teletransportadora robada?',
    ['Grukk Kara-Roja', 'Boss Zagstruk', 'Kaptin Badrukk'], 'Nazdreg Ug Urdgrub',
    'Uno de los kaudillos más ricos de la galaxia, y uno de los que más armas raras acumula.'))
  P.push(Q('orkos', 'x', '¿Qué kaudillo Evil Sun ansía abrir un portal galáctico para una Waaagh! de motos?',
    ['Badrukk', 'Nazdreg', 'Grukk'], 'Wazdakka Gutsmek',
    'Sueña con correr por toda la galaxia sin bajar de la moto.'))
  P.push(Q('orkos', 'x', '¿Cómo se llama la unidad de orkos saltadores que lidera Boss Zagstruk?',
    ['Los Dakkaboyz', 'Los Kamorros', 'Los Komandos'], 'Los Vulcha Squad, lanzakopteros',
    'Caen desde el cielo con cohetes en la espalda y patas de hierro.'))
  P.push(Q('orkos', 'x', '¿A qué mundo imperial volvió Ghazghkull décadas después de su primera Waaagh! solo porque «se lo pasó bien»?',
    ['Cadia', 'Vigilus', 'Ryza'], 'Armageddon',
    'La Segunda Guerra de Armageddon (941.M41) y la Tercera (998.M41).'))
  P.push(Q('orkos', 'x', '¿Qué cargo ostenta el orko que transporta la "Waaagh!-bandera" del kaudillo?',
    ['Kaptin', 'Nob', 'Raroz'], 'El portaestandarte o "Waaagh!-banner nob"',
    'Un nob de confianza; perder la bandera es perder la Waaagh!.'))
  P.push(Q('orkos', 'x', '¿Qué son los Kamorros en el ejército orko?',
    ['Pilotos de kamiones', 'Orkos psíquicos', 'Orkos en armaduras pesadas'], 'Los nobs de élite que forman la guardia del kaudillo',
    'Los más grandes después del jefe, con armaduras pesadas y garras de combate.'))
  P.push(Q('orkos', 'x', '¿Qué klan se asocia con los "Dreadz" y "Kanz" más mortíferos, pilotados por gretchins?',
    ['Goffs', 'Snakebites', 'Blood Axes'], 'Deathskulls',
    'Chatarra saqueada y un gretchin sellado dentro: la fórmula del éxito.'))
  P.push(Q('orkos', 'x', '¿Qué raza creó a los orkos como soldados para la Guerra en el Cielo?',
    ['Los necrontyr', 'Los C’tan', 'Los Aeldari'], 'Los Antiguos',
    'Los krork, sus ancestros, eran más grandes e inteligentes que cualquier orko actual.'))

  return P
}

export const CATS = {
  general: { titulo: 'Prueba General', sub: 'Todo el saber del Imperio y sus enemigos' },
  astartes: { titulo: 'Adeptus Astartes', sub: 'Legiones, capítulos, linajes y heráldica' },
  caos: { titulo: 'Las Fuerzas del Caos', sub: 'Traidores, primarcas caídos y bandas renegadas' },
  galaxia: { titulo: 'La Galaxia', sub: 'Mundos, facciones y segmentums en M42' },
  necrones: { titulo: 'Necrones', sub: 'Dinastías, faerones, mundos tumba y el Rey Silente' },
  orkos: { titulo: 'Orkos', sub: 'Klanes, kaudillos, Waaagh! y mucho dakka' }
}

export const DIFFS = {
  facil: { label: 'Iniciado', desc: 'Preguntas básicas', pts: 10, set: ['f'] },
  media: { label: 'Cruzado', desc: 'Saber de veterano', pts: 20, set: ['m'] },
  dificil: { label: 'Maestro del Saber', desc: 'Archivos sellados y preguntas trampa', pts: 30, set: ['d'] },
  extremo: { label: 'Inquisidor', desc: 'Saber prohibido: fechas, mundos perdidos y nombres que nadie recuerda', pts: 50, set: ['x'] }
}

export const RANKS = [
  [0, 'Siervo del Adeptus', 'Los escribas aún dudan de que sepas leer Alto Gótico.'],
  [25, 'Aspirante', 'Sobrevivirías a la primera criba... quizá.'],
  [50, 'Hermano de Batalla', 'Conoces los archivos como un marine conoce su bólter.'],
  [70, 'Capitán Veterano', 'Los Bibliotecarios te consultan a ti.'],
  [90, 'Señor del Capítulo', 'Tu saber es digno de un trono capitular.'],
  [100, 'Elegido del Emperador', 'Ni los Custodios guardan mejor los archivos del Trono.']
]

export function pickQuestions (pool, cat, diffSet, n = 10) {
  const filtered = pool.filter(p => (cat === 'general' || p.cat === cat) && diffSet.includes(p.diff))
  const seen = new Set()
  const out = []
  for (const q of shuffle(filtered)) {
    if (seen.has(q.q)) continue
    seen.add(q.q)
    out.push(q)
    if (out.length === n) break
  }
  return out
}
