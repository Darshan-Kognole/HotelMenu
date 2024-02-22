import {Link} from 'react-router-dom'
import "../Style/LandingPage.css"
const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <div className='sub_lp'>
          <Link to="/admin">
            <img id='i1' src="https://static.thenounproject.com/png/3324336-200.png" alt="" />
            <h3>Admin</h3>
          </Link>

          <Link to="/user">
            <img id='i2' src="https://cdn-icons-png.flaticon.com/512/47/47774.png" alt="" />
            <h3 id='user'>User</h3>
          </Link>
      </div>
      
    </div>
  )
}
export default LandingPage;