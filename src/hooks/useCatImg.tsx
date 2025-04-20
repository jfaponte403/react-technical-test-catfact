import {useEffect, useState} from "react";
const GET_CAT_IMG = "https://cataas.com/cat/says/"

export const useCatImg = (fact: string) => {
  const [imageUrl, setImageUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (fact === '') return
    fetch(`${GET_CAT_IMG}${fact.split(' ').slice(0, 2).join(' ')}`)
      .then(response => {
        setImageUrl(response.url)
        setLoading(false)
      })
  }, [fact]);

  return {imageUrl: `${imageUrl}`, loadingImg: loading}
}