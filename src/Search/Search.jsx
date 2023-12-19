import { useState } from 'react'
import './Search.css'

export const Search = (searching) => {
    const [input, setInput] = useState("");

    console.log(searching.movieSearch);

    console.log(input);
    
    return (
        <div className='searching'>
            <img src="./public/magnifying-glass-solid.svg"/>
            <input className='inputSearch' type="text" placeholder="Mulan ..." value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}