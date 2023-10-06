import { Link } from 'react-router-dom'
import { faGithub,faLinkedin,faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import './socialmedia.css'
const SocialMedia=()=>{
return(
    <div className="icons">
        <Link to="https://www.linkedin.com/in/merola-nessem-793a47246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='link'>
        <FontAwesomeIcon icon={faLinkedin} className='icon' />
        </Link>
        <Link to="" className='link'>
        <FontAwesomeIcon icon={faGithub} className='icon' />
         </Link>
        <Link to="https://t.me/+201274224511" className='link'>
        <FontAwesomeIcon icon={faTelegram} className='icon' />
        </Link>
    </div>
)
}
export default SocialMedia