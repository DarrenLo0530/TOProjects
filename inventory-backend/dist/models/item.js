"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    min: 0
  },
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }],
  stockQuantity: {
    type: Number,
    min: 0
  }
});
ItemSchema.virtual('url').get(function () {
  return "/item/".concat(_this._id);
});

var _default = _mongoose["default"].model('Item', ItemSchema);

exports["default"] = _default;