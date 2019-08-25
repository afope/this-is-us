import axios from 'axios';

const PROXY_URL = 'https://ablaze-riddle.glitch.me';

export const fetchProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${PROXY_URL}/products`)
            .then(response => resolve(response.data.products))
            .catch((error) => reject(error));
    });
}

export const fetchProduct = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${PROXY_URL}/product/${id}`)
            .then(response => resolve(response.data.product))
            .catch((error) => reject(error));
    });
}