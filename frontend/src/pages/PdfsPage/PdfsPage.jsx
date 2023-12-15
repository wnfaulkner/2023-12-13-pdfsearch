// PDFS PAGE

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PdfsPage({ pdfList }) {
  useEffect(() => {
    console.log(pdfList);
  }, [pdfList]);

  if (pdfList === undefined) {
    // Render a loading state or return null
    return <div>Loading...</div>;
  }

  return (
    <div>
      {pdfList.map((pdf) => (
        <div key={pdf.id}>
          <p>Title: {pdf.title}</p>
        </div>
      ))}
    </div>
  );
}