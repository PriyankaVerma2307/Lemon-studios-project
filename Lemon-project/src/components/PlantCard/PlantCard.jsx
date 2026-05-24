import './PlantCard.css'

export default function PlantCard({ plant, featured = false }) {
  return (
    <div className={`plant-card ${featured ? 'plant-card--featured' : ''}`}>
      {plant.tag && (
        <span className="plant-card__tag">{plant.tag}</span>
      )}

      <div className="plant-card__img-wrap">
        <img
          src={plant.image}
          alt={plant.name}
          className="plant-card__img"
          onError={e => {
            e.target.src = ''
            e.target.style.opacity = '0.15'
          }}
        />
      </div>

      <div className="plant-card__body">
        <p className="plant-card__name">{plant.name}</p>
        <div className="plant-card__footer">
          <span className="price-tag">{plant.price}</span>
          <div className="plant-card__actions">
            <button className="btn-primary plant-card__btn">Explore</button>
            <button className="btn-outline plant-card__btn">Buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}
