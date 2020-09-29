import React,{useEffect,useState} from 'react'
import { ReactComponent as Loader } from './../common/Loader.svg';
import './List.css'


const showHourChange = (change)=>{
    if(change > 0){
      return <span style={{color:"green",fontWeight:'500'}}>Up</span>
    }else if(change < 0){
      return <span style={{color:"red",fontWeight:'500'}}>Down</span>
    }
  }
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
      setLists(data.currencies)
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
        (loading && !error) ? (<div style={{textAlign:'center'}}>
                                  <Loader/>
                              </div>) 
        :(!loading && error) ? (<h2>Error ...</h2>) 
        :(
        <div>
          {
                  <div className="table-container">
                    <table class="table" width="100%">
                      <thead>
                        <tr>
                          <th>Cryptocurrency</th>
                          <th>Price</th>
                          <th>Market Cap</th>
                          <th>24H Change</th>
                        </tr>
                      </thead>
                     
                      <tbody>

                       {
                        lists.map(list=>{
                          return(
                            <tr>
                              <td>
                                <span style={{marginRight:'0.5rem'}}>{list.rank}</span>
                                <span>{list.name}</span>
                              </td>
                              <td>
                                <span>$ {list.price}</span>
                              </td>
                              <td>
                                <span>{list.marketCap}</span>
                              </td>
                              <td>
                                <span>$ {list.percentChange24h} {showHourChange(list.percentChange24h)}</span>
                              </td>
                            </tr>
                          )
                        })
                      }
                   
                      </tbody>
                    </table>
                  </div>
          }
 
        </div>
        ) 
      }
       
    </main>
    
  )
}

export default List