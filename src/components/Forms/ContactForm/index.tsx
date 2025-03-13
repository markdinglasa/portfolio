import * as S from '../../../styles/Styles'
import { ButtonType, ButtonVariant, Contact, FormProps,InputType,SFC, ToastType } from '../../../types';
import {  cn, displayToast } from '../../../utils';
import { Form, Formik } from "formik";
import { CustomInput } from '../../Inputs';
import { CustomButton } from '../../Buttons';
import { memo, useMemo } from 'react';
import * as yup from "yup";
import axios from 'axios'
// import { BASE_URL } from '../../../shared';

export const ContactUsForm: SFC<FormProps> = ({ ClassName }) => {
    const InitialValues: Contact = {
      Firstname: "",
      Lastname: "",
      Email: "",
      Message: "",
    };
  
    const handleSubmit = async (values: Contact) => {
      try {
        //const response = await axios.
         const name = `${values.Firstname} ${values.Lastname}`
        // send an email here
        const response = await axios.post(`https://portfolio-1-u5dn.onrender.com/api/v1/send-email/contact`, {To:values.Email, Subject:`New Inquiry: ${name}`, Message:values.Message})
        if (response.data.data)  displayToast(response.data?.message, ToastType.success);
      } catch (error: any) {
        displayToast(error.message, ToastType.error);
      }
    };

    const validation = useMemo(()=>{
      return yup.object().shape({
        Email: yup.string().email().required("Email is required"),
        Firstname: yup
          .string()
          .matches(
            /^[A-Za-z\s.]+$/,
            "First name should not contain number or special characters",
          )
          .required("First Name is required"),
        Lastname: yup
          .string()
          .matches(
            /^[A-Za-z\s.]+$/,
            "Last name should not contain number or special characters",
          )
          .required("Last Name is required"),
        Message: yup.string().required(),
          })
    },[])

    return (
      <>
        <S.Container className={cn("w-full p-t border border-gray-100/30 p-[1rem] rounded-lg", ClassName)}>
          <S.Content className="content">
           
              <div className="w-full text-left flex flex-col mb-2">
                <span className="text-slate-100 text-lg">Want to reach?</span>
                <span className="text-sm text-[#9C9C9C]">Sending an email is the easiest way to get in touch, or you may contact through socials.</span>
              </div>
        
            <S.Divider>
              <Formik
                initialValues={InitialValues}
                onSubmit={handleSubmit}
                validationSchema={validation}
              >
                {({
                  errors,
                  touched,
                  isSubmitting,
                  handleChange,
                  resetForm,
                  handleBlur,
                }) => (
                  <Form>
                    <S.Divider className="w-full flex md:flex-row flex-col md:gap-[1rem] ">
                      <S.Divider className="w-full">
                        <CustomInput
                          errors={errors}
                          type={InputType.text}
                          placeholder="First Name"
                          name="Firstname"
                          touched={touched}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </S.Divider>
                      <S.Divider className="w-full">
                        <CustomInput
                          errors={errors}
                          type={InputType.text}
                          placeholder="Last Name"
                          name="Lastname"
                          touched={touched}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </S.Divider>
                    </S.Divider>
                    <S.Divider className="w-full ">
                      <CustomInput
                        errors={errors}
                        type={InputType.text}
                        placeholder="Email"
                        name="Email"
                        touched={touched}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </S.Divider>
                    <S.Divider className="w-full py-2">
                      <textarea
                        className="resize-none w-full placeholder-[#636568] font-medium rounded-lg bg-[#161616] text-[#e2e9ef] p-3 border border-[#585959] h-32 outline-none"
                        placeholder="Leave a Message"
                        name="Message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </S.Divider>
  
                    <S.Divider className="w-full flex justify-end pt-1 items-center gap-4 ">
                      <CustomButton
                        text="Cancel"
                        onClick={() => resetForm()}
                       
                        type={ButtonType.button}
                        variant={ButtonVariant.outlined}
                        morph={false}
                      />
                      <CustomButton
                        disabled={isSubmitting}
                        text="Send"
                        type={ButtonType.submit}
                        variant={ButtonVariant.contained}
                        morph={false}
                      />
                    </S.Divider>
                  </Form>
                )}
              </Formik>
            </S.Divider>
          </S.Content>
        </S.Container>
      </>
    );
  };
  export default memo(ContactUsForm);
  