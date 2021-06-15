import React from 'react';
import {Container, Typography} from '@material-ui/core'
import './categories.css';


const Categories =()=>{


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

                </div>
        </div>
    )
}

export default Categories;