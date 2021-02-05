import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

import UploadBg from '../../static/images/upload-bg.jpg'

import ProgressBar from '../ProgressBar';
import './styles.css'

function LandingPage(props) {
    const [originalImage, setOriginalImage] = useState('')
    const [originalImageFile, setOriginalImageFile] = useState('')
    const [fileName, setfileName] = useState('')
    const [compressedImage, setCompresssedImage] = useState('')
    const [percentage, setPercentage]= useState(0) 
    const handleChange = (e) => {
        const imageFile = e.target.files[0]
        if (!imageFile.name.match(/.(jpg|jpeg|png|gif)$/i)){
            alert('not an image');
            window.location.reload();
            return false
        }
        else {
            setOriginalImage(imageFile)
            setOriginalImageFile(URL.createObjectURL(imageFile))
            setfileName(imageFile.name)
        }
    }

    const handleProgress = (progress) => {
        setPercentage(progress)
    }

    const handleCompress = (e) => {
        e.preventDefault();
        const option = { maxSizeMB: 1, mazWidthorHeight: 500, useWebWorked: true, onProgress: (progress) => {handleProgress(progress)} };
        if(option.maxSizeMB >= originalImage / 1024) {
            alert("Not valid")
            return 0;
        }
        let output;
        imageCompression(originalImage, option).then((x)=> {
            output = x;
            const downloadLink = URL.createObjectURL(output)
            setCompresssedImage(downloadLink)
        });
    }

    return (
        <div className="ori-img-wrapper">
            <div className="upload">
                <h1 className="upload-title">Upload image </h1>
                <div className="imageWrapper" style={{backgroundImage: `url(${UploadBg})`}}>
                    {originalImageFile ? <img src={originalImageFile} alt='original' className="image" /> : 
                    <input type="file" name="file" id="file" className="inputfile" onChange={e => handleChange(e)} />}
                </div>
            </div>
            <div className="compress">
                <div className="button-wrapper">
                    {originalImageFile ? <button onClick={handleCompress} className="compress-button">compress image</button> : null }
                </div>
                <ProgressBar percentage={percentage} />
            </div>
            <div className="download">
                <h1 className="upload-title">Your compressed image is here</h1>
                {compressedImage ? <img src={compressedImage} alt="compressed" className="image" /> : null}
                <div className="button-wrapper">
                    {compressedImage ? <button className="compress-button">
                    <a href={compressedImage} download={fileName} className="download-button">
                    Download Image</a></button> : null}
                </div>
            </div>
        </div>
    );
}

export default LandingPage;