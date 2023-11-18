import { Link } from 'react-router-dom'; // If you're using React Router for navigation

function Header() {
  return (
    <header style={{ backgroundColor: '#333', height: '60px', padding: '10px' }}>
      <nav>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <Link to="/users">Users</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '20px' }}>
            <Link to="/users">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;