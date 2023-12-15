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
    // Render a loading state or return null
    return <div>Loading...</div>;
  }

  return (
    <div id='pdfs-page'>
      <aside id="tools">
        <UploadInterface />
        <SearchInterface />
      </aside>
      &nbsp;
      <div id="pdf-list">
        <PdfsList pdfsList={pdfsList} />
      </div>
    </div>
  );
}