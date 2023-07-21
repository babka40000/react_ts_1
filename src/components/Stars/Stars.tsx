import React from 'react'
import Star from '../Star/Star'
import './css/stars.css'


type AppProps = { count: number }

const Stars = ({ count = 0 }: AppProps) => {
    const arr = Array.from({length: count}, (_, i) => i + 1)

    return (
        count > 0 && count < 6 ? 
            <div>
                <ul className="card-body-stars u-clearfix">
                    {arr.map((index) => (<li key={index}><Star /></li>))}          
                </ul>
            </div> 
            :<div></div>
    );
}

export default Stars