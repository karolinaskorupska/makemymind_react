import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Testimonial from '../../assets/illustration_testimonial.svg';
import ReactDOM from "react-dom";
//fontawesome:
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faSpinner,
    faChevronRight,
    faChevronLeft,
   } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(
    fab,
    faSpinner,
    faChevronRight,
    faChevronLeft,
  );

//   style dla fontawesome:
const ChevronStyle = {
    color:"#9B9B9B",
    fontSize:"28px",
    //media?
};
// const ChevronHover={
//     color: "#FFB700"
// }

//zmienna przykładowa-będzie tu tablica obiektów:
const slides=[1,2,3];



class Opinie extends Component{
    state={
        activeSlide:2,
    }
    setPrevSlide=()=>{
        
        this.setState((state) => {
            const activeSlide= state.activeSlide -1;
            return {
                activeSlide: activeSlide < 1 ? slides.length : activeSlide,
            }
        });
    }

    setNextSlide=()=>{
        this.setState((state) => {
            const activeSlide= state.activeSlide +1;
            return {
                activeSlide: activeSlide > slides.length ? 1 : activeSlide,
            }
        });
        console.log(this.state.activeSlide)
    }

    render(){
        return(
            <section className="opinie">
                    <div className="container">
                        <h2>Opinie</h2>
                        <div className="carousel" id="carousel">
                            <div className="carousel-container-big">
                                        <div className="carousel-container">
                                            <div  onClick={() => this.setPrevSlide()}>
                                                <FontAwesomeIcon
                                                icon={['fas', 'chevron-left']}
                                                className="fas fa-chevron-left"
                                                style={ChevronStyle}
                                                fixedWidth
                                                />
                                            </div>
                                            {slides.map((n)=>{
                                                return (
                                                    <div key={n} className={`small-container ${this.state.activeSlide===n ? "visible" : "" }`}>
                                                        <img className="opinieImg" src={Testimonial} alt="obrazek opinii"
                                                        style={{width: "193px", height: "143px"}}></img>
                                                        <div className="carousel-txt-container">
                                                            <h4>"Najlepsze treningi na jakich byłem!"</h4>
                                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A beatae, ullam optio dicta non eligendi pariatur? Numquam, omnis explicabo magnam deserunt, quia quisquam quos maxime reprehenderit aperiam ut odit officia!</p>
                                                            <p className="person"><span>Jan Nowak {n}</span> | CEO Make My Mind</p>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <div onClick={() => this.setNextSlide()}>
                                                <FontAwesomeIcon
                                                className="fas fa-chevron-right"
                                                icon={['fas', 'chevron-right']}
                                                style={ChevronStyle}
                                                fixedWidth 
                                                />
                                            </div>                              
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}


export default Opinie;