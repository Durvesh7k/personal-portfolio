import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import boat from "../../assets/project_video/boat-clone.mp4";
import portfolio from "../../assets/project_video/portfolio.mp4"
import todo from "../../assets/project_video/to-do.mp4"
import twitter from "../../assets/project_video/twitter-clone.mp4"
import './Slider.css';
import Autoplay from 'embla-carousel-autoplay';



const Slider = () => {

   
    const [emblaRef] = useEmblaCarousel({ loop: false, delay: 7000 }, [Autoplay()])

    return (
        <section>
            <h5>What I made?</h5>
            <h2>Projects</h2>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">

                    <video className='embla__slide' autoplay="true" loop="true" muted="true">
                        <source src={portfolio} />
                    </video>
                    <video className='embla__slide' autoplay="true" loop="true" muted="true">
                        <source src={todo} />
                    </video>
                    <video className='embla__slide' autoplay="true" loop="true" muted="true">
                        <source src={twitter} />
                    </video>
                    <video className='embla__slide' autoplay="true" loop="true" muted="true">
                        <source src={boat} />
                    </video>

                </div>
            </div>
            <div className='github__button'>
                <a href="https://github.com/Durvesh7k" className='btn btn-primary'>Visit on Github</a>

            </div>

        </section>
    )
}

export default Slider;