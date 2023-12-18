// APP

import './App.css';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
// import { getUser, getToken } from '../../utilities/users-service';

import NavBar from './components/A3-NavBar/NavBar.jsx';
import AuthPage from './pages/AuthPage/AuthPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import PdfsPage from './pages/PdfsPage/PdfsPage.jsx';

function App() {

  const user = 'w'
  // const [user, setUser] = useState(getUser)
  const [pdfsList, setPdfsList] = useState([])

  const updatePdfsList = async function () {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/pdfs/"
      );
      console.log(response.data)
      setPdfsList(response.data);
    } catch (error) {
      console.error('Error fetching data from backend:', error);
      throw error;
    }
  };

  useEffect(() => {
    updatePdfsList();
  }, []);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          &nbsp;
          <Routes >
            <Route path="/home" element={ <HomePage /> } />
            <Route path="/pdfs" 
              element={ 
                <PdfsPage pdfsList={pdfsList} updatePdfsList={ updatePdfsList } /> 
              } 
            />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
