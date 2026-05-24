import './TopSelling.css'

const topPlants = [
  { id: 1,  name: 'Calathea plant',    price: 'Rs. 299/-', image: '/images/plant01.png' },
  { id: 2,  name: 'Calathea Plant',    price: 'Rs. 320/-', image: '/images/plant02.png' },
  { id: 3,  name: 'Calathea Plant',    price: 'Rs. 345/-', image: '/images/plant03.png' },
  { id: 4,  name: 'Cactus Plant',      price: 'Rs. 180/-', image: '/images/plant04.png' },
  { id: 5,  name: 'Calathea Plant',    price: 'Rs. 310/-', image: '/images/plant05.png' },
  { id: 6,  name: 'Calathea Plant',    price: 'Rs. 318/-', image: '/images/plant06.png' },
]

export default function TopSelling() {
  return (
    <section className="top-selling">
      <div className="container">
        <div className="top-selling__header">
          <span className="section-tag">⭐ Customer Favourites</span>
          <h2 className="section-title">Our <span>Top Selling</span></h2>
          <p className="top-selling__subtitle">
            Plants our customers keep coming back for — proven, popular, and perfect.
          </p>
        </div>

        <div className="top-selling__grid">
          {topPlants.map(plant => (
            <div key={plant.id} className="top-selling__card">
              <div className="top-selling__img-wrap">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="top-selling__img"
                  onError={e => { e.target.style.opacity = '0.15' }}
                />
              </div>
              <div className="top-selling__info">
                <p className="top-selling__name">{plant.name}</p>
                <div className="top-selling__row">
                  <span className="price-tag">{plant.price}</span>
                  <button className="top-selling__add" aria-label="Add to cart">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="top-selling__cta">
          <button className="btn-outline">View All Plants →</button>
        </div>
      </div>
    </section>
  )
}
