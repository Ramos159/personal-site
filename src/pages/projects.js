import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import Background from "../components/background.js"
import "../styles/index.css"

export default () => (
  <div style={{ position: "relative", minHeight: "100vh", zIndex: "-10" }}>
    <Navbar />
    <h1 className="indexTitle">Projects</h1>
    <h2 className="indexTitle">This Website!</h2>
    <div id="project">
      <a href="https://github.com/Ramos159/personal-site">
        <img src="https://gh-card.dev/repos/Ramos159/personal-site.svg" />
      </a>
    </div>
    <p className="indexTitle">
      Not much to explain here, just this website. 100% handbuilt
    </p>
    <p className="indexTitle">
      Nice looking Web Pages and Animations with plain HTML and CSS(hopefully)
    </p>
    <p className="indexTitle">Built with Javascript, Gatsby.Js and Netlify</p>
    <hr style={{ color: "white", backgroundColor: "white", width: "40%" }}></hr>
    <h2 className="indexTitle">PocketDex</h2>
    <div id="project">
      <a href="https://github.com/Ramos159/Pokemon-React-Native-App">
        <img src="https://gh-card.dev/repos/Ramos159/Pokemon-React-Native-App.svg" />
      </a>
    </div>
    <p className="indexTitle">
      This is a work in-progress and my first forray into mobile development.
    </p>
    <p className="indexTitle">
      Will emulate a Pokedex from the Pokemon Series. Great source on everything
      Pokeverse
    </p>
    <p className="indexTitle">
      Will be using the Pokemon API, various React Native Component Libraries,
      Redux
    </p>
    <p className="indexTitle">
      Building with Typescript, React Native, and Expo
    </p>
    <hr style={{ color: "white", backgroundColor: "white", width: "40%" }}></hr>
    <a
      style={{ color: "white", textDecoration: "underline" }}
      rel="noopener noreferrer"
      target="_blank"
      href="https://nycttp-frontend.herokuapp.com/"
    >
      <h2 className="indexTitle">StockFolio</h2>
    </a>
    <div id="project">
      <a href="https://github.com/Ramos159/NYC-TTP-frontend">
        <img src="https://gh-card.dev/repos/Ramos159/NYC-TTP-frontend.svg" />
      </a>
      <a href="https://github.com/Ramos159/NYC-TTP-backend">
        <img src="https://gh-card.dev/repos/Ramos159/NYC-TTP-backend.svg" />
      </a>
    </div>
    <p className="indexTitle">
      Web App Project made for NYC Tech Talent Pipeline Assesment
    </p>
    <p className="indexTitle">
      Real time stock data with Alphavantage API, encrypted login with BCrypt,
      Semantic UI components
    </p>
    <p className="indexTitle">
      Built with Javascript, React.JS, Ruby, Ruby on Rails
    </p>
    <b>
      <p
        className="indexTitle"
        style={{
          fontSize: "120%",
          color: "LightSkyBlue",
          textDecoration: "underline",
        }}
      >
        Warning: Hosted on a free service, may not load on first attempt
      </p>
    </b>
    <hr style={{ color: "white", backgroundColor: "white", width: "40%" }}></hr>
    <a
      style={{ color: "white", textDecoration: "underline" }}
      rel="noopener noreferrer"
      target="_blank"
      href="https://event-hub-site.herokuapp.com/"
    >
      <h2 className="indexTitle">EventHub</h2>
    </a>
    <div id="project">
      <a href="https://github.com/Ramos159/eventhub-frontend">
        <img src="https://gh-card.dev/repos/Ramos159/eventhub-frontend.svg" />
      </a>
      <a href="https://github.com/Ramos159/eventhub-backend">
        <img src="https://gh-card.dev/repos/Ramos159/eventhub-backend.svg" />
      </a>
    </div>
    <p className="indexTitle">
      Web App that emulates an ecommerce site based on selling tickets to events
    </p>
    <p className="indexTitle">
      Uses 2 TicketMaster API's, BCrypt, Postgres, Semantic UI
    </p>
    <p className="indexTitle">
      Built with Javascript, React.JS, Ruby, Ruby on Rails
    </p>
    <b>
      <p
        className="indexTitle"
        style={{
          fontSize: "120%",
          color: "LightSkyBlue",
          textDecoration: "underline",
        }}
      >
        Warning: Hosted on a free service, may not load on first attempt
      </p>
    </b>
    <hr style={{ color: "white", backgroundColor: "white", width: "40%" }}></hr>
    <a
      style={{ color: "white", textDecoration: "underline" }}
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.youtube.com/watch?v=3cc1s6kSAmM"
    >
      <h2 className="indexTitle">ReactDex</h2>
    </a>
    <div id="project">
      <a href="https://github.com/dankomong/reactdex-frontend">
        <img src="https://gh-card.dev/repos/dankomong/reactdex-frontend.svg" />
      </a>
      <a href="https://github.com/Ramos159/reactdex-backend">
        <img src="https://gh-card.dev/repos/Ramos159/reactdex-backend.svg" />
      </a>
    </div>
    <p className="indexTitle">
      Pokemon Themed Web App that revolves around building teams
    </p>
    <p className="indexTitle">Uses Official Pokemon API, BCrypt, MySql</p>
    <p className="indexTitle">
      Built with Javascript, React.JS, Ruby, Ruby on Rails
    </p>
    <hr style={{ color: "white", backgroundColor: "white", width: "40%" }}></hr>
    <h2 className="indexTitle">Geometric Warfare</h2>
    <div id="project">
      <a href="https://github.com/Ramos159/geometric-warfare">
        <img src="https://gh-card.dev/repos/Ramos159/geometric-warfare.svg" />
      </a>
    </div>
    <p className="indexTitle">Browser game app inspired by Geometry wars</p>
    <p className="indexTitle">
      Classic spaceship shooter game with scaling difficulty and humorous game
      assets
    </p>
    <p className="indexTitle" style={{ marginBottom: "50px" }}>
      Built with Javascript, Phaser3.JS Game Library, Ruby, Ruby on Rails
    </p>
    <Background />
    <Footer />
  </div>
)
