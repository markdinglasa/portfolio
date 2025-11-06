import { Bounce, ToastContainer } from "react-toastify";
import { SFC } from "../../types";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../header";
import { cn } from "../../utils";
import { SidebarProvider } from "@/context/sidebar-context";
import { Footer } from "../footer";
import "react-toastify/dist/ReactToastify.css";

export const RootLayout: SFC = ({ ClassName }) => {
  const location = useLocation();
  const paths: string[] = location.pathname
    .replace("/d/", "/")
    .substring(1, location.pathname.length)
    .split("/");
  const page = paths[paths.length - 1];
  const isDisplay: boolean =
    page === "projects" || page === "" || page === "about";

  return (
    <>
      <div
        className={cn(
          "bg-[#161616] text-[#9C9C9C] overflow-hidden w-full h-full overflow-x-hidden scrollbar-none relative",
          ClassName
        )}
      >
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="z-10 relative">
          <SidebarProvider>
            <div className="relative">
              <div className="fixed z-50 bottom-20 md:top-0">
                <Header />
              </div>
              <Outlet />
            </div>
            {isDisplay && (
              <div className="mt-[10rem] w-full flex items-center justify-center pb-[1rem] md:px-0 px-[1rem]  max-w-full">
                <Footer />
              </div>
            )}
          </SidebarProvider>
        </div>
      </div>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar
        newestOnTop
        pauseOnFocusLoss
        pauseOnHover
        position="bottom-left"
        rtl={false}
        transition={Bounce}
      />
    </>
  );
};
