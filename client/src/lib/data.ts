export interface Flashcard {
  id: number;
  category: string;
  front: string;
  back: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const CATEGORIES = [
  "Estructura Atómica",
  "Enlaces Químicos",
  "Macromoléculas",
  "Proteínas",
  "Lípidos",
  "Carbohidratos",
  "Ácidos Nucleicos",
  "Membranas",
  "Organelas",
  "Dominios de la Vida"
] as const;

export const CATEGORY_COLORS: Record<string, string> = {
  "Estructura Atómica": "blue",
  "Enlaces Químicos": "purple",
  "Macromoléculas": "indigo",
  "Proteínas": "pink",
  "Lípidos": "orange",
  "Carbohidratos": "yellow",
  "Ácidos Nucleicos": "cyan",
  "Membranas": "green",
  "Organelas": "teal",
  "Dominios de la Vida": "violet"
};

export const flashcardsData: Flashcard[] = [
  { id: 1, category: "Estructura Atómica", front: "¿Qué es un átomo?", back: "Unidad básica de la materia con protones, neutrones y electrones." },
  { id: 2, category: "Estructura Atómica", front: "Carga de un protón", back: "+1 (positiva)." },
  { id: 3, category: "Estructura Atómica", front: "¿Dónde se encuentran los electrones?", back: "En los niveles de energía alrededor del núcleo." },
  { id: 4, category: "Estructura Atómica", front: "Elemento más abundante en el universo", back: "Hidrógeno." },
  { id: 5, category: "Estructura Atómica", front: "Número atómico", back: "Cantidad de protones en el núcleo." },

  { id: 6, category: "Enlaces Químicos", front: "Enlace iónico", back: "Transferencia de electrones entre átomos con gran diferencia de electronegatividad." },
  { id: 7, category: "Enlaces Químicos", front: "Ejemplo de molécula con enlace covalente no polar", back: "Molécula de oxígeno O₂." },
  { id: 8, category: "Enlaces Químicos", front: "Fuerzas de Van der Waals", back: "Interacciones débiles debidas a dipolos instantáneos." },
  { id: 9, category: "Enlaces Químicos", front: "Ángulo del enlace en el agua", back: "104.5°." },
  { id: 10, category: "Enlaces Químicos", front: "Enlace de hidrógeno en ADN", back: "Une las bases nitrogenadas complementarias." },

  { id: 11, category: "Macromoléculas", front: "Reacción de hidrólisis", back: "Rompe polímeros añadiendo agua." },
  { id: 12, category: "Macromoléculas", front: "Ejemplo de polímero de aminoácidos", back: "Proteína." },
  { id: 13, category: "Macromoléculas", front: "Nombre del enlace entre nucleótidos", back: "Enlace fosfodiéster." },
  { id: 14, category: "Macromoléculas", front: "Monómero de los carbohidratos", back: "Monosacárido, p.ej. glucosa." },
  { id: 15, category: "Macromoléculas", front: "Función principal de los polisacáridos estructurales", back: "Soporte y protección (ej. celulosa)." },

  { id: 16, category: "Proteínas", front: "Estructura secundaria típica", back: "α-hélice." },
  { id: 17, category: "Proteínas", front: "Ejemplo de proteína transportadora", back: "Hemoglobina." },
  { id: 18, category: "Proteínas", front: "Aminoácido con grupo azufre", back: "Cisteína o Metionina." },
  { id: 19, category: "Proteínas", front: "Denaturación", back: "Pérdida de la estructura tridimensional." },
  { id: 20, category: "Proteínas", front: "Enzima digestiva del estómago", back: "Pepsina." },

  { id: 21, category: "Lípidos", front: "Triglicérido", back: "Glicerol + 3 ácidos grasos." },
  { id: 22, category: "Lípidos", front: "Lípido componente de membranas", back: "Fosfolípido." },
  { id: 23, category: "Lípidos", front: "Esteroles importantes en animales", back: "Colesterol." },
  { id: 24, category: "Lípidos", front: "Lípido responsable de impermeabilidad en hojas", back: "Ceras." },
  { id: 25, category: "Lípidos", front: "Función de los lípidos grasos marrones", back: "Producción de calor en animales." },

  { id: 26, category: "Carbohidratos", front: "Disacárido común en leche", back: "Lactosa." },
  { id: 27, category: "Carbohidratos", front: "Polisacárido de almacenamiento en plantas", back: "Almidón." },
  { id: 28, category: "Carbohidratos", front: "Enzima que hidroliza almidón", back: "Amilasa." },
  { id: 29, category: "Carbohidratos", front: "Polisacárido de reserva animal", back: "Glucógeno." },
  { id: 30, category: "Carbohidratos", front: "Función estructural de la quitina", back: "Forma el exoesqueleto de artrópodos." },

  { id: 31, category: "Ácidos Nucleicos", front: "Base exclusiva del ARN", back: "Uracilo." },
  { id: 32, category: "Ácidos Nucleicos", front: "Tipo de enlace entre A-T", back: "Dos puentes de hidrógeno." },
  { id: 33, category: "Ácidos Nucleicos", front: "Galardonados por el modelo del ADN", back: "Watson y Crick." },
  { id: 34, category: "Ácidos Nucleicos", front: "Síntesis de ARN a partir de ADN", back: "Transcripción." },
  { id: 35, category: "Ácidos Nucleicos", front: "Proceso que convierte ARN en proteína", back: "Traducción." },

  { id: 36, category: "Membranas", front: "Modelo de mosaico fluido", back: "Describe la bicapa como fluida con proteínas incrustadas." },
  { id: 37, category: "Membranas", front: "Ejemplo de transporte pasivo", back: "Difusión simple de O₂." },
  { id: 38, category: "Membranas", front: "Bomba sodio-potasio intercambia", back: "3 Na⁺ fuera, 2 K⁺ dentro con gasto de ATP." },
  { id: 39, category: "Membranas", front: "Pinocitosis", back: "Ingreso de líquidos mediante vesículas pequeñas." },
  { id: 40, category: "Membranas", front: "Proteína canal de agua", back: "Aquaporina." },

  { id: 41, category: "Organelas", front: "Función principal del aparato de Golgi", back: "Modifica y empaqueta proteínas." },
  { id: 42, category: "Organelas", front: "Organelo con ADN propio aparte del núcleo", back: "Mitocondria." },
  { id: 43, category: "Organelas", front: "Organelo exclusivo de plantas para fotosíntesis", back: "Cloroplasto." },
  { id: 44, category: "Organelas", front: "Lugar donde ocurre la traducción", back: "Ribosoma." },
  { id: 45, category: "Organelas", front: "Organelo encargado de detoxificación", back: "Retículo endoplásmico liso." },

  { id: 46, category: "Dominios de la Vida", front: "Dominio con peptidoglucano", back: "Bacteria." },
  { id: 47, category: "Dominios de la Vida", front: "Dominio con histonas pero sin núcleo", back: "Archaea." },
  { id: 48, category: "Dominios de la Vida", front: "Dominio con organelos membranosos", back: "Eukarya." },
  { id: 49, category: "Dominios de la Vida", front: "Iniciador de traducción en Archaea", back: "Metionina." },
  { id: 50, category: "Dominios de la Vida", front: "Temperaturas >100°C toleradas por", back: "Algunas especies de Archaea." }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuáles son las tres partículas subatómicas fundamentales?",
    options: [
      "Protones, neutrones y iones",
      "Protones, electrones y neutrones",
      "Electrones, fotones y protones",
      "Neutrones, quarks y electrones"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Los cuatro elementos más abundantes en la materia viva representan el:",
    options: [
      "80% de la materia viva",
      "90% de la materia viva",
      "96% de la materia viva",
      "100% de la materia viva"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "¿Cuáles son estos cuatro elementos esenciales para la vida?",
    options: [
      "C, H, O, P",
      "C, H, O, N",
      "N, H, O, S",
      "C, N, P, S"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Los enlaces covalentes polares se caracterizan por:",
    options: [
      "Distribución simétrica de electrones",
      "Distribución asimétrica de electrones",
      "Transferencia completa de electrones",
      "No compartir electrones"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Los puentes de hidrógeno se forman entre:",
    options: [
      "Cualquier tipo de moléculas",
      "Moléculas polares solamente",
      "Moléculas apolares solamente",
      "Metales y no metales"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "¿Cuántos niveles de organización biológica existen según el material?",
    options: [
      "10 niveles",
      "11 niveles",
      "12 niveles",
      "15 niveles"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "¿Qué nivel viene inmediatamente después de las moléculas?",
    options: [
      "Células",
      "Tejidos",
      "Organelas",
      "Órganos"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Las organelas son características exclusivas de:",
    options: [
      "Células procariotas",
      "Células eucariotas",
      "Todas las células",
      "Solo células vegetales"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Un conjunto de células similares que trabajan juntas se llama:",
    options: [
      "Órgano",
      "Tejido",
      "Sistema",
      "Organismo"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "¿Qué incluye un ecosistema que no incluye una comunidad?",
    options: [
      "Diferentes especies",
      "Factores abióticos (suelo, agua, clima)",
      "Poblaciones",
      "Organismos individuales"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "¿Cuál de los siguientes dominios tiene envoltura nuclear?",
    options: [
      "Bacteria",
      "Archaea",
      "Eukarya",
      "Ninguno de los anteriores"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Los peptidoglucanos en la pared celular están presentes en:",
    options: [
      "Solo Bacteria",
      "Solo Archaea",
      "Bacteria y Archaea",
      "Los tres dominios"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "¿Qué dominio puede crecer a temperaturas superiores a 100°C?",
    options: [
      "Bacteria",
      "Archaea (algunas especies)",
      "Eukarya",
      "Todos los dominios"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "El aminoácido iniciador en bacterias es:",
    options: [
      "Metionina",
      "Formilmetionina",
      "Glicina",
      "Alanina"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Los cromosomas circulares se encuentran en:",
    options: [
      "Solo Eukarya",
      "Bacteria y Archaea",
      "Solo Bacteria",
      "Los tres dominios"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Los puentes de hidrógeno en el agua se forman porque:",
    options: [
      "El hidrógeno es muy grande",
      "El oxígeno es electronegativo y atrae a los hidrógenos de otras moléculas",
      "El agua es un gas",
      "Las moléculas son iguales"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Una molécula de agua puede formar máximo:",
    options: [
      "2 puentes de hidrógeno",
      "3 puentes de hidrógeno",
      "4 puentes de hidrógeno",
      "6 puentes de hidrógeno"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "La cohesión del agua es responsable de:",
    options: [
      "Que se disuelvan las sales",
      "El transporte de agua en las plantas",
      "La formación de ácidos",
      "La ionización"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Las moléculas hidrofílicas son aquellas que:",
    options: [
      "Repelen el agua",
      "Se disuelven en agua",
      "Son apolares",
      "No tienen carga"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "El alto calor específico del agua se debe a:",
    options: [
      "Su peso molecular",
      "Los puentes de hidrógeno",
      "Su densidad",
      "Su color"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "En la atmósfera primitiva (hace >3800 millones de años), ¿cuál gas era MENOS abundante?",
    options: [
      "CH₄ (metano)",
      "NH₃ (amoníaco)",
      "H₂O (vapor de agua)",
      "O₂ (oxígeno)"
    ],
    correctAnswer: 3
  },
  {
    id: 22,
    question: "Los estromatolitos fósiles son evidencia de:",
    options: [
      "Plantas antiguas",
      "Comunidades bacterianas antiguas",
      "Hongos primitivos",
      "Animales marinos"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "La Revolución del Oxígeno:",
    options: [
      "Eliminó toda la vida anaeróbica",
      "Permitió la evolución de la respiración celular",
      "Ocurrió hace 1000 años",
      "No afectó la vida en la Tierra"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "¿Qué diferencia a la formilmetionina de la metionina normal?",
    options: [
      "Tiene un grupo formilo (CHO) adicional",
      "Tiene menos aminoácidos",
      "No contiene azufre",
      "Es más grande"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: "Los peptidoglucanos están formados por:",
    options: [
      "Solo proteínas",
      "Solo carbohidratos",
      "Cadenas de péptidos y glucanos entrelazadas",
      "Lípidos y proteínas"
    ],
    correctAnswer: 2
  }
];
