import './index.scss'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_dld8q1n',
        'template_79oel9r',
        refForm.current,
        'vNk9c9B4ou9I5wjL_'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance/Job opportunities - especially
            ambitious or large projects, however , if you have other request or
            question, don't hesitate to contact me using below form either{' '}
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Priyank Purohit
          <br />
          India,
          <br />
          Poornapragna Housing Layout,
          <br />
          Bangluru
          <br />
          <span>priyankpurohit51000@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[12.908946747032799, 77.5355418248396]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[12.908946747032799, 77.5355418248396]}>
              <Popup>Priyank lives here,come over for a cup of cofee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
