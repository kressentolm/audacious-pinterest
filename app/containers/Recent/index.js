/*
 *
 * Recent
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectRecent from './selectors';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
`;

export class Recent extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Recent"
          meta={[
            { name: 'description', content: 'Description of Recent' },
          ]}
        />
      <Title><FormattedMessage {...messages.header}/></Title>
      </div>
    );
  }
}

const mapStateToProps = selectRecent();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recent);
