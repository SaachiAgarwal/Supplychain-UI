var mongoose = require('mongoose');

var AssetSchema = new mongoose.Schema({

  type: String,
  field_id: String,
  field_name: String,
  data_type: String,
  description: String,
  index: String,
  updated_date: { type: Date, default: Date.now },

});
/*var jsonL1 = {"holder1": {}};
jsonL1.holder1 = AssetSchema;
*/
module.exports = mongoose.model('Asset', AssetSchema);
