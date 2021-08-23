import React from 'react'
import ReactDOM from 'react-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home

if(document.getElementById('home')){
    ReactDOM.render(<Home />, document.getElementById('home'));
}