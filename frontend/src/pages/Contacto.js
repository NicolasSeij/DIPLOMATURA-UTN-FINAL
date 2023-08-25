import styled from 'styled-components';
import { BsGeoAlt, BsTelephone, BsWhatsapp, BsMailbox } from 'react-icons/bs';
import { Mapa, MailForm } from '../components';

export const Contacto = () => {

  return (
    <>
      <Main>
        <Formulario>
          <MailForm/>
        </Formulario>
        <Data>
          <div className="mapa">
              <Mapa isMarkerShown/>
          </div>
          <div className="datos">
            <h5>Av. Avellaneda</h5>
            <p><BsGeoAlt /> Av. Avellaneda 33, CABA C1405CNA, Buenos Aires, Argentina</p>
            <p><BsTelephone /> <b>Telefono</b>: (011) 4763-4024</p>
            <p><BsWhatsapp /> <b>WhatsApp</b>: (+54) 11-7365-0638</p>
            <p><BsMailbox /> <b>Correo</b>: nicolasarielseijas@gmail.com</p>
          </div>
          <div className="datos">
            <h5>Calle Gurruchaga</h5>
            <p><BsGeoAlt /> Calle Gurruchaga 222, CABA , Buenos Aires, Argentina</p>
            <p><BsTelephone /> <b>Telefono</b>: (011) 4763-4024</p>
            <p><BsWhatsapp /> <b>WhatsApp</b>: (+54) 11-7365-0638</p>
          </div>
        </Data>
      </Main>
    </>
  )
}

const Main = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Formulario = styled.div`
  border-right: 1px solid #ccc;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }

`
const Data = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }

  .mapa{
    width: 90%;
    margin-left: 5%;
    text-align: center;
    color:red;
  }

  .datos{
    width: 80%;
    margin-left: 10%;

    p{
      color: grey;
      font-style: italic;

      svg{
        color:var(--main);
      }
    }
  }


`
