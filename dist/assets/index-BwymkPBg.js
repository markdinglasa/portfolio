const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-tx5TURog.js","assets/mui-DIWVWDsQ.js","assets/react-C5GD-hyb.js","assets/index-BEQWLzVB.js","assets/mdi-B1FMu58Z.js","assets/styles-CRRCSI1g.js","assets/index-ByK7bT6k.css"])))=>i.map(i=>d[i]);
import{P as l,D as d,C as m,a as p,M as a,c as x,_ as h}from"./index-BEQWLzVB.js";import{j as e,S as t}from"./mui-DIWVWDsQ.js";import{a as s}from"./react-C5GD-hyb.js";import{y as i}from"./styles-CRRCSI1g.js";const f=[{icon:l,title:"Mobile Solutions",description:"Engineered to deliver high-performance mobile experiences that prioritize user engagement and intuitive interaction."},{icon:d,title:"Scalable Web Systems",description:"Architecting responsive, high-availability web applications that grow with your business and ensure cross-platform consistency."},{icon:m,title:"Enterprise Software",description:"Developing robust desktop applications designed for maximum efficiency, security, and seamless integration into professional workflows."},{icon:p,title:"Strategic UI/UX Design",description:"Crafting data-driven, user-centric interfaces that bridge the gap between complex functionality and effortless user journeys."}],u=i.div`
  overflow: visible;
  width: 100%;
  height: 20rem;
  border-radius: 20px;
  transition: ease-in-out 0.3s;
`,g=i.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  border-radius: 20px;
`,v=i.div`
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
`,w=i.div`
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
`,N=i.span``,y=()=>e.jsx(e.Fragment,{children:e.jsx(u,{children:e.jsx(g,{children:e.jsx(v,{children:e.jsxs(w,{children:[e.jsxs("div",{className:"w-full flex flex-row items-center",children:[e.jsx(t,{animation:"wave",variant:"circular",width:"2.5rem",height:"2.5rem"}),e.jsx("span",{className:"ml-2 text-gray-100/70",children:e.jsx(t,{animation:"wave",variant:"circular",width:"1.5rem"})})]}),e.jsxs("div",{className:"w-full mt-5 flex flex-col",children:[e.jsx(t,{animation:"wave",variant:"circular",width:"1.5rem"}),e.jsx(t,{animation:"wave",variant:"circular",width:"1.5rem"})]})]})})})})}),b=s.lazy(()=>h(()=>import("./index-tx5TURog.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),o=({ClassName:c})=>e.jsxs("section",{id:"services",className:x("relative flex justify-center items-center md:py-32 py-12 md:px-0 px-4 overflow-hidden",c),children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.03] select-none z-0",children:e.jsx("span",{className:"text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter text-white",children:"Services"})}),e.jsxs("div",{className:"w-full md:w-10/12 flex flex-col items-center relative z-10",children:[e.jsxs(a,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"flex flex-col items-center text-center mb-16",children:[e.jsx("span",{className:"text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4",children:"02 // My Expertise"}),e.jsx("h1",{className:"font-bold overflow-visible uppercase text-[2.5rem] md:text-[4rem] leading-tight mb-6",children:"Services"}),e.jsx("p",{className:"text-lg md:text-xl text-[#9C9C9C] max-w-2xl leading-relaxed",children:"Transforming complex challenges into seamless digital experiences. I provide goal-oriented solutions focused on performance, scalability, and user success."})]}),e.jsx("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10",children:f.map((r,n)=>e.jsx(a,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:n*.1},children:e.jsx(s.Suspense,{fallback:e.jsx(y,{}),children:e.jsx(b,{ClassName:"h-full shadow-2xl hover:shadow-primary/10 transition-all duration-500",Icon:e.jsx(r.icon,{sx:{color:"#e9c6a9",fontSize:"2.5rem"}}),Title:r.title,Description:r.description})})},"service-"+n))})]})]}),j=s.memo(o),I=Object.freeze(Object.defineProperty({__proto__:null,ServicePage:o,default:j},Symbol.toStringTag,{value:"Module"}));export{v as B,u as C,N as P,g as a,w as b,I as i};
