const { request, response } = require('express');
const nodemailer = require('nodemailer');


const sendEMail = async (req = request, res = response) => {

    const mail = {
        to: 'sti.app.mail@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contacto a travez de la web,
        dejando el siguiente mensaje: ${req.body.mensaje}.
        Telefono contacto: ${req.body.telefono}
        e-mail contacto: ${req.body.mail}`
    }
    

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
    

    try{
        await transport.sendMail(mail);

        res.status(201).json({
            ok: true,
            message: 'Mensaje Enviado'
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            message: error
            
        })
    }

}



module.exports = {
    sendEMail
}