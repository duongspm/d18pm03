import React, {useState, useEffect} from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect(()=>{
        const storageRef = projectStorage.ref
    },[file])
    return (
        <div>
            
        </div>
    );
};

export default useStorage;