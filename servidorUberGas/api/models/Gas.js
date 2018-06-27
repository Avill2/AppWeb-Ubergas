/**
 * Gas.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    gasId:{
      type:"number"
    },
    gasDescripcion:{
      type:"string"
    },
    gasPrecioVenta:{
      type: "number"
    },
    gasTipo:{
      type:"string"
    },
    gasEstado:{
      type:"number"
    },
  },
};

