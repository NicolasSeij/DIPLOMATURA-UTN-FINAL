import { Container, Table } from 'react-bootstrap';

export const TablaRep = ({dataCliente}) => {

  return (
    <>
    <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nro Orden</th>
                <th>Fecha Pedido</th>
                <th>Producto</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Fecha Maxima</th>
                <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {dataCliente.map((item, index) => 
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.orden_id}</td>
                        <td>{item.fecha}</td>
                        <td>{item.producto}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.fecha_reparacion}</td>
                        <td>{item.fecha_reparacion?"En Curso":"Pendiente"}</td>
                    </tr>
                    )}
            </tbody>
        </Table>
    </Container>
    
    </>
  )
}
