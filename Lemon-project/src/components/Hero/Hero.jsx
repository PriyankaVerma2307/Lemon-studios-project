import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      
      <div className="hero__bg">
        <img
          src="/images/mainplant.jpg"
          alt=""
          className="hero__bg-img"
          aria-hidden="true"
        />
        <div className="hero__bg-overlay" aria-hidden="true" />
      </div>

      {/* ── Top zone: title left, featured card right ── */}
      <div className="hero__top container">
        {/* Left: Title, description, actions, review card */}
        <div className="hero__content">
          <h1 className="hero__title">Breath Natural</h1>
          <p className="hero__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="hero__actions">
            <button className="hero__btn-explore">Explore</button>
            <button className="hero__btn-live">
              <span className="hero__play">▶</span>
              Live Demo . . .
            </button>
          </div>

          {/* Review card */}
          <div className="hero__review glass-card">
            <div className="hero__review-avatar">
              <img src="/images/plant03.png" alt="elena forzi"
                onError={e => { e.target.style.display='none' }} />
              <span className="hero__review-initials">E</span>
            </div>
            <div className="hero__review-body">
              <div className="hero__review-top">
                <span className="hero__review-name">elena Patel</span>
                <span className="hero__review-stars">★★★★★</span>
              </div>
              <p className="hero__review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Featured plant glass card */}
        <div className="hero__featured glass-card">
          <img
            src="/images/plant02.png"
            alt="Calathea plant"
            className="hero__featured-img"
            onError={e => { e.target.style.opacity = '0.2' }}
          />
          <div className="hero__featured-info">
            <span className="hero__featured-label">Trendy House Plant</span>
            <div className="hero__featured-row">
              <h3 className="hero__featured-name">Calathea plant</h3>
              <button className="hero__featured-arrow">›</button>
            </div>
            <button className="hero__btn-buy">Buy Now</button>
            <div className="hero__featured-dots">
              <span className="dot dot--active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Centre label ── */}
      <div className="hero__label-band container">
        <h2 className="hero__trendy-label">Our Trendy plants</h2>
      </div>

      {/* ── Bottom: two plant feature cards ── */}
      <div className="hero__bottom container">
        {/* Card 1 — plant image left, text right */}
        <div className="hero__plant-card glass-card hero__plant-card--left">
          <img
            src="/images/plant06.png"
            alt="For Small Decs Ai Plat"
            className="hero__plant-card-img hero__plant-card-img--left"
            onError={e => { e.target.style.opacity = '0.2' }}
          />
          <div className="hero__plant-card-text">
            <h3 className="hero__plant-card-name">For Small Decs Ai Plat</h3>
            <p className="hero__plant-card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="price-tag hero__plant-card-price">Rs. 599/-</span>
            <div className="hero__plant-card-actions">
              <button className="hero__btn-explore">Explore</button>
              <button className="hero__btn-icon" aria-label="Add to cart">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 — text left, plant image right */}
        <div className="hero__plant-card glass-card hero__plant-card--right">
          <div className="hero__plant-card-text">
            <h3 className="hero__plant-card-name">For Fresh Decs Ai Plat</h3>
            <p className="hero__plant-card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="price-tag hero__plant-card-price">Rs. 579/-</span>
            <div className="hero__plant-card-actions">
              <button className="hero__btn-explore">Explore</button>
              <button className="hero__btn-icon" aria-label="Add to cart">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
              </button>
            </div>
          </div>
          <img
            src="/images/plant05.png"
            alt="For Fresh Decs Ai Plat"
            className="hero__plant-card-img hero__plant-card-img--right"
            onError={e => { e.target.style.opacity = '0.2' }}
          />
        </div>
      </div>
    </section>
  )
}
