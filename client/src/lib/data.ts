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
  "Dominios de la Vida",
  "Niveles de Organización",
  "Atmósfera Primitiva",
  "Propiedades del Agua"
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
  "Dominios de la Vida": "violet",
  "Niveles de Organización": "blue",
  "Atmósfera Primitiva": "purple",
  "Propiedades del Agua": "cyan"
};

export const flashcardsData: Flashcard[] = [
  { id: 1, category: "Estructura Atómica", front: "¿Cuáles son las tres partículas subatómicas?", back: "Neutrones, electrones y protones.\n\nNeutrones: carga neutra\nElectrones: carga negativa\nProtones: carga positiva" },
  { id: 2, category: "Estructura Atómica", front: "¿Qué porcentaje de la materia viva representan C, H, O, N?", back: "Representan el 96% de la materia viva.\n\nSon los átomos más importantes para la vida en contexto biológico." },
  { id: 3, category: "Enlaces Químicos", front: "¿Qué caracteriza a los enlaces covalentes polares?", back: "Distribución asimétrica de electrones.\n\nEn enlaces covalentes entre no metales donde hay diferencia de electronegatividad." },
  { id: 4, category: "Enlaces Químicos", front: "¿Cuándo se forman los enlaces de hidrógeno?", back: "Atracción entre moléculas polares.\n\nEjemplo: moléculas de agua\nSe forman cuando los electrones no están distribuidos simétricamente." },
  { id: 5, category: "Enlaces Químicos", front: "¿Qué son las fuerzas de Van der Waals?", back: "Enlaces débiles que se forman cuando los electrones no están distribuidos simétricamente.\n\nSon interacciones más débiles que los enlaces de hidrógeno." },
  { id: 6, category: "Niveles de Organización", front: "¿Cuántos niveles de organización biológica hay?", back: "Son 12 niveles.\n\nDesde átomos hasta biosfera, cada nivel aumenta en complejidad y organización." },
  { id: 7, category: "Niveles de Organización", front: "Definición de átomo en contexto biológico", back: "Unidad básica de la materia que conserva las propiedades de un elemento químico.\n\nCompuesto por protones, neutrones y electrones." },
  { id: 8, category: "Niveles de Organización", front: "¿Qué son las organelas?", back: "Estructuras especializadas dentro de las células eucariotas que realizan funciones específicas.\n\nEstán rodeadas por membranas\nCada una tiene función particular" },
  { id: 9, category: "Niveles de Organización", front: "Diferencia entre procariotas y eucariotas", back: "Procariotas: Sin núcleo definido (bacterias)\nEucariotas: Con núcleo y organelas\n\nToda la vida está basada en células." },
  { id: 10, category: "Niveles de Organización", front: "¿Qué incluye la biosfera?", back: "Conjunto de todos los ecosistemas de la Tierra.\n\n• Litosfera: Corteza terrestre\n• Hidrosfera: Toda el agua del planeta\n• Atmósfera: Gases que rodean la Tierra" },
  { id: 11, category: "Atmósfera Primitiva", front: "Composición de atmósfera primitiva (>3800 millones años)", back: "Gases abundantes: CH₄ (metano), NH₃ (amoníaco), H₂O (vapor), CO (monóxido)\nGas menos abundante: O₂ (oxígeno)\n\nSin capa de ozono, bombardeo de meteoritos" },
  { id: 12, category: "Atmósfera Primitiva", front: "¿Qué son los estromatolitos fósiles?", back: "Estructuras formadas por comunidades bacterianas antiguas.\n\nHasta 2700 millones de años\nLos fósiles más antiguos se asemejan a procariotas" },
  { id: 13, category: "Propiedades del Agua", front: "¿Por qué se forman los puentes de hidrógeno en agua?", back: "El hidrógeno (δ+) de una molécula se atrae al oxígeno (δ-) de otra molécula.\n\nDuración muy corta\nTemperatura dependiente: se debilitan con el calor" },
  { id: 14, category: "Propiedades del Agua", front: "¿Cuántos puentes de hidrógeno puede formar una molécula de agua?", back: "Hasta 4 puentes de hidrógeno:\n\n• 2 como donadora: Los 2 hidrógenos\n• 2 como aceptora: Los 2 pares de electrones libres del oxígeno" },
  { id: 15, category: "Propiedades del Agua", front: "¿Qué es la cohesión del agua?", back: "Atracción entre moléculas de la misma sustancia (agua-agua).\n\nCausada por puentes de hidrógeno\nPermite transporte en plantas\nResponsable de la tensión superficial" },
  { id: 16, category: "Propiedades del Agua", front: "Características del alto calor específico del agua", back: "1 cal/g·°C\n\nSe debe a puentes de hidrógeno (absorben energía al romperse)\nEstabiliza temperatura corporal y ecosistemas acuáticos" },
  { id: 17, category: "Propiedades del Agua", front: "Diferencia entre moléculas hidrofílicas e hidrofóbicas", back: "Hidrofílicas: Se disuelven en agua (polares, con carga)\nHidrofóbicas: No se disuelven en agua (apolares, sin carga)" },
  { id: 18, category: "Macromoléculas", front: "Definición de monómero según el material", back: "Unidad molecular básica y simple que puede unirse a otras moléculas similares para formar estructuras más grandes.\n\nEjemplos: aminoácidos, monosacáridos, nucleótidos" },
  { id: 19, category: "Macromoléculas", front: "Definición de polímero según el material", back: "Macromolécula formada por la unión de muchos monómeros mediante enlaces químicos.\n\nTiene propiedades diferentes a sus monómeros\nEjemplos: proteínas, polisacáridos, ADN/ARN" },
  { id: 20, category: "Macromoléculas", front: "¿Qué es la deshidratación (condensación)?", back: "Reacción que une monómeros para formar polímeros, liberando una molécula de agua.\n\nProceso: Monómero 1 + Monómero 2 → Dímero + H₂O\nRequiere energía (endergónica)" },
  { id: 21, category: "Macromoléculas", front: "¿Qué es la hidrólisis?", back: "Reacción que rompe polímeros en monómeros mediante la adición de agua.\n\nProceso: Polímero + H₂O → Monómero 1 + Monómero 2\nLibera energía (exergónica)" },
  { id: 22, category: "Proteínas", front: "Componentes de un aminoácido", back: "5 componentes:\n1. Grupo amino (-NH₂): Básico\n2. Grupo carboxilo (-COOH): Ácido\n3. Carbono central (α)\n4. Grupo R: Variable, determina identidad\n5. Hidrógeno (-H)" },
  { id: 23, category: "Proteínas", front: "¿Qué es un enlace peptídico?", back: "Enlace covalente que une dos aminoácidos.\n\nFormación: grupo carboxilo + grupo amino\nSe forma por deshidratación\nEs rígido y plano" },
  { id: 24, category: "Proteínas", front: "¿Cuáles son los 4 niveles estructurales de proteínas?", back: "1. Primaria: Secuencia de aminoácidos\n2. Secundaria: α-hélice y lámina β\n3. Terciaria: Forma 3D completa\n4. Cuaternaria: Varias cadenas juntas" },
  { id: 25, category: "Proteínas", front: "Consecuencias del cambio de un aminoácido", back: "Todas son correctas:\na) Estructura primaria se modifica\nb) Estructura terciaria puede modificarse\nc) Actividad biológica puede alterarse\n\nEjemplo: anemia falciforme" },
  { id: 26, category: "Proteínas", front: "¿Cuáles son las 5 funciones principales de proteínas?", back: "1. Enzimática (catálisis)\n2. Estructural (soporte)\n3. Transporte (hemoglobina)\n4. Defensa (anticuerpos)\n5. Regulación (insulina, hormonas)" },
  { id: 27, category: "Lípidos", front: "¿Cuáles son las 3 características comunes de lípidos?", back: "1. Hidrofóbicos (o anfipáticos)\n2. Principalmente C y H (alto contenido enlaces C-H)\n3. Contienen ácidos grasos o estructuras relacionadas" },
  { id: 28, category: "Lípidos", front: "Diferencia entre ácidos grasos saturados e insaturados", back: "Saturados: Enlaces simples C-C, cadena lineal, sólidos\nInsaturados: Dobles enlaces C=C, cadena con pliegues, líquidos (aceites)\n\nLos dobles enlaces determinan la fluidez" },
  { id: 29, category: "Lípidos", front: "¿Por qué lípidos almacenan más energía que carbohidratos?", back: "Ventajas:\n• Mayor energía: ~9 kcal/g vs ~4 kcal/g\n• Más compactos: no se hidratan\n• Menos peso: importante para movilidad\n• Almacenamiento largo plazo: estables" },
  { id: 30, category: "Carbohidratos", front: "Fórmula general de carbohidratos", back: "(CH₂O)ₙ o CₙH₂ₙOₙ\n\n'Hidrato de carbono' = Carbono + Agua\nRelación C:H:O es 1:2:1\nEjemplo: Glucosa C₆H₁₂O₆" },
  { id: 31, category: "Carbohidratos", front: "Diferencia entre enlaces glucosídicos α y β", back: "Enlace α: -OH abajo, digerible por amilasa, función energética\nEnlace β: -OH arriba, NO digerible, función estructural\n\nα: almidón, glucógeno\nβ: celulosa, quitina" },
  { id: 32, category: "Carbohidratos", front: "¿Qué polisacáridos puede degradar la amilasa?", back: "Puede degradar: Almidón, glucógeno, amilopectina (enlaces α)\nNO puede: Celulosa, quitina (enlaces β)\n\nSolo rompe enlaces α-glucosídicos" },
  { id: 33, category: "Carbohidratos", front: "Componentes del almidón", back: "Amilosa (~25%): Enlaces α(1→4) solamente, cadena lineal\nAmilopectina (~75%): α(1→4) + ramificaciones α(1→6)\n\nAmbas son digeribles por amilasa humana" },
  { id: 34, category: "Ácidos Nucleicos", front: "¿Cuáles son los 3 componentes de un nucleótido?", back: "1. Base nitrogenada (A,T,G,C,U)\n• Purinas: A,G (doble anillo)\n• Pirimidinas: C,T,U (anillo simple)\n2. Azúcar pentosa (ribosa/desoxirribosa)\n3. Grupo fosfato" },
  { id: 35, category: "Ácidos Nucleicos", front: "Principales diferencias ADN vs ARN", back: "ADN: Desoxirribosa, bases A-T-G-C, doble cadena\nARN: Ribosa, bases A-U-G-C, simple cadena\n\nADN almacena, ARN transmite información" },
  { id: 36, category: "Ácidos Nucleicos", front: "Reglas de apareamiento de bases", back: "A=T: 2 puentes de hidrógeno\nC≡G: 3 puentes de hidrógeno\n\nMás C-G = ADN más estable\nComplementariedad fundamental para replicación" },
  { id: 37, category: "Membranas", front: "Composición principal de membrana plasmática", back: "1. Lípidos (~75% fosfolípidos) - estructura anfipática\n2. Proteínas - funcionales (integrales y periféricas)\n3. Carbohidratos - reconocimiento celular\n4. Colesterol - regula fluidez" },
  { id: 38, category: "Membranas", front: "¿Qué mantiene unida la membrana plasmática?", back: "Interacciones hidrofóbicas (principal fuerza)\n\nLas colas hidrofóbicas se repelen del agua\nTambién: fuerzas de van der Waals y puentes de hidrógeno en superficie" },
  { id: 39, category: "Membranas", front: "¿Qué moléculas pueden difundir por bicapa lipídica?", back: "SÍ difunden: O₂, CO₂ (pequeñas, no polares), H₂O (muy pequeña)\nNO difunden: Iones Na⁺,K⁺,Cl⁻ (cargados), glucosa (grande y polar)" },
  { id: 40, category: "Membranas", front: "Diferencia entre transporte activo y pasivo", back: "Pasivo: Sin ATP, a favor del gradiente\nActivo: Requiere ATP, contra gradiente\n\nEjemplo activo: bomba Na⁺/K⁺ (3 Na⁺ fuera, 2 K⁺ dentro)" },
  { id: 41, category: "Membranas", front: "Tipos de transporte pasivo", back: "Difusión simple: Directo por bicapa (O₂,CO₂)\nDifusión facilitada: Con proteínas (glucosa, iones)\n\nAmbos a favor del gradiente, sin ATP" },
  { id: 42, category: "Membranas", front: "Diferencia entre fagocitosis y pinocitosis", back: "Fagocitosis: Incorpora partículas sólidas grandes, forma fagosomas\nPinocitosis: Incorpora líquido extracelular, forma pinosomas pequeños\n\nAmbas son tipos de endocitosis" },
  { id: 43, category: "Organelas", front: "Funciones del núcleo", back: "Centro de control celular:\n• Almacena ADN (información genética)\n• Controla actividades celulares\n• Replicación del ADN\n• Transcripción de ARN" },
  { id: 44, category: "Organelas", front: "Características de las mitocondrias", back: "Centrales energéticas:\n• Doble membrana con crestas\n• ADN propio circular\n• Respiración celular aeróbica\n• Producen ATP\n• Origen endosimbiótico" },
  { id: 45, category: "Organelas", front: "¿Dónde se encuentran los cloroplastos?", back: "Solo en células vegetales y algunas algas.\n\nEstructura: doble membrana, tilacoides, granas\nFunción: fotosíntesis\nContienen clorofila y ADN propio" },
  { id: 46, category: "Organelas", front: "Diferencia entre RE rugoso y RE liso", back: "RE Rugoso: Con ribosomas, síntesis de proteínas\nRE Liso: Sin ribosomas, síntesis de lípidos, detoxificación\n\nAmbos son red de membranas desde el núcleo" },
  { id: 47, category: "Organelas", front: "Función del Aparato de Golgi", back: "Centro de empaquetamiento y distribución:\n• Modifica proteínas del RE\n• Añade carbohidratos\n• Empaqueta en vesículas\n• Forma lisosomas" },
  { id: 48, category: "Organelas", front: "¿Qué son los lisosomas?", back: "Sistema digestivo celular:\n• pH ácido (~4.5)\n• Digestión intracelular\n• Reciclan organelas viejas\n• Principalmente en animales" },
  { id: 49, category: "Dominios de la Vida", front: "¿Qué dominio tiene peptidoglucano?", back: "Solo BACTERIA tiene peptidoglucano en pared celular.\n\nArchaea y Eukarya no tienen peptidoglucano" },
  { id: 50, category: "Dominios de la Vida", front: "Aminoácidos iniciadores por dominio", back: "Bacteria: Formilmetionina\nArchaea: Metionina\nEukarya: Metionina\n\nSolo bacterias usan formilmetionina" }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuáles son las tres partículas subatómicas fundamentales?",
    options: [
      "Protones, neutrones y electrones",
      "Protones, neutrones y fotones",
      "Electrones, neutrones y quarks",
      "Protones, electrones y bosones"
    ],
    correctAnswer: 0,
    explanation: "Las tres partículas subatómicas fundamentales son protones (carga +), neutrones (carga neutra) y electrones (carga -)."
  },
  {
    id: 2,
    question: "Los cuatro elementos más importantes para la vida representan qué porcentaje de la materia viva:",
    options: ["85%", "90%", "96%", "100%"],
    correctAnswer: 2,
    explanation: "C, H, O, N representan el 96% de la materia viva según el material."
  },
  {
    id: 3,
    question: "Los enlaces covalentes polares se caracterizan por:",
    options: [
      "Distribución simétrica de electrones",
      "Distribución asimétrica de electrones",
      "Transferencia completa de electrones",
      "No compartir electrones"
    ],
    correctAnswer: 1,
    explanation: "En enlaces covalentes polares, los electrones se comparten asimétricamente entre átomos."
  },
  {
    id: 4,
    question: "Una molécula de agua puede formar máximo cuántos puentes de hidrógeno:",
    options: ["2", "3", "4", "6"],
    correctAnswer: 2,
    explanation: "Una molécula de agua puede formar hasta 4 puentes de hidrógeno: 2 como donadora y 2 como aceptora."
  },
  {
    id: 5,
    question: "En una reacción de deshidratación:",
    options: [
      "Se consumen moléculas de agua",
      "Se liberan moléculas de agua",
      "No interviene el agua",
      "Se forman iones"
    ],
    correctAnswer: 1,
    explanation: "En la deshidratación (condensación) se unen monómeros liberando una molécula de agua por cada enlace formado."
  },
  {
    id: 6,
    question: "Para hidrolizar completamente un polímero de 100 monómeros se necesitan:",
    options: ["100 moléculas de agua", "99 moléculas de agua", "101 moléculas de agua", "50 moléculas de agua"],
    correctAnswer: 1,
    explanation: "Para romper n-1 enlaces se necesitan n-1 moléculas de agua. 100 monómeros tienen 99 enlaces."
  },
  {
    id: 7,
    question: "Un enlace peptídico se forma entre:",
    options: [
      "Dos grupos R de aminoácidos",
      "Grupo amino de uno y grupo carboxilo de otro aminoácido",
      "Dos grupos fosfato",
      "Dos azúcares"
    ],
    correctAnswer: 1,
    explanation: "El enlace peptídico une el grupo carboxilo (-COOH) con el grupo amino (-NH2) mediante deshidratación."
  },
  {
    id: 8,
    question: "¿Cuántos niveles estructurales tienen las proteínas?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    explanation: "Las proteínas tienen 4 niveles: primaria (secuencia), secundaria (α-hélice, lámina β), terciaria (forma 3D) y cuaternaria (múltiples cadenas)."
  },
  {
    id: 9,
    question: "El cambio de un solo aminoácido en la hemoglobina causa:",
    options: ["Diabetes", "Anemia falciforme", "Cáncer", "Hipertensión"],
    correctAnswer: 1,
    explanation: "El cambio de ácido glutámico por valina en posición 6 de la cadena β causa anemia falciforme."
  },
  {
    id: 10,
    question: "Los ácidos grasos saturados se caracterizan por:",
    options: [
      "Tener dobles enlaces C=C",
      "Ser líquidos a temperatura ambiente",
      "Enlaces simples y cadenas lineales",
      "Ser muy reactivos"
    ],
    correctAnswer: 2,
    explanation: "Los saturados tienen todos enlaces simples (C-C), formando cadenas lineales que se empaquetan mejor, siendo sólidos."
  },
  {
    id: 11,
    question: "¿Por qué los lípidos almacenan más energía que los carbohidratos?",
    options: [
      "Tienen más oxígeno",
      "Tienen más enlaces C-H no polares",
      "Son más grandes",
      "Tienen más agua"
    ],
    correctAnswer: 1,
    explanation: "Los lípidos tienen más enlaces C-H no polares, liberando ~9 kcal/g vs ~4 kcal/g de carbohidratos."
  },
  {
    id: 12,
    question: "La fórmula general de los carbohidratos es:",
    options: ["(CH2O)n", "(CHO)n", "(C2H2O)n", "(CH3O)n"],
    correctAnswer: 0,
    explanation: "La fórmula general es (CH2O)n o CnH2nOn, con relación C:H:O de 1:2:1."
  },
  {
    id: 13,
    question: "¿Qué diferencia hay entre enlaces α y β glucosídicos?",
    options: [
      "α son más fuertes que β",
      "α son digeribles por humanos, β no",
      "α son estructurales, β energéticos",
      "No hay diferencia"
    ],
    correctAnswer: 1,
    explanation: "Enlaces α (almidón, glucógeno) son digeribles por amilasa humana. Enlaces β (celulosa) requieren celulasa que no tenemos."
  },
  {
    id: 14,
    question: "¿Cuáles son los componentes del almidón?",
    options: [
      "Solo amilosa",
      "Solo amilopectina",
      "Amilosa (~25%) y amilopectina (~75%)",
      "Celulosa y quitina"
    ],
    correctAnswer: 2,
    explanation: "El almidón está formado por amilosa (~25%, lineal) y amilopectina (~75%, ramificada), ambas con enlaces α."
  },
  {
    id: 15,
    question: "¿Cuáles son los componentes de un nucleótido?",
    options: [
      "Base + azúcar",
      "Base + fosfato",
      "Azúcar + fosfato",
      "Base nitrogenada + azúcar pentosa + grupo fosfato"
    ],
    correctAnswer: 3,
    explanation: "Un nucleótido tiene tres componentes: base nitrogenada (A,T,G,C,U), azúcar pentosa (ribosa/desoxirribosa) y grupo fosfato."
  },
  {
    id: 16,
    question: "¿Cuántos puentes de hidrógeno forman A-T y C-G respectivamente?",
    options: ["2 y 2", "2 y 3", "3 y 2", "1 y 2"],
    correctAnswer: 1,
    explanation: "A-T forman 2 puentes de hidrógeno, C-G forman 3 puentes, por eso C-G es más estable."
  },
  {
    id: 17,
    question: "¿Cuáles son las principales diferencias entre ADN y ARN?",
    options: [
      "Solo el azúcar es diferente",
      "Solo las bases son diferentes",
      "Azúcar (desoxirribosa vs ribosa), bases (T vs U) y estructura (doble vs simple)",
      "No hay diferencias importantes"
    ],
    correctAnswer: 2,
    explanation: "ADN: desoxirribosa, T, doble cadena. ARN: ribosa, U, simple cadena."
  },
  {
    id: 18,
    question: "¿Qué mantiene unida principalmente la membrana plasmática?",
    options: [
      "Enlaces covalentes",
      "Interacciones hidrofóbicas",
      "Puentes de hidrógeno solamente",
      "Enlaces iónicos"
    ],
    correctAnswer: 1,
    explanation: "Las interacciones hidrofóbicas entre las colas de los fosfolípidos son la fuerza principal que mantiene unida la membrana."
  },
  {
    id: 19,
    question: "¿Cuáles moléculas pueden difundir fácilmente por la bicapa lipídica?",
    options: ["Na+, K+, Cl-", "Glucosa y aminoácidos", "O2 y CO2", "Proteínas"],
    correctAnswer: 2,
    explanation: "Solo moléculas pequeñas y no polares como O2 y CO2 pueden atravesar fácilmente la bicapa lipídica."
  },
  {
    id: 20,
    question: "El transporte activo se caracteriza por:",
    options: [
      "No requerir energía",
      "Ir a favor del gradiente",
      "Requerir ATP e ir contra gradiente",
      "Solo transportar agua"
    ],
    correctAnswer: 2,
    explanation: "El transporte activo requiere energía (ATP) para mover sustancias contra su gradiente de concentración."
  },
  {
    id: 21,
    question: "¿Qué es la fagocitosis?",
    options: [
      "Incorporación de líquidos",
      "Incorporación de partículas sólidas mediante invaginación",
      "Expulsión de sustancias",
      "Difusión de gases"
    ],
    correctAnswer: 1,
    explanation: "Fagocitosis es la incorporación de partículas sólidas grandes mediante invaginación de la membrana."
  },
  {
    id: 22,
    question: "La bomba Na+/K+-ATPasa intercambia:",
    options: [
      "2 Na+ por 2 K+",
      "1 Na+ por 1 K+",
      "3 Na+ fuera por 2 K+ dentro",
      "3 K+ fuera por 2 Na+ dentro"
    ],
    correctAnswer: 2,
    explanation: "La bomba Na+/K+ saca 3 Na+ de la célula e introduce 2 K+ consumiendo 1 ATP."
  },
  {
    id: 23,
    question: "¿Cuál es la función principal del núcleo?",
    options: [
      "Producir energía",
      "Almacenar ADN y controlar actividades celulares",
      "Sintetizar lípidos",
      "Digerir sustancias"
    ],
    correctAnswer: 1,
    explanation: "El núcleo almacena el ADN y controla las actividades celulares, siendo el centro de control."
  },
  {
    id: 24,
    question: "Las mitocondrias se caracterizan por:",
    options: [
      "Tener membrana simple",
      "Producir glucosa",
      "Tener doble membrana y ADN propio",
      "Solo existir en plantas"
    ],
    correctAnswer: 2,
    explanation: "Las mitocondrias tienen doble membrana, crestas internas, ADN propio circular y producen ATP."
  },
  {
    id: 25,
    question: "¿Qué diferencia hay entre RE rugoso y RE liso?",
    options: [
      "No hay diferencia",
      "RE rugoso tiene ribosomas, RE liso no",
      "RE liso es más grande",
      "RE rugoso está en plantas solamente"
    ],
    correctAnswer: 1,
    explanation: "RE rugoso tiene ribosomas (síntesis proteínas), RE liso no tiene ribosomas (síntesis lípidos, detoxificación)."
  },
  {
    id: 26,
    question: "Los cloroplastos están presentes en:",
    options: [
      "Todas las células",
      "Solo células animales",
      "Solo células vegetales y algunas algas",
      "Solo bacterias"
    ],
    correctAnswer: 2,
    explanation: "Los cloroplastos solo están en células vegetales y algunas algas para realizar fotosíntesis."
  },
  {
    id: 27,
    question: "¿Cuál es la función principal de los lisosomas?",
    options: [
      "Fotosíntesis",
      "Síntesis de proteínas",
      "Digestión intracelular",
      "Almacenamiento de agua"
    ],
    correctAnswer: 2,
    explanation: "Los lisosomas realizan digestión intracelular, degradan macromoléculas y reciclan organelas."
  },
  {
    id: 28,
    question: "¿Qué dominio tiene peptidoglucano en la pared celular?",
    options: ["Bacteria", "Archaea", "Eukarya", "Todos"],
    correctAnswer: 0,
    explanation: "Solo las Bacterias tienen peptidoglucano en su pared celular."
  },
  {
    id: 29,
    question: "¿Cuál dominio puede crecer a temperaturas >100°C?",
    options: ["Bacteria", "Algunas especies de Archaea", "Eukarya", "Ninguno"],
    correctAnswer: 1,
    explanation: "Algunas especies de Archaea extremófilas pueden vivir a temperaturas superiores a 100°C."
  },
  {
    id: 30,
    question: "El aminoácido iniciador en bacterias es:",
    options: ["Metionina", "Formilmetionina", "Glicina", "Alanina"],
    correctAnswer: 1,
    explanation: "Las bacterias usan formilmetionina como aminoácido iniciador, mientras Archaea y Eukarya usan metionina."
  },
  {
    id: 31,
    question: "¿Cuántos niveles de organización biológica existen según el material?",
    options: ["10", "11", "12", "15"],
    correctAnswer: 2,
    explanation: "Según el material hay 12 niveles: átomos, moléculas, organelas, células, tejidos, órganos, sistemas, organismos, poblaciones, comunidades, ecosistemas, biosfera."
  },
  {
    id: 32,
    question: "Un ecosistema incluye que una comunidad no tiene:",
    options: [
      "Diferentes especies",
      "Factores abióticos (suelo, agua, clima)",
      "Poblaciones",
      "Organismos"
    ],
    correctAnswer: 1,
    explanation: "El ecosistema incluye la comunidad (factores bióticos) más los factores abióticos (suelo, agua, clima)."
  },
  {
    id: 33,
    question: "En la atmósfera primitiva (>3800 millones de años), ¿cuál gas era menos abundante?",
    options: ["CH4 (metano)", "NH3 (amoníaco)", "H2O (vapor)", "O2 (oxígeno)"],
    correctAnswer: 3,
    explanation: "El oxígeno era el gas menos abundante en la atmósfera primitiva, aumentó posteriormente por fotosíntesis."
  },
  {
    id: 34,
    question: "Los estromatolitos fósiles son evidencia de:",
    options: [
      "Plantas antiguas",
      "Comunidades bacterianas antiguas",
      "Animales marinos",
      "Meteoritos"
    ],
    correctAnswer: 1,
    explanation: "Los estromatolitos son estructuras formadas por comunidades bacterianas antiguas (hasta 2700 millones de años)."
  },
  {
    id: 35,
    question: "El alto calor específico del agua se debe a:",
    options: [
      "Su peso molecular",
      "Los puentes de hidrógeno",
      "Su densidad",
      "Su transparencia"
    ],
    correctAnswer: 1,
    explanation: "Los puentes de hidrógeno absorben energía al romperse, dando al agua alto calor específico (1 cal/g·°C)."
  }
];
