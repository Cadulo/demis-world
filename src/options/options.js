import BiologaImage from "../assets/img/Biologa.png"
import PianistaImage from "../assets/img/Pianista.png"
import BiologyJungleImage from "../assets/img/biologyJungle.png"
import BirdImage from "../assets/img/bird.png"
import DancingBirdImage from "../assets/img/dancingbird.png"
import loveSongSound from "../assets/sounds/lovesong.mp3"
import finalColibriImage from "../assets/img/FinalColibri.png"
import plantasImage from "../assets/img/Plantas.png"

import biologyNorteImage from "../assets/img/biologyNorte.png"
import ballenanorteImage from "../assets/img/ballenanorte.png"
import renopolarImage from "../assets/img/renopolar.png"
import auroraborealImage from "../assets/img/auroraboreal.png"
import rfySound from "../assets/sounds/rfy.mp3"

import biologyOceanImage from "../assets/img/biologyOcean.png"
import CoralImage from "../assets/img/Coral.png"
import deepoceanImage from "../assets/img/deepocean.png"

import forestSound from "../assets/sounds/forest.mp3"
import ciudadrural12Image from "../assets/img/ciudadrural2.png"
import bosqueterrorImage from "../assets/img/bosqueterror.png"
import casabosqueImage from "../assets/img/casabosque.png"
import criaturaImage from "../assets/img/criatura.png"
import parejabosqueImage from "../assets/img/parejabosque.png"

import avesloveImage from "../assets/img/aveslove.png"
import aveslovefinImage from "../assets/img/aveslovefin.png"

import composicionImage from "../assets/img/composicion.png"
import composicion2Image from "../assets/img/composicion2.png"
import interImage from "../assets/img/inter.png"
import pianoDuetSound from "../assets/sounds/pianoduet.mp3"

// Personaje 1 - Bióloga
export const biologa = {
  profesion: "Bióloga",
  descripcion:
    "Recién graduada en biología, esta joven científica está emocionada por comenzar su carrera en la investigación y conservación de la biodiversidad. Su amor por la naturaleza la lleva a explorar ecosistemas diversos para estudiar la flora y fauna y contribuir a la comprensión y protección del medio ambiente. Su carrera la llevara a conocer lugares llenos de vida.",
  image: BiologaImage,
};


// Personaje 2 - Musica
export const pianista = {
  profesion: "Artista",
  descripcion:
    "En este mundo Demis ha escogido la carrera grado en musica. Aun esta aprendiendo en la universidad, y va a tener que tomar decisiones que la van a llevar a completar su desarrollo en el arte.",
  image: PianistaImage,
};

// Escenarios Biologa
export const selvaEscenario = {
  nombre: "Selva",
  description:
    "Las selvas de América del Sur son lugares exóticos y ricos en vida, la naturaleza ha sido tan sabia que ha logrado establecer relaciones únicas entre los seres que cobija.",
  image: BiologyJungleImage,
  icon: "fa-solid fa-leaf",
  option:
    "Demis se une a una expedición científica en una densa selva tropical para estudiar la biodiversidad de la flora y fauna terrestre.",
  resultado:
    "Demis llega a una ciudad en el oriente, alquila un departamento, se acomoda y toma agua. Al día siguiente va a su primer día de trabajo, conoce al equipo al cual formará parte, el líder le da dos opciones: Si enfocarse en la fauna o la flora. La selva ecuatoriana es conocida por su rica diversidad de especies de plantas y animales. ¿Qué camino tomará?.",
  opciones: [
    {
      icon: "fa-solid fa-paw",
      image: BiologyJungleImage,
      texto:
        "Se decide por la fauna, enfocándose en el estudio de especies de aves exóticas.",
      resultado:
        "Demis se adentra en la selva en busca de aves raras y exóticas. Desarrolla habilidades de observación y paciencia, mientras documenta una variedad de especies que nunca había visto antes. Su pasión por las aves la lleva a descubrir un nuevo comportamiento de cortejo en una especie en peligro de extinción.",
      opciones: [
        {
          icon: "fa-solid fa-dove",
          texto:
            "Demis esta muy curiosa respecto a una ave con un plumaje de color azul y rojizo, decide seguir observando.",
          resultado:
            "Demis sigue observando a la misterioza ave de plumaje colorido. Le parece haberlo visto en libros, su memoria no le permite recordar todo pero algo le dice que es muy importante el ave.",
          opciones: [
            {
              icon: "fa-solid fa-dove",
              texto: "Se acerca más para intentar tomar una foto de cerca.",
              resultado:
                "Demis se acerca sigilosamente al ave y logra capturar una increíble foto de cerca.",
              image: BirdImage,
              opciones: [
                {
                  texto:
                    "Demis regresa al campamento, esta muy emocionada con su foto, desea descansar y compartir sus fotos.",
                  resultado:
                    "Sus colegas ven la foto, el ave en cuestion es una especie en peligro de extinsion y muy dificil de fotografiar. Su fotografia va a ayudar a que las persones tomen conciencia sobre la importancia de conservar su habitat. Demis empieza a escribir un articulo sobre el ave en donde va a publicar sus fotos. Este es el fin de este camino y a la vez el inicio de mas logros.",
                },
              ],
            },
            {
              icon: "fa-solid fa-dove",
              texto:
                "Observa el comportamiento del ave a lo largo del día para entender mejor sus hábitos.",
              resultado:
                "Demis pasa horas observando el comportamiento del ave exótica. Descubre que su patrón de vuelo está relacionado con la búsqueda de alimento y el cortejo.",
              image: DancingBirdImage,
              opciones: [
                {
                  icon: "fa-solid fa-dove",
                  texto:
                    "Demis observa detalladamente y anota lo que ve, deja identificado el area para volver y seguir estudiando a la especie.",
                  resultado:
                    " El ave que estaba observando se detiene frente a otra mas pequeña, al parecer es una hembra de la misma especie, esta tiene los colores rojizos mas resaltados, mientras que el ave macho tiene los colores azules mas llamativos. El macho empieza a danzar frente a la hembra, mueve sus alas de arriba hacia abajo como si llevara una capa y bailara alguna especie de flamenco, mientras da brinquitos alrededor de la hembra. Demis esta muy emocionada y piensa que se ve muy hermoso haciendo su danza, 'Un hombre se veria muy ridiculo haciendo esas cosas, no soportaria estar con nadie que le de por hacer ridiculeces, en las aves esta bien, en los humanos no jaja' se dice asi misma. Demis se retira con un buen sabor en su corazon. Este es el fin de este camino, sin duda Demis va a volver y seguir documentando hasta publicar un grandioso paper sobre el comportamiento del ave.",
                },
              ],
            },
          ],
        },
        {
          icon: "fa-solid fa-dove",
          texto:
            "Demis ve a otra persona, un joven que esta observando un grupo de colibries, se acerca a saludar a un posible colega de profesion.",
          resultado:
            "El joven se voltea y le dice nervioso sin siquiera saludar, 'cuantas aves has visto?' Este le empieza enseñar las fotos que ha tomado.",
          music: loveSongSound,
          image: finalColibriImage,
          opciones: [
            {
              texto:
                "Le pregunta sobre un colibri que se repite bastante entre sus fotos",
              resultado:
                "El joven le comenta 'Los colibries son aves fascinantes, son la unica ave en el mundo que pueden volar hacia atras, su modo de cortejo es una especie de baile, los machos vuelan de un lado hacia a otro dando lo mejor de si para que la hembra le brinde su atencion y decida hacer un nido con el.'. Joven le indica a Demis que observe, justo hay un colibri tomando nectar de las flores.",
              image: finalColibriImage,
              opciones: [
                {
                  texto:
                    "Demis se despide, es hora de regresar a su base, sus compañeros deben estar preguntando por ella.",
                  resultado:
                    "El joven le agradece por la compañia y le regala una sonrisa. Demis vuelve fascinada por el mundo de las aves y le agrado conocer a alguien que comparte su pasión. El camino de ella apenas empieza, aun tiene muchas decisiones que tomar pero sin duda su talento y capacidad la llevaran a alcanzar lo que se propone. Este es el fin de esta ruta. Este final termina con un comienzo lleno de posibilidades para Demis.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      icon: "fa-brands fa-pagelines",
      texto:
        "Opta por la flora, concentrándose en la investigación de plantas medicinales autóctonas.",
      resultado:
        "Demis se embarca en la selva ecuatoriana con su equipo de investigación para estudiar las plantas medicinales únicas de la región. Su conocimiento botánico se expande mientras documenta y recolecta especies que han sido utilizadas tradicionalmente por las comunidades locales para tratamientos de salud. Durante el camino ve muchas flores fascinantes, incluso llega a reconocer una especie de orquidea y recuerda a su mami, sin duda a penas regrese le enviara muchas fotos y le contara lo aprendido, no hay nadie mejor para escucharla sobre plantas que su mami, Doña Teresa n.n .",
      opciones: [
        {
          icon: "fa-brands fa-pagelines",
          texto:
            "Durante sus exploraciones, Demis encuentra una planta desconocida con características inusuales. Decide investigarla a fondo.",
          resultado:
            "La planta desconocida resulta ser una especie completamente nueva para la ciencia. Demis y su equipo trabajan intensamente para caracterizarla y estudiar sus propiedades. Su descubrimiento se convierte en un hito botánico y es nombrada en honor a su investigación.",
          image: plantasImage,
          opciones: [
            {
              icon: "fa-brands fa-pagelines",
              texto:
                "Demis decide recolectar muestras de la planta para análisis en el laboratorio.",
              resultado:
                "Los análisis de laboratorio revelan compuestos químicos prometedores en la planta, con potencial para el desarrollo de nuevos medicamentos. Demis se convierte en una figura influyente en la investigación de plantas medicinales y su trabajo tiene un impacto significativo en la industria farmacéutica. Este es el fin de este camino. Demis decide aprovechar los efectos medicinales de las plantas para desarrollar nuevos medicamentos, esta sera su linea de investigacion. Le espera un camino dificil por la cantidad de estudios que debe realizar pero Demis es una mujer con pasion y fiereza cuando de ciencia se trata.",
            },
            {
              icon: "fa-brands fa-pagelines",
              texto:
                "Demis opta por observar la planta en su entorno natural, documentando su comportamiento y su interacción con otros seres vivos.",
              resultado:
                "Las observaciones de Demis revelan que la planta desconocida tiene relaciones simbióticas con hongos y insectos específicos. Su estudio sobre estas interacciones ayuda a comprender mejor los ecosistemas y la interdependencia de las especies en la selva. Este es el fin de este camino. Demis se decide por seguir una linea de investigacion sobre las relaciones entre plantas y animales para publicar articulos que ayuden a la preservacion del medioambiente. Demis se encuentra a si misma fascinada como los seres vivos interactuan en un perfecto equilibrio.",
            },
          ],
        },
      ],
    },
  ],
};

export const antartidaEscenario = {
  nombre: "Antártida",
  description:
    "Explorar la Antártida implica un viaje largo y agotador hacia un lugar remoto con climas extremadamente severos. Los paisajes pueden parecer hermosos en postales, pero se necesita una gran fortaleza mental y física para poder llegar a disfrutarlos plenamente.",
  option:
    "Demis se embarca en una misión polar para investigar la vida en climas extremos.",
  icon: "fa-solid fa-snowflake",
  image: biologyNorteImage,
  opciones: [
    {
      icon: "fa-solid fa-snowflake",
      texto:
        "Demis revisa su mochila y ve la cantidad de abrigos y mantas que le ha enviado su mami, piensa 'Que linda ella!'. Muy emocionada desembarca.",
      resultado:
        "Demis se adentra en el impresionante paisaje polar, enfrentando desafíos extremos y admirando la belleza única de la región. Su curiosidad la guía en esta nueva exploración.",
      opciones: [
        {
          icon: "fa-solid fa-snowflake",
          texto:
            "Demis se une a un equipo de científicos que estudian la vida marina en las aguas polares.",
          resultado:
            "Trabajando junto a expertos en biología marina, Demis investiga la vida en el océano polar. Descubre especies marinas adaptadas a las condiciones extremas y contribuye a la comprensión de los ecosistemas polares. Su trabajo se publica en revistas científicas de renombre.",
          image: ballenanorteImage,
          opciones: [
            {
              icon: "fa-solid fa-snowflake",
              texto:
                "Demis se enfoca en la investigación de la migración de las ballenas en las aguas frías.",

              resultado:
                "Demis dedica su tiempo a seguir y documentar la migración de ballenas en el polo. Sus hallazgos revelan patrones migratorios únicos y las adaptaciones de las ballenas a las bajas temperaturas. Sus investigaciones se presentan en conferencias internacionales y generan conciencia sobre la conservación marina. Demis esta muy feliz, no solo ha logrado conocer la nieve si no que ademas ha logrado poder estudiar sobre ballenas incluida su animal favorito del mundo mundial jaja las orcas c:. Este es el fin de esta ruta :')",
            },
          ],
        },
        {
          icon: "fa-solid fa-snowflake",
          texto:
            "Demis se une a un equipo de investigación en la vida terrestre polar, estudiando la flora y fauna en la tundra.",
          resultado:
            "Junto a otros científicos, Demis explora la tundra polar, documentando la adaptación de plantas y animales al frío extremo. Su estudio contribuye a la comprensión de cómo la vida sobrevive en estas condiciones y su trabajo se utiliza para la conservación de la región.",
          image: renopolarImage,
          opciones: [
            {
              icon: "fa-solid fa-snowflake",
              texto: "Demis se centra en el estudio de los renos árticos.",
              resultado:
                "La investigación de Demis sobre los renos árticos revela conexiones vitales entre esta especie y el ecosistema polar. Sus esfuerzos contribuyen a la protección de los renos y a la promoción de un equilibrio saludable en la tundra. Los renos le recuerdan a la navidad, su epoca favorita del año. Demis pasara los siguientes dias documentando el comportamiento de los mismos y escribiendo un importante articulo cientifico. Este es el fin de este camino.",
            },
          ],
        },
        {
          icon: "fa-solid fa-snowflake",
          texto:
            "Demis se aventura en expediciones fotográficas para capturar la belleza del paisaje polar.",
          resultado:
            "Armada con su cámara, Demis explora cada rincón del país polar, capturando imágenes impresionantes de la vida silvestre y los paisajes únicos. Sus fotografías se vuelven virales en las redes sociales, inspirando a muchas personas a interesarse por la conservación del Ártico.",

          opciones: [
            {
              icon: "fa-solid fa-snowflake",
              texto:
                "Demis se interesa por ver paisajes en lugares dificil de alcanzar, se une a un equipo de colaboradores que desean viajar mas al norte en busca de paisajes unicos",
              resultado:
                "Demis escoge la ropa mas abrigada que tiene, guarda un termo con agua caliente, se pone un gorrito que le cubren hasta sus orejas e inicia el viaje",
              image: auroraborealImage,
              opciones: [
                {
                  icon: "fa-solid fa-snowflake",
                  texto:
                    "El cielo esta oscuro y despejado, estamos cerca del polo norte, hay viento y se prevee una actividad solar fuerte... Al parecer se esta formando la oportunidad de ver algo hermoso. Demis decide explorar mas al norte junto con un grupo de colaboradores",
                  resultado:
                    "En una noche clara, Demis tiene la increíble oportunidad de presenciar una deslumbrante aurora boreal. Maravillada por el espectáculo de luces en el cielo, captura imágenes asombrosas que se convierten en el hito de su aventura polar. Esta experiencia la llena de felicidad y asombro.",

                  opciones: [
                    {
                      icon: "fa-solid fa-snowflake",
                      texto: " Regresar a la base ",
                      resultado:
                        " La aventura de Demis apenas empieza, la luz polar le promete un futuro brillante, la joven muchacha regresa a la base y se prepara para futuras aventuras. Este es el fin de este camino.",
                    },
                    {
                      icon: "fa-solid fa-snowflake",
                      texto:
                        " Hay un colaborador que parece muy fascinado con el espectaculo polar. El joven esta muy entusiasmado. Demis siente curiosidad y decide saludar",
                      resultado:
                        " El joven le contesta 'Hola! No te parece increible lo que estamos viendo? Parece magia, me trae mucha tranquilidad y buenos recuerdos",
                      music: rfySound,

                      opciones: [
                        {
                          icon: "fa-solid fa-snowflake",
                          texto:
                            "'Si, es muy bonito. Porque dices recuerdos, has venido antes?' Contesta Demis",
                          resultado:
                            " El joven responde 'no no, es mi primera vez aqui, la explicacion es un poquito larga quieres escucharla?'",
                          opciones: [
                            {
                              icon: "fa-solid fa-snowflake",
                              texto: "adelante...",
                              resultado:
                                "Cuando era niño solia quedarme hasta tarde y ver una luz naranja grande en frente de mi casa y me daba mucha paz... Bueno eso creia hasta hace poco, recientemente pude recordar completamente y lo que me daba paz no era la luz en si. Mi madre se quedaba hasta tarde cociendo, y me decia que me vaya a dormir pero yo era muy necio y no lo hacia, me quedaba esperandola, queria dormir con ella. Ella al darse cuenta que no me iba a dar por vencido me prometia que pronto me acompañaria a dormir, entonces mientras esperaba hasta que cumpla su promesa de dormir conmigo, yo veia la luz naranja y me daba mucha tranquilidad. Siempre me han gustado las luces nocturnas y no sabia porque, ahora ya se que despiertan en mi un bonito recuerdo. Espero que usted tambien Demis pueda guardar este evento como un hermoso recuerdo. Muchas gracias por venir a saludarme. Gracias Demis por la compañia que me has brindado en este viaje que se llama vida!!",
                              opciones: [
                                {
                                  icon: "fa-solid fa-snowflake",
                                  texto: "...'cquiere ir corriendo'",
                                  resultado:
                                    " Demis se queda algo ida, con una cara similar a poker face, nunca ha sido buena con las palabras pero al joven no le parece importar y le sonrie muy amablemente. Luego se despiden y ella continua su camino. Este es el fin de una ruta, ahora tiene un lugar unico menos por visitar, el lugar mas al norte del mundo! Y disfruto de las luces del norte con un compañero de viaje, la compañia mas al norte del mundo! c:",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              texto:
                "Demis se centra en fotografiar la vida cotidiana de las comunidades locales en el Ártico.",
              resultado:
                "Mientras documenta la vida polar, Demis se acerca a las comunidades locales y captura momentos íntimos de su día a día. Sus fotografías resaltan la conexión profunda entre la gente y la tierra, y su trabajo es expuesto en galerías que promueven la comprensión intercultural.",
            },
          ],
        },
      ],
    },
  ],
};

export const marEscenario = {
  nombre: "Mar",
  description:
    "El hombre conoce mas el espacio que los mares de la tierra, puede llegar a ser hasta terrorifico imaginar las criaturas desconocidas por el hombre.",
  option:
    "Demis se une a un equipo de investigación marina para estudiar la biodiversidad y la vida acuática en alta mar.",
  icon: "fa-solid fa-fish",
  image: biologyOceanImage,
  opciones: [
    {
      icon: "fa-solid fa-fish",
      texto:
        "Demis se enfoca en el estudio de los ecosistemas de arrecifes de coral y su fragilidad ante el cambio climático.",
      resultado:
        "A medida que explora los arrecifes de coral, Demis documenta la vitalidad y la importancia de estos ecosistemas. Sin embargo, también observa el blanqueamiento de los corales debido al aumento de la temperatura del agua. Su investigación contribuye a la conciencia global sobre la urgencia de proteger los arrecifes y tomar medidas contra el cambio climático.",
      image: CoralImage,
      opciones: [
        {
          icon: "fa-solid fa-fish",
          texto:
            "Demis colabora con organizaciones de conservación marina para restaurar arrecifes de coral.",
          resultado:
            "Demis se une a esfuerzos de restauración de arrecifes, participando en la plantación de corales y en la creación de áreas marinas protegidas. Su trabajo ayuda a mejorar la salud de los arrecifes y proporciona un hogar seguro para diversas especies marinas.",
        },
        {
          icon: "fa-solid fa-fish",
          texto:
            "Demis documenta el ciclo de vida de diversas especies en los arrecifes de coral.",
          resultado:
            "Observando la vida desde el nacimiento hasta la madurez en los arrecifes, Demis revela patrones sorprendentes de reproducción y supervivencia. Sus descubrimientos son publicados en revistas científicas y contribuyen al entendimiento de la biodiversidad marina.",
        },
      ],
    },
    {
      icon: "fa-solid fa-fish",
      texto:
        "Demis se sumerge en aguas más profundas para investigar la vida en las fosas oceánicas.",
      resultado:
        "Explorando las oscuras profundidades del océano, Demis encuentra criaturas extrañas y asombrosas adaptadas a las condiciones extremas. Documenta especies que rara vez son vistas por los humanos y contribuye al conocimiento de los ecosistemas de aguas profundas.",
      image: deepoceanImage,
      opciones: [
        {
          icon: "fa-solid fa-fish",
          texto:
            "Demis se concentra en estudiar los hábitos de las criaturas bioluminiscentes en las profundidades.",
          resultado:
            "A través de observaciones y experimentos, Demis desentraña los misterios de la bioluminiscencia en las profundidades. Su investigación revela cómo estas criaturas utilizan su luz para comunicarse y cazar, y su trabajo es un avance en la comprensión de la vida en aguas oscuras.",
        },
        {
          icon: "fa-solid fa-fish",
          texto:
            "Demis colabora con científicos de todo el mundo para mapear y catalogar las especies de las fosas oceánicas.",
          resultado:
            "Uniendo esfuerzos con investigadores internacionales, Demis contribuye a la creación de un atlas detallado de la vida en las fosas oceánicas. Su trabajo se convierte en una referencia esencial para la investigación marina y la conservación de los ecosistemas profundos.",
        },
      ],
    },
  ],
};

//Escenarios Musico

export const composicionEscenario = {
  nombre: "Composicion",
  description:
    "Hay charla bastante llamativa sobre composicion musical, en el afiche oficial se ven temas relacionados a que podemos hacer para desarrollar nuestra creatividad e imaginacion al momento de emprender nuevos proyectos.",
  option: "Demis decide ir a la charla sobre composicion",
  icon: "fa-solid fa-compact-disc",
  image: composicionImage,
  opciones: [
    {
      icon: "fa-solid fa-compact-disc",
      image: composicion2Image,
      texto: " Demis escoge un puesto para escuchar la charla",
      resultado:
        "¡Buenas tardes a todos los amantes de la música! Es un placer estar aquí hoy para hablar sobre la maravillosa aventura de la composición musical. La música es un lenguaje universal que nos permite expresar emociones, contar historias y conectarnos con otros de maneras profundas y significativas.",
      opciones: [
        { 
          icon: "fa-solid fa-compact-disc",
          texto:
            " Demis escucha la charla. Sin embargo su mente la invita a pensar en otras aventuras, la concentracion no es su fuerte.",
          resultado:
            "El expositor continua 'La inspiración es la chispa que enciende el proceso creativo. Encuentra esa fuente de inspiración única para ti, ya sea en la naturaleza, en tus emociones o en experiencias personales. Mantén tus sentidos abiertos y observa el mundo que te rodea con una mirada curiosa.'. El expositor sugiere hacer un taller en donde van a escoger un tema que les gusta y van a escribir como se sienten al respecto. Por ejemplo si a mi me gustan los gatos, debo escribir que sentimientos me producen.",
          opciones: [
            {
              icon: "fa-solid fa-compact-disc",
              texto: "Hacer el taller sola",
              resultado:
                "Demis empieza su taller y se dice 'Me gusta el yaoi, el yaoi es vida! Pero... Podria sacar una cancion de esto ? Tambien me gustan las orcas, me gusta mis gallinas, me gusta el color rosa, me gustas los juegos y la alegria. Me gusta la amistad!. Me gusta como se ve la nieve, me gusta la comida saludable, me gusta el frio y los paisajes de la sierra, me gusta ver las nubes cuando acompañan las montañas' . Demis con un alma brillante e inocente le comenta al profesor sus gustos. Este le comenta que le parece fantastico que tenga tantas cosas en mente que le agraden, ahora puede enfocarse en describir que sentimientos envuelven esas cosas. Sin embargo, tambien se le puede dar musica a otros sentimientos, de cosas que no nos gustan tal vez... Demis piensa 'eeeee no, para que pensar en lo que no me gusta. En lo injusto? Pa que querria hacer una cancion sobre la injustica '. Demis estaba esforzandose mucho. Este es el fin de esta linea. Lo que le resta a Demis es conectarse con sus sentimientos, el taller fue solo un acercamiento y la vida de artista que le resta vivir lo logrará sin duda.",
            },
            {
              icon: "fa-solid fa-compact-disc",
              texto:
                "Aceptar al chico del frente que se volteo a verla y preguntarle si desea trabajar en grupo.",
              resultado:
                " El chico le pregunta a Demis: '¿Qué te gusta?' Demis responde casi sin pensarlo: 'No sé', contestando solo por contestar. Luego, comenzó a reflexionar sobre las cosas que le gustan. El joven le dice: 'Yo no soy un buen artista en la música, pero creo tener talento para las letras.'El joven comenta: 'Tengo dos historias de las que se pueden extraer muchas emociones. Una vino a mí en forma de sueño y la otra surgió en una tarde de imaginación. La historia que llegó en un sueño trata sobre una aventura, un camino con dificultades que es necesario atravesar. Incluso tiene toques de terror. La otra historia la imaginé: trata sobre dos colibríes que se enamoraron. ¿Te gustaría escuchar alguna de ellas?'",
              opciones: [
                { image: ciudadrural12Image,
                  icon: "fa-solid fa-compact-disc",
                  texto: "oki, la aventura con toques de terror!",
                  music: forestSound,
                  resultado:
                    " Hace poco tuve un sueño en el que salía con una chica que parecía ser mi pareja. Sentía un fuerte afecto por ella, quería protegerla, y juntos caminábamos de regreso hacia nuestras casas. Nuestra cita había tenido lugar en las afueras de la ciudad. Sin embargo, en nuestro retorno, nos encontramos con que el camino más corto estaba bloqueado debido a trabajos de construcción. Tuvimos que tomar una ruta alternativa que implicaba atravesar un bosque, un lugar rural con algunas casas, pero dominado por árboles y senderos.",
                  opciones: [
                    { image: bosqueterrorImage,
                      icon: "fa-solid fa-compact-disc",
                      texto: " ... ",
                      resultado:
                        "A medida que avanzábamos por este camino, comenzamos a percibir la sensación de que alguien nos vigilaba. A pesar de ignorar inicialmente esta inquietante percepción, la presencia se tornaba más intensa y opresiva. Aunque no podíamos ver a quien o qué nos seguía, los ruidos se hicieron más audibles: pasos, ramas cayendo y otros sonidos inusuales. ",
                      opciones: [
                        { image: casabosqueImage,
                          icon: "fa-solid fa-compact-disc",
                          texto: " ... ",
                          resultado:
                            "Mi compañera estaba nerviosa, y aunque yo también experimentaba cierta aprehensión, decidí mantenerme firme y tranquilo. Pensé que si se trataba de alguien con malas intenciones, podríamos buscar ayuda en una de las casas cercanas. Finalmente, encontramos una pequeña casa al frente de nosotros. Sin dudarlo, fuimos a tocar la puerta. Para nuestra sorpresa, la puerta no estaba cerrada con llave y se movió al tocarla. Decidimos entrar y asegurar la puerta tras de nosotros.",
                          opciones: [
                            { image: casabosqueImage,
                              icon: "fa-solid fa-compact-disc",
                              texto: " ... ",
                              resultado:
                                "Dentro de la casa, mientras la explorábamos, encontramos a una mujer mayor, alrededor de unos 50 años. Parecía estar alistándose para salir. Le relatamos nuestra situación y nos explicó que lo que nos estaba sucediendo no era humano. Nos contó que últimamente el área había sido visitada por criaturas extrañas que habían matado a animales domésticos y, más preocupante aún, habían hecho desaparecer a un niño pequeño. Aunque inicialmente se pensó que los culpables podrían ser zorros u otros animales, la brutalidad de los ataques a los animales de corral descartaba esa posibilidad. Además, ningún animal conocido en la región podría llevarse a un niño de esa manera. ",
                              opciones: [
                                {
                                  icon: "fa-solid fa-compact-disc",
                                  texto: " ... ",
                                  resultado:
                                    "La mujer compartió que se dirigía a la ciudad para buscar ayuda, ya que no se sentía segura quedándose en ese lugar. Si estas criaturas habían atacado a un niño, no creía que se detendrían ante adultos. Su voz denotaba evidente alteración. Nos pidió que la acompañáramos mientras intentábamos salir de la zona. Incluso nos entregó un arma, un revolver artesanal común en zonas rurales.",
                                  opciones: [
                                    { image: criaturaImage,
                                      icon: "fa-solid fa-compact-disc",
                                      texto: " ... ",
                                      resultado:
                                        "Después de tomar un poco de agua y comer algo, nos aventuramos nuevamente. Aunque el camino hasta la salida parecía ser de unos 15 minutos, la tensión en el aire era palpable y el tiempo parecía dilatarse. La presencia volvió a manifestarse, pero esta vez con un sentido de agresividad. Era como si estuviéramos siendo cazados por un depredador que acechaba a su presa. Sin embargo, estábamos decididos a protegernos mutuamente, y no íbamos a ceder ante el temor.",
                                      opciones: [
                                        { image: parejabosqueImage,
                                          icon: "fa-solid fa-compact-disc",
                                          texto: "...",
                                          resultado:
                                            " De repente, apareció una sombra detrás de nosotros, de unos 2 metros de altura. Parecía tener pies, manos y garras. El miedo empezó a apoderarse de nosotros y no éramos capaces de distinguir con claridad lo que se aproximaba con ansias y velocidad. Extraje el arma, apunté lo mejor que pude y disparé. No estamos seguros de si le acerté, pero retrocedió y se adentró en la maleza. Continuamos caminando y divisamos otro río, con un puente de madera más grande. Eso indicaba que estábamos cerca.",

                                          opciones: [
                                            {
                                              icon: "fa-solid fa-compact-disc",
                                              texto: "...",
                                              resultado:
                                                "No me había percatado, pero durante todo ese tiempo había mantenido la mano de mi compañera tomada. Me di cuenta porque acomodó la posición de nuestras manos a una que se sentía más cómoda. No entiendo por qué, pero lo acepté. Si mi mano estaba sobre la suya o viceversa, no me importaba. Solo quería sentir su cercanía y en todo ese trayecto, eso es exactamente lo que sentí.",
                                              opciones: [
                                                {
                                                  icon: "fa-solid fa-compact-disc",
                                                  texto: "...",
                                                  resultado:
                                                    "Luego, ¡desperté! Jaja, mi mente es bastante juguetona. Aunque no tengo pareja, soñé que tenía una compañía muy reconfortante. Nunca he empuñado un arma en la realidad, pero en mi sueño no dudé en usarla. ¿No crees que se podría poner música a lo que vivieron los protagonistas? Tensión, suspenso, miedo, acción, compañía; todos estos elementos podrían ser acompañados por una composición musical impactante.",
                                                  opciones: [
                                                    {
                                                      icon: "fa-solid fa-compact-disc",
                                                      texto: "...",
                                                      resultado:
                                                        "Demis y su compañero continuaron conversando sobre cómo las emociones pueden ser expresadas a través de la música, explorando tonalidades y arreglos que podrían encajar con la narrativa. Así pasaron el resto del taller, colaborando en la elaboración conjunta. Este marcó el final de ese camino específico. A pesar de que Demis tiene una inclinación hacia sentimientos más alegres, la historia le resultó lo suficientemente interesante como para considerar explorar otras emociones. Su viaje como artista la conducirá a experimentar y crear obras sumamente impactantes para la industria.",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                { image: avesloveImage,
                  music: pianoDuetSound,
                  texto: "oki, la historia de los colibries!",
                  resultado:
                    " La historia es sobre dos colibries que se enamoran jeje ",
                  opciones: [
                    { 
                      icon: "fa-solid fa-compact-disc",
                      texto: "...",
                      resultado:
                        " En las majestuosas faldas del Chimborazo, dos colibríes, Zephyr y Aurora, brillaban entre la exuberante vegetación. Zephyr, con su plumaje azul reflejando el cielo, personificaba la fortaleza y la voluntad. Siempre desplegaba sus alas con determinación, zumbando de flor en flor con un propósito incansable.",
                      opciones: [
                        {
                          icon: "fa-solid fa-compact-disc",
                          texto: "...",
                          resultado:
                            " Por otro lado, Aurora desplegaba tonos rojizos y rosados, como los matices del amanecer en las alturas. Su personalidad apasionada se manifestaba en cada latido de sus alas y en cada gesto audaz. Enfrentaba la vida con un carácter fuerte, dispuesta a competir por los dulces néctares que anhelaba.",
                          opciones: [
                            { icon: "fa-solid fa-compact-disc",
                              texto: "...",
                              resultado:
                                " Una mañana, bajo la sombra del Chimborazo, sus miradas se cruzaron en una flor de intensos colores. Un vínculo inexplicable se formó en ese instante, y la rivalidad inicial se transformó en algo más profundo. Desafiaron al viento en una carrera intrépida hacia el corazón del bosque, demostrando así su resistencia y compromiso mutuo. ",
                              opciones: [
                                { icon: "fa-solid fa-compact-disc",
                                  texto: "...",
                                  resultado:
                                    " Una mañana, bajo la sombra del Chimborazo, sus miradas se cruzaron en una flor de intensos colores. Un vínculo inexplicable se formó en ese instante, y la rivalidad inicial se transformó en algo más profundo. Desafiaron al viento en una carrera intrépida hacia el corazón del bosque, compitiendo y jugando juntos. Les encantaba jugar juntos!",
                                    opciones: [{
                                      texto: " ... ",
                                      resultado:"Los momentos que compartían se convirtieron en un refugio, un espacio donde podían ser ellos mismos sin restricciones ni juicios. Contaban sus sueños, sus deseos y sus miedos, creando un lazo profundo y significativo. A medida que se sumergían en las vidas y las historias del otro, su amor y comprensión mutuos se fortalecían. ",
                                      opciones: [
                                        { icon: "fa-solid fa-compact-disc",
                                          texto: "...",
                                          resultado:
                                            " Con el paso de las estaciones, sus diferencias se hicieron más evidentes. Sus trayectorias y aspiraciones comenzaron a divergir, y aunque su amor los había acompañado hasta el último momento, tomaron la decisión de seguir caminos distintos. Fue una elección que ambos enfrentaron con pesar en sus corazones, pero también con la comprensión de que cada uno necesitaba explorar su propio viaje.",
                                            opciones: [{
                                              image: aveslovefinImage,
                                              texto:"...",
                                              resultado:"Zephyr continuó surcando los cielos, llevando consigo la fuerza y la determinación que siempre lo habían caracterizado. Aurora, por su parte, se sumergió en la profundidad de los jardines, buscando nuevos horizontes y desafíos. A pesar de la separación física, el amor que compartieron los acompañó en cada vuelo y en cada recuerdo.",
                                              opciones: [{
                                                texto:"...",
                                                resultado:"El joven concluye: 'A veces, las personas deben tomar rumbos diferentes, incluso cuando su amor es genuino. Esta historia de los colibríes me hace pensar en cómo las circunstancias de la vida pueden llevar a decisiones difíciles, pero eso no disminuye el valor de lo que vivieron juntos' ",
                                                opciones: [{
                                                  texto:"... ",
                                                  resultado:"Demis se inspira para explorar la complejidad de las emociones en sus futuras creaciones artísticas. Su viaje como artista la llevará a capturar momentos de la vida en toda su diversidad, incluyendo aquellos que implican despedidas y nuevos comienzos. ",
                                                }]
                                              }]
                                            }]
                                        },
                                      ],
                                    }
                                     
                                    ]
                              
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const interpreteEscenario = {
  nombre: "Composicion",
  description:
    "Hay una charla sobre interpretación, el afiche indica temas relacionados a la expresion musical y la importancia de transmitir mientras exponemos nuestras habilidades",
  option: "Demis decide ir a la charla sobre interpretacion",
  icon: "fa-solid fa-guitar",
  image: interImage,
  opciones: [
    {
      texto: " Demis escoge un puesto para escuchar la charla ",
      resultado:
        "¡Buen día a todos los apasionados de la música y la interpretación! Es un honor estar aquí para hablar sobre uno de los aspectos más emocionantes y profundos de la música: la interpretación. Como artistas, tenemos el poder de dar vida a las notas en una partitura y comunicar emociones de manera única a través de nuestras interpretaciones. Permítanme compartir con ustedes algunos consejos que pueden enriquecer su forma de abordar la interpretación musical.",
      opciones: [
        { icon: "fa-solid fa-guitar",
          texto: "...",
          resultado:
            "Es crucial comprender la composición que vamos a interpretar. Antes de tocar una pieza, sumérjanse en su contexto histórico, el estilo musical y, sobre todo, en la intención del compositor. Esto no solo les brindará una comprensión más profunda de la música, sino que también les ayudará a transmitir el mensaje original de manera auténtica.",
          opciones: [
            { icon: "fa-solid fa-guitar",
              texto: "...",
              resultado:
                " La interpretación musical va más allá de las notas en una partitura; se trata de conectar emocionalmente con la música. Al tocar, cierren los ojos y sumérjanse en la emoción subyacente de la pieza. Imaginen una historia detrás de la música y permitan que esos sentimientos fluyan a través de sus dedos y su instrumento. La música es un lenguaje emocional y nuestra tarea es traducir esas emociones en sonidos vibrantes. ",
              opciones: [
                { icon: "fa-solid fa-guitar",
                  texto:
                    " Demis esta entretenida con la charla. Se sentia perdida pero ahora se siente curiosa. Tal vez solo necesite seguir aprendiendo para seguir descubriendo cosas que le gusten y la hagan feliz",
                  resultado:
                    "Este es el fin de este camino. Demis es muy activa, sin duda va a seguir yendo y viniendo, descubriendo y aprendiendo. Nada ni nadie la va a detener y sin duda va a hallar mas formas de decorar su camino. ",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
