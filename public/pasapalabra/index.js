//#region VARIABLES

//#region Preguntas y respuestas
const questions = [

    [
        { letter: "a", title: "Con la A", answer: "abducir", question: "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
        { letter: "b", title: "Con la B", answer: "bingo", question: "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
        { letter: "c", title: "Con la C", answer: "churumbel", question: "Niño, crío, bebé"},
        { letter: "d", title: "Con la D", answer: "diarrea", question: "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
        { letter: "e", title: "Con la E", answer: "ectoplasma", question: "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
        { letter: "f", title: "Con la F", answer: "facil", question: "Que no requiere gran esfuerzo, capacidad o dificultad"},
        { letter: "g", title: "Con la G", answer: "galaxia", question: "Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
        { letter: "h", title: "Con la H", answer: "harakiri", question: "Suicidio ritual japonés por desentrañamiento"},
        { letter: "i", title: "Con la I", answer: "iglesia", question: "Templo cristiano"},
        { letter: "j", title: "Con la J", answer: "jabali", question: "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
        { letter: "l", title: "Con la L", answer: "licantropo", question: "Hombre lobo"},
        { letter: "m", title: "Con la M", answer: "misantropo", question: "Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
        { letter: "n", title: "Con la N", answer: "necedad", question: "Demostración de poca inteligencia"},
        { letter: "ñ", title: "Contiene la Ñ", answer: "señal", question: "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
        { letter: "o", title: "Con la O", answer: "orco", question: "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
        { letter: "p", title: "Con la P", answer: "protoss", question: "Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
        { letter: "q", title: "Con la Q", answer: "queso", question: "Producto obtenido por la maduración de la cuajada de la leche"},
        { letter: "r", title: "Con la R", answer: "raton", question: "Roedor"},
        { letter: "s", title: "Con la S", answer: "stackoverflow", question: "Comunidad salvadora de todo desarrollador informático"},
        { letter: "t", title: "Con la T", answer: "terminator", question: "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
        { letter: "u", title: "Con la U", answer: "unamuno", question: "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
        { letter: "v", title: "Con la V", answer: "vikingos", question: "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
        { letter: "x", title: "Contiene la X", answer: "botox", question: "Toxina bacteriana utilizada en cirujía estética"},
        { letter: "y", title: "Contiene la Y", answer: "peyote", question: "Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
        { letter: "z", title: "Con la Z", answer: "zen", question: "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, 
    ],
    [
        { letter: "a", title: "CONTIENE LA A", answer: "salvar", question: "Librar a una persona o a una cosa de un peligro o de una amenaza, o solucionar un problema grave o una situación difícil o comprometida."},
        { letter: "b", title: "CON LA B", answer: "billete", question: "Papel impreso o grabado, generalmente emitido por el banco central de un país, al que se le asigna un valor pecuniario determinado y se emplea como medio legal de pago."},
        { letter: "c", title: "CON LA C", answer: "cruz", question: "Figura geométrica que consiste en dos líneas o barras que se entrecruzan en ángulo recto, de tal forma que una de ellas queda dividida por la mitad"},
        { letter: "d", title: "CON LA D", answer: "despertar", question: "Hacer que alguien deje de dormir o interrumpir el sueño de alguien."},
        { letter: "e", title: "CONTIENE LA E", answer: "mesa", question: "Mueble formado por un tablero horizontal, sostenido por uno o varios pies, con la altura conveniente para poder realizar alguna actividad sobre ella o dejar cosas encima."},
        { letter: "f", title: "CON LA F", answer: "francia", question: "Tierra de los francos."},
        { letter: "g", title: "CONTIENE LA G", answer: "perseguir", question: "Seguir a una persona o animal que huye, con intención de alcanzarlo."},
        { letter: "h", title: "CON LA H", answer: "hijab", question: "Velo que cubre la cabeza."},
        { letter: "i", title: "CONTIENE LA I", answer: "arquitectura", question: "Arte y técnica de diseñar, proyectar y construir edificios y espacios públicos."},
        { letter: "j", title: "CONTIENE LA J", answer: "ojal", question: "Abertura alargada y con los bordes rematados que se hace en el extremo de una pieza de ropa o prenda de vestir para que pueda pasar por ella un botón y abrocharla, o como simple adorno."},
        { letter: "l", title: "CON LA L", answer: "luna", question: "Astro, satélite natural de la Tierra, que gira alrededor de ella y refleja la luz del Sol; tiene una superficie de aspecto volcánico y carece de atmósfera."},
        { letter: "m", title: "CONTIENE LA M", answer: "diagrama", question: "Representación gráfica de las variaciones de un fenómeno o de las relaciones que tienen los elementos o las partes de un conjunto."},
        { letter: "n", title: "CON LA N", answer: "nicotina", question: "Sustancia que se extrae de las hojas del tabaco y que también se puede producir sintéticamente."},
        { letter: "ñ", title: "CONTIENE LA Ñ", answer: "paño", question: "Pieza de tela, normalmente de baja calidad y forma cuadrada o rectangular, que tiene distintos usos, en especial limpiar, secar o cubrir algo."},
        { letter: "o", title: "CONTIENE LA O", answer: "sonido", question: "Sensación o impresión producida en el oído por un conjunto de vibraciones que se propagan por un medio elástico, como el aire."},
        { letter: "p", title: "CON LA P", answer: "pescar", question: "Atrapar peces y otros animales que viven en el mar o en aguas dulces con redes, cañas u otros instrumentos."},
        { letter: "q", title: "CON LA Q", answer: "quasimodo", question: "Personaje de la novela de Victor Hugo, Nuestra Señora de París."},
        { letter: "r", title: "CON LA R", answer: "regalo", question: "Cosa que se da a una persona como muestra de afecto o de consideración."},
        { letter: "s", title: "CON LA S", answer: "sitio", question: "Porción del espacio, real o imaginada, en que se sitúa algo."},
        { letter: "t", title: "CON LA T", answer: "trenza", question: "Tejido que resulta de entrelazar tres hilos u otra cosa parecida pasándolos unos sobre los otros alternativamente y apretándolos."},
        { letter: "u", title: "CONTIENE LA U", answer: "puma", question: "Mamífero felino de unos 190 cm de longitud (cola incluida), pelaje suave de color pardo rojizo o grisáceo, blancuzco en el vientre, cuerpo esbelto, patas cortas, cola larga y uñas fuertes que usa para cazar; es muy veloz, ágil y fiero pero se adapta fácilmente a la cautividad; vive solitario en toda América."},
        { letter: "v", title: "CONTIENE LA V", answer: "polvo", question: "Conjunto de partículas diminutas que flotan en el aire y se depositan sobre los objetos formando una capa de suciedad."},
        { letter: "x", title: "CON LA X", answer: "xilofono", question: "Instrumento musical de percusión formado por una serie de láminas de madera dispuestas horizontalmente y ordenadas según su tamaño que, al ser golpeadas, emiten sonidos correspondientes a diferentes notas musicales."},
        { letter: "y", title: "CONTIENE LA Y", answer: "ley", question: "Regla o norma establecida por una autoridad superior para regular, de acuerdo con la justicia, algún aspecto de las relaciones sociales."},
        { letter: "z", title: "CONTIENE LA Z", answer: "rizo", question: "Mechón de pelo que tiene forma de sortija o espiral."}, 
    ],
    [
        { letter: "a", title: "Con la A", answer: "abducir", question: "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
        { letter: "b", title: "Con la B", answer: "bingo", question: "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
        { letter: "c", title: "Con la C", answer: "churumbel", question: "Niño, crío, bebé"},
        { letter: "d", title: "Con la D", answer: "diarrea", question: "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
        { letter: "e", title: "Con la E", answer: "ectoplasma", question: "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
        { letter: "f", title: "Con la F", answer: "facil", question: "Que no requiere gran esfuerzo, capacidad o dificultad"},
        { letter: "g", title: "Con la G", answer: "galaxia", question: "Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
        { letter: "h", title: "Con la H", answer: "harakiri", question: "Suicidio ritual japonés por desentrañamiento"},
        { letter: "i", title: "Con la I", answer: "iglesia", question: "Templo cristiano"},
        { letter: "j", title: "Con la J", answer: "jabali", question: "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
        { letter: "l", title: "Con la L", answer: "licantropo", question: "Hombre lobo"},
        { letter: "m", title: "Con la M", answer: "misantropo", question: "Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
        { letter: "n", title: "Con la N", answer: "necedad", question: "Demostración de poca inteligencia"},
        { letter: "ñ", title: "Contiene la Ñ", answer: "señal", question: "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
        { letter: "o", title: "Con la O", answer: "orco", question: "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
        { letter: "p", title: "Con la P", answer: "protoss", question: "Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
        { letter: "q", title: "Con la Q", answer: "queso", question: "Producto obtenido por la maduración de la cuajada de la leche"},
        { letter: "r", title: "Con la R", answer: "raton", question: "Roedor"},
        { letter: "s", title: "Con la S", answer: "stackoverflow", question: "Comunidad salvadora de todo desarrollador informático"},
        { letter: "t", title: "Con la T", answer: "terminator", question: "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
        { letter: "u", title: "Con la U", answer: "unamuno", question: "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
        { letter: "v", title: "Con la V", answer: "vikingos", question: "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
        { letter: "x", title: "Contiene la X", answer: "botox", question: "Toxina bacteriana utilizada en cirujía estética"},
        { letter: "y", title: "Contiene la Y", answer: "peyote", question: "Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
        { letter: "z", title: "Con la Z", answer: "zen", question: "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, 
    ]

];

//#endregion

//#region Leaderboards

const leaderboardNames = "MichaelChristopherJessicaMatthewAshleyJenniferJoshuaAmandaDanielDavidJamesRobertJohnJosephAndrewRyanBrandonJasonJustinSarahWilliamJonathanStephanieBrianNicoleNicholasAnthonyHeatherEricElizabethAdamMeganMelissaKevinStevenThomasTimothyChristinaKyleRachelLauraLaurenAmberBrittanyDanielleRichardKimberlyJeffreyAmyCrystalMichelleTiffanyJeremyBenjaminMarkEmilyAaronCharlesRebeccaJacobStephenPatrickSeanErinZacharyJamieKellySamanthaNathanSaraDustinPaulAngelaTylerScottKatherineAndreaGregoryEricaMaryTravisLisaKennethBryanLindseyKristenJoseAlexanderJesseKatieLindsayShannonVanessaCourtneyChristineAliciaCodyAllisonBradleySamuelShawnAprilDerekKathrynKristinChadJennaTaraMariaKrystalJaredAnnaEdwardJuliePeterHollyMarcusKristinaNatalieJordanVictoriaJacquelineCoreyKeithMonicaJuanDonaldCassandraMeghanJoelShanePhillipPatriciaBrettRonaldCatherineGeorgeAntonioCynthiaStacyKathleenRaymondCarlosBrandiDouglasNathanielIanCraigBrandyAlexValerieVeronicaCoryWhitneyGaryDerrickPhilipLuisDianaChelseaLeslieCaitlinLeahNatashaErikaCaseyLatoyaErikDanaVictorBrentDominiqueFrankBrittneyEvanGabrielJuliaCandiceKarenMelanieAdrianStaceyMargaretSheenaWesleyVincentAlexandraKatrinaBethanyNicholeLarryJefferyCurtisCarrieToddBlakeChristianRandyDennisAlison"; //String de nombres. Luego el leaderboard se genera random con estos nombres
const leaderboard = []; //Array que guarda el ranking con objetos ({player: string, points: int, type: string})
let leaderboardHTML = []; //Array que guarda el html de cada 'jugador' en el ranking
let localposition; //Aqui guardamos la posición del jugador local en el ranking
let leaderboardHTMLElement = "<div class='right' id='scoreboard'><div class='introduction' id='inner-scoreboard'><h2>Leaderboards</h2><div class='leaderboards' id='leaderboards-scroll'></div></div></div>"; //El html del panel de leaderboard

//#endregion

//#region Rosco y preguntas

    //html
    let circleWraper = "<div id='container' class='circle-wrapper'><div class='timer' id='timer'> 120 </div> <div class='points' id='points'> 0 </div> </div>"; //Elemento html base circulo
    let right = "<div id='instructions' class='right'> <div class='introduction' id='card'></div>"; //Plantilla para las preguntas

    //variables
    let degreeInterval; //Grados entre letra y letra (puestos en el circulo base 'circleWraper')
    let letterCount = 25; //Numero de letras (Excluyendo la W y la K)

    let playing = false //Esta variable es true minetras se puede jugar y false mientras no (false mientras hay animaciones)

//#endregion

//#region Sistema de puntos

    // Contadores
    let points = 50; //El jugador empieza con 50 puntos
    let rightCount = 0; //Contadoe de preguntas respondidads correctamente
    let pasapalabraCount = 0; //Contadoe de pasapalabras
    let questionCount = 0; //Contador de preguntras hechas

    //Timer
    let timerTime = 180; //El jugador tiene 180 segundos para resolver el rosco
    let currentTimer = 0; //Tiempo que queda
    let timeCount = 0; //Tiempo transcurrido
    let stopTimer = false; //Mientras esto este false el timer funciona (una vez llamada la correspondidente función [doTimer()])


//#endregion

//#region misc
let userName = ""; //Nombre del jugador
let currentAnswer = ""; //Respuesta de las preguntas
let currentQuestion; //Pregunta actual (int 0-24)
let currentId; //Id de la actual pregunta (la A no es el id 0)

let memory = []; //Array donde se guarda los datos de cada pregunta con ojecto ({id: int, answered: bool, correct: bool, pasapalabra: bool, variation: ranomInt[0-2]})

//#endregion

//#endregion

//#region FUNCTIONS

//#region Global functions

    // Esta function me permite parar el programa con 'await' en functiones 'async' por un periodo de milisegundos pasado a ella
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    //Esta funcion se encarga de comprobar si la tecla pulsada por el usuario en un inputField es enter y luego llama a la siguiente funcion pasada
    function checkEnter(next){
        let e = window.event;
        var keyCode = e.code || e.key;
        if (keyCode == 'Enter'){
            next();
        }
    }

    //Esta funcion se encarga de la 'animacion' de la notificación pasada (aparecer y desaparecer) eliminando la class que contiene la animación para prevenir layering
    async function notification(id){

        document.getElementById(id).classList.remove('noti');
        await delay(10);
        document.getElementById(id).classList.add('noti');
    }

    //Esta función se encarga del timer
    async function doTimer(){

        document.getElementById('timer').innerHTML = timerTime;
    
        while(currentTimer > 0){
    
            await delay(1000); //Esperamos 1 segundo

            points -= 0.5; //Bajamos los puntos por 0.5
            currentTimer -= 1; //Bajamos el timer por 1

            timeCount = timerTime - currentTimer; //Actualizamos el timepo que ha pasado

            document.getElementById('timer').innerHTML = currentTimer; //Actualizamos el visual del timer
    
            if(currentTimer === 0){
                gameFinished(); // Si el contador llega a 0 se acaba el juego
    
            }
            if(currentTimer == 10){ //Cuando quedan 10 segundos añade la class 'timerOut' que hace que flashe rojo
                document.getElementById('timer').classList.add('timerOut');
            }
            if(stopTimer){ //Si se activa stopTimer paramos el timer
                break;
            }
        }
    }


    //Esta función de actualizar el elemento html en el que el usuario los puede visualizar
    async function updatePoints(){
    
        while(!stopTimer){ //Mientras el timer este activo, es decir, el jugador este jugando
            await delay(100); //Esperamos 100ms para prevenir freezing
            document.getElementById('points').innerHTML = points.toFixed(0); //Actualizamos el elemento html
        }
    }

    //Esta funcón devuelve el html con el contenido de la pregunta correspondiente con el botón pasapalabra o no
    function populateCard(title, question, passBut){
        
        let card;

        if(passBut){
            card = "<h2>" + title +"</h2><p>" + question +"</p> <label class='input'><input class='inputField2' id='answerInp' type='text' placeholder='Introduce tu respuesta aqui' onkeypress='checkEnter(postAnswer)'/><div class='notification2' id='noti2'>Tienes que poner una respuesta!</div></label></div> <div class='butCont'> <div class='answerBut' id='answerBut' onclick='postAnswer()'> <h2>Responder!</h2>  </div> <div class='passBut' id='passBut' onclick='postAnswer(true)'> <h2>Pasapalabra</h2>  </div></div></div>";
        }
        else{
            card = "<h2>" + title +"</h2><p>" + question +"</p> <label class='input'><input class='inputField2' id='answerInp' type='text' placeholder='Introduce tu respuesta aqui' onkeypress='checkEnter(postAnswer)'/><div class='notification2' id='noti2'>Tienes que poner una respuesta!</div></label></div> <div class='butCont'> <div class='answerBut' id='answerBut' onclick='postAnswer()'> <h2>Responder!</h2> </div></div>";
        }
        
        return card;
    }


    //Esta función anima la pregunta y la letra actual (ver función commenceGame() para contexto)
    async function pregunta(i){
        
        document.getElementById('card').classList.add('questionIn'); //Aqui llamamos la animación 'questionIn' para que 'entre' la pregunta
    
        await delay(400); //Esperamos 400ms para dar tiempo a la animación a terminar con margen
        
        playing = true; //En este puno el usuario ya puede responser asi que playing = true

        document.getElementById('answerInp').focus(); //Llamamos focus al inputField de respuestas

        document.getElementById(i).classList.add('seled'); //Ponemos la class 'seled' al circulo correspondiente que se encarga de la animación fadeOutIn y el color azul claro del circulo seleccionado
                

        while(playing){ 
            await delay(100); //Esperamos 100ms para evitar sobrecargar el navegador (sin delay se frezea)

            if(memory[currentQuestion].answered){    //Aqui miramos si la pregunta ha estado respondida

                document.getElementById(i).classList.remove('seled'); //Quitamos la class 'seled' (deselecionando la pregunta visualmente)

                //Esta zona se encarga de poner la class correspondiente al circulo (ya sea correcto, incorrecto o dejandolo igual si es pasapalabra) y luego anima el elemento 'card' conforme la respuesta
                if(memory[currentQuestion].correct){
                    document.getElementById(i).classList.add('correct');

                    document.getElementById('card').classList.remove('questionIn');
                    document.getElementById('card').classList.add('questionOut'); //Correcto llama 'questionOut' que la tira para arriba
                }
                else if(!memory[currentQuestion].pasapalabra){
                    document.getElementById(i).classList.add('incorrect');

                    document.getElementById('card').classList.remove('questionIn');
                    document.getElementById('card').classList.add('questionWrong'); //Incorrcto llama a 'questionWrong' que la tira para al lado (desechando la pregunta)      
                }
                else{
                    
                    document.getElementById('card').classList.remove('questionIn');
                    document.getElementById('card').classList.add('questionPass'); //Pasapalabra llama a 'questionPass' que la 'devuelve' tirandola para donde vienen las preguntas (abajo)
                }
                playing = false; //Aqui ya no se puede juger asi que paramos playing
                break; //y salimos del while loop
            }
        }

        currentAnswer = ""; //Ponemos currentAnswer a vacio  

        await delay(400); //Esperamos a la animación con margen
        
        //Retiramos las clases con las animaciónes (sea cual sea). Como la animación esa llamada con el parametro 'forwards' la carta se queda fuera de vista (ultimo frame de la animación) hasta que se vuelve a llamar
        document.getElementById('card').classList.remove('questionOut');
        document.getElementById('card').classList.remove('questionWrong');
        document.getElementById('card').classList.remove('questionPass');
    }


    //Esta función se llama a través del botón 'answerBut' o de la función checkEnter dese el InputField de la respuesta
    function postAnswer(val){

        if(playing){ //Checkeamos si algo se esta animando o se puede jugar

            currentAnswer = document.getElementById('answerInp').value.toLowerCase(); //Cojemos el valor del inputField de la respuesta
            
            //Si se le pasa true a esta función es que viene del botón pasapalabra asi que cacheamos currentAnswer y le introducimos el valor 'pasapalabra'
            if(val){ 
                currentAnswer = "pasapalabra";
            }
            
            //Si el valor es vacio animamos el botón y llamamos notificación con la id de la notificación correspondiente, luego usamos return para prevenir que el siguiente codigo se ejecute
            if(currentAnswer === ""){ 
                document.getElementById('answerBut').classList.add('cantStart');
                document.getElementById('answerBut').addEventListener("animationend", function() { document.getElementById('answerBut').classList.remove('cantStart'); }, false);
                notification('noti2');
                return;
            }
            
            questionCount +=1; //Añadimos 1 al contador de preguntas hechas
            
            //Si no se ha usado pasapalabra en esta pregunta
            if(!memory[currentQuestion].pasapalabra){
                //Si el valor es pasapalabra, ponemos la pregunta como respondida y como pasapalabra usado
                if(currentAnswer === "pasapalabra"){
                    memory[currentQuestion].answered = true;
                    memory[currentQuestion].pasapalabra = true;
                    points -= 5; //Retiramos 5 puntos por usar pasapalabra
                    pasapalabraCount += 1; //Añadimos 1 al contador de pasapalabras
                    return; //Retornamos porque no nos interesa correr el codigo de abajo
                }
            }
            
            //Si la respuesta es correcta, marcamos la pregunta como respondida y correcta, quitamos el parametro pasapalabra para que la función pregunta ponga la class correcta
            if(currentAnswer === questions[memory[currentQuestion].variation][currentQuestion].answer){
                memory[currentQuestion].pasapalabra = false;
                memory[currentQuestion].correct = true;
                memory[currentQuestion].answered = true;
        
                rightCount += 1; //Añadimos 1 al contador de preguntas correctas
                points += 10; //Añadimos 10 puntos por pregunta correcta
            }else{
                memory[currentQuestion].pasapalabra = false;
                memory[currentQuestion].correct = false;
                memory[currentQuestion].answered = true;
                points -= 10; //Quitamos 10 puntos por pregunta incorrecta
            }
        }
    }

    //Esta función devuelve el html de la pantalla final (solo la parte del medio) con la información correcta
    function populateFinishInfo(){

        let a = `<div class='introduction' id='finishInfo' style='transform: translateY(900px)'><h2>Finish!</h2><h4>Partida</h4><p>Has tardado un total de ${timeCount} segundos en completar la partida. Has respondido ${questionCount} preguntas, de las cuales ${rightCount} han sido correctas, ${questionCount - rightCount - pasapalabraCount} han sido incorrectas y ${pasapalabraCount} han sido pasapalabras.</p><h4>Puntos</h4><p>Has conseguido una puntuación de ${points.toFixed(0)}! Has ganado <bold>${rightCount * 10} puntos</bold> por preguntas correctas, has perdido ${(questionCount - rightCount - pasapalabraCount) * 10} puntos por preguntas incorrectas, has perdido ${pasapalabraCount * 5} puntos usando pasapablabras y has perdido ${timeCount * 0.5} puntos por tiempo.</p><h4>Scoreboard</h4><p>Con esta puntuación estas en el top ${getTop()} del mundo!</p><p id='scoreAlternate'> Si quieres ver el scoreboard pulsa el botón de abajo</p><div class='butCont'> <div class='answerBut' id='rankingBut'> <h2>Ver ranking</h2></div></div></div> </div>`;
        return a;
    }

    //Esta función solo la llama populateFinishInfo() y devuelve el top mundial en el que el jugador ha quedado. (top 10, top 50...)
    function getTop(){

        if(localposition < 10){
            return 10;
        }
        else if(localposition < 25){
            return 25;
        }
        else if(localposition < 50){
            return 50;
        }
        else if(localposition < 100){
            return 100;
        }
        else{
            return ", digamos, no el mejor";
        }
    }


    //#region Panel final slide animations y cambios de texto

    //Esta función es la que se llama, llama a slideLeft() y cambia el texto correspondiente;
    function showScoreBoard(){
        slideLeft();
        document.getElementById('scoreAlternate').innerHTML = "Si quieres ver el rosco pulsa el botón de abajo.";
        document.getElementById('rankingBut').innerHTML = " <h2>Ver rosco</h2>  ";
    }

    //Esta función es la que se llama, llama a slideRight() y cambia el texto correspondiente;
    function hideScoreBoard(){
        slideRight();    
        document.getElementById('scoreAlternate').innerHTML = "Si quieres ver el scoreboard pulsa el botón de abajo.";
        document.getElementById('rankingBut').innerHTML = " <h2>Ver Ranking</h2>  ";
    } 
    

    //Esta función anima los 3 paneles y hace un 'scroll' al elemento del jugador en el ranking al cabo de 1 segundo (si has quedado mas bajo que top 10, sino no hace falta), luego cambia la función del botón para poder volver
    async function slideLeft(){
        document.getElementById('container').classList.remove('slideRight');
        document.getElementById('instructions').classList.remove('slideRight');
        document.getElementById('scoreboard').classList.remove('slideRight');
        document.getElementById('container').classList.add('slideLeft');
        document.getElementById('instructions').classList.add('slideLeft');
        document.getElementById('scoreboard').classList.add('slideLeft');

        await delay(1000);

        if(localposition > 10){
            document.getElementById('local-pos').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
        }

        document.getElementById('rankingBut').onclick = function(event) {
            hideScoreBoard();
        }
    
    }  
    
    //Esta función anima los 3 paneles y cambia la función del botón para poder volver
    async function slideRight(){
        document.getElementById('container').classList.remove('slideLeft');
        document.getElementById('instructions').classList.remove('slideLeft');
        document.getElementById('scoreboard').classList.remove('slideLeft');
        document.getElementById('container').classList.add('slideRight');
        document.getElementById('instructions').classList.add('slideRight');
        document.getElementById('scoreboard').classList.add('slideRight');
    
        document.getElementById('rankingBut').onclick = function(event) {
            showScoreBoard();
        }
    } 
    

    //#endregion


//#endregion


//#region Programa

welcome(); //Lamamos la primera funcion

    //Esta funcion se ocupa de la primera animacion (si no uso delays y pongo el translateY(900px) la animacion no ocurre al recargar la pagina)
    async function welcome(){
        await delay(5);
        document.getElementById('introduction').style = 'transform: translateY(900px);';
        await delay(10);
        document.getElementById('introduction').classList.add('welcome');

        createLeaderBoard(); //Lama a la funcion que crea el ranking
    }


    //He optado por crear un leaderboard random para poder tener una gran cantidad de 'players' sin tener que crearlos de uno en uno. Esta función separa la string de nombres, las pone en un array y luego, creando una puntuación random [-250, 250] crea la 'base de datos' del ranking
    function createLeaderBoard(){
    
        let names = leaderboardNames.split(/(?=[A-Z])/);
    
        for(i = 0; i< names.length; i++){
    
            let randomP = Math.floor(Math.random() * 500) - 250;
    
            let obj = {player: names[i], points: randomP, type: 'premade'} //type 'premade' es usado para diferenciar las puntuaciones del jugador real con estas
            leaderboard.push(obj);
        }
    }


    //Esta función se llama cuando el jugador presiona el botón para empezar a jugar o pulsa el enter en el inputField 'playInp' del index.html
    function startGame(){

        userName = document.getElementById('playInp').value; //Cojemos el valor del InputField
    
        if(userName === ""){ //Si no hay nombre animamos el botón y llamamos a la funcón de la notificación
            document.getElementById('playBut').classList.add('cantStart');
            document.getElementById('playBut').addEventListener("animationend", function() { document.getElementById('playBut').classList.remove('cantStart'); }, false); //Con el event listener podemos eliminar la class de la animación en cuanto acaba
            notification('noti');
        }
        else{ //Si hay un nombre creamos en rosco
            createCircle();
        }
    }

    //Esta función crea el rosco y la plantilla para las preguntas usando los elementos declarados en la sección VARIABLES -> Rosco y preguntas
    async function createCircle(){

        document.getElementById('body').innerHTML = circleWraper + right //Aqui es donde cambiamos el contenido de body al definido anteriormente (por alguna razón getElementsByTagName('body') no me funciona)
        
        for(i = 0; i< letterCount; i++){
    
            let random = Math.floor(Math.random() * 3);
            
            let letterDiv = "<div class='circle' id="+ i + '></div>'; //Creamos los circulos de cada letra con el id correspondiente

            document.getElementById('container').innerHTML += letterDiv; //Añadimos el circulo al container creado anteriormente
            memory.push({id: i, answered: false, correct: false, pasapalabra: false, variation: random}); //Aqui creo los datos de cada pregunta en su estado default, con una variación random [0-2] | La variación corresponde a los arrays de Preguntas y respuestas
        }
        
        //A causa de la animación usada el circulo con id 0 no es la A, sinó la G. Por eso, empiezo por el id 19, que es la A, hasta el final (F) y luego de la G hasta la Z 
        //Aqui añado la letra correspondiente a cada circulo
        for(i = 19; i<letterCount; i++){
            document.getElementById(i).innerHTML =  questions[0][i-19].letter.toUpperCase();
        }
    
        for(i = 0; i< 19; i++){
            document.getElementById(i).innerHTML =  questions[0][i+(letterCount-19)].letter.toUpperCase();
        }

        await delay(100); //Esperamos 100ms

        updateCircle(); //llamamos updateCirculo (que se encarga de la animación y posición de las letras)
        commenceGame(); //Y llamamos tabién a la función que se encarga de la logica del juego
    }


    //Aqui usamos las variables definidas en VARIABLES -> Rosco y preguntas para animar y posicionar las letras.
    function updateCircle(){
        let currentDeg = 0;
        degreeInterval = 360/letterCount;
        let circleSize =  18+'vw';
    
        if(window.innerWidth <= 500){ //Esto se encarga de cambiar la medida en caso de pantalla pequeña (la parte responsive no esta muy bien hecha ya que no la he terminado)
            circleSize = 25 + 'vw';
    
        }
    
        for(i = 0; i< letterCount; i++){
            
            //Creo un elemento style conteniendo una class para cada circulo. La clase contiene la posición final del circulo y la animación se hace a través de 'transition' de la class 'circulo' que ya tienen.
            let style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = '.cssCircle' + i + ' {  position: absolute; opacity: 1; transition: transform 1.5s ease-out 0.1s; transform:rotate( '+ currentDeg +'deg )  translate(' + circleSize +')  rotate( -'+ currentDeg +'deg ); }';
            document.getElementsByTagName('head')[0].appendChild(style);
            
            //le añado la class al
            document.getElementById(i).classList.add('cssCircle'+i);
            //Preparo la variable currentDeg para el siguiente circulo
            currentDeg += degreeInterval;
        }
    
    }


    //Esta función es la logica del juego
    async function commenceGame(){

        await delay(2000); //Esperamos 2s
        
        //Mostramos el timer y el contador de puntos
        document.getElementById('timer').classList.add('show');
        document.getElementById('points').classList.add('show');
        
        //Marcamos que el tiempo actual es el tiempo maximo (180s definido en VARIABLES -> Sistema de puntos -> timer)
        currentTimer = timerTime;

        //Activamos el timer y el contador de puntos
        doTimer();
        updatePoints();
        
        //Empezamos por la A, es decir circulo con id 19
        for(i = 19; i<letterCount; i++){
            
            currentId = i; //Marcamos el circulo que estamos tratando
            currentQuestion = i-19; //Marcamos que la pregunta actual es i-19 (porque en VARIABLES -> Preguntas y respuestas la A es el 0, no el 19...)

            let vari = memory[currentQuestion].variation; //Cojemos la variación de la pregunta actual
            document.getElementById('card').innerHTML = populateCard(questions[vari][i-19].title, questions[vari][i-19].question, true); //Ponemos el contenido correcto en el elemento con id 'carta' que es la plantilla de las preguntas

            await pregunta(i); //Llamaos la función pregunta y esperamos a que termine
                
        }
        //Repetimos lo de arriba pero ahora empezamos por la G, id 0 hasta el final (Z)
        for(i = 0; i<19; i++){
                
            currentId = i;
            currentQuestion = i+(letterCount-19);
    
            let vari = memory[currentQuestion].variation;
            document.getElementById('card').innerHTML = populateCard(questions[vari][i+(letterCount-19)].title, questions[vari][i+(letterCount-19)].question, true);
           
            await pregunta(i);
        }


        //Aqui hacemos el poceso una vez mas, pero solo nos paramos a preguntar si la pregunta ha sido respondida con pasapalabra anteriormente, y en esas reseteamos el parametro 'answered' para que la función pregunta(int) no se la salte
        for(i = 19; i<letterCount; i++){
                
            currentId = i;
            currentQuestion = i-19;
    
            if(memory[currentQuestion].pasapalabra){ //Si se ha usado pasapalabra en esta pregunta

                memory[currentQuestion].answered = false; //Reseteamos parametro respondida

                let vari = memory[currentQuestion].variation;
                document.getElementById('card').innerHTML = populateCard(questions[vari][i-19].title, questions[vari][i-19].question, false);
                
                await pregunta(i);
                
            }
        }
        for(i = 0; i<19; i++){
                
            currentId = i;
            currentQuestion = i+(letterCount-19);
    
            if(memory[currentQuestion].pasapalabra){

                memory[currentQuestion].answered = false;

                let vari = memory[currentQuestion].variation;
                document.getElementById('card').innerHTML = populateCard(questions[vari][i+(letterCount-19)].title, questions[vari][i+(letterCount-19)].question, false);
                
                await pregunta(i);
            }
            
        }

        //Como solo se puede usar pasapalabra una vez por pregunta una vez llegaos aqui, el juego termina si o si

        document.getElementById('card').style = 'opacity: 0;'; //Cambiamos la opacidad de la carta a 0 para prevenir flashing mientras se anima la carta final

        stopTimer = true; //Paramos el timer

        gameFinished(); //Llamamos la función gameFinished();
        
    }

    //Esta función se ejecuta al finalizar el juego y se encarga de preparar el leaderboard y de presentar la pantalla final
    async function gameFinished(){
        //Aqui añadimos el jugador local en el ranking
        let obj = {player: userName, points: points.toFixed(0), type: "local"};
        leaderboard.push(obj);

        //Ordenamos el array leaderboard conforme los puntos de cada objeto
        leaderboard.sort(function(a, b) {
            return b.points - a.points;
        });

        //Usamos la función map para encontrar el jugador local en el array leaderboard (sin usar map no me encontraba el jugador y devolvia -1)
        leaderboard.map(function(e) {if(e.type === 'local'){localposition = leaderboard.indexOf(e) + 1;}})
        
        //Con un foreach, generamos el elemento html de cada jugador del ranking y lo ponemos en el array leaderboardHTML. Pongo un style diferente para el jugador local para que sea mas distinguible
        leaderboard.forEach(element => {
            let string;
    
            if(element.type != 'local'){
                string = `<div class='leaderboard-pos'><div class='position'> ${leaderboard.indexOf(element) + 1} <hr></div><div class='name'> ${element.player} <hr></div><div class='position'> ${element.points} <hr></div></div>`;
            }
            else{
                string = `<div class='leaderboard-pos' id='local-pos'><div class='position'> ${leaderboard.indexOf(element) + 1} <hr></div><div class='name' style='color: #FF5733; font-size: 50;'> ${element.player} <hr></div><div class='position'> ${element.points} <hr></div></div>`;
            }
            
            leaderboardHTML.push(string);
        });
    
        //Aqui cambio la class del body a 'screen2', screen2 tiene como width 150vw asi que cabe otro elemento con 50% de width (de la pantralla), display: flex; se encarga de que no tenga que poner 33% a cada elemento
        document.getElementById('body').classList.remove('screen');
        document.getElementById('body').classList.add('screen2');

        //Aqui añado el panel de leaderboard al body
        document.getElementById('body').innerHTML += leaderboardHTMLElement;
    
        await delay(5); //Esperamos 5ms para poder cachear los elementos añadidos por id

        //Añadimos los elementos HTML creados por cada jugador al panel de leaderboard justo añadido
        leaderboardHTML.forEach(element => {
            document.getElementById('leaderboards-scroll').innerHTML = document.getElementById('leaderboards-scroll').innerHTML + element;
        });
        
        let finishPannel = populateFinishInfo(); //Llamamos la función populateFinishInfo() que nos devuelve el html del panel final con la información correcta
        document.getElementById('instructions').innerHTML = finishPannel; //Y lo añadimos al elemento con id='instructions' (es un panel reusado por eso tiene esa id)
        
        //Aqui definimos la función onclick del botón de la pagina final
        document.getElementById('rankingBut').onclick = function(event) {
            showScoreBoard(); //Llamamos showScoreBoard();
        }
        await delay(100); //Esperamos 100ms
        document.getElementById('finishInfo').classList.add('questionIn'); //Añadimos la class 'questionIn' ahora que los paneles estan preparados
    }



//#endregion

//#endregion