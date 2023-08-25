import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import { faqs } from '../data/faqs';

export const Faq = () => {
  return (
    <>
      <Main>
        <ComoTrabajamos>
          <h2>Como Hacemos tus Pedidos?</h2>
          <hr />
          <h4>Nos esforzamos por satisfacer las necesidades de nuestros clientes y brindarle una entrega rápida y sin problemas.</h4>
          <ul>
            <li>
              <div>1</div>
              <h3>Pedidos</h3>
              <p>Recibimos via web su pedido para que nuestros empleados comienzen a preparar su envio </p>
            </li>
            <li>
              <div>2</div>
              <h3>Preparacion</h3>
              <p>Se Adjunta todos sus productos de forma segura para que llegen 100% Estables</p>
            </li>
            <li>
              <div>3</div>
              <h3>Envio</h3>
              <p>Tenemos nuestro propio sistema de envio de mercaderia para nuestros clientes, no dependemos de tercero como otras compañias</p>
            </li>
            <li>
              <div>4</div>
              <h3>Devolución</h3>
              <p>Si por alguna razon usted le llega algun producto dañado o algo mal, se les devolvera el dinero o se les cambiara el producto</p>
            </li>
          </ul>
        </ComoTrabajamos>
        <PFTit>Preguntas frecuentes</PFTit>
        <Preguntas>
          <div className="Divaccordion">
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index} >
              <Accordion.Header>{faq.pregunta}</Accordion.Header>
              <Accordion.Body>
                <p>
                  {faq.respuesta}
               </p>
               </Accordion.Body>
            </Accordion.Item>
            ))}

          </Accordion>
          </div>
          <img alt="" src='../../images/it-1.jpg'/>
        </Preguntas>
      </Main>
    </>
  )
}

const Main = styled.div`
  width: 100%;
`

const ComoTrabajamos = styled.div`
  text-align: center;
  margin-top: 5%;

  hr{
    width: 10%;
    margin-left: 45%;
    color: var(--acento-oscuro);
    height: 2px;
    opacity: 1;
  }

  h4{
    color: grey;
    width: 30%;
    margin-left: 35%;
    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0px;
    }
    
  }

  h2, h3, div{
    font-weight: 900;
  }

  ul{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    list-style: none;
    margin-top: 5%;
    width: 80%;
    margin-left: 10%;
    
    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0px;
    }

    li{
      border-top: 2px solid var(--acento-claro);
      div{
        border: 2px solid var(--acento-claro);
        border-radius: 50%;
        position: relative;
        top: -22px;
        background-color: var(--claro);
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      p{
        color: grey;
        font-weight: 700;
      }
    }
  }


`

const PFTit = styled.h2`
  margin-left: 5%;
  font-weight: 900;
  margin-top: 5%;
`

const Preguntas = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--oscuro);


  .Divaccordion{
    width: 40%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  img{
    width: 35%;
    border-radius: 10px;
    margin: 20px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .accordion-item{
    border-color: var(--acento-claro);
  }




`

