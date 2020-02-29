import React, { useState, useEffect} from 'react';
//obrazy:
import WatchImg from '../../assets/trainings/np_time_2496474_FFD26E.svg';
import PlaceImg from '../../assets/trainings/np_place_3090813_FFD26E.svg';

const Training =()=>{
    const [trainingsList, setTrainingsList] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/trainings')
        .then((response)=>{
            return response.json();
        })
        .then((trainings)=>{
            setTrainingsList(trainings);
        });
    },[]);

    return(
        <>
            {trainingsList.map((training)=>{
                return (
                    <div className="small-box training">
                        <div className="photo-box" src={training.photo}></div>
                        <div className="text-box">
                            <h4>{training.name}</h4>
                            <span>{training.price}</span>
                            <div className="p-box">
                                {training.description.map((desc, id)=><p key={id}>{desc}</p>)}
                            </div>
                            <div className="icon-box">
                                <div className="watch">
                                    <img src={WatchImg} alt="watch"/>
                                    <div className="txt">
                                        {training.howManyTrainings}
                                        <br></br>
                                        {training.howManyHoursEvery}
                                    </div>
                                </div>
                                <div className="location">
                                
                                <img src={PlaceImg} alt="location"/>
                                <div className="txt">
                                    {training.city}
                                    <br></br>
                                    {training.adress}
                                </div>
                            </div>
                        </div>   
                        <button className="zapisz-sie">Zapisz się</button>
                        <a href="dowiedz-sie-wiecej">Dowiedz się więcej</a>
                    </div>
                </div>
                );
            })}
        </>
    )
}




export default Training;