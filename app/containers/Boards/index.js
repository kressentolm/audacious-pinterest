/*
 *
 * Boards
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectBoards from './selectors';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export class Boards extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Boards"
          meta={[
            { name: 'description', content: 'Description of Boards' },
          ]}
        />
      <Title><FormattedMessage {...messages.header}/></Title>
      </div>
    );
  }
}

const mapStateToProps = selectBoards();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
