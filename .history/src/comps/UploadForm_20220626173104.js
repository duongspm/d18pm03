import React, {useEffect, useState} from 'react';
import { storage } from './firebase';
import {ref, uploadBytes, listAll, getDownloadURL} from './firebase/storage';
import {v4} from 'uuid';

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
    const [imageList,setImageList] = useState([]);
    const imageListRef = ref(storage,"images/")
    const uploadImage = () =>{alert('sdsdf')
        if(imageUpload ==null )return;
        const imageRef = ref(storage,`images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef,imageUpload).then(()=>{
            alert('sdsdf')
        })
    }
    useEffect(()=>{
        listAll(imageListRef).then((response)=>{
            response.items.forEach((item) => {
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev, url])
                })
            });
        })
    },[])
    return (
        <>
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
        {}
        </>
    );
};

export default UploadForm;