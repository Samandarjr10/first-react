import "./Hero.scss"
import Bitmap from "../../../Assets/Images/Bitmap.png"
function Hero() {
    return (
        <section className="hero">
            <div className="container" >
                <div className="hero__wrapper">
                    <h1 className="hero__heading">
                        Great coffee made simple.
                    </h1>
                    
                    <p className="hero_text">Start your mornings with the worlds best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
    
                    <a className="hero__link button" href="#" id="create_your_plan" target="blank">Create your plan</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;