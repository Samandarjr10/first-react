import "./Works.scss"

function Works() {
    return (
        <section className="main-footer-section">
            <div className="container">
                <h3 className="main-footer-section__heading">
                    How it works
                </h3>
                <div className="main-footer-section__wrapper-spans">
                    <span className="main-footer-section__span-line">
                        <span className="main-footer-section__span-oval"></span>
                    </span>
                </div>
                <ul className="main-footer-section__list">
                    <li className="main-footer-section__list-item">
                        <h2 className="main-footer-section__list-item-heading">
                            01
                        </h2>
                        <h3 className="main-footer-section__list-item-heading-info">
                            Pick your coffee
                        </h3>
                        <p className="main-footer-section__list-item-text">
                            Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
                        </p>
                    </li>
                    <li className="main-footer-section__list-item">
                        <h2 className="main-footer-section__list-item-heading">
                            02
                        </h2>
                        <h3 className="main-footer-section__list-item-heading-info">
                            Choose the frequency
                        </h3>
                        <p className="main-footer-section__list-item-text">
                            Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.
                        </p>
                    </li>
                    <li className="main-footer-section__list-item">
                        <h2 className="main-footer-section__list-item-heading">
                            03
                        </h2>
                        <h3 className="main-footer-section__list-item-heading-info">
                            Receive and enjoy!
                        </h3>
                        <p className="main-footer-section__list-item-text">
                            We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
                        </p>
                    </li>
                </ul>
                <a className="main-footer-section__link button" href="#" id="create_plan" target="blank">
                    Create your plan 
                </a>
            </div>
        </section>
    )
}

export default Works