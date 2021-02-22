import React from 'react'
import arrow from './assets/arrow.svg'
import './project.css'
import image from './assets/eduvizer.png'
import { useHistory } from 'react-router-dom'

const Projects = (project) => {
  const p = project.p
  const history = useHistory()
  const handleClick = (e) => {
    e.preventDefault()
    history.push(`./${p.id}`)
    window.location.href = './'
  }
  if (p === undefined){
    return null
  }
  return (
    <div>


      <main className="container">
        <div className="project-container" id="project-container">
          <div className="back-container">
            <img src={arrow} alt="Back" onClick={(e) => handleClick(e)} />
            <a href="./">Back</a>
          </div>

          <div className="project-details">
            <img src={image} alt={'Project screenshot'}/>
            <h2>{p.name}</h2>
            <p>{p.fullDescription}</p>
          </div>

        </div>
      </main>
      <footer>
        <p id="footer-text"></p>
      </footer>
    </div>
  )
}

export default Projects
