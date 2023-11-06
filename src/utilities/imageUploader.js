import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    height: 200px;
    width: 200px;
    box-sizing: border-box;
    border: 1px dashed black;
    border-radius: 10px;
    margin: 10px;
    grid-row: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Input = styled.input`
    display: none;
`;

const Label = styled.label`
    color: black;
    padding: 10px 20px;
    cursor: pointer;
`;

const ImageUploader = ({ onImageSelect }) => {
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        onImageSelect(file);
    };

    return (
        <InputWrapper>
            <Label htmlFor="fileInput">Upload Image</Label>
            <Input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
            />
        </InputWrapper>
    );
};

export default ImageUploader;
