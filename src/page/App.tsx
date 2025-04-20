import React, {useEffect, useState} from "react"

export const App = () => {
  const [fact, setFact] = useState<string>('')
  const [oneWord, setOneWord] = useState<string>('')
  const [img, setImg] = useState<string | null>(null)

  const GET_CAT_FACT_ENDPOINT = "https://catfact.ninja/fact"
  const GET_CAT_IMG = "https://cataas.com/cat/says/"

  useEffect(() => {
    fetch(GET_CAT_FACT_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        // set the whole fact
        setFact(data.fact)
        //   split one word
        setOneWord(data.fact.split(' ')[0])
      })
  }, [])

  useEffect(() => {
    if (fact === '') return
    fetch(`${GET_CAT_IMG}${fact}`)
      .then(response => {
        setImg(response.url)
      })
  }, [fact]);

  return (
    <div style={containerStyles}>
      <h1>Cat Fact</h1>
      <p>{fact}</p>
      <p>{oneWord}</p>

      {img && <img src={img} alt={fact} style={{width: '25%', maxWidth: '200px'}}/>}
    </div>
  )
}

const containerStyles: object = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'system-ui',
}