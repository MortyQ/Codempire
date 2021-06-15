import React,{useEffect, useState} from 'react';
import './header.css';

const Header =()=>{
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setJokes(res.value)
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