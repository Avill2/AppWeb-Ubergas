/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
    usrNick:{
      type:"string"
    },
    usrPassword:{
      type:"string"
    },
    usrEstado:{
      type: "number"
    },
    usrRol:{
      type:"string"
    },
    usrUltimoAcceso:{
      type:"date"
    },
    distribuidor:{
      model:"distribuidor"
    },
    cliente:{
      model:"cliente"
    },
    vendedor:{
      model:"vendedor"
    },
  },
};
