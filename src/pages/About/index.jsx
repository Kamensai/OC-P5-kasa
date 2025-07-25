import ImageBanner from '../../components/ImageBanner'

import imagePropos from '../../assets/image_propos.png'

import Collapse from '../../components/Collapse'

function About() {
  return (
    <section className="apropos">
      <ImageBanner
        imgBannerSrc={imagePropos}
        imgBannerAlt="Image de montagnes"
      />

      <Collapse
        collapseTitle="Fiabilité"
        collapseContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
      />

      <Collapse
        collapseTitle="Respect"
        collapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />

      <Collapse
        collapseTitle="Service"
        collapseContent="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
      />

      <Collapse
        collapseTitle="Sécurité"
        collapseContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </section>
  )
}

export default About
