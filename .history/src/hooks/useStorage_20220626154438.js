import { async } from '@firebase/util';
import React, {useState, useEffect} from 'react';
import { projectStorage,projectFirestore } from '../firebase/config';

const useStorage = (file) => {
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect(()=>{
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collectionRef('image');
        
        storageRef.put(file).on('state_changed', (snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        },async()=>{
            const url = await storageRef.getDownloadURL();
            collectionRef.add({url, createdAt});
            setUrl(url);
        })
    },[file])
    return {progress,url,error}
};

export default useStorage;