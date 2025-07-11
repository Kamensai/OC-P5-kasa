import { Link } from 'react-router'
import Card from '../../components/Card'
import ImageBanner from '../../components/ImageBanner'

import imageAccueil from '../../assets/image_accueil.png'
import logements from '../../datas/logements.json'

function Home() {
  return (
    <section className="accueil">
      <ImageBanner
        imgBannerSrc={imageAccueil}
        imgBannerAlt="Image de brumes dans les montagnes"
        textBanner={'Chez vous, partout et ailleurs'}
      />
      <div className="card-wrapper">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/Logement/${logement.id}`}>
            <Card
              cardTitle={logement.title}
              cardImg={logement.cover}
              id={logement.id}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home
