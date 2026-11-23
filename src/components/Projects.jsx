import CircularCarousel from "./CircularCarousel";

const projects = [
  {
    title: "Chatbot AI Learning Buddy",
    desc: "An AI chatbot developed during the ASAH by Dicoding program to support users learning on the Dicoding platform.",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "NodeJS",
      "expressJS",
    ],
    img: "chabtotai.png",
    link: "https://learning-buddy-tau.vercel.app/",
  },
  {
    title: "Mantra Perfume E-Commerce",
    desc: "An e-commerce website for the Mantra perfume brand, supporting online sales and business management for administrators.",
    tags: ["Next JS", "Tailwind CSS", "Javascript", "Express JS"],
    img: "web-1.png",
    link: "https://mantrascent.vercel.app/",
  },
  {
    title: "Company Profile",
    desc: "A landing page showcasing a company profile.",
    tags: ["Laravel", "PHP", "JavaScript", "HTML", "CSS"],
    img: "piel.png",
  },
];

export default function Projects() {
  return (
    <section id="proyek" className="project-archive" aria-labelledby="projects-title">
      <h2 id="projects-title" className="tool-title">Projects</h2>
      <CircularCarousel items={projects} />
    </section>
  );
}
