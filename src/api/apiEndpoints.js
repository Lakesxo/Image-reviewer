import axios from 'axios';

export const fetchPhoto = async () => {
    try {
        const response = await axios.get(`https://api.unsplash.com/photos/random`, {
            headers:  {
                Authorization: `Client-ID GPkH89tU1TJHS2kV-ZQ3dG7FJ--YFEGrSQJ1BdnlMtM`,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                Expires: '0',
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}