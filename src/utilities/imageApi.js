// imageApi.js
import axios from "axios";

let availableId = 13;

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}

const imageApi = axios.create({
    baseURL: "http://localhost:3500" // Replace with your API URL
});

// Fetch all images
export const getAllImages = async () => {
    try {
        const response = await imageApi.get("/images");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Upload a new image
export const uploadImage = async ({ fileName, fileExtension, file }) => {
    try {
        const imageName = generateRandomString(8) + "." + fileExtension
        const objectData = { "id": availableId, "image": imageName }
        availableId++
        const response = await imageApi.post("/images", objectData);
        /*
        # TO-DO
        ## need to shift to express and node to apply this feature: saving image in server.
        */
        return response.data
    } catch (error) {
        throw error;
    }
};

// Delete an image
export const deleteImage = async (imageId) => {
    try {
        // Fetch the image data from the database
        const response = await imageApi.delete(`/images/${imageId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default imageApi;
