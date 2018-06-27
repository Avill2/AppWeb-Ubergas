/**
 * Vendedor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id:{
      type:"number"
    },
    nombre:{
      type:"string"
    },
    apellido:{
      type: "string"
    },
    telefono:{
      type:"number"
    },
    email:{
      type:"string"
    },
    estado:{
      type: "number"
    },
    cedula:{
      type:"Number"
    },
    ubicacionVendedor:{
      type:"String"
    },
    estadoVendedor:{
      type: "Number"
    },

    usuarioVend:{
      model:"usuario",
    },
    pedidosVend:{
      collection:"Pedido",
      via:"VendedorPedido"
  },
    distribuidorId:{
      model:"Distribuidor"
    },
  },
};

