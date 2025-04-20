import React from "react"
import {useCatImg} from "../hooks/useCatImg.tsx";
import {useCatFact} from "../hooks/useCatFact.tsx";

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImg(fact)

  const handleNewFact = () => {
    refreshFact()
  }
  
  return (
    <div style={containerStyles}>
      <h1>Cat Fact</h1>
      <p>{fact}</p>
      {imageUrl && <img src={imageUrl} alt={fact} style={{width: '25%', maxWidth: '200px'}}/>}
      
      <button style={{ margin: 10 }} onClick={handleNewFact}>Get another fact</button>
    </div>
  )
}

const containerStyles: object = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'system-ui',
  maxWidth: '500px',
  margin: '0 auto',
}