import{h as e,R as c,o as n,c as d,w as u,f as p,F as m,d as g,r as f,v,E as k}from"./index-DQeH2y-C.js";const _={__name:"IButton",props:{variant:{default:"primary",type:String,validator:a=>["primary","gradient","outlined"].includes(a)},to:String,isLoading:{default:!1,type:Boolean}},setup(a){const t=a,r=e(()=>t.variant==="gradient"?"bg-gradient-to-r from-[#FFA279] to-[#F3743D]":"bg-[#FFA279]"),o=e(()=>!!t.to),s=e(()=>o.value?c:"button"),i=e(()=>o.value?t.to:void 0);return(l,y)=>(n(),d(k(s.value),{class:v(["rounded-xl py-4 px-10 text-white font-bold -tracking-wider",r.value]),to:i.value},{default:u(()=>[t.isLoading?(n(),p(m,{key:0},[g("Loading... ")],64)):f(l.$slots,"default",{key:1})]),_:3},8,["class","to"]))}};export{_};