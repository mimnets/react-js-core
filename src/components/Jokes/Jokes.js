import React, { useEffect, useState } from 'react';

const Jokes = () => {
const [jokes, setJoke] = useState([]);

  useEffect(()=>{
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => setJoke(data))
    },[])
    return(
        <div>
        <h1>Jokes</h1>
        <h3>{jokes.setup}</h3>
        <p>{jokes.punchline}</p>
        </div>
    )
};

export default Jokes;