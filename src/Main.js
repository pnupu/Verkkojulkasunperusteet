import './App.css'
import profiilikuva from './assets/profiilikuva.png'
import projects from './projectlist'
import React from 'react'
import thumbnail from  './assets/eduvizer_thumbnail.png'
import { useHistory } from 'react-router-dom'

const Main = () => {
  const footer  = `Ilkka Lappeteläinen ${new Date().getFullYear()}`
  const history = useHistory()
  window.onscroll = function() {
    if (window.pageYOffset > 50) {
      document.getElementById('nav').style.opacity = '1'
    } else {
      document.getElementById('nav').style.opacity = '0'
    }
  }

  const handleClick = (e, id) => {
    e.preventDefault()
    history.push('/')
    window.location.href = `./${id}`
  }
  return (
    <div>
      <header id="nav">
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </header>

      <main className="container">
        <section className="header">
          <h1 className="header-text">&gt;Ilkka Lappeteläinen</h1>
        </section>

        <section className="contact-information" id="contact">
          <img
            src={profiilikuva}
            alt="Profiilikuva"
            className="profile-image"
          />
          <h1>Ilkka Lappeteläinen</h1>
          <h3>Software developer | Aalto University student | Scout</h3>
          <div className="social-links">
            <a href="mailto:ilkka.lappetelainen@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/ilkka-lappetelainen-821833204/">LinkedIn</a>
            <a href="https://github.com/pnupu">GitHub</a>
          </div>
        </section>

        <section className="about" id="about">
          <h1>About me</h1>
          <p className="about-text">
                    I started coding when I was 10 years old, my father gave me a laptop with Linux and Aalto University’s python course. Back then I had trouble motivating myself to code since games were better in my opinion. Now days I have figured out the joys of creation, the feeling of accomplishment that you get when you put your final push command in the command prompt and look at your creation is magnificent. I got back to coding during high school and mainly started coding in university. My focus is in JavaScript but I’m studying a lot of different coding methods and problems. During my free time I’m the leader of my local scout group we have about 190 member’s and we operate in Mankkaa, Espoo.



          </p>
        </section>

        <section className="projects" id="projects">
          <h2>My Projects</h2>
          <div className="project-container">
            {projects.map( (p,i) =>

              <div key={i} className="project-card" style={{ backgroundImage: 'url(' + thumbnail + ')' }} onClick={(e) => handleClick(e, p.id)}>
                <div>
                  <div>
                    <h4>{p.name}</h4>
                    <p>{p.description}</p>
                  </div>
                  <a href={`./${p.id}`}>Read more</a>
                </div>
              </div>)}
          </div>
        </section>
      </main>

      <footer>
        <p>{footer}</p>
      </footer>
    </div>
  )
}

export default Main