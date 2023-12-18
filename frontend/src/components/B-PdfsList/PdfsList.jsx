// PDFS LIST COMPONENT

import './PdfsList.css'

import PdfCard from '../B1-PdfCard/PdfCard.jsx'

export default function PdfsList({ pdfsList }) {
  return(
    <>
      {pdfsList.map((pdf, idx) => (
        <PdfCard pdf={pdf} idx={idx} />
      ))}
    </>
  )
}