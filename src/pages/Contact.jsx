import React from 'react';

import Form from '../components/contact/Form';


const Contact =()=>{

    return(
        <main className="contact">
            <div className="container contact">
                <div className="txt">
                    <h2>Napisz do nas</h2>
                    <Form />
                </div>
                
                <div className="img"><img className="grow" src="assets/illustration_grow.svg" alt="grow!"></img></div>
                
            </div>
        </main>
    )
}

export default Contact;