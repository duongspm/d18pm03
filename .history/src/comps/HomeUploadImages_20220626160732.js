import React, {useState} from 'react';
import Title from './Title';
import UploadForm from './UploadForm';
import ImageGrid from 
const HomeUploadImages = () => {
    const [selectedImg, setSelectedImg] = useState(null);
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