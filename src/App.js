// import logo from './logo.svg';
import './App.css';

import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';



function App() {

  const clientId='557483343331-2v6qlgdnh400kfju9tss6mk51bi44thh.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
           <Messanger/>
       </AccountProvider>
    </GoogleOAuthProvider>
  );

}

export default App;
