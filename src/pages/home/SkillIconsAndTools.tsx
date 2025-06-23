import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa'
import { TbBrandRedux } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript, SiMongodb, SiExpress } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { VscVscode } from "react-icons/vsc";

export const skills = [
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: IoLogoJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'RTK', icon: TbBrandRedux },
  { name: 'TailwindCSS', icon: RiTailwindCssFill },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
]

export const tools = [
  { name: 'Git', icon: FaGitAlt },
  { name: 'VSC', icon: VscVscode },
]
