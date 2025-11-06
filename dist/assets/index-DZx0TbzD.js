const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-IS4BZBkm.js","assets/mui-Des18kP0.js","assets/react-DkTtxTbk.js","assets/index-B0rtGkfR.js","assets/mdi-BLw0Sh5C.js","assets/styles-DR335GH0.js","assets/uitls-Cm9REV1f.js","assets/index-CD73DE5Z.css"])))=>i.map(i=>d[i]);
import{P as c,D as l,C as d,a as m,c as p,_ as x}from"./index-B0rtGkfR.js";import{j as e,S as i}from"./mui-Des18kP0.js";import{a as n}from"./react-DkTtxTbk.js";import{d as t}from"./styles-DR335GH0.js";const f=[{icon:c,title:"Mobile Application",description:"Building mobile applications that combine seamless functionality with an exceptional user experience."},{icon:l,title:"Responsive Web Application",description:"Crafting responsive web designs that adapt beautifully to every screen and enhance user engagement."},{icon:d,title:"Desktop Application",description:"Delivering powerful and user-friendly desktop solutions tailored for efficiency and innovation."},{icon:m,title:"UI/UX",description:"Creating user-centric designs that are seamless, impactful, and delightful to experience."}],h=t.div`
  overflow: visible;
  width: 100%;
  height: 20rem;
  border-radius: 20px;
  transition: ease-in-out 0.3s;
`,u=t.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  border-radius: 20px;
`,v=t.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    position: absolute;
    content: " ";
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(
      90deg,
      transparent,
      #e9c6a9,
      #e9c6a9,
      #e9c6a9,
      #e9c6a9,
      transparent
    );

    animation: rotation_481 15000ms infinite linear;
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }
`,g=t.div`
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #161616;
  border-radius: 20px;
  color: #9c9c9c;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  padding: 1rem;
  transition: ease-in-out 0.3s;
  &:hover {
    color: #e9c6a9 !important;
  }
`,S=t.span``,j=()=>e.jsx(e.Fragment,{children:e.jsx(h,{children:e.jsx(u,{children:e.jsx(v,{children:e.jsxs(g,{children:[e.jsxs("div",{className:"w-full flex flex-row items-center",children:[e.jsx(i,{animation:"wave",variant:"circular",width:"2.5rem",height:"2.5rem"}),e.jsx("span",{className:"ml-2 text-gray-100/70",children:e.jsx(i,{animation:"wave",variant:"circular",width:"1.5rem"})})]}),e.jsxs("div",{className:"w-full mt-5 flex flex-col",children:[e.jsx(i,{animation:"wave",variant:"circular",width:"1.5rem"}),e.jsx(i,{animation:"wave",variant:"circular",width:"1.5rem"})]})]})})})})}),w=n.lazy(()=>x(()=>import("./index-IS4BZBkm.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),s=({ClassName:a})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:p("flex justify-center items-center md:py-40 py-4 md:px-0 px-4",a),children:e.jsxs("div",{className:"w-full md:w-10/12 flex justify-center items-center flex-col ",children:[e.jsx("div",{className:"flex justify-center items-center mt-10 flex-col p-2 w-full md:w-4/6 text-center",children:e.jsx("span",{className:"text-[30px] ",children:"Connect with me to turn ideas into impactful solutions."})}),e.jsx("div",{className:"title text-2lg text-center mb-20",children:e.jsx("h1",{className:"font-bold uppercase  text-[2.5rem] md:text-[3rem] flex md:flex-row flex-col text-center break-words",children:"S e r v i c e s"})}),e.jsx("div",{className:"w-full flex flex-col lg:flex-row justify-center md:justify-start items-center md:items-start gap-4   overflow-visible py-[5rem] px-2",children:f.map((r,o)=>e.jsx(n.Fragment,{children:e.jsx(n.Suspense,{fallback:e.jsx(j,{}),children:e.jsx(w,{ClassName:" w-full shadow-lg ",Icon:e.jsx(r.icon,{}),Title:r.title,Description:r.description})})},o))})]})})}),b=n.memo(s),N=Object.freeze(Object.defineProperty({__proto__:null,ServicePage:s,default:b},Symbol.toStringTag,{value:"Module"}));export{v as B,h as C,S as P,u as a,g as b,N as i};
