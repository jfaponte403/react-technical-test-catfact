const GET_CAT_FACT_ENDPOINT = "https://catfact.ninja/fact"

export const getRandomFact = async (): Promise<{ fact: string }> => {
  const response = await fetch(GET_CAT_FACT_ENDPOINT)
  const data = await response.json()
  const { fact } = data
  return { fact }
}