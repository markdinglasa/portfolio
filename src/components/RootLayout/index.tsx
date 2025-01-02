import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as S from '../../styles'
import { SFC } from '../../types';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

export const RootLayout : SFC = () => {
  return ( <> 
    <S.Layout className="w-screen h-screen"> 
        <S.Content>
            <Header/>
        </S.Content>
        <Outlet /> 

    </S.Layout>
    <ToastContainer 
        autoClose={3000} 
        closeOnClick draggable 
        hideProgressBar 
        newestOnTop 
        pauseOnFocusLoss  
        pauseOnHover 
        position="bottom-left" 
        rtl={false} 
        transition={Bounce}
    />
    </>
    )
}
