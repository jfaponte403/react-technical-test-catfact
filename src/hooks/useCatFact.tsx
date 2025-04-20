import {useEffect, useState} from "react";
import {getRandomFact} from "../services/getRandomFact.ts";

export const useCatFact = () => {
  const [fact, setFact] = useState<string>('')

  const refreshFact = () => {
    getRandomFact().then(response => setFact(response.fact))
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return {fact, refreshFact}
};