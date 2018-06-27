/**
 * DetallePedido.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    detPedCantidad:{
      type:"Number"
    },
    detPedDescripcion:{
      type:"String"
    },
    detPedPrecioUnitario:{
      type: "Number"
    },
    pedidoId:{
      model:"Pedido"
    },
  },
};
