/**
 * Pedido.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    PedidoId:{
      type:"Number"
    },
    PedidoFechaHora:{
      type:"Date"
    },
    UbicacionPedido:{
      type: "String"
    },
    Estado:{
      type: "Number"
    },
    ClientePedido:{
      model:"Cliente"
    },
    VendedorPedidido:{
      model:"Vendedor"
    },
    PedidoDetalle:{
      collection:"DetallePedido",
      via:"PedidoId"
    },
  },
};
