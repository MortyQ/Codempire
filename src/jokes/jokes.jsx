import React,{useEffect, useState} from 'react';
import {Typography} from '@material-ui/core'
import './jokes.css';


const Jokes =({jokes})=>{
// Categories State.jokes now here 
    const [state, setState] = useState({
        jokes:[]
    })


    // Take random jokes from API

    const getJokes =()=>{
        fetch(`https://api.chucknorris.io/jokes/random`)
        .then(res => res.json())
        .then((res) =>
         {
            setState({
                jokes: res.value
            })   
        })
        .catch((err) => console.log(err))
    }
    useEffect(() => {
        getJokes();
}, []);

    const createJokes =()=>{
        //Load Standart randome JOKS in First Loading Page , after load random
        return(
            <div className="jokes_text" >
            <Typography align='center'>
                <span>
                     {jokes || state.jokes}  
                </span>
               </Typography>
               </div>
        )
    }


    return(
        <div className="wrapper_jokes">
            <div className="jokes_body">
               
        {createJokes()}
                
            </div>
        </div>
    )
}

export default Jokes;