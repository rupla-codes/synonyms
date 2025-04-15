import './App.css';
import { useState } from 'react';
import { useGetSynonyms } from './hooks/useGetSynonyms';

function App() {
  const [word, setWord] = useState("");
  const { isLoading, getSynonyms, synonyms } = useGetSynonyms();
  
  const handleFetchSynonysms = (e) => {
    e.preventDefault();
    getSynonyms(word)
  }
  
  const handleSynonymClicked = (newWord) => {
    setWord(newWord);
    getSynonyms(newWord);
  }
  return (
    <div className="App">
      <form onSubmit={handleFetchSynonysms}>
        <label htmlFor="word-input">Your Word</label>
        <input 
                value={word}
                onChange={(e) => setWord(e.target.value)} 
                id="word-input"
                ></input>
        <button>Submit</button>
        </form>
        {isLoading ? (<div>Loading...</div>) : (<ul>
          {synonyms.map((synonym) => (
            <li
            onClick={() => handleSynonymClicked(synonym.word)}
            key={synonym.word}
            >
              {synonym.word}
            </li>
          ))}
        </ul>)}
        
    </div>
  );
}

export default App;
