/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
    UsrNick:{
      type:"String"
    },
    UsrPassword:{
      type:"String"
    },
    UsrEstado:{
      type: "Number"
    },
    UsrRol:{
      type:"String"
    },
    UsrUltimoAcceso:{
      type:"Date"
    },
    PersonaId:{
      model:"Persona"
    },
    DistribuidorId:{
      model:"Distribuidor"
    }
  },
};
