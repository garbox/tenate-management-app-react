import React from 'react';
import Banner from './components/banner';
import InfoRow from './components/info-row';

const Home = () => {
  return (
    <div>
        <Banner />
        <div className='container'>
            <InfoRow/>
        </div>
    </div>
  );
};

export default Home;