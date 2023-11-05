import React from 'react'
import CountButton from './CountButton'
import SearchBar from './SearchBar';

const App = () =>{
    return(
        <div>
            <CountButton incrementBy={1} buttonColor={"cyan"}/>
            <CountButton incrementBy={2} buttonColor={"red"}/>
            <hr />
            <p><a href="https://github.com/gaparker716">My github repo</a></p>
            <hr />
            <SearchBar />
        </div>
    );
}
export default App