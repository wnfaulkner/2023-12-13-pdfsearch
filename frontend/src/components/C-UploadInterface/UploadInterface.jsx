// UPLOAD INTERFACE COMPONENT

import './UploadInterface.css'

import { useState, useEffect } from 'react'
import API from '../../API.js'

export default function UploadInterface ( props ) {

  // console.log(props)
  const { pdfsList, updatePdfsList } = props;
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [publication, setPublication] = useState('')
  // const [pdfsList, setPdfsList] = useState(pdfsList)

  // useEffect(() => {
  //   fetchPdfs()
  //     .then((userPdfs) => {
  //       // console.log(userPdfs); // Log here to verify the data
  //       setPdfsList(userPdfs);
  //     })
  //     .catch((error) => {
  //       // Handle errors here if needed
  //       console.error('Error in useEffect fetching user pdfs:', error);
  //     });
  // }, []); 

  // const refreshPdfsList = async function () { //Could also modify useEffect in App to have dependency array refresh based on pdfList object, and then wouldn't need this function.
  //   await const response = API.get("/")
    
  //     setPdfsList(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  const onSubmit = (e) => {
    // const user = props.user

    e.preventDefault()
    let newPdf = {
      title, 
      year,
      publication,
      // user,
    }
    // console.log(newPdf)
    API.post("/", newPdf).then(updatePdfsList)
  }

  // EVENTUALLY WOULD BE NICE TO HAVE FULL PDF CRUD. WILL HAVE TO UPDATE FRONT END COMPONENTS TO HAVE AN EDIT PANE. FOLLOW THIS LESSON: https://generalassembly.zoom.us/rec/play/YjwPSuSAe_sUlwIQFcbXlXdSBp1Ul3RT33-c325oMAcG9-KQhf28dCElMW3nKznqbQrVS6e4liEu-aGF.xjF5qfIeu_jzjSWr?autoplay=true&canPlayFromShare=true&componentName=rec-play&continueMode=true&from=share_recording_detail&originRequestUrl=https%3A%2F%2Fgeneralassembly.zoom.us%2Frec%2Fshare%2F5oHfqJZh25AeK1IVCFm_UO5DB_poGh5WRIfqH2KZ5Ey8oDmRkaooVCPykDjuXzGR.heRmibE01scgoRNd&startTime=1684524960000
  // const onUpdate = (id) => {
  //   let updatedPdf = {
  //     title, 
  //     year,
  //     publication,
  //     // user,
  //   }
  //   API.patch(`/${id}/`, updatedPdf).then((res) => refreshPdfsList())
  // }

  // const onDelete = (id) => {
  //     API.delete(`/${id}/`).then((res) => refreshPdfsList())
  // }

  // const selectPdf = (id) => {
  //     let pdf = pdfList.filter((pdf) => pdf.id === id)[0]
  //     setTitle(pdf.title)
  //     setDescription(pdf.filePath)
  //     setCompleted(pdf.completed)
  // }
  

  return(
    <div id='upload-interface'>
      UPLOAD INTERFACE
      <form id='upload-form'>
        <input 
          value={title}
          onChange={e=> setTitle(e.target.value)}
          placeholder={'title'}
          type='text'
          name='title'
        />
        <input 
          value={year}
          onChange={e=> setYear(e.target.value)}
          placeholder={'year'}
          type='text'
          name='year'
        />
        <input 
          value={publication}
          onChange={e=> setPublication(e.target.value)}
          placeholder={'publication'}
          type='text'
          name='publication'
        />
      </form>
      <button onClick={onSubmit}> Upload </ button>
    </div>
  )
}

