import axios from 'axios';

const sendMail = async (formData) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/api/mail`, formData);
}


export { sendMail }