import React, {useState, useEffect} from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
    const [progress,setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [error,setError] = useState(null);
    return (
        <div>
            
        </div>
    );
};

export default useStorage;