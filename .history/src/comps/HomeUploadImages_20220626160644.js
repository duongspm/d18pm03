import React from 'react';
import Title from './Title';
import UploadForm from './UploadForm';

const HomeUploadImages = () => {
    return (
        <div>
            <Title></Title>
            <UploadForm></UploadForm>
            <ImageGrid/>
        </div>
    );
};

export default HomeUploadImages;