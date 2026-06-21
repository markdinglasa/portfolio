const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-JUNOIcKZ.js","assets/mui-DIWVWDsQ.js","assets/react-C5GD-hyb.js","assets/index-BEQWLzVB.js","assets/mdi-B1FMu58Z.js","assets/styles-CRRCSI1g.js","assets/index-ByK7bT6k.css"])))=>i.map(i=>d[i]);
import{M as J,c as Q,_ as U}from"./index-BEQWLzVB.js";import{j as t,S as u}from"./mui-DIWVWDsQ.js";import{r as ee,b as te,a as _}from"./react-C5GD-hyb.js";import"./mdi-B1FMu58Z.js";import"./styles-CRRCSI1g.js";const ne=[{image:"/image/jea.jpg",name:"Jea Marielle",message:"Thank you for your dedication and patience throughout the project.",project:"Student Information Management System"},{image:"/image/joseph.jpg",name:"Joseph Kerwin",message:"I've received the email with the deliverables. Thank you so much!",project:"Library Management System"},{image:"/image/jesson.jpg",name:"Jesson",message:"Thank you! Looking forward to working with you again.",project:"Attendance Monitoring System"},{image:"/image/grant.jpg",name:"Grant",message:"Thank you very much! Great work on the project.",project:"Lingua - Sign Language App"},{image:"/image/jaylord.jpg",name:"Jaylord",message:"Thank you! Your work was crucial for my graduation.",project:"Iskalar - Scholarship Management System"},{image:"/image/jeybie.jpg",name:"Jeybie",message:"Everything works perfectly. Thank you for the excellent work!",project:"Iskalar - Scholarship Management System"},{image:"/image/portia.jpg",name:"Portia",message:"Thank you! After multiple revisions, we achieved success together.",project:"Grade Management System"},{image:"/image/doctor_lee.jpg",name:"Dr. Lee",message:"You've chosen a demanding industry, and I'm impressed with your work. Keep up the excellent work and thank you.",project:"Roots and Morphology"},{image:"/image/chad.jpg",name:"Chad",message:"Our entire team passed thanks to your work. Thank you!",project:"Connex"},{image:"/image/john_lawrence.png",name:"John Lawrence",message:"The project was completed successfully after our final revisions. Thank you for being part of our success.",project:"Himsog"}],ae=()=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"rounded-md w-11/12 md:w-[20rem] h-fit flex flex-col gap-4 bg-[#212227] p-[1rem] overflow-x-hidden justify-center items-center",children:[t.jsxs("div",{className:"w-full flex flex-row gap-4 items-center",children:[t.jsx(u,{animation:"wave",variant:"circular",width:"3.5rem",height:"3.5rem"}),t.jsxs("div",{className:"flex flex-col",children:[t.jsx(u,{animation:"wave",height:"1.5rem"}),t.jsx(u,{animation:"wave",height:"1.5rem"})]})]}),t.jsxs("div",{className:"flex flex-wrap w-full",children:[t.jsx(u,{animation:"wave",height:"1rem"}),t.jsx(u,{animation:"wave",height:"1rem"}),t.jsx(u,{animation:"wave",height:"1rem"})]})]})});var w={},W;function re(){if(W)return w;W=1;function j(r){if(typeof window>"u")return;const l=document.createElement("style");return l.setAttribute("type","text/css"),l.innerHTML=r,document.head.appendChild(l),r}Object.defineProperty(w,"__esModule",{value:!0});var e=ee();function k(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var i=k(e);j(`.rfm-marquee-container {
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
}`);const $=e.forwardRef(function({style:l={},className:O="",autoFill:c=!1,play:d=!0,pauseOnHover:b=!1,pauseOnClick:S=!1,direction:n="left",speed:g=50,delay:R=0,loop:M=0,gradient:P=!1,gradientColor:C="white",gradientWidth:p=200,onFinish:G,onCycleComplete:V,onMount:I,children:y},B){const[N,K]=e.useState(0),[v,X]=e.useState(0),[x,L]=e.useState(1),[E,Y]=e.useState(!1),H=e.useRef(null),s=B||H,f=e.useRef(null),h=e.useCallback(()=>{if(f.current&&s.current){const a=s.current.getBoundingClientRect(),T=f.current.getBoundingClientRect();let o=a.width,m=T.width;(n==="up"||n==="down")&&(o=a.height,m=T.height),L(c&&o&&m&&m<o?Math.ceil(o/m):1),K(o),X(m)}},[c,s,n]);e.useEffect(()=>{if(E&&(h(),f.current&&s.current)){const a=new ResizeObserver(()=>h());return a.observe(s.current),a.observe(f.current),()=>{a&&a.disconnect()}}},[h,s,E]),e.useEffect(()=>{h()},[h,y]),e.useEffect(()=>{Y(!0)},[]),e.useEffect(()=>{typeof I=="function"&&I()},[]);const A=e.useMemo(()=>c?v*x/g:v<N?N/g:v/g,[c,N,v,x,g]),Z=e.useMemo(()=>Object.assign(Object.assign({},l),{"--pause-on-hover":!d||b?"paused":"running","--pause-on-click":!d||b&&!S||S?"paused":"running","--width":n==="up"||n==="down"?"100vh":"100%","--transform":n==="up"?"rotate(-90deg)":n==="down"?"rotate(90deg)":"none"}),[l,d,b,S,n]),F=e.useMemo(()=>({"--gradient-color":C,"--gradient-width":typeof p=="number"?`${p}px`:p}),[C,p]),D=e.useMemo(()=>({"--play":d?"running":"paused","--direction":n==="left"?"normal":"reverse","--duration":`${A}s`,"--delay":`${R}s`,"--iteration-count":M?`${M}`:"infinite","--min-width":c?"auto":"100%"}),[d,n,A,R,M,c]),q=e.useMemo(()=>({"--transform":n==="up"?"rotate(90deg)":n==="down"?"rotate(-90deg)":"none"}),[n]),z=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((T,o)=>i.default.createElement(e.Fragment,{key:o},e.Children.map(y,m=>i.default.createElement("div",{style:q,className:"rfm-child"},m)))),[q,y]);return E?i.default.createElement("div",{ref:s,style:Z,className:"rfm-marquee-container "+O},P&&i.default.createElement("div",{style:F,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:D,onAnimationIteration:V,onAnimationEnd:G},i.default.createElement("div",{className:"rfm-initial-child-container",ref:f},e.Children.map(y,a=>i.default.createElement("div",{style:q,className:"rfm-child"},a))),z(x-1)),i.default.createElement("div",{className:"rfm-marquee",style:D},z(x))):null});return w.default=$,w}var ie=re();const se=te(ie),oe=_.lazy(()=>U(()=>import("./index-JUNOIcKZ.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),fe=_.memo(({ClassName:j})=>t.jsxs("section",{id:"testimonials",className:Q("relative flex justify-center items-center md:py-32 py-12 md:px-0 px-4 overflow-hidden",j),children:[t.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.03] select-none z-0",children:t.jsx("span",{className:"text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter text-white",children:"Trust"})}),t.jsxs("div",{className:"w-full flex flex-col items-center relative z-10",children:[t.jsxs(J,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"flex flex-col items-center text-center mb-16",children:[t.jsx("span",{className:"text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4",children:"05 // What They Say"}),t.jsx("h1",{className:"font-bold uppercase text-[2.5rem] md:text-[4rem] leading-tight mb-6",children:"Testimonials"}),t.jsx("p",{className:"text-lg md:text-xl text-[#9C9C9C] max-w-2xl leading-relaxed",children:"Stories of success, trust, and satisfaction from the people I've had the privilege to work with."})]}),t.jsx(J,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,delay:.3},className:"w-full",children:t.jsx(se,{className:"overflow-hidden flex items-center w-full",pauseOnHover:!0,speed:30,gradient:!0,gradientColor:"#161616",gradientWidth:80,children:ne.map((e,k)=>t.jsx(t.Fragment,{children:t.jsx(_.Suspense,{fallback:t.jsx(ae,{}),children:t.jsx(oe,{ClassName:"w-11/12 md:w-[22rem] mx-3",image:e.image,name:e.name,message:e.message,project:e.project})})},"testimony-"+k))})})]})]}));export{fe as default};
