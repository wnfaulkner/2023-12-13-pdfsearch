// UPLOAD INTERFACE COMPONENT

import './UploadInterface.css'

import { useState, useEffect } from 'react'
import API from '../../API.js'

export default function UploadInterface (props) {

  const [filePath, setFilePath] = useState('')
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [publication, setPublication] = useState('')
  const [url, setUrl] = useState('')
  const [pdfsList, setPdfsList] = useState(props.pdfsList)

  useEffect(() => {
    refreshPdfsList()
  }, [])

  const refreshPdfsList = () => { //Could also modify useEffect in App to have dependency array refresh based on pdfList object, and then wouldn't need this function.
    API.get("/")
    .then((res) => {
      setPdfsList(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let newPdf = {
      filePath,
      title, 
      year,
      publication,
      url
    }
    console.log(newPdf)
    API.post("/", newPdf).then(() => refreshPdfsList())
  }

  const onUpdate = (id) => {
    let updatedPdf = {
      filePath,
      title, 
      year,
      publication,
      url
    }
    API.patch(`/${id}/`, updatedPdf).then((res) => refreshPdfsList())
  }

  const onDelete = (id) => {
      API.delete(`/${id}/`).then((res) => refreshPdfsList())
  }

  // const selectPdf = (id) => {
  //     let pdf = pdfList.filter((pdf) => pdf.id === id)[0]
  //     setTitle(pdf.title)
  //     setDescription(pdf.filePath)
  //     setCompleted(pdf.completed)
  // }
  

  return(
    <div id='upload-interface'>
      UPLOAD INTERFACE
      <form>
        <input 
          value={filePath}
          onChange={e=> setFilePath(e.target.value)}
          placeholder={'filePath'}
          type='text'
          name='filePath'
        />
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
        <input 
          value={url}
          onChange={e=> setUrl(e.target.value)}
          placeholder={'url'}
          type='text'
          name='url'
        />
      </form>
      <button onClick={onSubmit}> Upload </ button>
    </div>
  )
}

