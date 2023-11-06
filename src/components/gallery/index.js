import React, { useState, useEffect } from "react";
import { getAllImages, deleteImage, uploadImage } from "../../utilities/imageApi";

import { Wrapper, Container, Topbar, Title, ImageContainer, ImageItem, LargeImageItem, DeleteButton, Input } from "./styled.css";
import ImageUploader from "../../utilities/imageUploader";

const ImageGallery = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const [checkedImageIds, setCheckedImageIds] = useState([]);
    const [images, setImages] = useState([]);
    const [deleted, onDelete] = useState(true)


    useEffect(() => {
        // Fetch image data when the component mounts
        const fetchData = async () => {
            try {
                const imageData = await getAllImages();
                setImages(imageData); // Update the images state with the fetched data
            } catch (error) {
                // Handle any potential errors here
                console.error('Error fetching image data:', error);
            }
        };

        fetchData();
    }, [deleted]);

    const handleCheckboxChange = (imageId) => {
        setCheckedImageIds((prevCheckedIds) => {
            if (prevCheckedIds.includes(imageId)) {
                setSelectedItem(selectedItem - 1)
                return prevCheckedIds.filter((id) => id !== imageId);
            } else {
                setSelectedItem(selectedItem + 1)
                return [...prevCheckedIds, imageId];
            }
        });
    };

    const handleDelete = () => {
        checkedImageIds.forEach(id => {
            deleteImage(id)
        })
        setSelectedItem(0)
        setCheckedImageIds([])
        onDelete(!deleted)
    }

    const handleImageSelect = (file) => {
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop().toLowerCase();
        const fileObject = {
            "fileName": fileName,
            "fileExtension": fileExtension,
            "file": file
        }
        uploadImage(fileObject)
    }

    return <Wrapper>
        <Container>
            <Topbar>
                <Title>{selectedItem ? `${selectedItem} File${selectedItem === 1 ? "" : "s"} Selected` : "Gallery"}</Title>
                {selectedItem ? <DeleteButton onClick={() => handleDelete()}>Delete files</DeleteButton> : <></>}
            </Topbar>
            <ImageContainer>
                {images.map((image, index) => {
                    let content
                    if (index >= 1) {
                        content = <ImageItem backgroundImage={`http://localhost:3500/${image.image}`} onClick={() => handleCheckboxChange(image.id)}>
                            <Input checked={checkedImageIds.includes(image.id)} />
                        </ImageItem>
                    } else {
                        content = <LargeImageItem backgroundImage={`http://localhost:3500/${image.image}`} onClick={() => handleCheckboxChange(image.id)}>
                            <Input checked={checkedImageIds.includes(image.id)} />
                        </LargeImageItem >
                    }
                    return content
                })}
                <ImageUploader onImageSelect={handleImageSelect} />
            </ImageContainer>
        </Container>
    </Wrapper>
}

export default ImageGallery;