export const fetcher = (url: string) =>{
  console.log({url});

  return fetch(url)
    .then((res) => res.json())
    .catch((e) => console.log(e))
}
