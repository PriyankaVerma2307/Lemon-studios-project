import './Reviews.css'

const reviews = [
  {
    id: 1,
    name: 'Maya Desai',
    handle: '@maya.desai',
    avatar: 'M',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '3 days ago',
  },
  {
    id: 2,
    name: 'Vaibhav K.',
    handle: '@vaibhav_k',
    avatar: 'V',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '1 week ago',
  },
  {
    id: 3,
    name: 'CJ Thakur',
    handle: '@cj_thakur',
    avatar: 'C',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2 weeks ago',
  },
]

const stars = (n) => '★'.repeat(n) + '☆'.repeat(5 - n)

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews__header">
          <span className="section-tag">💬 Testimonials</span>
          <h2 className="section-title">Customer <span>Reviews</span></h2>
          <p className="reviews__subtitle">
            Real stories from plant lovers who brought nature home.
          </p>
        </div>

        <div className="reviews__grid">
          {reviews.map(r => (
            <div key={r.id} className="review-card">
              <div className="review-card__top">
                <div className="review-card__avatar">{r.avatar}</div>
                <div className="review-card__meta">
                  <span className="review-card__name">{r.name}</span>
                  <span className="review-card__handle">{r.handle}</span>
                </div>
                <span className="review-card__stars" aria-label={`${r.rating} out of 5 stars`}>
                  {stars(r.rating)}
                </span>
              </div>
              <p className="review-card__text">{r.text}</p>
              <span className="review-card__date">{r.date}</span>
            </div>
          ))}
        </div>

        <div className="reviews__summary">
          <div className="reviews__big-score">4.8</div>
          <div className="reviews__stars-row">★★★★★</div>
          <p className="reviews__count">Based on 2,300+ verified reviews</p>
        </div>
      </div>
    </section>
  )
}
