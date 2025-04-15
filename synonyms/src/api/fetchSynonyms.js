export const fetchSynonyms = (word) => {
    return fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((response) => response.json())
  }