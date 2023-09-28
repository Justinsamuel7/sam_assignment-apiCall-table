import React, {useState, useEffect} from 'react'

const TableShow = ()=>{

  const [responseArray, setResponseArray] = useState([])
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(3)


  useEffect(()=>{
    callAPI()
  }, [])

    async function callAPI(){
    let Initialreq =  await fetch("https://jsonplaceholder.typicode.com/users");
    let Finalreq =  await Initialreq.json();
    setResponseArray(Finalreq)
  }

  function prev()
  {
    if(start == 0)
    {
      setStart(start)
      setEnd(end)
      }
      else{
        setStart(start-4)
        setEnd(end-4)
        }
  }

  function next()
  {
    if(end >= responseArray.length-1)
    {
      setStart(start)
      setEnd(end)
    }
    else{
      setStart(start+4)
      setEnd(end+4)
    }
  }
  return(
    <div id="wholeTablePage">
    <h1>Users From Api</h1>
    <div>
    <table>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            <th>WEBSITE</th>

        </tr>
          {responseArray.map((ele, index)=>{
            if(index >= start && index <= end)
            {
            return (
              
                  <tr>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.phone}</td>
                  <td>{ele.email}</td>
                  <td>{ele.website}</td>
                  </tr>
                  )
            }
          })}
    </table>
    <div> <button onClick={prev}>Prev</button> <button onClick={next}>Next</button></div>
    </div>

    </div>
  )
}

export default TableShow