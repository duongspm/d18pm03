import React, {useState, useEffect} from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = () => {
    const [progress,setProgress] = useState(null);
    const [file, setFile] = useState(null);
    const [error,setError] = useState(null);
    return (
        <div>
            
        </div>
    );
};

export default useStorage;