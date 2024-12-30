import { ButtonType, FormProps, SFC, TermTable, ToastType } from "../../../types";
import * as S from '../../../styles'
import { twMerge } from "tailwind-merge";
import { Form, Formik } from "formik";
import { CustomButton, Input, Skeleton } from "../..";
import { termValidator } from "../../../validators";
import SaveIcon from '@mui/icons-material/Save';
import { displayToast } from "../../../utils";
import { useParams } from "react-router-dom";
import { useAddTerm, useGetAllChapter, useGetChapter, useGetTerm, useUpdateTerm } from "../../../hooks";
import { colors } from "../../../styles";
import { Autocomplete, TextField } from "@mui/material";
import { Term } from "../../../shared";

export const TermForm: SFC<FormProps> = ({ ClassName, Title = 'NA', IsEdit = false }) => {
    const { Id } = useParams<{ Id?: string }>()
    const { records, loading } = useGetTerm(parseInt(`${Id || 0}`, 10))
   
    const { add } = useAddTerm()
    const { update } = useUpdateTerm()
    const { records: options, } = useGetAllChapter()
    
    const initial: TermTable = {
        ChapterId: records?.ChapterId ?? 0,
        Term: records?.Term ?? null,
        Focus: null,
        Definition: null,
        Illustration: null,
        VoiceOver: records?.VoiceOver ?? null
    }
    const { records: ChapterTitle, loading:ChapterTitleLoad } = useGetChapter(records?.ChapterId || 0)
    const flag = Id?loading&&ChapterTitleLoad?true:false:false
    //console.log("initial:",initial)
    const handleSubmit = async (values: Term) => {
        try {
            values.Focus = values?.Focus?.trim() || null;
            console.log(values)
            if (!Id || !Id.trim()) await add(values)
            else await update(Id, values)
        } catch (error: any) {
            displayToast(error.message, ToastType.error)
        }
    }

    return (
        <>
            <S.Container className={twMerge(' w-full py-3 ', ClassName)}>
                <S.Divider className=" mb-4">
                    <S.Span className="text-xl text-slate-600">{Title}</S.Span>
                </S.Divider>
                <S.Content>
                    {!flag?
                    <Formik initialValues={initial} onSubmit={handleSubmit} enableReinitialize={true} validateOnMount={true} validationSchema={termValidator}>
                        {({ errors, touched, isValid, isSubmitting, handleChange, values, dirty, setFieldValue, setTouched }) => (
                            <Form>
                                <S.Divider className="flex flex-col w-full ml-1">
                                    {/*<S.Divider className="w-full flex flex-col md:flex-row gap-2">
                                        <S.Divider className="w-full flex flex-col">
                                            <S.Label className="mb-2">Volume</S.Label>
                                            <S.Divider>
                                                <Autocomplete
                                                    id="combo-box"
                                                    options={options}
                                                    getOptionLabel={(option) => option.Title || ''}
                                                    value={options.find(option => option.Id === values.ChapterId) || null}
                                                    onChange={(_, value) => {
                                                        setFieldValue('ChapterId', value?.Id || 0);
                                                        setTouched({ ChapterId: true });
                                                    }}
                                                    disabled={IsEdit}
                                                    isOptionEqualToValue={(option, value) => option.Id === value.Id}
                                                    className="comboBox w-full"
                                                    renderInput={(params) => <TextField {...params} placeholder="Select Volume" />}
                                                    sx={{ width: '100%', background: IsEdit?'white':colors.palette.neutral['075'], height: '40px !important', alignItems: 'center', display: 'flex', borderRadius: '3px', marginBottom: '10px',transition: 'all 0.3s', border: IsEdit?`1px solid ${colors.palette.neutral['100']}`:'', '& .MuiOutlinedInput-root': { '& fieldset': { border: 'none' }, }  }}
                                                />
                                            </S.Divider>
                                        </S.Divider>
                                        <S.Divider className="w-full ">
                                                <Input
                                                    ClassName="text-zinc-900 mb-3 h-[40px]"
                                                    errors={errors}
                                                    type="number"
                                                    disabled={IsEdit}
                                                    value={String(Number(values.Coins).toFixed(2))}
                                                    label="Coins"
                                                    name="Coins"
                                                    touched={touched}
                                                    onChange={handleChange}
                                                />
                                        </S.Divider>  
                                    </S.Divider>*/}
                                    <S.Divider className="w-full flex flex-col md:flex-row gap-2">
                                        <S.Divider className="w-full flex flex-col md:w-1/2">
                                            <S.Label className="mb-2">Volume</S.Label>
                                            <S.Divider>
                                            <Autocomplete
                                                    id="combo-box"
                                                    options={options}
                                                    getOptionLabel={(option) => option.Title || 'NA'}
                                                    value={options.find(option => option.Id === values.ChapterId) || null}
                                                    onInputChange={(_, _value) => ChapterTitle} // Fetch options dynamically
                                                    onChange={(_, value) => {
                                                        setFieldValue('ChapterId', value?.Id || 0);
                                                        setTouched({ ChapterId: true });
                                                    }}
                                                    disabled={IsEdit}
                                                    isOptionEqualToValue={(option, value) => option.Id === value.Id}
                                                    className="comboBox w-full"
                                                    renderInput={(params) => <TextField {...params} placeholder="Select Volume" />}
                                                    sx={{ width: '100%', background: IsEdit ? 'white' : colors.palette.neutral['075'], height: '40px !important', alignItems: 'center', display: 'flex', borderRadius: '3px', marginBottom: '10px', transition: 'all 0.3s', border: IsEdit ? `1px solid ${colors.palette.neutral['100']}` : '', '& .MuiOutlinedInput-root': { '& fieldset': { border: 'none' }, } }}
                                                />
                                            </S.Divider>
                                        </S.Divider>
                                        <S.Divider className="w-full md:w-1/2">
                                            <Input
                                                ClassName="text-zinc-900 mb-3 h-[40px]"
                                                errors={errors}
                                                type="text"
                                                disabled={IsEdit}
                                                value={values.Term??""}
                                                label="Heading Term"
                                                name="Term"
                                                touched={touched}
                                                onChange={handleChange}
                                            />
                                        </S.Divider>
                                        {/*<S.Divider className="w-full md:w-1/2">
                                            <Input
                                                ClassName="text-zinc-900 mb-3 h-[40px]"
                                                errors={errors}
                                                type="text"
                                                disabled={IsEdit}
                                                value={String(values.Focus??'')}
                                                label="Word Focus"
                                                name="Focus"
                                                touched={touched}
                                                onChange={handleChange}
                                            />
                                        </S.Divider>*/}
                                    </S.Divider>
                                    {/*<S.Divider className="w-full flex flex-col h-full md:h-[350px] ">
                                        <S.Label className="mb-2">Definition</S.Label>
                                        <S.Divider className={`${IsEdit?'':'bg-slate-100'} md:h-[295px] `}>
                                            <TextEditor ref={quillRef} value={values.Definition} isEdit={IsEdit} onChange={(_content, _delta, _source, editor) => {
                                                setFieldValue('Definition', editor.getHTML());
                                                setTouched({ Definition: true });
                                            }}/>
                                        </S.Divider>
                                        {errors.Definition && touched.Definition ? (
                                            <div className="error-message text-red-500 text-sm">{errors.Definition}</div>
                                        ) : null}
                                    </S.Divider>*/}
                                </S.Divider>
                                {/*<S.Divider className="w-full">
                                    <Input
                                        ClassName="text-zinc-900 mb-3 h-[40px]"
                                        errors={errors}
                                        type="text"
                                        disabled={IsEdit}
                                        value={values.Illustration??""}
                                        label="Illustration"
                                        name="Illustration"
                                        touched={touched}
                                        onChange={handleChange}
                                    />
                                </S.Divider>*/}
                                <S.Divider className="w-full">
                                    <Input
                                        ClassName="text-zinc-900 mb-3 h-[40px]"
                                        errors={errors}
                                        type="text"
                                        disabled={IsEdit}
                                        value={values?.VoiceOver?? ""}
                                        label="Voice Over"
                                        name="VoiceOver"
                                        touched={touched}
                                        onChange={handleChange}
                                    />
                                </S.Divider>
                                <S.Divider className="border-t py-2 flex justify-end">
                                    <CustomButton
                                        icon={<SaveIcon className="text-primary md:text-white" />}
                                        disabled={!dirty || !isValid || isSubmitting || IsEdit}
                                        text="Save"
                                        type={ButtonType.submit}
                                        morph={true}
                                    />
                                </S.Divider>
                            </Form>
                        )}
                    </Formik>:<Skeleton/>}
                </S.Content>
            </S.Container>
        </>
    )
}
