// PDFS CARD COMPONENT

import './PdfCard.css'

import PdfIcon from '../../images/pdf-icon.png'; 

export default function PdfCard ({ pdf, idx }) {

  const openPdf = () => {
    // Replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
    // const pdfUrl = 'path/to/your/pdf.pdf';
    
    // Open the PDF in a new tab or window
    // window.open(pdfUrl, '_blank');
  };

  return(
    <div id='pdf-card'>
      <div>
        <img
          src={PdfIcon}
          alt="PDF Icon"
          style={{ cursor: 'pointer' }}
          onClick={openPdf}
          className='pdf-icon'
        />
      </div>
      <div>
        {pdf.title}
      </div>
      <div>
        {pdf.year}
      </div>
    </div>
  )
}