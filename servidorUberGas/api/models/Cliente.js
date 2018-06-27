/**
 * Cliente.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
    tipoCliente:{
      type:"String"
    },
    Clientes:{
      collection:"Persona",
      via:"ClientId"
    },

    PedidosCli:{
      collection:"Pedido",
      via:"ClientePedido"
    },
  },
};

