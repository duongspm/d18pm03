import React, {useEffect, useState} from 'react';
import { storage } from './firebase';
import {ref, uploadBytes, listAll, getDownloadURL} from './firebase/storage';
import {v4} from 'uuid';
import { motion } from 'framer-motion';

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
        </form><div className="img-grid">
        {imageList.map((url)=>{
            return 
            <motion.div className="img-wrap" key={doc.id} 
                layout
                whileHover={{ opacity: 1 }}s
                onClick={() => setSelectedImg(doc.url)}
            >
                <motion.img src={doc.url} alt="uploaded pic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                />
                </motion.div>
           
        })}</div>
        </> 
    );
};

export default UploadForm;