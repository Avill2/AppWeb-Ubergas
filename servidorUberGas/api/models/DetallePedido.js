/**
 * DetallePedido.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    DetPedCantidad:{
      type:"Number"
    },
    DetPedDescripcion:{
      type:"String"
    },
    DetPedPrecioUnitario:{
      type: "Number"
    },
    PedidoId:{
      model:"Pedido"
    },
  },
};
