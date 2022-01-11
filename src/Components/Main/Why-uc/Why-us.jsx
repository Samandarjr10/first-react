import "./Why-uc.scss"
import Shape from "../../../Assets/Images/Shape.svg"
import Shape2 from "../../../Assets/Images/Shape2.svg"
import Shape3 from "../../../Assets/Images/Shape3.svg"

function WhyUc(params) {
    return (
        <section className="why-us-section">
            <div className="container">
                <h3 className="why-us-section__heading">
                    Why choose us?
                </h3>
                <p className="why-us-section__text">
                    A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
                </p>

                <ul className="why-us-section__list">
                    <li className="why-us-section__list-item">
                        <img className="why-us-section__list-item-img" src={Shape} alt="" alt="Shape" width="72" height="72"/>
                        <h4 className="why-us-section__list-item-heading">
                            Best quality
                        </h4>
                        <p className="why-us-section__list-item-text">
                            Discover an endless variety of the worlds best artisan coffee from each of our roasters.
                        </p>
                    </li>
                    <li className="why-us-section__list-item why-us-section__list-item--excluvise">
                        <img className="why-us-section__list-item-img" src={Shape2} alt="" alt="Shape" width="72" height="72"/>
                        <h4 className="why-us-section__list-item-heading">
                            Exclusive benefits
                        </h4>
                        <p className="why-us-section__list-item-text">
                            Special offers and swag when you subscribe, including 30% off your first shipment.  
                        </p>
                    </li>
                    <li className="why-us-section__list-item why-us-section__list-item--free">
                        <img className="why-us-section__list-item-img" src={Shape3} alt="" alt="Shape" width="72" height="72"/>
                        <h4 className="why-us-section__list-item-heading">
                            Free shipping
                        </h4>
                        <p className="why-us-section__list-item-text">
                            We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default WhyUc;