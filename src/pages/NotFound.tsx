import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '6rem', margin: 0, color: 'var(--kinda-black)' }}>404</h1>
      <p style={{ fontSize: '1.5rem', margin: '1rem 0', color: '#666' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/"
        style={{
          marginTop: '2rem',
          padding: '0.8rem 2rem',
          backgroundColor: 'var(--kinda-black)',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1rem'
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;