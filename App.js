import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Hero />
      <About />
      <Socials />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar({ toggleDarkMode }) {
  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <button onClick={toggleDarkMode}>Toggle Theme</button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <img src="esh.png" alt="Profile" />
      <h2>Eshmeet Kaur</h2>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <h3>About Me</h3>
      <p>
        I'm a first year computer science student at Guru Tegh Bahadur Institute of Technology, Delhi. I have a passion for web development and enjoy creating interactive applications. I am proficient in HTML, CSS, JavaScript, and React.
      aside of web development, i also enjoy engaging in IOT related projects, i currently hold the position of Web Development Co-Lead at IEEE.     </p>
    </section>
  );
}

function Socials() {
  return (
    <div className="socials">
      <h3>Connect with Me</h3>
      <a href="https://www.linkedin.com/in/eshmeet-kaur-542863329/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="tel:+9311529004">Phone: 9311529004</a>
      <a href="/resume.pdf" download="Eshmeet_Kaur_Resume.pdf">Download My Resume</a>
    </div>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h3>Contact Me</h3>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Eshmeet Kaur. All rights reserved.
    </footer>
  );
}

export default App;

//react js mcq (1)b (2)Cnp
