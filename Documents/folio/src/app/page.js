import Image from "next/image";
import Link from 'next/link';
import MugNaBanner from "./components/MugnaBanner";
import Album from "./components/Album";
import About from "./components/About";
import Projects from "./components/Projects";

function Navbar(){
  return (
    <nav>
      <ul>
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#album">Album</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#project">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
export default function Home() {
  return (
    <div>
      <section id="home">
      <MugNaBanner />
      </section>
      <section id="album">
      <Album />
      </section>
      <section id="about">
      <About />
      </section>
      <section id="project">
      <Projects />
      </section>
    </div>
  );
}
