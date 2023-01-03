import React, {useState, useEffect} from "react";
import Home from "./Home";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination"
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, { cancelToken: new axios.CancelToken(c => cancel = c)})
      .then(res => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPreviousPageUrl(res.data.previous)
        setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPreviousPage() {
    setCurrentPageUrl(previousPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <>
      <Home />
      <PokemonList pokemon={pokemon} />
      <Pagination 
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPreviousPage={previousPageUrl ? gotoPreviousPage : null}
      />
    </>
  );
}

export default App;
