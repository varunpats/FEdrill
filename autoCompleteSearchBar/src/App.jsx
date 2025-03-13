import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState('');

  const fetchData = async () => {
    const data = await fetch(`https://dummyjson.com/recipes/search?q=`);
    const json = await data.json();
    setResult(json.recipes);
  }

  useEffect(() => {
    fetchData();
  }, [input])

  return (
    <div className='app'>
      <h1>Autocomplete Searchbar</h1>
      <input type='text' className='searchbar' value={input} onChange={(e) => { setInput(e.target.valueF) }} />
      <div>
        {result.map((res) => <span key={res.id}>{res.name}</span>)}
      </div>
    </div>
  )
}

export default App
