import './contactus.css'

const Contactus=()=>{
    return(
        <div className="contactPage">
        <section className='infoContactus'>
        <font className="titleContactus">Get in touch</font>
        <p className='pContactus'>As a freelancer, i'm available for new projects and collaborations.</p>
        </section>
    <form action="https://formsubmit.co/merolanessem@gmail.com" className="form" method="POST">
        <input type="text" name="name" id="name" className="form-control" placeholder="Full Name" required/>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"required/>
        <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" required/>
        <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" rows="3" placeholder="Message"required></textarea>
        <div className="btns">
            <input type="submit" value="Send" id="buttonSend"/>
            <input type="reset" value="Reset" id="buttonReset"/>
        </div>
    </form>
    </div>

    )
    
}
export default Contactus