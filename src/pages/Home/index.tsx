import { ButtonVariant, RouteChannel, SFC } from "../../types";
import * as S from "../../styles";
import { twMerge } from "tailwind-merge";
import { CustomButton, Skeleton } from "../../components";
import MailIcon from "@mui/icons-material/Mail";
import Resume from "../../assets/pdf/Resume.pdf";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils";
import { lazy, memo, Suspense } from "react";
import { JourneyData } from "@/constants";
import { DevelopmentProcedurePanel } from "./procedure-panel";

const ServicePage = lazy(() => import("../Services"));
const HeroParallax = lazy(() => import("../Journey"));
const Testimonial = lazy(() => import("../Testimonial"));

export const HomePage: SFC = ({ ClassName }) => {
  const currentDate = formatDate(new Date().toString());
  const navigate = useNavigate();

  return (
    <S.Container
      className={twMerge(
        `overflow-hidden w-full h-full overflow-x-hidden box-border`,
        ClassName
      )}
    >
      <S.Container className="w-full h-full max-w-full">
        <S.Content className="flex flex-row py-40 flex-wrap mt-[3rem] ">
          <S.Divider className="w-full flex justify-center items-center max-w-full ">
            <S.Divider className="w-full flex flex-col justify-center items-center max-w-full">
              <S.Divider className="w-full items-center flex justify-center max-w-full">
                <h1 className="font-bold uppercase text-zinc-400 text-[2.5rem] md:text-[3rem] flex md:flex-row flex-col text-center break-words">
                  <S.Span>M a r k</S.Span>
                  <S.Span className="md:ml-[1.5rem]">D i n g l a s a</S.Span>
                </h1>
              </S.Divider>
              <S.Span className="text-[20px]">
                Your Partner in Building your Dream
              </S.Span>
              <S.Divider className="flex justify-center items-center mt-10 flex-col p-2 w-full md:w-4/6 text-center max-w-full">
                <S.Span className="text-[1.75rem] md:text-[2.5rem] break-words">
                  Designing intuitive user experiences and engineering, scalable
                  software solutions to bring ideas to life.
                </S.Span>
              </S.Divider>
              <S.Divider className="flex justify-center items-center mt-10 flex-row p-2 w-full md:w-4/6 text-center gap-[1rem] max-w-full">
                <CustomButton
                  text="Projects"
                  color="primary"
                  morph={false}
                  variant={ButtonVariant.contained}
                  onClick={() => navigate(RouteChannel.PROJECTS)}
                />
                <CustomButton
                  text="CV"
                  color="primary"
                  morph={false}
                  variant={ButtonVariant.outlined}
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = Resume;
                    link.download = `${currentDate}-mark-dinglasa-resume.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                />
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Content>
      </S.Container>
      <S.Container></S.Container>
      <S.Container className="w-full h-full max-w-full">
        <Suspense fallback={<Skeleton />}>
          <ServicePage />
        </Suspense>
      </S.Container>

      <S.Container className="w-full flex items-center justify-center py-5">
        <Suspense fallback={<Skeleton />}>
          <HeroParallax products={JourneyData} />
        </Suspense>
      </S.Container>
      <S.Container className="pb-[10rem]">
        <Suspense fallback={<Skeleton />}>
          <DevelopmentProcedurePanel />
        </Suspense>
      </S.Container>
      <S.Container className="w-full flex items-center justify-center py-[10rem]">
        <Suspense fallback={<Skeleton />}>
          <Testimonial />
        </Suspense>
      </S.Container>

      <S.Container className="flex items-center justify-center mt-[13rem] p-4 md:p-0">
        <div className="w-full md:w-10/12  h-fit ">
          <div className="flex w-full flex-col mb-[1rem]">
            <span className="text-slate-100/70 text-5xl font-semibold h-fit overflow-hidden py-2">
              Hey there! <br /> Hope you're having an awesome day!
            </span>
            <span className="text-lg">
              Want to get in touch? You can reach out using the details below.
              Let’s connect!
            </span>
          </div>
          <div className="flex w-full flex-col">
            <div className="text-base text-slate-100/80">
              <MailIcon fontSize="small" />
              <span className="ml-2"> ryanmark.dinglasa@gmail.com </span>
            </div>
          </div>
        </div>
      </S.Container>
    </S.Container>
  );
};
//<EmailIcon /><a href="mailto:ryanmark.dinglasa%40gmail.com" className="ml-3">ryanmark.dinglasa@gmail.com</a>

export default memo(HomePage);
