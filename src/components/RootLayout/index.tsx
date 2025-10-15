import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as S from '../../styles'
import { SFC } from '../../types';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { MainContent } from './Styles';
import { cn } from '../../utils';
import { SidebarProvider } from '@/context/sidebar-context';

export const RootLayout : SFC = ({ClassName}) => {
  return ( <> 

    <S.Layout className={cn(`bg-[#161616] text-[#9C9C9C] overflow-hidden w-full h-full overflow-x-hidden scrollbar-none relative`, ClassName)}>
    <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className='z-20 relative'>
        <SidebarProvider>
        <Header/>
        <MainContent className='overflow-hidden z-50'>
            <Outlet/>
        </MainContent>
        </SidebarProvider>
        </div>
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
