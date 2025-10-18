import { RouteChannel, SFC } from "../../types";
import * as S from "../../styles/Styles";
import { cn } from "../../utils";
import { Navigation } from "../Navigation";
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
      Text: "Home",
      OnClick: () => {
        navigate(RouteChannel.INDEX);
      },
    },
    {
      Icon: <TopicIcon />,
      Text: "Projects",
      OnClick: () => navigate(RouteChannel.PROJECTS),
    },
    // { Text: "Contacts", OnClick: () => navigate(RouteChannel.CONTACTS) },
    {
      Icon: <BadgeIcon />,
      Text: "About",
      OnClick: () => navigate(RouteChannel.ABOUT),
    },
  ];
  //const [activePage, setActivePage] = useState<string>('Home')
  return (
    <>
      <S.Container
        className={cn(
          "absolute border -bottom-[44rem]  md:top-0 z-100 ",
          ClassName
        )}
      >
        <S.Content className=" w-full py-2 justify-center items-center fixed z-10 px-4">
          <S.Divider className=" justify-center flex flex-row">
            <S.Divider className="shadow-lg border border-slate-100/10 bg-zinc-900/90 justify-center flex items-center md:p-2 md:px-[2rem] rounded-full md:w-fit w-full">
              <Navigation
                Links={links}
                Active={activeMenu}
                OnClick={(text) => setActiveMenu(text)}
              />
            </S.Divider>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
