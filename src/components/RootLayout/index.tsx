import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as S from '../../styles'
import { SFC } from '../../types';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { MainContent } from './Styles';
import { cn } from '../../utils';

export const RootLayout : SFC = ({ClassName}) => {
  return ( <> 
    <S.Layout className={cn(`bg-[#161616] text-[#9C9C9C] overflow-hidden w-full h-full overflow-x-hidden`, ClassName)}>
        <S.Content>
            <Header/>
        </S.Content>
        <MainContent className=''>
            <Outlet /> 
        </MainContent>

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
