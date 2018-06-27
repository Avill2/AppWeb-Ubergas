/**
 * Gas.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    GasId:{
      type:"Number"
    },
    GasDescripcion:{
      type:"String"
    },
    GasPrecioVenta:{
      type: "Number"
    },
    GasTipo:{
      type:"String"
    },
    GasEstado:{
      type:"Number"
    },
  },
};

