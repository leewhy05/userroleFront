import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

const AllUser = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
}
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);

  async function getData(){
    try {
      setLoading(true)
      const fetcher = await axios.get("https://create-user.onrender.com/api/user"); 
      console.log(fetcher.data.user);
      setData(fetcher.data.user)
     } catch (error) {
        console.log(error);
     }finally{
      setLoading(false);
     }

  };
  useEffect(() => {
    document.title ="All-users || page"
    getData();
  },[]) 
  return (
    <main className='container py-4'>
      <h1>All User</h1>
        {loading && <Spinner animation='border'/>}
        <div className='container pt-5 row justify-content-between align-items-center gap-3'>
      {data && data.length > 0 ? (
        data.map((datum) => {
          const {_id, name, email, gender, profession} = datum;
          return (
            <div className='card col-lg-5 p-3 shadow-sm' key={_id}>
              <Link className='text-decoration-none' to={`/SingleUser/${_id}`}>
                <h2>{name}</h2> 
                <p>{email}</p>
                <p>{profession}</p>
                <p>{gender}</p>
                <span className='text-danger'>Click to see more</span>
              </Link>
            </div>
          );
        })
      ) : (
        <h2 className='text-danger'>No users yet... Create one and be the first!</h2>
      )}
    </div>
      <div>
              <Link className='text-decoration-none' onClick={scrollToTop}>
        <p className="text-center fs-4 move">
          Back to Top
        </p>
      </Link>
              </div>
    </main>
  )
}

export default AllUser