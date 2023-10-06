import mePhoto from '../Assets/About/1.png'
import hardSkill from '../Data/hardSkills'
import softSkills from '../Data/softSkills'
import './about.css'
const About=()=>{
return(
    <div className="pageAbout">
        <section className='information'>
        <font className="info">Minya based,i'm a designer with a passion
for 360°communication and concepts.</font>
        <img src={mePhoto} alt='mePhoto' className='mePhoto'/>
        </section>
        <section className='skills'>
            <div className='itemSkills'>
            <font className='title'>Hard Skills</font>
            {
                hardSkill.map((item)=>{
                    return(
                        <div key={item.id}>
                            <font className='info skill'>{item.title}</font>
                        </div>
                    )
                })
            }
            </div>
            <div className='itemSkills'>
             <font className='title'>Soft Skills</font>
            {
                softSkills.map((item)=>{
                    return(
                        <div key={item.id}>
                            <font className='info skill'>{item.title}</font>
                        </div>
                    )
                })
            }
            </div>
        </section>
       
    </div>
)
}
export default About