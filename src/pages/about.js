import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import "../styles/index.css"
import defaultPic from "../media/avatar.png"
import Background from "../components/background.js"
import CSSPic from "../media/skills/css.png"
import HTMLPic from "../media/skills/html5.svg"
import JSPic from "../media/skills/js.png"
import ReactPic from "../media/skills/react.png"
import RubyPic from "../media/skills/ruby.png"
import RORPic from "../media/skills/rubyonrails.png"
import PYPic from "../media/skills/python.ico"
import WebdevPic from "../media/skills/webdev.png"
import TSPic from "../media/skills/typescript.svg"

export default () => (
  <div style={{ position: "relative", minHeight: "100vh", zIndex: "-10" }}>
    <Navbar />
    <h1 className="indexTitle">About</h1>
    <img id="icon" className="circleIcon" src={defaultPic} alt="icon" />
    <p className="aboutText">
      I like to have fun with things but also know the value of hard work
    </p>
    <p className="aboutText">
      Often you find people who either have too much fun or work too hard
    </p>
    <p className="aboutText">
      If I didn't work hard, you'd see some default template site you've seen
      before{" "}
    </p>
    <p className="aboutText">
      If I didn't have fun you wouldn't see this well kept mustache on a totally
      legit photograph of me{" "}
    </p>
    <p className="aboutText">
      I'm a pretty minimalist guy and enjoy the simpler things in life. this
      site might reflect some of that
    </p>
    <p className="aboutText">
      A main principle in design tells that less is really more. Oddly enough
      that works for code too
    </p>
    <br />
    <br />
    <p className="aboutText">
      I am a self-taught programmer and current CS student at CUNY Queens
      College (2022).
    </p>
    <p className="aboutText">
      I was formally working as a Web Development and Design Intern for{" "}
      <a href="https://lighthouseguild.org" style={{ color: "white" }}>
        Lighthouse Guild
      </a>
    </p>
    <p className="aboutText">
      My experience in retail allows me to work well with teams, encourage
      growth, and maintain chemistry
    </p>
    <p className="aboutText">
      With genuine passion for Technology, I'm constantly expanding my skillset
      to accomodate my work and interests
    </p>
    <p className="aboutText">
      Whenever I'm not coding, I love playing video games, exploring the city I
      call home and finding the perfect pizza slice
    </p>
    <Background />
    <div className="flexContainer">
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopenner noreferrer"
        alt="Typescript Website"
      >
        <img alt="Typescript Pic" className="icon" src={TSPic} />
      </a>
      <a
        href="https://en.wikipedia.org/wiki/JavaScript"
        target="_blank"
        rel="noopener noreferrer"
        alt="Javascript Wiki"
      >
        <img alt="Javascipt pic" className="icon" src={JSPic} />
      </a>
      <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        alt="React Website"
      >
        <img alt="React Pic" className="icon" src={ReactPic} />
      </a>
      <a
        href="https://html.spec.whatwg.org/"
        target="_blank"
        rel="noopener noreferrer"
        alt="HTML5 org website"
      >
        <img alt="HTML Pic" className="icon" src={HTMLPic} />
      </a>
      <a
        href="https://www.w3.org/Style/CSS/"
        target="_blank"
        rel="noopener noreferrer"
        alt="W3 CSS website"
      >
        <img alt="CSS Pic" className="icon" src={CSSPic} />
      </a>
      <a
        href="https://en.wikipedia.org/wiki/Web_development"
        target="_blank"
        rel="noopener noreferrer"
        alt="Web Development Wiki"
      >
        <img alt="Web Development pic" className="icon" src={WebdevPic} />
      </a>
      <a
        href="https://python.org"
        target="_blank"
        rel="noopener noreferrer"
        alt="Python Wiki"
      >
        <img alt="Pyhton Pic" className="icon" src={PYPic} />
      </a>
      <a
        href="https://www.ruby-lang.org/en/"
        target="_blank"
        rel="noopener noreferrer"
        alt="Official Ruby website"
      >
        <img alt="Ruby Pic" className="icon" src={RubyPic} />
      </a>
      <a
        href="https://rubyonrails.org/"
        target="_blank"
        rel="noopener noreferrer"
        alt="Ruby on Rails website"
      >
        <img alt="Ruby on Rails pic" className="icon" src={RORPic} />
      </a>
    </div>
    <Footer />
  </div>
)
