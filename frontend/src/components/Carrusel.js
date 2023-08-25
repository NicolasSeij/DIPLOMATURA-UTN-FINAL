import { Carousel } from 'react-bootstrap';

export const Carrusel = () => {
    return (
        <>
            <Carousel fade indicators={false}>
                <Carousel.Item interval={3000} className="text-center">

                    <h1>Todos los Sistemas de Envios Accesibles</h1>
                    <h4>Tardamos 1 o 2 Dias en preparar sus pedidos</h4>

                </Carousel.Item>
                <Carousel.Item interval={3000} className="text-center">

                    <h1>Servicio de Importacio rápido y accesible</h1>
                    <h4>Nos esforzamos por satisfacer las necesidades de nuestros clientes <br /> y brindar un servicio rápido y oportuno.</h4>

                </Carousel.Item>

            </Carousel>

        </>
    );
}
