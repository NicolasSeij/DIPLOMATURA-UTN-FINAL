import {pedidos} from '../data/dataClientes.js';

export const dataPedidos = (id) =>{

    return pedidos.filter(item => item.cliente_id === id)
}