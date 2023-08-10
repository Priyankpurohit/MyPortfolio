import './index.scss'
import {
  faPython,
  faReact,
  faCss3,
  faHtml5,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious Front End Web Developer with an eye for detail
            and a commitment to creating innovative, user-friendly websites and
            applications. Experienced in HTML/CSS, JavaScript, and ReactJs.
          </p>
          <p>
            I am a quick learner and possess excellent communication skills,
            which allow me to effectively collaborate with clients and
            understand their requirements. I am confident in my ability to grasp
            new concepts swiftly and adapt to evolving technologies.
          </p>
          <p>
            If I need to define myself in one sentance that would be a family
            person, a sport fanatic,Photography enthusiast,and tech-obsessed!!!
          </p>
        </div>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faPython} color="#181818" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
