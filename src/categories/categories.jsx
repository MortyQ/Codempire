import React,{useEffect, useState} from 'react';
import {Typography} from '@material-ui/core'
import './categories.css';


const Categories =()=>{
    
    const [state, setState] = useState({
        items:[]
    })

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
                            {item}
                        </Typography>
                </div>
                       )
                   }))}          

            </div>
        </div>
    )
}

export default Categories;