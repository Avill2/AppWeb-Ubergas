/**
 * Vendedor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    Cedula:{
      type:"Number"
    },
    UbicacionVendedor:{
      type:"String"
    },
    EstadoVendedor:{
      type: "Number"
    },

    Clientes:{
      collection:"Persona",
      via:"VendedId"
    },
    PedidosVend:{
      collection:"Pedido",
      via:"VendedorPedido"
  },
    DistribuidorId:{
      model:"Distribuidor"
    },
  },
};

