import AstroIcon from "../icons/AstroIcon.astro";
import TailwindCSSIcon from "../icons/TailwindCSSIcon.astro";
import PythonIcon from "../icons/PythonIcon.astro";
import OpenCV from "../icons/OpenCVIcon.astro";
import GoogleColab from "../icons/GoogleColab.astro";

import Proyecto1 from "../../public/proyectos/1.webp"
import Proyecto2 from "../../public/proyectos/2.avif"

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
    title: "EVOLVE GYM",
    description:
      "Moderna landing page responsiva que presenta servicios, equipo y testimonios de clientes con un diseño profesional y atractivo.",
    link: "https://evolve-eta.vercel.app",
    github: "https://github.com/7R0N1X/evolve.git",
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