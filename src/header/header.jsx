import React,{useEffect} from 'react';
import './header.css';

const Header =()=>{

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(res => {
            // console.log(res)
        })
        .catch((err) => console.log(err))
    }, []);

    return (
        <header>
                    <img className='avatar' src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="avatar" />
                       <span className='avatar-text' >
                                Chuck Norris
                       </span>
        </header>
    )
}

export default Header;