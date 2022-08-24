import React, { useState, useEffect } from 'react';
import http from '../lib/axios'
import {useParams, Link} from 'react-router-dom'
import { FaUserFriends, FaUsers } from "react-icons/fa";

function Result() {  
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState([])
  const {username} = useParams()
  
  useEffect(() => {
    console.log(username)
    http.get(`users/${username}`)
    .then(res => {
      setUserData(res.data)
      setLoading(false)
    })
    .catch(err => {
      setUserData('')
      setLoading(false)
    })
  })

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {
              loading ?
                <div>Loading ......</div>
              :
              userData ?
                <div className="card mt-3 mb-3">
                  <div className="card-header">
                    {userData.name}
                  </div>
                  <div className="card-body">
                    <img src={userData.avatar_url} className="rounded float-left" alt={userData.name} />
                    <div className="mt-2">
                      <Link to={`/result/${username}/followers`} className="btn btn-primary"><FaUserFriends /> {userData.followers} Followers</Link>&emsp;
                      <Link to={`/result/${username}/following`} className="btn btn-primary"><FaUsers /> {userData.following} Following</Link>
                    </div>
                  </div>
                </div>
              :
              <div>
                No Data Found
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )

}

export default Result