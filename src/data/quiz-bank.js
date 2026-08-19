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

  return P
}

export const CATS = {
  general: { titulo: 'Prueba General', sub: 'Todo el saber del Imperio y sus enemigos' },
  astartes: { titulo: 'Adeptus Astartes', sub: 'Legiones, capítulos, linajes y heráldica' },
  caos: { titulo: 'Las Fuerzas del Caos', sub: 'Traidores, primarcas caídos y bandas renegadas' },
  galaxia: { titulo: 'La Galaxia', sub: 'Mundos, facciones y segmentums en M42' }
}

export const DIFFS = {
  facil: { label: 'Iniciado', desc: 'Preguntas básicas', pts: 10, set: ['f'] },
  media: { label: 'Cruzado', desc: 'Saber de veterano', pts: 20, set: ['m'] },
  dificil: { label: 'Maestro del Saber', desc: 'Archivos sellados y preguntas trampa', pts: 30, set: ['d'] }
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
