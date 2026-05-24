import './BestOf.css'

const bestPlants = [
  {
    id: 1,
    name: 'We Have Small And Best O2 Plants Collection’s',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    ,
    image: '/images/plant06.png',
  }
]

export default function BestOf() {
  return (
    <section className="best-of">
      <div className="container">
        <div className="best-of__header">
          <span className="section-tag">🏆 Editor's Pick</span>
          <h2 className="section-title">Our Best <span>o2</span></h2>
          <p className="best-of__subtitle">
            Handpicked by our botanists for maximum oxygen output and minimal care.
          </p>
        </div>

        <div className="best-of__grid">
          {bestPlants.map((plant, i) => (
            <div key={plant.id} className={`best-of__card ${i % 2 === 1 ? 'best-of__card--reverse' : ''}`}>
              <div className="best-of__img-side">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="best-of__img"
                  onError={e => { e.target.style.opacity = '0.15' }}
                />
              </div>
              <div className="best-of__text-side">
                <h3 className="best-of__name">{plant.name}</h3>
                <p className="best-of__description">{plant.description}</p>
                <div className="best-of__footer">
                  <span className="price-tag">{plant.price}</span>
                  <div className="best-of__actions">
                    <button className="btn-primary">Explore</button>
                    <button className="btn-outline">Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
