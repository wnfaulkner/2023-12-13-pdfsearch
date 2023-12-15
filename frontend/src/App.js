// APP

import './App.css';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
// import { getUser, getToken } from '../../utilities/users-service';

import NavBar from './components/NavBar/NavBar';
// import HomePage from './pages/HomePage/HomePage.jsx';
import PdfsPage from './pages/PdfsPage/PdfsPage.jsx';

function App() {
  const [pdfList, setPdfList] = useState([])

  const fetchPdfs = async function () {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/pdfs/"
      )
      return response.data
    } catch(error) {
      console.error('Error fetching data from backend:', error);
      throw error;
    }
  }

  useEffect(() => {
    fetchPdfs()
      .then((userPdfs) => {
        // console.log(userPdfs); // Log here to verify the data
        setPdfList(userPdfs);
      })
      .catch((error) => {
        // Handle errors here if needed
        console.error('Error in useEffect fetching user pdfs:', error);
      });
  }, []); 

  return (
    <div className="App">
      <NavBar />
      <Routes >
        <Route path="/pdfs" element={ <PdfsPage pdfList={ pdfList } /> } />
      </Routes>
    </div>
  );
}

export default App;
