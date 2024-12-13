import videoBanner from '../assets/videoDemo.mp4'
import '../style/hero.css'
function Hero () {  
    return(
        <main>
            <div className="text-main">
                <h1>Lobe <span>Tour</span></h1>
                <p>Build your first machine learning model in ten minutes. No code or experience required.</p>
            </div>
            <div className="video-container">
                <video controls preload='auto' autoPlay muted>
                    <source src={`${videoBanner}`}/>
                </video>
            </div>
            <div className="second-section">
                <h2>Train your app with Lobe</h2>
                <a href="#">Download</a>
            </div>
        </main>
    )
}

export default Hero