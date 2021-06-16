import React,{useEffect, useState} from 'react';
import {Typography} from '@material-ui/core'
import './categories.css';
import Jokes from '../jokes/jokes'


const Categories =()=>{
    
    const [state, setState] = useState({
        items:[],
        jokes: null
    })


    // Get all categories from API
    const getCategories =()=>{
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(res => res.json())
        .then((res) =>
         {
            setState({
                items: res
            })   
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
            getCategories();
    }, []);


    // Function for get "event.target" categories and change. 
    const getQuote = (category) => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(res => res.json())
        .then(res =>{
                // debugger;
                 setState({
                     ...state,
                     jokes: res.value
                    })
            })
    }

    return(
        <div className="wrapper_categories">       
                <div className="categoeirs_title">
                    <Typography  align='center'>
                        <span className='categories-title'>
                            Categories
                        </span>
                    </Typography>
                </div>         
            <div className="wrapper_categories_option">

                   {state.items.map(((item, i) => {
                       return(
                <div className="option" key={i} >
                        <Typography  align='center'>
                            <button className='categories_button'  onClick={()=> getQuote(item) } >
                                {item}
                            </button>
                        </Typography>
                </div>
                       )
                   }))}          
    <Jokes jokes={state.jokes} />
            </div>
        </div>
    )
}

export default Categories;