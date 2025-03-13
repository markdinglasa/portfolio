import { memo } from "react";
import { SFC } from "../../types";
import { cn } from "../../utils";
import { Footer } from "../../components";
import ContactForm from "../../components/Forms/ContactForm";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

export const ContactPage: SFC = ({ ClassName }) => {
    return (
        <>
            <div className={cn("w-full flex flex-col items-center justify-center px-[1rem]",ClassName)}>
                <div className="w-full md:w-10/12 flex flex-col items-center justify-center mt-[50px] h-full pt-10">
                    <h1 className="text-primary text-[45px]  font-black uppercase h-18 text-center">C o n t a c t &nbsp; M a r k</h1>
                </div>
                
                <div className="w-full md:w-10/12 flex md:flex-row flex-col items-center justify-between gap-[1rem] mt-[50px] h-full mb-[1rem]">
                    <div className="w-full md:w-8/12">
                    <ContactForm Title={""}/>
                    </div>
                    <div className="w-full md:w-4/12 border border-gray-100/30 p-[1rem] rounded-lg h-full ">
                        <div className="flex w-full flex-col mb-[1rem]">
                            <span className="text-slate-100 text-lg">
                            Hey there! Hope you're having an awesome day!
                            </span>
                            <span className="text-sm">
                            Want to get in touch? You can reach out using the details below. Let’s connect!
                            </span>
                        </div>
                        <div className="flex w-full flex-col">
                            <div className="text-sm text-slate-100/80">
                                <MailIcon fontSize="small"/>
                                <span className="ml-2"> ryanmark.dinglasa@gmail.com </span>
                            </div>
                            <div className="text-sm text-slate-100/80">
                                <PhoneIcon fontSize="small"/>
                                <span className="ml-2"> +639 206-091-569 </span>
                            </div>
                        </div>                      
                    </div>
                </div>
                <div className="w-full flex items-center justify-center pb-[1rem]  max-w-full">
                    <Footer/>
                </div>
            </div>
     
        </>
    )
}
export default memo(ContactPage)