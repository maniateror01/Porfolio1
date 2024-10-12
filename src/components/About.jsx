import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa"
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function About() {
  return (
    <section id='about'>
      <div className='wrapper'>
        <h3>About</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, itaque!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident aspernatur ullam cupiditate animi. Architecto dicta impedit quisquam vero soluta quod minus obcaecati aperiam odio? Iusto eaque inventore nihil voluptas.</p>
        <h4>Programming Language & Tools</h4>
        <div className='skills'>
          <FaHtml5 />
          <MdCss />
          <FaPhp />
          <FaReact />
          <FaLaravel />
          <FaJs />
          <FaBootstrap />
          <RiTailwindCssFill />
        </div>
      </div>
    </section>
  )
}

export default About