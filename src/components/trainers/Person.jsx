import React from 'react';
import { Component } from 'react';


class Person extends Component{
    state={
        clicked:false
    }

    showMore=()=>{
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render(){
        const {name, surname, photoPath, description, shortDescription} = this.props.trainer;

        return(
            <div className="person">
                <div className="introduce">
                    <div className="image" src={photoPath}></div>
                    <div className="name">{name}<br></br> {surname}</div>
                </div>
                <div className="description">
                        <p>{shortDescription}</p>
                        {description.map((p, index) =>
                           <p id={!this.state.clicked ? "hiddenIn320px": ""}
                           key={index}>{p}</p> )}
                        <button className="rozwin zwin"
                        onClick={this.showMore}>{!this.state.clicked ? "rozwiń": "zwiń"}</button>
                </div>
            </div>
        )
    }
}

export default Person;