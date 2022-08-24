import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function Home () {

  const searchEl = useRef()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if(searchEl.current.value != null){
      navigate(`/result/${searchEl.current.value}`)
    }
  }

  return(
    <div className="p-5">
      <div className="row justify-content-center">
        <div className="col-sm-6 text-center">
          <form className="header" onSubmit={handleSubmit}>
            <h1 className="text-center">Search User</h1>
            <input className="form-control" name="search" ref={searchEl} placeholder="Search user" />
            <button className="btn btn-primary btn- mt-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Home;