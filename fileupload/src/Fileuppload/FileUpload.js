import React, {  useState } from 'react'
import style from'../Fileuppload/style.css'
import *as xlsx from 'xlsx'
import StudentService from '../axios'
function FileUpload(){
  const [text,SetText]=useState('')
  const [filename,SetFile]=useState('')
  const [name,Setname]=useState('No File Selected')
  const [data ,setData]=useState([])

  const [show,setShow]=useState(false)

 
const readExcel = async (e)=>{
   const file=e.target.files[0];
   const data = await file.arrayBuffer(file);
   const excelFile=xlsx.read(data);
   const excelsheet =excelFile.Sheets[excelFile.SheetNames[0]];
   const exceljson=xlsx.utils.sheet_to_json(excelsheet)
   console.log(exceljson)
   Setname('file has been chosen')
   setShow(true)
}


    return (
   <><div className='form'>
   <input type='File' onChange={(e)=>readExcel(e)}></input>
   <div className='upload'><h1 style={{color:'white',}}>+</h1></div>
   <div> <h5 style={{color:'red',}}>{name}</h5></div>
   <h5 style={{color:'red'}}>Supported file type .xlxs , .xls</h5>
   <button className={show?'show':'noshow'}>Upload</button>
   <p style={{color:'red'}}>{text}</p>
   </div>
  
   </>
)
}

export default FileUpload