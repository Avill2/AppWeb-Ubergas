/**
 * Persona.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
    Id:{
      type:"Number"
    },
    Nombre:{
      type:"String"
    },
    Apellido:{
      type: "String"
    },
    Telefono:{
      type:"Number"
    },
    Email:{
      type:"String"
    },
    Estado:{
      type: "Number"
    },
    UsuariosPersona:{
      collection:"Usuario",
      via:"PersonaId"
    },
    ClientId:{
      model:"Cliente"
    },
    VendedId:{
      model:"Vendedor"
    },
  },
};
