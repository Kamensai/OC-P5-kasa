function Card({ cardTitle, cardImg }) {
  return (
    <div className="card-content">
      <img src={cardImg} alt={'Image de ' + cardTitle} />
      <h3>{cardTitle}</h3>
    </div>
  )
}

export default Card
