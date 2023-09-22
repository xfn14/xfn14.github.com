import Typewriter from 'typewriter-effect'

import Background from '../assets/background.mp4'
import '../styles/Homepage.css'
import Socials from '../components/Socials'

const Homepage = () => {
    return (
        <div className="main">
            <div className="container container-1">
                <div className="item item-1">
                    <p>Welcome!</p>
                    <p>
                        I&apos;m André <span>&quot;fn14&quot;</span> Vaz
                    </p>
                    <Typewriter
                        options={{
                            strings: ['Software Developer', 'Freelancer', 'Software Designer'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </div>
                <div className="item item-2">
                    {/* <img src={Logo} alt="Logo" /> */}
                    <video src={Background} autoPlay loop muted></video>
                </div>
            </div>

            <div className="container container-2">
                <div className="item item-3">
                    {/* <img src={Logo} alt="Logo" /> */}
                    <video src={Background} autoPlay loop muted playsInline></video>
                </div>
                <div className="item item-4">
                    <p>Contact Me</p>
                    <Socials />
                </div>
            </div>
        </div>
    )
}

export default Homepage
