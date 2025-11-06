import { RouteChannel, SFC } from "../../types";
import { cn } from "../../utils";
import { Navigation } from "../naivgation";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "@/hooks";
import HomeIcon from "@mui/icons-material/Home";
import BadgeIcon from "@mui/icons-material/Badge";
import TopicIcon from "@mui/icons-material/Topic";

export const Header: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const { activeMenu, setActiveMenu } = useSidebar();
  const links = [
    {
      Icon: <HomeIcon />,
      Text: "home",
      OnClick: () => {
        navigate(RouteChannel.INDEX);
      },
    },
    {
      Icon: <TopicIcon />,
      Text: "projects",
      OnClick: () => navigate(RouteChannel.PROJECTS),
    },
    // { Text: "Contacts", OnClick: () => navigate(RouteChannel.CONTACTS) },
    {
      Icon: <BadgeIcon />,
      Text: "about",
      OnClick: () => navigate(RouteChannel.ABOUT),
    },
  ];
  //const [activePage, setActivePage] = useState<string>('Home')
  return (
    <>
      <div className={cn("", ClassName)}>
        <div className=" w-full py-2 justify-center items-center fixed z-10 px-4">
          <div className=" justify-center flex flex-row">
            <div className="shadow-lg border border-slate-100/10 bg-[#161616] justify-center flex items-center md:p-2 md:px-[2rem] rounded-full md:w-fit w-full">
              <Navigation
                Links={links}
                Active={activeMenu}
                OnClick={(text) => setActiveMenu(text)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
