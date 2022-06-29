import React from 'react';

const UploadForm = () => {
    return (
        <form>
            <input type='file' onChange={changeHandle}/>
        </form>
    );
};

export default UploadForm;