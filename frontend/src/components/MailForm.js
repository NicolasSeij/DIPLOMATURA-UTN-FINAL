import styled from 'styled-components';
import { Button, Form, Alert } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { sendMail } from '../data/sendMail';
import { useState } from 'react';

export const MailForm = () => {
    //*STATE PARA ALERTAS
    const [alert, setAlert] = useState({
        text:'', 
        variant:''
    })


    //* STATE PARA EL FORMULARIO
    const {nombre, telefono, mail, mensaje, onInputChange, formState, onResetForm} = useForm({
        nombre:'',
        telefono:'',
        mail:'',
        mensaje:''
    })

    //*EVENTO SUBMIT
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await sendMail(formState);
        if (response.data.ok) {
            onResetForm();
            setAlert({text:'Mensaje Enviado', variant:'success'})
        }else{
            setAlert({text:'Error al enviar el mensaje', variant:'danger'})
        } 
    }

    //*FORMULARIO
    return (
        <>
            <StyledForm onSubmit={onSubmit}>
                <h1>CONTACTO</h1>
                <p>
                    Para contactarnos, por favor complete el siguiente formulario, o bien, comuníquese a través de los siguientes medios. Un asesor lo estará contactando a la brevedad.
                </p>
                <Form.Group className="mb-3" controlId="nombreID">
                    <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={onInputChange} value={nombre} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="telefonoID">
                    <Form.Control type="" placeholder="Telefono" name="telefono" onChange={onInputChange} value={telefono}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="mailID">
                    <Form.Control placeholder="e-mail" name="mail" onChange={onInputChange} value={mail} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="msjID">
                    <Form.Control as="textarea" placeholder="Mensaje" name="mensaje" onChange={onInputChange} value={mensaje} required />
                </Form.Group>
                <Button className="mb-3" variant="primary" type="submit">
                    Enviar
                </Button>

                <Alert variant={alert.variant}>{alert.text}</Alert>

            </StyledForm>

        </>
    )
}


const StyledForm = styled(Form)`
   
        width: 60%;
        margin-left: 20%;
        margin-top: 15%;

        p{
        color: grey;
        }
    
`