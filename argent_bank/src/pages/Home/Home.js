import React from 'react';
import Banner from '../../components/banner/banner';
import Features from '../../containers/features';
const Home = () => {
  return (
    <main>
      <Banner 
      sronly='Promoted Content'
      subtitle1='No fees.'
      subtitle2='No minimum deposit.'
      subtitle3='High interest rates.'
      text='Open a savings account with Argent Bank today!'>
      </Banner>
     <Features/>
     </main>
  );
};

export default Home;





