import { Skeleton } from "@mui/material";
import { Card, Content, Back, BackContent } from "./Styles";
export const ServiceCardSkeleton = () => {
  return (
    <>
      <Card>
        <Content>
          <Back>
            <BackContent>
              <div className="w-full flex flex-row items-center">
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={"2.5rem"}
                  height={"2.5rem"}
                />
                <span className="ml-2 text-gray-100/70">
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={"1.5rem"}
                  />
                </span>
              </div>
              <div className="w-full mt-5 flex flex-col">
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={"1.5rem"}
                />
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={"1.5rem"}
                />
              </div>
            </BackContent>
          </Back>
        </Content>
      </Card>
    </>
  );
};
