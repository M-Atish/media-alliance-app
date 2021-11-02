import './footer.scss'
import { logoImg } from 'assets'

const Footer = () => {
    const socials = ['', '', '', '']
    const links = ['links', 'links', 'links', 'links', 'links']
    const features = [
        'features',
        'features',
        'features',
        'features',
        'features',
    ]

    return (
        <div className="footer-container">
            <div className="footer-logo-desc-social-container">
                <figure className="footer-logo-container">
                    <img
                        src={logoImg}
                        alt="Media Alliance Nepal"
                        className="footer-logo-image"
                    />
                </figure>
                <p className="footer-desc">
                    When it came near enough he perceived that it was not grass;
                    there were no blades, but only purple roots. The roots were
                    revolving, for each small plant in the whole patch, like the
                    spokes of a rimless wheel.
                </p>
                <div className="footer-socials-section">
                    {socials.map((social, index) => (
                        <div className="footer-social-container" key={index}>
                            {social}
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-quick-links-section">
                <h3 className="footer-quick-links-heading">Quick links</h3>
                {links.map((link, index) => (
                    <div className="footer-quick-link-container" key={index}>
                        {link}
                    </div>
                ))}
            </div>
            <div className="footer-features-section">
                <h3 className="footer-features-heading">Features</h3>
                {features.map((feature, index) => (
                    <div className="footer-feature-container" key={index}>
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer
