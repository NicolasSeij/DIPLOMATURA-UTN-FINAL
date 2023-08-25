const util = require('util');
const cloud = require('cloudinary').v2;
const uploader = util.promisify(cloud.uploader.upload);
const destroyer = util.promisify(cloud.uploader.destroy);

//*imagen generica
const defaultImage = 'genericUser_ptpypv';

//*Retorna id publica de las imagenes cargadas, 
//*Valor por defecto, usuario generico
const imageOrDefault = async (image) => {

    let img_id = defaultImage;

    try {
        if (image && Object.keys(image).length > 0) {
            img_id = (await uploader(image.tempFilePath)).public_id;
        }

    } catch (error) {
        console.log(error);
    }
    return img_id;
}

//*Destruye la imagen en cloudinary si no es la defaultImage
const destroyImage = async (image_id) => {

    if (image_id != defaultImage) {
        return await destroyer(image_id);
    }

}

//*inserta urls de imagenes en un dataset
const setUrls = (dataSet) => {
    return dataSet.map(data => setUrl(data));
}

//*inserta url de imagen en un objeto
const setUrl = (data) => {
    imgUrl = cloud.url(data.img);
    return { ...data, imgUrl: imgUrl }
}

module.exports = {
    imageOrDefault,
    destroyImage,
    setUrls,
    setUrl
}