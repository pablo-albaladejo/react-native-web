/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import ColorPropType from '../ColorPropType';
import { oneOfType, number, string } from 'prop-types';
import ViewStylePropTypes from '../View/ViewStylePropTypes';

const PickerStylePropTypes = {
  ...ViewStylePropTypes,
  color: ColorPropType,
  background: string,
  fontFamily: string,
  fontSize: oneOfType([number, string]),
  fontWeight: string,
  appearance: string
};

export default PickerStylePropTypes;
