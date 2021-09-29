import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './Layout.css';
import './Body.scss';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
            News Article Evaluator using NLP
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Made with <Icon name="heart" color="red" /> 
        by &nbsp; 
        <a href="https://manonworld.de" target="_blank">
          Mosta
        </a>
      </p>
    </Container>
  );
};

export default Layout;