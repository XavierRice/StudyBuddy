import imgObj from "../assets/pictures";
import { Link } from 'react-router-dom'

function Home() {
    return (
      <div style={{
        backgroundImage: `url(${imgObj.Homepage})`,
        backgroundSize: 'cover',
        height: '100vh',
        fontFamily: 'var(--font-lilita-one)',
        color: 'green',
        textAlign: 'center', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }} >
        <h2 style={{ fontSize: '9em' }}>Welcome</h2>
        <h3 style={{ fontSize: '2.5em' , color: 'wheat' }}> StudyBuddy app!</h3>
        <Link to={"/users"}>
        <h3 style={{ fontSize: '2.5em' , color: 'green' }}> Let go!</h3>
        </Link>
      </div>
    );
  }
  
  export default Home;
  