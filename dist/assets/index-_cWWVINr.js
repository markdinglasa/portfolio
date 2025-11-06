const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D7_gnES-.js","assets/mui-Des18kP0.js","assets/react-DkTtxTbk.js","assets/index-B0rtGkfR.js","assets/mdi-BLw0Sh5C.js","assets/styles-DR335GH0.js","assets/uitls-Cm9REV1f.js","assets/index-CD73DE5Z.css"])))=>i.map(i=>d[i]);
import{_ as H}from"./index-B0rtGkfR.js";import{j as t,S as u}from"./mui-Des18kP0.js";import{r as Q,b as U,a as R}from"./react-DkTtxTbk.js";import"./mdi-BLw0Sh5C.js";import"./styles-DR335GH0.js";import"./uitls-Cm9REV1f.js";const ee=[{image:"/image/jea.jpg",name:"Jea Marielle",message:"Thank you for your dedication and patience throughout the project.",project:"Student Information Management System"},{image:"/image/joseph.jpg",name:"Joseph Kerwin",message:"I've received the email with the deliverables. Thank you so much!",project:"Library Management System"},{image:"/image/jesson.jpg",name:"Jesson",message:"Thank you! Looking forward to working with you again.",project:"Attendance Monitoring System"},{image:"/image/grant.jpg",name:"Grant",message:"Thank you very much! Great work on the project.",project:"Lingua - Sign Language App"},{image:"/image/jaylord.jpg",name:"Jaylord",message:"Thank you! Your work was crucial for my graduation.",project:"Iskalar - Scholarship Management System"},{image:"/image/jeybie.jpg",name:"Jeybie",message:"Everything works perfectly. Thank you for the excellent work!",project:"Iskalar - Scholarship Management System"},{image:"/image/portia.jpg",name:"Portia",message:"Thank you! After multiple revisions, we achieved success together.",project:"Grade Management System"},{image:"/image/doctor_lee.jpg",name:"Dr. Lee",message:"You've chosen a demanding industry, and I'm impressed with your work. Keep up the excellent work and thank you.",project:"Roots and Morphology"},{image:"/image/chad.jpg",name:"Chad",message:"Our entire team passed thanks to your work. Thank you!",project:"Connex"},{image:"/image/john_lawrence.png",name:"John Lawrence",message:"The project was completed successfully after our final revisions. Thank you for being part of our success.",project:"Himsog"}],te=()=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"rounded-md w-11/12 md:w-[20rem] h-fit flex flex-col gap-4 bg-[#212227] p-[1rem] overflow-x-hidden justify-center items-center",children:[t.jsxs("div",{className:"w-full flex flex-row gap-4 items-center",children:[t.jsx(u,{animation:"wave",variant:"circular",width:"3.5rem",height:"3.5rem"}),t.jsxs("div",{className:"flex flex-col",children:[t.jsx(u,{animation:"wave",height:"1.5rem"}),t.jsx(u,{animation:"wave",height:"1.5rem"})]})]}),t.jsxs("div",{className:"flex flex-wrap w-full",children:[t.jsx(u,{animation:"wave",height:"1rem"}),t.jsx(u,{animation:"wave",height:"1rem"}),t.jsx(u,{animation:"wave",height:"1rem"})]})]})});var w={},J;function ne(){if(J)return w;J=1;function j(r){if(typeof window>"u")return;const l=document.createElement("style");return l.setAttribute("type","text/css"),l.innerHTML=r,document.head.appendChild(l),r}Object.defineProperty(w,"__esModule",{value:!0});var e=Q();function b(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var i=b(e);j(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const $=e.forwardRef(function({style:l={},className:P="",autoFill:c=!1,play:f=!0,pauseOnHover:k=!1,pauseOnClick:S=!1,direction:n="left",speed:g=50,delay:T=0,loop:M=0,gradient:W=!1,gradientColor:C="white",gradientWidth:p=200,onFinish:G,onCycleComplete:O,onMount:L,children:y},B){const[E,K]=e.useState(0),[v,X]=e.useState(0),[x,A]=e.useState(1),[N,Y]=e.useState(!1),F=e.useRef(null),s=B||F,d=e.useRef(null),h=e.useCallback(()=>{if(d.current&&s.current){const a=s.current.getBoundingClientRect(),_=d.current.getBoundingClientRect();let o=a.width,m=_.width;(n==="up"||n==="down")&&(o=a.height,m=_.height),A(c&&o&&m&&m<o?Math.ceil(o/m):1),K(o),X(m)}},[c,s,n]);e.useEffect(()=>{if(N&&(h(),d.current&&s.current)){const a=new ResizeObserver(()=>h());return a.observe(s.current),a.observe(d.current),()=>{a&&a.disconnect()}}},[h,s,N]),e.useEffect(()=>{h()},[h,y]),e.useEffect(()=>{Y(!0)},[]),e.useEffect(()=>{typeof L=="function"&&L()},[]);const I=e.useMemo(()=>c?v*x/g:v<E?E/g:v/g,[c,E,v,x,g]),V=e.useMemo(()=>Object.assign(Object.assign({},l),{"--pause-on-hover":!f||k?"paused":"running","--pause-on-click":!f||k&&!S||S?"paused":"running","--width":n==="up"||n==="down"?"100vh":"100%","--transform":n==="up"?"rotate(-90deg)":n==="down"?"rotate(90deg)":"none"}),[l,f,k,S,n]),Z=e.useMemo(()=>({"--gradient-color":C,"--gradient-width":typeof p=="number"?`${p}px`:p}),[C,p]),D=e.useMemo(()=>({"--play":f?"running":"paused","--direction":n==="left"?"normal":"reverse","--duration":`${I}s`,"--delay":`${T}s`,"--iteration-count":M?`${M}`:"infinite","--min-width":c?"auto":"100%"}),[f,n,I,T,M,c]),q=e.useMemo(()=>({"--transform":n==="up"?"rotate(90deg)":n==="down"?"rotate(-90deg)":"none"}),[n]),z=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((_,o)=>i.default.createElement(e.Fragment,{key:o},e.Children.map(y,m=>i.default.createElement("div",{style:q,className:"rfm-child"},m)))),[q,y]);return N?i.default.createElement("div",{ref:s,style:V,className:"rfm-marquee-container "+P},W&&i.default.createElement("div",{style:Z,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:D,onAnimationIteration:O,onAnimationEnd:G},i.default.createElement("div",{className:"rfm-initial-child-container",ref:d},e.Children.map(y,a=>i.default.createElement("div",{style:q,className:"rfm-child"},a))),z(x-1)),i.default.createElement("div",{className:"rfm-marquee",style:D},z(x))):null});return w.default=$,w}var ae=ne();const re=U(ae),ie=R.lazy(()=>H(()=>import("./index-D7_gnES-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),fe=R.memo(({ClassName:j})=>t.jsx(t.Fragment,{children:t.jsx("div",{className:j,children:t.jsxs("div",{className:"py-5 flex flex-col justify-center items-center",children:[t.jsx("div",{className:"flex justify-center items-center flex-col p-2 w-full md:w-4/6 text-center",children:t.jsx("span",{className:"text-[30px]",children:"Stories of Success, Trust, and Satisfaction"})}),t.jsx("div",{className:"title text-2lg text-center mb-20",children:t.jsx("h1",{className:"font-bold uppercase text-zinc-400  text-[2.5rem] md:text-[3rem] flex md:flex-row flex-col text-center break-words",children:"T e s t i m o n i a l s"})}),t.jsx(re,{className:"overflow-hidden flex items-center w-full justify-between",children:ee.map((e,b)=>t.jsx(t.Fragment,{children:t.jsx(R.Suspense,{fallback:t.jsx(te,{}),children:t.jsx(ie,{ClassName:"w-11/12 md:w-[20rem] mr-4",image:e.image,name:e.name,message:e.message,project:e.project})})},b))})]})})}));export{fe as default};
