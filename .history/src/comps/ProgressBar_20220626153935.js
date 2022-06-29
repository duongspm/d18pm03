import React from 'react';
import useStorage from '../hooks/useStorage';
const ProgressBar = ({file, setFile}) => {
    const {url, progress} = useStorage(file);
    console.log(progress,url);
    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
            ></motion.div>
    );
};
export default ProgressBar;