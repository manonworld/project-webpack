import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Project 2</p>
      <p>
        <Link to="/loading">Loading</Link>
      </p>
    </Layout>
  );
};

export default Home;