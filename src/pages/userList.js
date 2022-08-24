import { useState, useEffect } from "react";
import http from '../lib/axios'
import {useParams} from 'react-router-dom'

function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState([])
  const {username, url} = useParams()
  
  useEffect(() =>{
    http.get(`users/${username}/${url}`)
    .then(res => {
      setUsers(res.data)
      setLoading(true)
    })
    .catch(err => {
      setUsers('res.data')
      setLoading(false)
    })
  })

    return(
      <>
        <h2>{url} List</h2>
        <div className="container">
          <div className="row">
            { loading ? '' :
              users.length > 0 ? users.map((data, index) => {
                return <div className="col-sm-4" key={index}>
                  <div className="card mb-3">
                    <div className="card-header">
                      {data.login}
                    </div>
                    <div className="card-body">
                      <img src={data.avatar_url} className="rounded float-left img-fluid" alt={data.login} />
                    </div>
                  </div>
                </div>
              })
              :
              <div>No Data Found</div>
            }
          </div>
        </div>        
      </>
    )
  }

export default UserList