import './Footer.css'

const quickLinks = ['Home', 'About Us', 'Our Plants', 'Pricing', 'Blog']
const plantTypes = ['Indoor Plants', 'Outdoor Plants', 'Succulents', 'Flowering Plants', 'Air Purifiers']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span>🌿</span>
            <span>Planto.</span>
          </a>
          <p className="footer__tagline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="footer__socials">
            {['𝕏', 'in', 'ig', 'fb'].map(s => (
              <a key={s} href="#" className="footer__social" aria-label={s}>{s}</a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__list">
            {quickLinks.map(l => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Plant Types */}
        <div className="footer__col">
          <h4 className="footer__col-title">By Category</h4>
          <ul className="footer__list">
            {plantTypes.map(t => (
              <li key={t}><a href="#" className="footer__link">{t}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__col footer__col--wide">
          <h4 className="footer__col-title">Stay in the Loop</h4>
          <p className="footer__newsletter-copy">
            Get plant care tips, new arrivals, and exclusive offers in your inbox.
          </p>
          <div className="footer__subscribe">
            <input
              type="email"
              placeholder="your@email.com"
              className="footer__input"
              aria-label="Email address"
            />
            <button className="btn-primary footer__sub-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">© {new Date().getFullYear()} Planto. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#" className="footer__link">Privacy Policy</a>
            <a href="#" className="footer__link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
