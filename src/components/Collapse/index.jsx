import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

// Composant Collapse : affiche un titre cliquable et un contenu repliable

function Collapse({ collapseTitle, collapseContent }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse-title">
        <div className="collapse-title-text">{collapseTitle}</div>
        <div className="collapse-toggle">
          {/* Chevron qui pivote selon l'état ouvert/fermé en fonction de la valeur de isOpen */}
          <FontAwesomeIcon
            icon={faChevronUp}
            size="xl"
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? 'chevron chevron-open' : 'chevron'}
          />
        </div>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {collapseContent}
      </div>
    </div>
  )
}

export default Collapse
