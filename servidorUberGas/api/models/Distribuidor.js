/**
 * Distribuidor.js
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
    distriRuc:{
      type:"number"
    },
    distriNombre:{
      type:"string"
    },
    distriEmail:{
      type: "string"
    },
    distriMovil:{
      type:"number"
    },
    distriTelefono:{
      type:"number"
    },
    distriDireccion:{
      type: "string"
    },
    distriEstado:{
      type: "number"
    },
    usuarioDis:{
      model:"usuario",
    },
    vendedorDistribuidor:{
      collection:"vendedor",
      via:"distribuidorId"
    },
  },
};
