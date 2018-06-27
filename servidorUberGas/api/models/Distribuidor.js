/**
 * Distribuidor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
    DistriRuc:{
      type:"Number"
    },
    DistriNombre:{
      type:"String"
    },
    DistriEmail:{
      type: "String"
    },
    DistriMovil:{
      type:"Number"
    },
    DistriTelefono:{
      type:"NUmber"
    },
    DistriDireccion:{
      type: "String"
    },
    DistriEstado:{
      type: "Number"
    },
  },
};
