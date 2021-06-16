import React,{useEffect, useState} from 'react';
import {Typography} from '@material-ui/core'
import './jokes.css';


const Jokes =()=>{

    const [state, setState] = useState({
        jokes:[]
    })

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

console.log(state)

    const createJokes =()=>{
        // state.jokes.map(((item, i) => {
        //     return(
        //  <div className="jokes_text" key={i} >
        //      <Typography align='center'>
        //          <button className='categories_button' >
        //              {item}
        //          </button>
        //          </Typography>
        //  </div>
     
        //     )
        // }))     

        return(
            <div className="jokes_text" >
            <Typography align='center'>
                <span>
                     {state.jokes}
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