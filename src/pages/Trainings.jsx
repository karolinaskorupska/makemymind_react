import React from 'react';

import Training from '../components/trainings/Training';


const Trainings=()=>{

    return(
        <main>
            <div className="container trainings">
                <h2>Treningi z kompetencji miękkich</h2>
                    <div className="big-box trainings">
                        <Training />
                    </div>
            </div>
        </main>
    )
}

export default Trainings;