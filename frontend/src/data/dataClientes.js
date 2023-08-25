import axios from 'axios';

const pedidos = async (id) => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/${id}`);
}


export { pedidos }