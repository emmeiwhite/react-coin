import React,{useEffect,useState} from 'react'

const List  = ()=>{ 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [lists,setLists] = useState([])


  useEffect(()=>{
    setLoading(true)
    fetch("https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20")
    .then(response=>response.json())
    .then(data=>{
      console.log(data.currencies)
      setLoading(false)
    })
    .catch(err=>{
      setError(true)
      console.log(error)
      })
  },[])
  return(
    <main>
      {
        (loading && !error) ? (<h2>Loading ...</h2>) 
        :(!loading && error) ? (<h2>Error ...</h2>) 
        :(
        <div>
          Let's load the Data now
        </div>
        ) 
      }
       
    </main>
    
  )
}

export default List