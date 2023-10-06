import Foods from '../Data/FOOD'
import Sport from '../Data/SPORT'
import House from '../Data/HOUSE'
import Car from '../Data/CAR'
import Boot from '../Data/BOOT'
 import './work.css'
const Work=()=>{
    return(
        <div className="pageWork">
            <section className='items'>
                {
                    Foods.map((item)=>{
                    return(<item className='item' key={item.id}>
                      <img src={item.src} alt='' className='img-item' />
                      <font className="title-item">{item.title}</font>
                    </item>
                    )
                    })
                
                }
            </section>
            <section className='items'>
                {
                    House.map((item)=>{
                    return(<item className='item' key={item.id}>
                      <img src={item.src} alt='' className='img-item' />
                      <font className="title-item">{item.title}</font>
                    </item>
                    )
                    })
                
                }
            </section>
            <section className='items'>
                {
                    Sport.map((item)=>{
                    return(<item className='item' key={item.id}>
                      <img src={item.src} alt='' className='img-item' />
                      <font className="title-item">{item.title}</font>
                    </item>
                    )
                    })
                
                }
            </section>
            <section className='items'>
                {
                    Boot.map((item)=>{
                    return(<item className='item' key={item.id}>
                      <img src={item.src} alt='' className='img-item' />
                      <font className="title-item">{item.title}</font>
                    </item>
                    )
                    })
                
                }
            </section>
            <section className='items'>
                {
                    Car.map((item)=>{
                    return(<item className='item' key={item.id}>
                      <img src={item.src} alt='' className='img-item' />
                      <font className="title-item">{item.title}</font>
                    </item>
                    )
                    })
                
                }
            </section>
        </div>
    )
}
export default Work