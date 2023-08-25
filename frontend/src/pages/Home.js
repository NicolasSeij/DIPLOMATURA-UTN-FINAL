import styled from 'styled-components';
import { Carrusel } from '../components';


export const Home = () => {

  return (
    <MainPage>
      <Contain>
        <Carrusel />
      </Contain>
      <Pie>
        <div>
          <p>Sucursal Av. Avellaneda</p>
          <ul>
            <li>Direccion: Av. Avellaneda 33, Buenos Aires, Argentina</li>
            <li>Telefono: (011) 4763-4024</li>
            <li>WhatsApp: (+54) 11-7365-0638</li>
            <li>correo: nicolasarielseijas@gmail.com</li>
          </ul>
        </div>
        <div>
          <p>Sucursal Quilmes</p>
          <ul>
            <li>Direccion: Calle Quilmes 222, Buenos Aires, Argentina</li>
            <li>Telefono: (011) 4763-4024</li>
            <li>WhatsApp: (+54) 11-7365-0638</li>
          </ul>
        </div>
        <div>
          <ul className="designed">
            <li>Diseñador Por: Seijas, Nicolas Ariel</li>
            <li>&copy; 2023</li>
          </ul>
        </div>
      </Pie>
    </MainPage>
  )
};


const MainPage = styled.div`
  color: #f9f8f6;
`
const Contain = styled.div`
  height: 70vh;

  .carousel {
    top: 50%;
  }


`
const Pie = styled.div`

  background: var(--oscuro90);
  boottom: 0px;
  display: flex;
  font-size: 15px;
  justify-content: space-around;
  padding-top: 20px;

  ul{
    list-style: none;
  }

  p{
    font-weight: 900;
    color: (--acento-oscuro);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
