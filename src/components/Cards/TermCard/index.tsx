import { ButtonType, SFC, TermCardProps } from "../../../types";
import * as S from '../../../styles';
import { CircleButton } from "../../FormInputs";
import { useGetAllTermLineByTerm, useToggle } from "../../../hooks";
import AddIcon from '@mui/icons-material/Add';
import { SubTermModal } from "../../../modals";
import { twMerge } from "tailwind-merge";
import { Suspense, useEffect } from "react";
import { SubTermCard } from "../SubTermCard";
import { Skeleton } from "../../Skeleton";
import { AudioPlayer } from "../../Audio/AudioPlayer";
  
export const TermCard: SFC<TermCardProps> = ({ ClassName, Refetch, TermId, TermTitle, ChapterTitle, VoiceOver }) => {
    const [modalOpen, toggleModal] = useToggle(false);
    const { records, refetch, loading } = useGetAllTermLineByTerm(TermId);

    useEffect(() => {
        Refetch();
    }, [Refetch, TermId]);

    const handleModalClose = () => {
        toggleModal();
        Refetch();
        refetch();
    };

    return (
        <>
            <S.Container className={twMerge("bg-white md:w-4/12 w-full flex flex-col rounded-lg justify-start p-3 overflow-auto md:h-fit", ClassName)}>
                <S.Content className="w-full mb-2 flex justify-between">
                    <S.Content className="mb-5 flex flex-col">
                        <S.Span className="text-sm text-slate-800">{ChapterTitle}</S.Span>
                        <S.Span className="txt-md text-primary font-bold">{TermTitle}</S.Span>
                    </S.Content>
                    <S.Content className="flex flex-row gap-2">
                        {VoiceOver && <AudioPlayer URL={VoiceOver??""} />}
                        <CircleButton 
                            OnClick={toggleModal} 
                            IsNotification={false} 
                            Icon={<AddIcon className="text-primary" />} 
                            Type={ButtonType.button} 
                            Title="New Sub Term"
                        />
                    </S.Content>
                </S.Content>

                {/*Focus && <S.Content className="mb-5 flex flex-row bg-blue-50 rounded-lg p-5">
                    <S.Span className="text-sm text-slate-800">Word in focus: </S.Span>
                    <S.Span className="ml-1 text-sm text-slate-800 font-bold">{Focus}</S.Span>
                </S.Content>*/}
                
                {records && !loading ? (
                <Suspense fallback={<Skeleton />}>
                    <S.Content className="mb-2">
                    {records.reduce<React.ReactNode[]>((acc, subterm, index, arr) => {
                        const isFirstOfCategory =
                        index === 0 || subterm.Category !== arr[index - 1].Category;
                        const isLast = subterm.Category !== arr[index + 1]?.Category;
                        return acc.concat(
                        <>
                            {isFirstOfCategory && (
                            <div key={`category-${subterm.Category}`} className="w-full mb-2">
                                <S.Divider className="w-full flex justify-between items-center">
                                    <S.Span className="text-sm uppercase text-primary font-bold">{subterm.Category ?? "NA"}</S.Span>
                                </S.Divider>
                            </div>
                            )}
                            <SubTermCard
                            key={subterm.Id}
                            Id={Number(subterm.Id)}
                            Category={subterm.Category ?? ""}
                            Term={subterm.Term ?? ""}
                            Description={subterm.Description ?? ""}
                            refetch={() => refetch()}
                            IsBorderLeft={subterm.IsBorderLeft}
                            Illustration={subterm?.Illustration ?? null}
                            ClassName={isLast?'mb-5':''}
                            />
                        </>
                        );
                    }, [])}
                    </S.Content>
                </Suspense>
                ) : (
                <Skeleton />
                )}
                {/*Illustration && <S.Image src={Illustration??""} className=""/>*/}
            </S.Container>
            {modalOpen && (<SubTermModal close={handleModalClose} title="New Sub Term" ClassName="w-11/12" />)}
        </>
    );
};
