/**
 * Pedido.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    pedidoId:{
      type:"number"
    },
    pedidoFechaHora:{
      type:"date"
    },
    ubicacionPedido:{
      type: "string"
    },
    estado:{
      type: "number"
    },
    clientePedido:{
      model:"cliente"
    },
    vendedorPedido:{
      model:"vendedor"
    },
    pedidoDetalle:{
      collection:"detallePedido",
      via:"pedidoId"
    },
  },
};
