// PDFS PAGE

import './PdfsPage.css'

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import UploadInterface from '../../components/C-UploadInterface/UploadInterface.jsx';
import SearchInterface from '../../components/D-SearchInterface/SearchInterface.jsx';
import PdfsList from '../../components/B-PdfsList/PdfsList.jsx';

export default function PdfsPage( props ) {
  const { pdfsList, updatePdfsList } = props;

  return (
    <div id='pdfs-page'>
      <aside id="tools">
        <UploadInterface pdfsList={pdfsList} updatePdfsList={ updatePdfsList} />
        <SearchInterface pdfsList={ pdfsList } />
      </aside>
      &nbsp;
      <div id="pdf-list">
        <PdfsList pdfsList={ pdfsList } />
      </div>
    </div>
  );
}