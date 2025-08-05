import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

// Composant Slideshow : affiche un carrousel d'images avec navigation par chevrons

function Slideshow({ logement }) {
  const pictures = logement.pictures
  const [index, setIndex] = useState(0)

  return (
    <div className="logement-slideshow">
      <img src={pictures[index]} alt={'Image de ' + logement.title} />
      {/* Chevrons de navigation (affichés seulement si plusieurs images) */}
      <div className={pictures.length === 1 ? 'hidden' : 'nav'}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="chevron-left"
          onClick={() =>
            setIndex(index === 0 ? pictures.length - 1 : index - 1)
          }
        />

        <FontAwesomeIcon
          icon={faChevronRight}
          className="chevron-right"
          onClick={() => setIndex((index + 1) % pictures.length)}
        />
      </div>
      {/* Indicateur de position dans le slideshow. Caché si une seule image */}
      <div className={pictures.length === 1 ? 'hidden' : 'index'}>
        {index + 1}/{pictures.length}
      </div>
    </div>
  )
}

export default Slideshow
