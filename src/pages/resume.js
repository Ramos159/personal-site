import React from "react"
import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import Background from "../components/background.js"
import "../styles/index.css"
import resumePDF from "../media/resume.pdf"

export default () => (
  <div style={{ zIndex: "-10", alignContent: "center" }}>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Navbar />
    <a
      href={resumePDF}
      style={{ textDecoration: "none", textAlign: "center" }}
      download="Edwin_Ramos_Resume"
    >
      <button className="btn">
        <i style={{ color: "white" }} className="fa fa-download" />
        <p style={{ color: "white" }}>Download</p>
      </button>
    </a>
    <iframe
      className="resume"
      src={resumePDF}
      type="application/pdf"
      width="825px"
      height="1050px"
    />
    <Background />
    <Footer />
  </div>
)
