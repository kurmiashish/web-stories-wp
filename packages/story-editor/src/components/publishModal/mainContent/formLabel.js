/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Headline,
  PLACEMENT,
  THEME_CONSTANTS,
} from '@googleforcreators/design-system';
import { __ } from '@googleforcreators/i18n';
/**
 * Internal dependencies
 */
import Tooltip from '../../tooltip';
import { REQUIRED_INPUTS } from '../constants';

const RequiredHeadline = styled(Headline)`
  &:after {
    content: '*';
    color: ${({ theme }) => theme.colors.fg.tertiary};
    padding-left: 0.25em;
  }
`;
const FormLabel = ({ htmlFor, copy }) => {
  return REQUIRED_INPUTS.indexOf(htmlFor) > -1 ? (
    <Tooltip
      title={__('Required', 'web-stories')}
      placement={PLACEMENT.BOTTOM_START}
    >
      <RequiredHeadline
        as="label"
        size={THEME_CONSTANTS.TYPOGRAPHY.PRESET_SIZES.XX_SMALL}
        htmlFor={htmlFor}
      >
        {copy}
      </RequiredHeadline>
    </Tooltip>
  ) : (
    <Headline
      as="label"
      size={THEME_CONSTANTS.TYPOGRAPHY.PRESET_SIZES.XX_SMALL}
      htmlFor={htmlFor}
    >
      {copy}
    </Headline>
  );
};

export default FormLabel;

FormLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
};
