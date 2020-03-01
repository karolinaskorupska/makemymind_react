import React,{useState,useEffect} from 'react';
import Person from '../trainers/Person';

const Article =()=>{
    const [trainersList, setTrainersList] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/trainers')
        .then((response)=>{
            return response.json();
        })
        .then((trainers)=>{
            setTrainersList(trainers);
        });
    },[]);

    return (
        <article className="article trainer">
           {trainersList.map((trainer, index)=><Person key={index} trainer={trainer}/>)}   
        </article>
    )
}

export default Article;