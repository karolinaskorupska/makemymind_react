import React from 'react';


const Welcome = () => {
    return(
        <section className="welcome">
                
                
                <div className="txt">
                    <h2>Zadbaj o umysł, tak <br></br> jak dbasz o swoje ciało!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A beatae, ullam optio dicta non eligendi pariatur? Numquam, omnis explicabo magnam deserunt, quia quisquam quos maxime reprehenderit aperiam ut odit officia!</p>
                    <button className="umow-sie">umów się za darmo!</button>
                </div>
                <div className="img"><img className="grow" src="assets/illustration_grow.svg" alt="grow!"></img></div>
            </section>
    )
}

export default Welcome;