import { ButtonVariant, RouteChannel, SFC } from "@/types";
import { CustomButton, Spinner } from "@/components";

import Resume from "@/assets/pdf/Resume.pdf";
import { useNavigate } from "react-router-dom";
import { cn, formatDate } from "@/utils";
import { lazy, memo, Suspense } from "react";
import { JourneyData } from "@/constants";
import { ProcedurePanel } from "@/components/panels/procedure-panel";
import { PageHeaderPanel } from "@/components/panels/page-header-panel";

const ServicePanel = lazy(() => import("@/components/panels/services-panel"));
const JourneyPanel = lazy(() => import("@/components/panels/journey-panel"));
const Testimonial = lazy(() => import("@/components/panels/testimonial-panel"));

export const HomePage: SFC = memo(({ ClassName }) => {
  const currentDate = formatDate(new Date().toString());
  const navigate = useNavigate();

  const data = {
    title: "Mark Dinglasa",
    subtitle: "Your Partner in Building your Dream",
    qoute:
      "Designing intuitive user experiences and engineering, scalable software solutions to bring ideas to life.",
    actions: (
      <>
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
      </>
    ),
  };
  return (
    <div
      className={cn(
        `overflow-hidden w-full h-full overflow-x-hidden box-border`,
        ClassName
      )}
    >
      <PageHeaderPanel
        title={data.title}
        subtitle={data.subtitle}
        qoute={data.qoute}
        actions={data.actions}
      />
      <div className="w-full h-full max-w-full">
        <Suspense fallback={<Spinner />}>
          <ServicePanel />
        </Suspense>
      </div>
      <div className="w-full flex items-center justify-center py-5">
        <Suspense fallback={<Spinner />}>
          <JourneyPanel products={JourneyData} />
        </Suspense>
      </div>
      <div className="pb-[10rem]">
        <Suspense fallback={<Spinner />}>
          <ProcedurePanel />
        </Suspense>
      </div>
      <div className="w-full flex items-center justify-center py-[10rem]">
        <Suspense fallback={<Spinner />}>
          <Testimonial />
        </Suspense>
      </div>
    </div>
  );
});

export default HomePage;
