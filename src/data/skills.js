import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import {
  SiHtml5,
  SiCss as SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiFigma,
} from "react-icons/si";

// Edit freely — icon, label, and a 0-100 "comfort" number used for the bar fill.
const skills = [
  { icon: SiReact, label: "React.js", level: 92 },
  { icon: SiNextdotjs, label: "Next.js", level: 85 },
  { icon: SiTypescript, label: "TypeScript", level: 78 },
  { icon: SiJavascript, label: "JavaScript (ES6+)", level: 90 },
  { icon: SiTailwindcss, label: "Tailwind CSS", level: 90 },
  { icon: SiNodedotjs, label: "Node.js", level: 70 },
  { icon: SiExpress, label: "Express", level: 65 },
  { icon: SiMongodb, label: "MongoDB", level: 65 },
  { icon: SiHtml5, label: "HTML5", level: 95 },
  { icon: SiCss3, label: "CSS3", level: 92 },
  { icon: SiGit, label: "Git & GitHub", level: 85 },
  { icon: SiFigma, label: "Figma → Code", level: 75 },
];

export default skills;


export const socials = [
  {
    IconComponent: FaGithub,
    href: "https://github.com/khennyboy",
    label: "GitHub",
  },
  {
    IconComponent: FaLinkedin,
    href: "https://www.linkedin.com/in/sheriff-kehinde",
    label: "LinkedIn",
  },
  { IconComponent: FaXTwitter, href: "https://x.com/abidemi2434", label: "X" },
];
