import "./Our-collection.scss"
import Box1 from "./../../../Assets/Images/kopi1.png"
import Box2 from "./../../../Assets/Images/kopi2.png"
import Box3 from "./../../../Assets/Images/kopi3.png"
import Box4 from "./../../../Assets/Images/kopi4.png"

function OurCollection() {
    return (
        <section className="our-collection" id="main_hero">
            <div className="container">
                <ul className="our-collection__list">
                    <li className="our-collection__list-item">
                        <img src={Box1} alt="box"  width="255" height="193"/>
                        <h3 className="our-collection__heading">
                            Gran Espress
                        </h3>
                        <p className="our-collection__text">
                            Light and flavorful blend with cocoa and black pepper for an intense experience.
                        </p>
                    </li>
                    <li className="our-collection__list-item">
                        <img src={Box2} alt="box"  width="255" height="193"/>
                        <h3 className="our-collection__heading">
                            Planalto
                        </h3>
                        <p className="our-collection__text">
                            Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.
                        </p>
                    </li>
                    <li className="our-collection__list-item">
                        <img src={Box3} alt="box"  width="255" height="193"/>
                        <h3 className="our-collection__heading">
                            Piccollo
                        </h3>
                        <p className="our-collection__text">
                            Mild and smooth blend featuring notes of toasted almond and dried cherry.
                        </p>
                    </li>
                    <li className="our-collection__list-item">
                        <img src={Box4} alt="box"  width="255" height="193"/>
                        <h3 className="our-collection__heading">
                            Danche
                        </h3>
                        <p className="our-collection__text">
                            Ethiopian hand-harvested blend densely packed with vibrant fruit notes.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default OurCollection;