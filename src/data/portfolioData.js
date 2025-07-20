// src/data/portfolioData.js

// Datos Personales
export const personalData = {
  name: "Kenneth Calderón",
  phone: "0963304700",
  email: "calderonisaack@gmail.com",
  age: 21,
  photo: "/src/assets/foto1.jpg" // Asegúrate de que esta ruta sea correcta para tu imagen
};

// Experiencia Profesional
export const experience = [
  {
    id: 1,
    title: "Prácticas Técnicas – Desarrollo de Software",
    description: "Participación en proyectos básicos usando Android Studio, Flask y PHP para crear aplicaciones funcionales."
  },
  {
    id: 2,
    title: "Ejecutivo de Ventas",
    description: "Promoción de ebooks digitales, atención al cliente, seguimiento postventa y estrategias de marketing."
  },
  {
    id: 3,
    title: "Asesor de Cobranza y Servicio al Cliente",
    description: "Atención personalizada, gestión de pagos y resolución de dudas con enfoque en buena comunicación."
  },
  {
    id: 4,
    title: "Prácticas Técnicas – Electrónica",
    description: "Apoyo en montaje y pruebas de circuitos, lectura de planos y uso de herramientas como multímetros."
  }
];

// Habilidades Profesionales (Asegúrate de tener al menos 5 para la prueba)
export const professionalSkills = [
  { id: 1, icon: '🖥️', name: "Microsoft Office (Word, Excel, PowerPoint)" },
  { id: 2, icon: '📊', name: "Google Workspace (Docs, Sheets, Slides)" },
  { id: 3, icon: '📱', name: "Redes sociales (Instagram Ads, Facebook Ads)" },
  { id: 4, icon: '💰', name: "Conocimientos de inversión y educación financiera" },
  { id: 5, icon: '💻', name: "Manejo básico de HTML / PHP / Flask / Android Studio" },
  { id: 6, icon: '📈', name: "Publicidad y marketing digital" },
  { id: 7, icon: '✍️', name: "Redacción y corrección de textos" }
];

// Lenguajes de Programación Preferidos
export const programmingLanguages = [
  { id: 1, name: "Python" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "C++" }
];

// Proyectos Académicos o Profesionales (Asegúrate de tener al menos 3 para la prueba)
export const projects = [
  {
    id: 1,
    title: "App Calculadora en Android Studio",
    description: "Desarrollo de aplicación móvil usando Jetpack Compose para realizar operaciones básicas."
  },
  {
    id: 2,
    title: "Integración de Flask con PHP y XAMPP",
    description: "Implementación de una API en Flask conectada con frontend PHP usando servidor local."
  },
  {
    id: 3,
    title: "Sistema de comunicación entre frontend y backend",
    description: "Prueba de rutas HTTP y manejo de datos con tecnologías web básicas."
  },
  {
    id: 4,
    title: "Automatización básica con Python",
    description: "Creación de scripts simples para automatizar tareas repetitivas durante clases prácticas."
  }
];