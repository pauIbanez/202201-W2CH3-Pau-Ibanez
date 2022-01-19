const questions = [
  [
    {
      letter: "a",
      title: "Con la A",
      answer: "abducir",
      question:
        "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      letter: "b",
      title: "Con la B",
      answer: "bingo",
      question:
        "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
      letter: "c",
      title: "Con la C",
      answer: "churumbel",
      question: "Niño, crío, bebé",
    },
    {
      letter: "d",
      title: "Con la D",
      answer: "diarrea",
      question:
        "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      letter: "e",
      title: "Con la E",
      answer: "ectoplasma",
      question:
        "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
      letter: "f",
      title: "Con la F",
      answer: "facil",
      question: "Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
      letter: "g",
      title: "Con la G",
      answer: "galaxia",
      question:
        "Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
      letter: "h",
      title: "Con la H",
      answer: "harakiri",
      question: "Suicidio ritual japonés por desentrañamiento",
    },
    {
      letter: "i",
      title: "Con la I",
      answer: "iglesia",
      question: "Templo cristiano",
    },
    {
      letter: "j",
      title: "Con la J",
      answer: "jabali",
      question:
        "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
      letter: "l",
      title: "Con la L",
      answer: "licantropo",
      question: "Hombre lobo",
    },
    {
      letter: "m",
      title: "Con la M",
      answer: "misantropo",
      question:
        "Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      letter: "n",
      title: "Con la N",
      answer: "necedad",
      question: "Demostración de poca inteligencia",
    },
    {
      letter: "ñ",
      title: "Contiene la Ñ",
      answer: "señal",
      question:
        "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
      letter: "o",
      title: "Con la O",
      answer: "orco",
      question:
        "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      letter: "p",
      title: "Con la P",
      answer: "protoss",
      question:
        "Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
      letter: "q",
      title: "Con la Q",
      answer: "queso",
      question: "Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", title: "Con la R", answer: "raton", question: "Roedor" },
    {
      letter: "s",
      title: "Con la S",
      answer: "stackoverflow",
      question: "Comunidad salvadora de todo desarrollador informático",
    },
    {
      letter: "t",
      title: "Con la T",
      answer: "terminator",
      question:
        "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
      letter: "u",
      title: "Con la U",
      answer: "unamuno",
      question:
        "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
      letter: "v",
      title: "Con la V",
      answer: "vikingos",
      question:
        "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
      letter: "x",
      title: "Contiene la X",
      answer: "botox",
      question: "Toxina bacteriana utilizada en cirujía estética",
    },
    {
      letter: "y",
      title: "Contiene la Y",
      answer: "peyote",
      question:
        "Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      letter: "z",
      title: "Con la Z",
      answer: "zen",
      question:
        "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
  ],
  [
    {
      letter: "a",
      title: "CONTIENE LA A",
      answer: "salvar",
      question:
        "Librar a una persona o a una cosa de un peligro o de una amenaza, o solucionar un problema grave o una situación difícil o comprometida.",
    },
    {
      letter: "b",
      title: "CON LA B",
      answer: "billete",
      question:
        "Papel impreso o grabado, generalmente emitido por el banco central de un país, al que se le asigna un valor pecuniario determinado y se emplea como medio legal de pago.",
    },
    {
      letter: "c",
      title: "CON LA C",
      answer: "cruz",
      question:
        "Figura geométrica que consiste en dos líneas o barras que se entrecruzan en ángulo recto, de tal forma que una de ellas queda dividida por la mitad",
    },
    {
      letter: "d",
      title: "CON LA D",
      answer: "despertar",
      question:
        "Hacer que alguien deje de dormir o interrumpir el sueño de alguien.",
    },
    {
      letter: "e",
      title: "CONTIENE LA E",
      answer: "mesa",
      question:
        "Mueble formado por un tablero horizontal, sostenido por uno o varios pies, con la altura conveniente para poder realizar alguna actividad sobre ella o dejar cosas encima.",
    },
    {
      letter: "f",
      title: "CON LA F",
      answer: "francia",
      question: "Tierra de los francos.",
    },
    {
      letter: "g",
      title: "CONTIENE LA G",
      answer: "perseguir",
      question:
        "Seguir a una persona o animal que huye, con intención de alcanzarlo.",
    },
    {
      letter: "h",
      title: "CON LA H",
      answer: "hijab",
      question: "Velo que cubre la cabeza.",
    },
    {
      letter: "i",
      title: "CONTIENE LA I",
      answer: "arquitectura",
      question:
        "Arte y técnica de diseñar, proyectar y construir edificios y espacios públicos.",
    },
    {
      letter: "j",
      title: "CONTIENE LA J",
      answer: "ojal",
      question:
        "Abertura alargada y con los bordes rematados que se hace en el extremo de una pieza de ropa o prenda de vestir para que pueda pasar por ella un botón y abrocharla, o como simple adorno.",
    },
    {
      letter: "l",
      title: "CON LA L",
      answer: "luna",
      question:
        "Astro, satélite natural de la Tierra, que gira alrededor de ella y refleja la luz del Sol; tiene una superficie de aspecto volcánico y carece de atmósfera.",
    },
    {
      letter: "m",
      title: "CONTIENE LA M",
      answer: "diagrama",
      question:
        "Representación gráfica de las variaciones de un fenómeno o de las relaciones que tienen los elementos o las partes de un conjunto.",
    },
    {
      letter: "n",
      title: "CON LA N",
      answer: "nicotina",
      question:
        "Sustancia que se extrae de las hojas del tabaco y que también se puede producir sintéticamente.",
    },
    {
      letter: "ñ",
      title: "CONTIENE LA Ñ",
      answer: "paño",
      question:
        "Pieza de tela, normalmente de baja calidad y forma cuadrada o rectangular, que tiene distintos usos, en especial limpiar, secar o cubrir algo.",
    },
    {
      letter: "o",
      title: "CONTIENE LA O",
      answer: "sonido",
      question:
        "Sensación o impresión producida en el oído por un conjunto de vibraciones que se propagan por un medio elástico, como el aire.",
    },
    {
      letter: "p",
      title: "CON LA P",
      answer: "pescar",
      question:
        "Atrapar peces y otros animales que viven en el mar o en aguas dulces con redes, cañas u otros instrumentos.",
    },
    {
      letter: "q",
      title: "CON LA Q",
      answer: "quasimodo",
      question:
        "Personaje de la novela de Victor Hugo, Nuestra Señora de París.",
    },
    {
      letter: "r",
      title: "CON LA R",
      answer: "regalo",
      question:
        "Cosa que se da a una persona como muestra de afecto o de consideración.",
    },
    {
      letter: "s",
      title: "CON LA S",
      answer: "sitio",
      question: "Porción del espacio, real o imaginada, en que se sitúa algo.",
    },
    {
      letter: "t",
      title: "CON LA T",
      answer: "trenza",
      question:
        "Tejido que resulta de entrelazar tres hilos u otra cosa parecida pasándolos unos sobre los otros alternativamente y apretándolos.",
    },
    {
      letter: "u",
      title: "CONTIENE LA U",
      answer: "puma",
      question:
        "Mamífero felino de unos 190 cm de longitud (cola incluida), pelaje suave de color pardo rojizo o grisáceo, blancuzco en el vientre, cuerpo esbelto, patas cortas, cola larga y uñas fuertes que usa para cazar; es muy veloz, ágil y fiero pero se adapta fácilmente a la cautividad; vive solitario en toda América.",
    },
    {
      letter: "v",
      title: "CONTIENE LA V",
      answer: "polvo",
      question:
        "Conjunto de partículas diminutas que flotan en el aire y se depositan sobre los objetos formando una capa de suciedad.",
    },
    {
      letter: "x",
      title: "CON LA X",
      answer: "xilofono",
      question:
        "Instrumento musical de percusión formado por una serie de láminas de madera dispuestas horizontalmente y ordenadas según su tamaño que, al ser golpeadas, emiten sonidos correspondientes a diferentes notas musicales.",
    },
    {
      letter: "y",
      title: "CONTIENE LA Y",
      answer: "ley",
      question:
        "Regla o norma establecida por una autoridad superior para regular, de acuerdo con la justicia, algún aspecto de las relaciones sociales.",
    },
    {
      letter: "z",
      title: "CONTIENE LA Z",
      answer: "rizo",
      question: "Mechón de pelo que tiene forma de sortija o espiral.",
    },
  ],
  [
    {
      letter: "a",
      title: "Con la A",
      answer: "abducir",
      question:
        "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      letter: "b",
      title: "Con la B",
      answer: "bingo",
      question:
        "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
      letter: "c",
      title: "Con la C",
      answer: "churumbel",
      question: "Niño, crío, bebé",
    },
    {
      letter: "d",
      title: "Con la D",
      answer: "diarrea",
      question:
        "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      letter: "e",
      title: "Con la E",
      answer: "ectoplasma",
      question:
        "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
      letter: "f",
      title: "Con la F",
      answer: "facil",
      question: "Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
      letter: "g",
      title: "Con la G",
      answer: "galaxia",
      question:
        "Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
      letter: "h",
      title: "Con la H",
      answer: "harakiri",
      question: "Suicidio ritual japonés por desentrañamiento",
    },
    {
      letter: "i",
      title: "Con la I",
      answer: "iglesia",
      question: "Templo cristiano",
    },
    {
      letter: "j",
      title: "Con la J",
      answer: "jabali",
      question:
        "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
      letter: "l",
      title: "Con la L",
      answer: "licantropo",
      question: "Hombre lobo",
    },
    {
      letter: "m",
      title: "Con la M",
      answer: "misantropo",
      question:
        "Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      letter: "n",
      title: "Con la N",
      answer: "necedad",
      question: "Demostración de poca inteligencia",
    },
    {
      letter: "ñ",
      title: "Contiene la Ñ",
      answer: "señal",
      question:
        "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
      letter: "o",
      title: "Con la O",
      answer: "orco",
      question:
        "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      letter: "p",
      title: "Con la P",
      answer: "protoss",
      question:
        "Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
      letter: "q",
      title: "Con la Q",
      answer: "queso",
      question: "Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", title: "Con la R", answer: "raton", question: "Roedor" },
    {
      letter: "s",
      title: "Con la S",
      answer: "stackoverflow",
      question: "Comunidad salvadora de todo desarrollador informático",
    },
    {
      letter: "t",
      title: "Con la T",
      answer: "terminator",
      question:
        "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
      letter: "u",
      title: "Con la U",
      answer: "unamuno",
      question:
        "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
      letter: "v",
      title: "Con la V",
      answer: "vikingos",
      question:
        "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
      letter: "x",
      title: "Contiene la X",
      answer: "botox",
      question: "Toxina bacteriana utilizada en cirujía estética",
    },
    {
      letter: "y",
      title: "Contiene la Y",
      answer: "peyote",
      question:
        "Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      letter: "z",
      title: "Con la Z",
      answer: "zen",
      question:
        "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
  ],
];

const leaderboardNames =
  "MichaelChristopherJessicaMatthewAshleyJenniferJoshuaAmandaDanielDavidJamesRobertJohnJosephAndrewRyanBrandonJasonJustinSarahWilliamJonathanStephanieBrianNicoleNicholasAnthonyHeatherEricElizabethAdamMeganMelissaKevinStevenThomasTimothyChristinaKyleRachelLauraLaurenAmberBrittanyDanielleRichardKimberlyJeffreyAmyCrystalMichelleTiffanyJeremyBenjaminMarkEmilyAaronCharlesRebeccaJacobStephenPatrickSeanErinZacharyJamieKellySamanthaNathanSaraDustinPaulAngelaTylerScottKatherineAndreaGregoryEricaMaryTravisLisaKennethBryanLindseyKristenJoseAlexanderJesseKatieLindsayShannonVanessaCourtneyChristineAliciaCodyAllisonBradleySamuelShawnAprilDerekKathrynKristinChadJennaTaraMariaKrystalJaredAnnaEdwardJuliePeterHollyMarcusKristinaNatalieJordanVictoriaJacquelineCoreyKeithMonicaJuanDonaldCassandraMeghanJoelShanePhillipPatriciaBrettRonaldCatherineGeorgeAntonioCynthiaStacyKathleenRaymondCarlosBrandiDouglasNathanielIanCraigBrandyAlexValerieVeronicaCoryWhitneyGaryDerrickPhilipLuisDianaChelseaLeslieCaitlinLeahNatashaErikaCaseyLatoyaErikDanaVictorBrentDominiqueFrankBrittneyEvanGabrielJuliaCandiceKarenMelanieAdrianStaceyMargaretSheenaWesleyVincentAlexandraKatrinaBethanyNicholeLarryJefferyCurtisCarrieToddBlakeChristianRandyDennisAlison";
const leaderboard = [];
const leaderboardHTML = [];
let localposition;
const leaderboardHTMLElement =
  "<div class='right' id='scoreboard'><div class='introduction' id='inner-scoreboard'><h2>Leaderboards</h2><div class='leaderboards' id='leaderboards-scroll'></div></div></div>";

const circleWraper =
  "<div id='container' class='circle-wrapper'><div class='timer' id='timer'> 120 </div> <div class='points' id='points'> 0 </div> </div>";
const right =
  "<div id='instructions' class='right'> <div class='introduction' id='card'></div>";

let degreeInterval;
const letterCount = 25;

let playing = false;

let points = 50;
let rightCount = 0;
let pasapalabraCount = 0;
let questionCount = 0;

const timerTime = 180;
let currentTimer = 0;
let timeCount = 0;
let stopTimer = false;

let userName = "";
let currentAnswer = "";
let currentQuestion;

const memory = [];

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

function getTop() {
  if (localposition < 10) {
    return 10;
  }
  if (localposition < 25) {
    return 25;
  }
  if (localposition < 50) {
    return 50;
  }
  if (localposition < 100) {
    return 100;
  }

  return ", digamos, no el mejor";
}

function populateFinishInfo() {
  const a = `<div class='introduction' id='finishInfo' style='transform: translateY(900px)'><h2>Finish!</h2><h4>Partida</h4><p>Has tardado un total de ${timeCount} segundos en completar la partida. Has respondido ${questionCount} preguntas, de las cuales ${rightCount} han sido correctas, ${
    questionCount - rightCount - pasapalabraCount
  } han sido incorrectas y ${pasapalabraCount} han sido pasapalabras.</p><h4>Puntos</h4><p>Has conseguido una puntuación de ${points.toFixed(
    0
  )}! Has ganado <bold>${
    rightCount * 10
  } puntos</bold> por preguntas correctas, has perdido ${
    (questionCount - rightCount - pasapalabraCount) * 10
  } puntos por preguntas incorrectas, has perdido ${
    pasapalabraCount * 5
  } puntos usando pasapablabras y has perdido ${
    timeCount * 0.5
  } puntos por tiempo.</p><h4>Scoreboard</h4><p>Con esta puntuación estas en el top ${getTop()} del mundo!</p><p id='scoreAlternate'> Si quieres ver el scoreboard pulsa el botón de abajo</p><div class='butCont'> <div class='answerBut' id='rankingBut'> <h2>Ver ranking</h2></div></div></div> </div>`;
  return a;
}

async function slideRight() {
  document.getElementById("container").classList.remove("slideLeft");
  document.getElementById("instructions").classList.remove("slideLeft");
  document.getElementById("scoreboard").classList.remove("slideLeft");
  document.getElementById("container").classList.add("slideRight");
  document.getElementById("instructions").classList.add("slideRight");
  document.getElementById("scoreboard").classList.add("slideRight");

  document.getElementById("rankingBut").onclick = () => {
    // eslint-disable-next-line no-use-before-define
    showScoreBoard();
  };
}

function hideScoreBoard() {
  slideRight();
  document.getElementById("scoreAlternate").innerHTML =
    "Si quieres ver el scoreboard pulsa el botón de abajo.";
  document.getElementById("rankingBut").innerHTML = " <h2>Ver Ranking</h2>  ";
}

async function slideLeft() {
  document.getElementById("container").classList.remove("slideRight");
  document.getElementById("instructions").classList.remove("slideRight");
  document.getElementById("scoreboard").classList.remove("slideRight");
  document.getElementById("container").classList.add("slideLeft");
  document.getElementById("instructions").classList.add("slideLeft");
  document.getElementById("scoreboard").classList.add("slideLeft");

  await delay(1000);

  if (localposition > 10) {
    document.getElementById("local-pos").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }

  document.getElementById("rankingBut").onclick = () => {
    hideScoreBoard();
  };
}

function showScoreBoard() {
  slideLeft();
  document.getElementById("scoreAlternate").innerHTML =
    "Si quieres ver el rosco pulsa el botón de abajo.";
  document.getElementById("rankingBut").innerHTML = " <h2>Ver rosco</h2>  ";
}

async function gameFinished() {
  const obj = { player: userName, points: points.toFixed(0), type: "local" };
  leaderboard.push(obj);

  leaderboard.sort((a, b) => b.points - a.points);

  leaderboard.map((e) => {
    if (e.type === "local") {
      localposition = leaderboard.indexOf(e) + 1;
    }
    return null;
  });

  leaderboard.forEach((element) => {
    let string;

    if (element.type !== "local") {
      string = `<div class='leaderboard-pos'><div class='position'> ${
        leaderboard.indexOf(element) + 1
      } <hr></div><div class='name'> ${
        element.player
      } <hr></div><div class='position'> ${element.points} <hr></div></div>`;
    } else {
      string = `<div class='leaderboard-pos' id='local-pos'><div class='position'> ${
        leaderboard.indexOf(element) + 1
      } <hr></div><div class='name' style='color: #FF5733; font-size: 50;'> ${
        element.player
      } <hr></div><div class='position'> ${element.points} <hr></div></div>`;
    }

    leaderboardHTML.push(string);
  });

  document.getElementById("body").classList.remove("screen");
  document.getElementById("body").classList.add("screen2");

  document.getElementById("body").innerHTML += leaderboardHTMLElement;

  await delay(5);

  leaderboardHTML.forEach((element) => {
    document.getElementById("leaderboards-scroll").innerHTML =
      document.getElementById("leaderboards-scroll").innerHTML + element;
  });

  const finishPannel = populateFinishInfo();
  document.getElementById("instructions").innerHTML = finishPannel;

  document.getElementById("rankingBut").onclick = () => {
    showScoreBoard();
  };
  await delay(100);
  document.getElementById("finishInfo").classList.add("questionIn");
}

// eslint-disable-next-line no-unused-vars
function checkEnter(next) {
  const e = window.event;
  const keyCode = e.code || e.key;
  if (keyCode === "Enter") {
    next();
  }
}

async function notification(id) {
  document.getElementById(id).classList.remove("noti");
  await delay(10);
  document.getElementById(id).classList.add("noti");
}

async function doTimer() {
  document.getElementById("timer").innerHTML = timerTime;

  while (currentTimer > 0) {
    // eslint-disable-next-line no-await-in-loop
    await delay(1000);

    points -= 0.5;
    currentTimer -= 1;

    timeCount = timerTime - currentTimer;

    document.getElementById("timer").innerHTML = currentTimer;

    if (currentTimer === 0) {
      gameFinished();
    }
    if (currentTimer === 10) {
      document.getElementById("timer").classList.add("timerOut");
    }
    if (stopTimer) {
      break;
    }
  }
}

async function updatePoints() {
  while (!stopTimer) {
    // eslint-disable-next-line no-await-in-loop
    await delay(100);
    document.getElementById("points").innerHTML = points.toFixed(0);
  }
}

function populateCard(title, question, passBut) {
  let card;

  if (passBut) {
    card = `<h2>${title}</h2><p>${question}</p> <label class='input'><input class='inputField2' id='answerInp' type='text' placeholder='Introduce tu respuesta aqui' onkeypress='checkEnter(postAnswer)'/><div class='notification2' id='noti2'>Tienes que poner una respuesta!</div></label></div> <div class='butCont'> <div class='answerBut' id='answerBut' onclick='postAnswer()'> <h2>Responder!</h2>  </div> <div class='passBut' id='passBut' onclick='postAnswer(true)'> <h2>Pasapalabra</h2>  </div></div></div>`;
  } else {
    card = `<h2>${title}</h2><p>${question}</p> <label class='input'><input class='inputField2' id='answerInp' type='text' placeholder='Introduce tu respuesta aqui' onkeypress='checkEnter(postAnswer)'/><div class='notification2' id='noti2'>Tienes que poner una respuesta!</div></label></div> <div class='butCont'> <div class='answerBut' id='answerBut' onclick='postAnswer()'> <h2>Responder!</h2> </div></div>`;
  }

  return card;
}

async function pregunta(i) {
  document.getElementById("card").classList.add("questionIn");

  await delay(400);

  playing = true;

  document.getElementById("answerInp").focus();

  document.getElementById(i).classList.add("seled");

  while (playing) {
    // eslint-disable-next-line no-await-in-loop
    await delay(100);

    if (memory[currentQuestion].answered) {
      document.getElementById(i).classList.remove("seled");

      if (memory[currentQuestion].correct) {
        document.getElementById(i).classList.add("correct");

        document.getElementById("card").classList.remove("questionIn");
        document.getElementById("card").classList.add("questionOut");
      } else if (!memory[currentQuestion].pasapalabra) {
        document.getElementById(i).classList.add("incorrect");

        document.getElementById("card").classList.remove("questionIn");
        document.getElementById("card").classList.add("questionWrong");
      } else {
        document.getElementById("card").classList.remove("questionIn");
        document.getElementById("card").classList.add("questionPass");
      }
      playing = false;
      break;
    }
  }

  currentAnswer = "";

  await delay(400);

  document.getElementById("card").classList.remove("questionOut");
  document.getElementById("card").classList.remove("questionWrong");
  document.getElementById("card").classList.remove("questionPass");
}

// eslint-disable-next-line no-unused-vars
function postAnswer(val) {
  if (playing) {
    currentAnswer = document.getElementById("answerInp").value.toLowerCase();

    if (val) {
      currentAnswer = "pasapalabra";
    }

    if (currentAnswer === "") {
      document.getElementById("answerBut").classList.add("cantStart");
      document.getElementById("answerBut").addEventListener(
        "animationend",
        () => {
          document.getElementById("answerBut").classList.remove("cantStart");
        },
        false
      );
      notification("noti2");
      return;
    }

    questionCount += 1;

    if (!memory[currentQuestion].pasapalabra) {
      if (currentAnswer === "pasapalabra") {
        memory[currentQuestion].answered = true;
        memory[currentQuestion].pasapalabra = true;
        points -= 5;
        pasapalabraCount += 1;
        return;
      }
    }

    if (
      currentAnswer ===
      questions[memory[currentQuestion].variation][currentQuestion].answer
    ) {
      memory[currentQuestion].pasapalabra = false;
      memory[currentQuestion].correct = true;
      memory[currentQuestion].answered = true;

      rightCount += 1;
      points += 10;
    } else {
      memory[currentQuestion].pasapalabra = false;
      memory[currentQuestion].correct = false;
      memory[currentQuestion].answered = true;
      points -= 10;
    }
  }
}

function createLeaderBoard() {
  const names = leaderboardNames.split(/(?=[A-Z])/);

  for (let i = 0; i < names.length; i++) {
    const randomP = Math.floor(Math.random() * 500) - 250;

    const obj = { player: names[i], points: randomP, type: "premade" };
    leaderboard.push(obj);
  }
}

async function welcome() {
  await delay(5);
  document.getElementById("introduction").style =
    "transform: translateY(900px);";
  await delay(10);
  document.getElementById("introduction").classList.add("welcome");

  createLeaderBoard();
}

async function commenceGame() {
  await delay(2000);

  document.getElementById("timer").classList.add("show");
  document.getElementById("points").classList.add("show");

  currentTimer = timerTime;

  doTimer();
  updatePoints();

  for (let i = 19; i < letterCount; i++) {
    currentQuestion = i - 19;

    const vari = memory[currentQuestion].variation;
    document.getElementById("card").innerHTML = populateCard(
      questions[vari][i - 19].title,
      questions[vari][i - 19].question,
      true
    );

    // eslint-disable-next-line no-await-in-loop
    await pregunta(i);
  }

  for (let i = 0; i < 19; i++) {
    currentQuestion = i + (letterCount - 19);

    const vari = memory[currentQuestion].variation;
    document.getElementById("card").innerHTML = populateCard(
      questions[vari][i + (letterCount - 19)].title,
      questions[vari][i + (letterCount - 19)].question,
      true
    );

    // eslint-disable-next-line no-await-in-loop
    await pregunta(i);
  }

  for (let i = 19; i < letterCount; i++) {
    currentQuestion = i - 19;

    if (memory[currentQuestion].pasapalabra) {
      memory[currentQuestion].answered = false;

      const vari = memory[currentQuestion].variation;
      document.getElementById("card").innerHTML = populateCard(
        questions[vari][i - 19].title,
        questions[vari][i - 19].question,
        false
      );

      // eslint-disable-next-line no-await-in-loop
      await pregunta(i);
    }
  }
  for (let i = 0; i < 19; i++) {
    currentQuestion = i + (letterCount - 19);

    if (memory[currentQuestion].pasapalabra) {
      memory[currentQuestion].answered = false;

      const vari = memory[currentQuestion].variation;
      document.getElementById("card").innerHTML = populateCard(
        questions[vari][i + (letterCount - 19)].title,
        questions[vari][i + (letterCount - 19)].question,
        false
      );

      // eslint-disable-next-line no-await-in-loop
      await pregunta(i);
    }
  }

  document.getElementById("card").style = "opacity: 0;";

  stopTimer = true;

  gameFinished();
}

function updateCircle() {
  let currentDeg = 0;
  degreeInterval = 360 / letterCount;
  let circleSize = `${18}vw`;

  if (window.innerWidth <= 500) {
    circleSize = `${25}vw`;
  }

  for (let i = 0; i < letterCount; i++) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `.cssCircle${i} {  position: absolute; opacity: 1; transition: transform 1.5s ease-out 0.1s; transform:rotate( ${currentDeg}deg )  translate(${circleSize})  rotate( -${currentDeg}deg ); }`;
    document.getElementsByTagName("head")[0].appendChild(style);

    document.getElementById(i).classList.add(`cssCircle${i}`);

    currentDeg += degreeInterval;
  }
}

async function createCircle() {
  document.getElementById("body").innerHTML = circleWraper + right;

  for (let i = 0; i < letterCount; i++) {
    const random = Math.floor(Math.random() * 3);

    const letterDiv = `<div class='circle' id=${i}></div>`;

    document.getElementById("container").innerHTML += letterDiv;
    memory.push({
      id: i,
      answered: false,
      correct: false,
      pasapalabra: false,
      variation: random,
    });
  }

  for (let i = 19; i < letterCount; i++) {
    document.getElementById(i).innerHTML =
      questions[0][i - 19].letter.toUpperCase();
  }

  for (let i = 0; i < 19; i++) {
    document.getElementById(i).innerHTML =
      questions[0][i + (letterCount - 19)].letter.toUpperCase();
  }

  await delay(100);

  updateCircle();
  commenceGame();
}

welcome();

// eslint-disable-next-line no-unused-vars
function startGame() {
  userName = document.getElementById("playInp").value;

  if (userName === "") {
    document.getElementById("playBut").classList.add("cantStart");
    document.getElementById("playBut").addEventListener(
      "animationend",
      () => {
        document.getElementById("playBut").classList.remove("cantStart");
      },
      false
    );
    notification("noti");
  } else {
    createCircle();
  }
}
