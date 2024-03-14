import React, { useContext } from 'react';
import { useState } from 'react'; 
import './secondStep.css'
import { Button, TextField } from '@material-ui/core';
import { multistepContext } from '../stepContext';
// npm i react-icons
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

export default function SecondStep() {
    const {setStep, userData, setUserData} = useContext(multistepContext);
    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected FIle")

  return (
    <div className='step'>
      
      <form action='' onClick={()=> document.querySelector(".input-field").click()} className='upload-files'>
        
        <input type='file' accept='application/pdf' className='input-field' hidden
        onChange={({target: {files}})=>{
            files[0] && setFileName(files[0].name)
            if(files){
                setImage(URL.createObjectURL(files[0]))
            }
        }}/>
        {image ?
        <img src={image} width={100} height={100} alt='fileName' style={{margin: '12px', marginBottom: '20px', alignItems:'center'}} />
        :
        <>
            <MdCloudUpload color='#000000' size={80}/> 
            <p>Browse Files to Upload</p>
        </>
        }
      </form>

      <div className='centered-uploaded-row'>
        <section className='uploaded-row'>
            <AiFillFileImage color='black' />
            <span className='upload-content'>
            {fileName} -
            <MdDelete onClick={() => {
                setFileName("No Selected File")
                setImage(null)
            }} />
            </span>
        </section>
     </div>



      <div>
        <Button variant="contained" onClick={()=>setStep(1)} color="secondary.main" style={{ marginTop: '12px', marginRight: '16px' }}>Back</Button> 
        <Button variant="contained" onClick={()=>setStep(3)} color="primary" style={{ marginTop: '12px', marginLeft: '16px', backgroundColor: '#00df9a', color: 'black'}}>Next</Button> 
      </div>
      
    </div>
  )
}
