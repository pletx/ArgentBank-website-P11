import React from 'react';
import Banner from '../../components/banner/banner';
import Features from '../../containers/features';
import { useDispatch, useSelector } from 'react-redux';
import { Getuserdata } from "../../services/Api_services";
import { loginSuccess } from '../../reducers';

const Home = () => {
  const userConnected = useSelector(state => state.user);
  const dispatch = useDispatch();
  const autoConnect = async (rememberme) => {
  const userData=await Getuserdata(rememberme);
    if(userData){
      dispatch(await loginSuccess(userData.body))
    }
    }
  if(userConnected===null || userConnected===undefined ){
    if(localStorage.getItem('token')!== undefined && localStorage.getItem('token')!== null) 
        {autoConnect(true)}
    if (sessionStorage.getItem('token')!==undefined && sessionStorage.getItem('token')!== null)
      {autoConnect(false)}
  }
  console.log(userConnected)
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





