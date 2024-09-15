import React from 'react'
import {Link} from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About =()=>{
    return(
        <section className="about" id="about">
            <div className='container'>
                <div className="banner">
                  <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                    </div>  
                    <p className="mid">
                        We believe in creating a culinary experience that is both beautiful and delicious. Our menu offers a variety of dishes that cater to everyone's taste preferences. We strive to provide our customers with the best possible food and service.
                    </p>
                    <Link to={"/"}>Explore Menu {" "} <span>
                        {<HiOutlineArrowNarrowRight/>}
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about"/>
                </div>
            </div>
        </section>
    )
}
export default About;