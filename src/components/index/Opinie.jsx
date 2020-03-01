import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
    cursor:"pointer"
    //media?
};
// const ChevronHover={
//     color: "#FFB700"
// }

class Opinie extends Component{
    state={
        activeSlide:0,
        opinionsList:[],
        
    }
    componentDidMount(){
        fetch('http://localhost:4000/opinions')
        .then((response)=>{
            return response.json();
        })
        .then((opinion)=>{
            this.setState({
                opinionsList:opinion
            });
        }).catch(err => {
            console.error(err);
          });
    }

    setPrevSlide=()=>{
        const {opinionsList}=this.state;
        this.setState((state) => {
            const activeSlide= state.activeSlide -1;
            return {
                activeSlide: activeSlide < 0 ? opinionsList.length-1 : activeSlide,
            }
        });
    }

    setNextSlide=()=>{
        const {opinionsList}=this.state;
        this.setState((state) => {
            const activeSlide= state.activeSlide +1;
            return {
                activeSlide: activeSlide > opinionsList.length-1 ? 0 : activeSlide,
            }
        });
    }

    render(){
        const {opinionsList}=this.state;
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
                                            {opinionsList.map((opinion)=>{
                                        
                                                return (
                                                    <div key={opinion.author} className={`small-container ${this.state.activeSlide===opinionsList.indexOf(opinion) ? "visible" : "" }`}>
                                                        <img className="opinieImg" src={opinion.photoPath} alt="obrazek opinii"
                                                        style={{width: "193px", height: "143px"}}></img>
                                                        <div className="carousel-txt-container">
                                                            <h4>"{opinion.title}"</h4>
                                                            <p>{opinion.opinionText}</p>
                                                            <p className="person"><span>{opinion.author}</span> | {opinion.position}</p>
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