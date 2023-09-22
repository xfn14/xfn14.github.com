import { FaGithub, FaPaperPlane, FaTwitter, FaInstagram } from 'react-icons/fa6'

import '../styles/Socials.css'

function Socials() {
    return (
        <div className="socialMedia">
            <a href="https://github.com/xfn14" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
            <a href="mailto: me@fn14.pt" target="_blank" rel="noreferrer">
                <FaPaperPlane />
            </a>
            <a href="https://twitter.com/andre_vaz_14" target="_blank" rel="noreferrer">
                <FaTwitter />
            </a>
            <a href="https://www.instagram.com/andre.vaz14/" target="_blank" rel="noreferrer">
                <FaInstagram />
            </a>
        </div>
    )
}

export default Socials
