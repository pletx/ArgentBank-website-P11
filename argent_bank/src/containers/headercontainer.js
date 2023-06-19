import Header from '../components/header/header';
import Logo from'../assets/img/argentBankLogo.webp'
import { logout } from '../reducers';
import {useDispatch } from 'react-redux';

function Headercontainer() {
const dispatch = useDispatch();
const headerLogout = () => {
console.log("Logout!!!");
    dispatch(logout());
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');}
   return(
    <Header logo={Logo} logolink='/' headerLogout={headerLogout} title={'Argent Bank'}/>
   ) 
}
export default Headercontainer;