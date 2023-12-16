// PDFS PAGE

import './PdfsPage.css'

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import UploadInterface from '../../components/C-UploadInterface/UploadInterface.jsx';
import SearchInterface from '../../components/D-SearchInterface/SearchInterface.jsx';
import PdfsList from '../../components/B-PdfsList/PdfsList.jsx';

export default function PdfsPage({ pdfsList }) {
  // useEffect(() => {
  //   console.log(pdfList);
  // }, [pdfList]);

  if (pdfsList === undefined) {
    return <div>Loading...</div>; // Render a loading state or return null
  }

  return (
    <div id='pdfs-page'>
      <aside id="tools">
        <UploadInterface pdfsList={ pdfsList } />
        <SearchInterface pdfsList={ pdfsList } />
      </aside>
      &nbsp;
      <div id="pdf-list">
        <PdfsList pdfsList={pdfsList} />
      </div>
    </div>
  );
}