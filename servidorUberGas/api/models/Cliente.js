/**
 * Cliente.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
    nombre: {
      type: "string"
    },
    apellido: {
      type: "string"
    },
    telefono: {
      type: "number"
    },
    email: {
      type: "string"
    },
    estado: {
      type: "number"
    },
    tipo: {
      type: "string"
    },
    usuarioCliente: {
      model: "usuario"
    },
    pedidosCli: {
      collection: "pedido",
      via: "clientePedido"
    },
  },
};

