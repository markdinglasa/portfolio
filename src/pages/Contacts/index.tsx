import { memo } from "react";
import { ButtonVariant, InputType, SFC } from "../../types";
import { cn } from "../../utils";
import { CustomButton, CustomInput, Footer } from "../../components";

export const ContactPage: SFC = ({ ClassName }) => {
    return (
        <>
            <div className={cn("w-full flex flex-col items-center justify-center px-[1rem]",ClassName)}>
                <div className="w-full md:w-10/12 flex flex-col items-center justify-center mt-[50px] h-full pt-10">
                    <h1 className="text-primary text-[45px]  font-black uppercase h-18">C o n t a c t &nbsp; M a r k</h1>
                </div>
                <div className="w-full md:w-10/12 flex flex-col items-center justify-center mt-[50px] border border-gray-100/30 rounded-lg h-full mb-[1rem]">
                    <div className="w-full text-left p-5 flex flex-col"><span className="text-slate-100 text-lg">Want to reach?</span>
                    <span className="text-sm text-[#9C9C9C]">Sending an email is the easiest way to get in touch, or you may contact through socials.</span></div>
                    <div className="p-4 w-full flex flex-col">
                        <div className="w-full flex md:flex-row flex-col gap-[1rem] mb-1">
                            <div className="w-full ">
                                <CustomInput name={"Firstname"} placeholder="First Name" type={InputType.text}/>
                            </div>
                            <div className="w-full ">
                                <CustomInput name={"Lastname"} placeholder="Last Name" type={InputType.text}/>
                            </div>
                        </div>
                        <div className="w-full  mb-3">
                            <div className="w-full ">
                                <CustomInput name={"Email"} placeholder="E-mail" type={InputType.email}/>
                            </div>
                        </div>
                        <div className="w-full  ">
                            <textarea className="resize-none w-full rounded-lg bg-[#161616] text-slate-100 p-3 border border-[#585959] h-32 outline-none" placeholder="Leave a Message"></textarea>
                        </div>
                        <div className="w-full  flex flex-row justify-end gap-[1rem] mt-3">
                           <CustomButton text="Cancel" color="primary" morph={false} variant={ButtonVariant.outlined} onClick={() => {}} />
                            <CustomButton text={"Send"}/>
                        </div>
                   </div>
                    
                </div>
                <div className="w-full flex items-center justify-center pb-[1rem] md:px-0 px-[1rem]  max-w-full">
                    <Footer/>
                </div>
            </div>
     
        </>
    )
}
export default memo(ContactPage)