import React, { useEffect ,useState} from 'react'

function LeaderBoard(){
    const [data, setData] = useState([]);
    async function getLeaderBoard(){
        const response = await fetch('http://localhost:4000/api/leaderboard',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const resonseData = await response.json()
        if(resonseData.status === 'ok'){
            setData(resonseData.users)
        }
        // console.log(typeof(data))
        
    }
    
    useEffect(()=>{ getLeaderBoard() },[])
    // const datalist = Object.keys(data)
    console.log((data))
    return(
        <>
            <h1 className="heading text-center">Leader Board</h1>
            <div className="title leaderboard">
                
                    {data.map((item,index)=>(
                        <div className='leaderboardList'>
                        <div className='name' key = {index}>&nbsp;&nbsp;{item.name}</div>
                        <div className='score'key = {index}>{item.score}&nbsp;&nbsp;</div>
                        </div>
                    ))}
                
            </div>
        </>
    )
}

export default LeaderBoard