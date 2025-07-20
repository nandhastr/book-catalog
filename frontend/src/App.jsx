
import { useEffect } from 'react';
import './App.css'
import { testConnection } from './api/testConnection.js';

function App() {
 
  useEffect(() => {
      testConnection();
  }, []);
 
  return (
    <>  
      
      <h1 className="font-bold text-red text-2xl">hallo world</h1>
    </>
  )
}

export default App
