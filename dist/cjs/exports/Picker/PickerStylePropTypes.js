'use strict';

exports.__esModule = true;

var _ColorPropType = require('../ColorPropType');

var _ColorPropType2 = _interopRequireDefault(_ColorPropType);

var _propTypes = require('prop-types');

var _ViewStylePropTypes = require('../View/ViewStylePropTypes');

var _ViewStylePropTypes2 = _interopRequireDefault(_ViewStylePropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PickerStylePropTypes = Object.assign({}, _ViewStylePropTypes2.default, {
  color: _ColorPropType2.default,
  background: _propTypes.string,
  fontFamily: _propTypes.string
}); /**
     * Copyright (c) 2017-present, Nicolas Gallagher.
     * Copyright (c) 2015-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     * 
     */

exports.default = PickerStylePropTypes;
module.exports = exports['default'];