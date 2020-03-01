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
    console.log(trainersList)
    return (
        <article className="article trainer">
           <Person />    
        </article>

    )
}

export default Article;