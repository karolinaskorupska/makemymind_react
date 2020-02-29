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
    
    console.log(trainingsList);
    return(
        
        <div className="small-box training">
             {/* //info o obrazie będzie zbierane z pliku data- czy tu też trzeba go importować? w funkcji? */}
                    <div className="photo-box"></div>
                    <div className="text-box">
                        <h4>Treningi dla liderów</h4>
                        <span>0ZŁ!</span>
                        <div className="p-box">
                            {/* w tym miejscu będę mapować paragrafy z description */}
                            <p> – przećwiczysz różne techniki efektywnego zarządzania zespołami</p>
                            <p> – dowiesz się jak zbudować i podtrzymać wizerunek skutecznego lidera </p>  
                            <p> – pierwsze treningi już we Wrześniu</p>
                        </div>
                        <div className="icon-box">
                            <div className="watch">
                                 
                                <img src={WatchImg} alt="watch"/>
                                <div className="txt">
                                    12 treningów/
                                    <br></br>
                                    2 godziny każdy
                                </div>
                            </div>
                            <div className="location">
                                
                                <img src={PlaceImg} alt="location"/>
                                <div className="txt">
                                    Poznań,
                                    <br></br>
                                    ul.Towarowa 35
                                </div>
                            </div>
                        </div>   
                        <button className="zapisz-sie">Zapisz się</button>
                        <a href="dowiedz-sie-wiecej">Dowiedz się więcej</a>
                    </div>
                </div>
    )
}




export default Training;