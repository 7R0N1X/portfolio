import AstroIcon from "../icons/AstroIcon.astro";
import TailwindCSSIcon from "../icons/TailwindCSSIcon.astro";
import PythonIcon from "../icons/PythonIcon.astro";
import OpenCV from "../icons/OpenCVIcon.astro";
import GoogleColab from "../icons/GoogleColab.astro";

import Proyecto1 from "../assets/proyectos/1.webp"
import Proyecto2 from "../assets/proyectos/2.webp"
import Proyecto3 from "../assets/proyectos/3.webp"

const TAGS = {
  ASTRO: {
    name: "Astro",
    class: "bg-[#0D0F14] text-white/80 border border-white/20 rounded-[50px]",
    icon: AstroIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#0F172A] text-white/80 border border-white/20 rounded-[50px]",
    icon: TailwindCSSIcon,
  },
  PYTHON: {
    name: "Python",
    class: "bg-[#1E415E] text-white/80 border border-white/20 rounded-[50px]",
    icon: PythonIcon,
  },
  OPENCV: {
    name: "Open CV",
    class: "bg-[#000] text-white/80 border border-white/20 rounded-[50px]",
    icon: OpenCV,
  },
  GOOGLECOLAB: {
    name: "Google Colab",
    class: "bg-[#E8710A] text-white/80 border border-white/20 rounded-[50px]",
    icon: GoogleColab,
  },
};

export const PROYECTOS = [
  {
    title: "<7R0N1X /> | Portfolio",
    description:
      "Este portafolio exhibe una recopilación de los proyectos en los cuales he dedicado mi tiempo y esfuerzo.",
    link: "https://portfolio-weld-five-97.vercel.app",
    github: "https://github.com/7R0N1X/portfolio.git",
    image: Proyecto3,
    tags: [TAGS.ASTRO, TAGS.TAILWIND],
  },
  {
    title: "GYM24 - Static Website",
    description:
      "Static Website diseñada para GYM24 que ofrece información sobre servicios, horarios, entrenadores y contacto.",
    link: "https://gym24-three.vercel.app/",
    github: "https://github.com/7R0N1X/gym24",
    image: Proyecto2,
    tags: [TAGS.ASTRO, TAGS.TAILWIND],
  },
  {
    title: "Reconocimiento de Emociones",
    description:
      "Proyecto de aprendizaje profundo que utiliza Python, OpenCV y Redes Neuronales Convolucionales.",
    link: "",
    github: "https://github.com/7R0N1X/Reconocimiento-Emociones-Faciales.git",
    image: Proyecto1,
    tags: [TAGS.PYTHON, TAGS.OPENCV],
  },
];