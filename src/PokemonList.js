import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <div className='pokemon-list'>
      { pokemon.map(p => (
        <div className='pokemon' key={p.name}>
          <a href={p.url}>{p.name}</a> 
        </div>
      ))}
    </div>
  )
}
