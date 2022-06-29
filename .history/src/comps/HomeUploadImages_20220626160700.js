import React from 'react';
import Title from './Title';
import UploadForm from './UploadForm';

const HomeUploadImages = () => {
    return (
        <div>
            <Title></Title>
            <UploadForm></UploadForm>
            <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
        </div>
    );
};

export default HomeUploadImages;