import { ButtonVariant, RouteChannel, SFC } from "../../types";
import * as S from "../../styles";
import { twMerge } from "tailwind-merge";
import { CustomButton, Footer, Skeleton } from "../../components";
import MailIcon from "@mui/icons-material/Mail";

import Resume from "../../assets/pdf/Resume.pdf";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils";
import { Fragment, lazy, memo, Suspense } from "react";
import { TestimonyCardSkeleton } from "@/components/Cards/TestimonyCard";
import { JourneyData, TestimoniesData } from "@/constants";
import Marquee from "react-fast-marquee";

const Testimony = lazy(() => import("@/components/Cards/TestimonyCard"));
const ServicePage = lazy(() => import("../Services"));
const HeroParallax = lazy(() => import("../Journey"));

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
        <S.Content className="flex flex-row py-40 flex-wrap mt-[3rem]">
          <S.Divider className="w-full flex justify-center items-center max-w-full">
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
        {/*<S.Content className="w-full bg-[#262626] flex flex-col md:flex-row justify-evenly items-center max-w-full py-5">
                   <SkillsDisplay/>
                </S.Content>*/}
      </S.Container>
      <S.Container></S.Container>
      <S.Container className="w-full h-full max-w-full">
        <Suspense fallback={<Skeleton />}>
          <ServicePage />
        </Suspense>
      </S.Container>
      <S.Container className="w-full flex items-center justify-center mb-[13rem] py-5 ">
        <Suspense fallback={<Skeleton />}>
          <HeroParallax products={JourneyData} />
        </Suspense>
      </S.Container>
      <S.Container className="py-5 flex flex-col justify-center items-center">
        <S.Divider className="flex justify-center items-center flex-col p-2 w-full md:w-4/6 text-center">
          <S.Span className="text-[30px]">
            Stories of Success, Trust, and Satisfaction
          </S.Span>
        </S.Divider>
        <S.Divider className="title text-2lg text-center mb-20">
          <h1 className="font-bold uppercase text-zinc-400  text-[2.5rem] md:text-[3rem] flex md:flex-row flex-col text-center break-words">
            T e s t i m o n i a l s
          </h1>
        </S.Divider>
        <Marquee className="overflow-hidden flex items-center w-full justify-between">
          {TestimoniesData.map((data, index) => (
            <Fragment key={index}>
              <Suspense fallback={<TestimonyCardSkeleton />}>
                <Testimony
                  ClassName={"w-11/12 md:w-[20rem] mr-4"}
                  image={data.image}
                  name={data.name}
                  message={data.message}
                  project={data.project}
                />
              </Suspense>
            </Fragment>
          ))}
        </Marquee>
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
      <S.Container className="mt-[10rem] w-full flex items-center justify-center pb-[1rem] md:px-0 px-[1rem]  max-w-full">
        <Footer />
      </S.Container>
    </S.Container>
  );
};
//<EmailIcon /><a href="mailto:ryanmark.dinglasa%40gmail.com" className="ml-3">ryanmark.dinglasa@gmail.com</a>

export default memo(HomePage);
