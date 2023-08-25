//*Convierte valores de checkbox a true/false
const isChecked = (value) =>{
    return (value !== undefined)
}

//*Filtra el contenido de un dataset, utilizado en busquedas
const filtrar = (dataSet, filtro) =>{

    return dataSet.filter((data) =>{

        return Object.keys(data).some((key) => {

            return JSON.stringify(data[key]).toLowerCase().trim().includes(filtro);

        });

    });
}




module.exports = {
    isChecked,
    filtrar
}