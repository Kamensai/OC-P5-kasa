import { useParams, useNavigate } from 'react-router'
import { useEffect } from 'react'

import Collapse from '../../components/Collapse'
import Slideshow from '../../components/Slideshow'

import logements from '../../datas/logements.json'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'

function Logement() {
  // Récupère l'id du logement depuis l'URL
  const { id } = useParams()
  const navigate = useNavigate()
  // Recherche le logement correspondant à l'id
  const logement = logements.find((logement) => logement.id === id)

  const description = logement ? logement.description : ''
  const equipements = logement ? logement.equipments : []

  // Redirige vers la page d'erreur si le logement n'existe pas
  useEffect(() => {
    if (!logement) {
      navigate(`/Error`)
    }
  }, [logement, navigate])

  if (!logement) {
    return null
  }

  // Sépare le nom de l'hôte en prénom et nom
  const [firstName, lastName] = logement.host.name.split(' ')

  return (
    <section className="logement-wrapper">
      <Slideshow logement={logement}></Slideshow>
      <div className="logement-content">
        <div className="logement-content-1">
          <div className="logement-content-1-a">
            <h2>{logement.title}</h2>
            <p className="logement-location">{logement.location}</p>
            {/* Affichage des tags du logement */}
            <div className="logement-tags">
              {logement.tags.map((tag, index) => (
                <div key={index} className="logement-tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="logement-content-1-b">
            <div className="host">
              <div className="host-name">
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>
              <img src={logement.host.picture} />
            </div>
            {/* Affichage de la note du logement. Le nombre de starsActive correspond au rating */}
            <div className="logement-rating">
              {Array.from({ length: 5 }, (_, index) =>
                index < logement.rating ? (
                  <img key={index} src={starActive} />
                ) : (
                  <img key={index} src={starInactive} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="logement-content-2">
        <Collapse
          collapseTitle="Description"
          collapseContent={description}
        ></Collapse>
        <Collapse
          collapseTitle="Équipements"
          collapseContent={
            <ul className="logement-equipments">
              {equipements.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        ></Collapse>
      </div>
    </section>
  )
}

export default Logement
