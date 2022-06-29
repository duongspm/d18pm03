import React, {useState} from 'react';
//import ProgressBar from './ProgressBar';
import { storage } from './firebase';
import {ref} from 'firebase/storage';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error,setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];
    const changeHandler =(e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else{
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }
    ////
    const [imageUpload, setImageUpload] = useState(null);
    const uploadImage = () =>{
        if(imageUpload ==null )return;
        const image
    }
    return (
        <form>
            <label>
                {/* <input type='file' onChange={changeHandler}/> */}
                <input type='file' onChange={(event)=>{setImageUpload(event.target.files[0])}}/>
                <span>+</span>
            </label>
            <button onClick={uploadImage}>upload Image</button>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }
                {/* { file && <ProgressBar file={file} setFile={setFile} /> } */}
            </div>
        </form>
    );
};

export default UploadForm;