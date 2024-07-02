import React, { useState } from 'react';

const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
];

const XDictionary = () => {
    const[dictionary] = useState(initialDictionary);
    const[searchTerm, setSearchTerm] = useState('');
    const[result, setResult] = useState('');

    const handleSearch = () => {
        const foundWord = dictionary.find(
            entry => entry.word.toLowerCase() === searchTerm.toLowerCase()
        );
        if(foundWord){
            setResult(foundWord.meaning);
        }else{
            setResult('Word not found in the dictionary.')
        }
    };

    return(
        <div style={{ padding: '20px', fontFamily: 'Arial,sans-serif'}}>
            <h1>Dictionary App</h1>
            <input
               type="text"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               placeholder="Search for a word"
               style={{ padding: '10px', marginRight: '10px', width: '300px' }}
            />

            <button onClick={handleSearch} style={{padding: '10px 20px'}}>
                Search
            </button>

            <h1>Defination:</h1>

            <div style={{ marginTop: '20px', fontSize: '18px' }}>
                {result && <p>{result}</p>}
            </div>


        </div>
    );
};

export default XDictionary;
