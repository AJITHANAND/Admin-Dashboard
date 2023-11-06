import{j as s}from"./react-95be5020.js";import{c as o}from"./react-dom-b3caf6c3.js";import{u as h,a as t,P as m}from"./react-redux-7c432239.js";import"./hoist-non-react-statics-23d96a9a.js";import{C as x}from"./react-google-charts-2c583c28.js";import{c as j}from"./@reduxjs-89b45288.js";import"./scheduler-765c72db.js";import"./use-sync-external-store-3759ba72.js";import"./react-is-e8e5dbb3.js";import"./immer-9093c292.js";import"./redux-cf6e261f.js";import"./@babel-209e909a.js";import"./redux-thunk-ef899f4c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function c(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(i){if(i.ep)return;i.ep=!0;const a=c(i);fetch(i.href,a)}})();function d(){return{type:"TOGGLE_SIDEBAR"}}function u(){const e=h(l=>l.sidebar.isOpen),r=t(),c=()=>{r(d())};return s.jsxs("aside",{className:`${e?"open":""}`,children:[s.jsxs("div",{className:"toggle",children:[s.jsxs("div",{className:"logo",children:[s.jsx("img",{src:"images/dashboard.png"}),s.jsx("h2",{className:"primary",children:"Admin"})]}),s.jsx("div",{className:"close",id:"close-btn",children:s.jsx("span",{className:"material-symbols-outlined",onClick:c,children:"close"})})]}),s.jsxs("div",{className:"sidebar",children:[s.jsxs("a",{href:"#",className:"active",children:[s.jsx("span",{className:"material-symbols-outlined",children:"dashboard"}),s.jsx("h3",{children:"Dashboard"})]}),s.jsxs("a",{href:"#",children:[s.jsx("span",{className:"material-symbols-outlined",children:"person_outline"}),s.jsx("h3",{children:"User"})]}),s.jsxs("a",{href:"#",children:[s.jsx("span",{className:"material-symbols-outlined",children:"receipt_long"}),s.jsx("h3",{children:"History"})]}),s.jsxs("a",{href:"#",children:[s.jsx("span",{className:"material-symbols-outlined",children:"insights"}),s.jsx("h3",{children:"Analytics"})]}),s.jsxs("a",{href:"#",children:[s.jsx("span",{className:"material-symbols-outlined",children:"mail_outline"}),s.jsx("h3",{children:"Tickets"}),s.jsx("span",{className:"message-count",children:"10"})]}),s.jsxs("a",{href:"#",children:[s.jsx("span",{className:"material-symbols-outlined",children:"inventory"}),s.jsx("h3",{children:"Sale list"})]}),s.jsxs("a",{href:"#",children:[s.jsx("span",{className:"material-symbols-outlined",children:"report"}),s.jsx("h3",{children:"Reports"})]}),s.jsxs("a",{href:"#",children:[s.jsx("span",{className:"material-symbols-outlined",children:"settings"}),s.jsx("h3",{children:"Setting"})]}),s.jsxs("a",{href:"#",children:[s.jsx("span",{className:"material-symbols-outlined",children:"logout"}),s.jsx("h3",{children:"Logout"})]})]})]})}function p(){const e=t(),r=()=>{e(d())},c=()=>{const l=document.querySelector(".dark-mode");document.body.classList.toggle("dark-mode-variables"),l.querySelector("span:nth-child(1)").classList.toggle("active"),l.querySelector("span:nth-child(2)").classList.toggle("active")};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"top-navBar",children:[s.jsx("h1",{children:"Dashboard"}),s.jsxs("div",{className:"nav",children:[s.jsx("button",{id:"menu-btn",onClick:r,children:s.jsx("span",{className:"material-symbols-outlined",children:"menu"})}),s.jsxs("div",{className:"dark-mode",onClick:c,children:[s.jsx("span",{className:"material-symbols-outlined active",children:"light_mode"}),s.jsx("span",{className:"material-symbols-outlined",children:"dark_mode"})]}),s.jsxs("div",{className:"profile",children:[s.jsxs("div",{className:"info",children:[s.jsxs("p",{children:["Hey, ",s.jsx("b",{children:"Ajith"})]}),s.jsx("small",{className:"text-muted",children:"Admin"})]}),s.jsx("div",{className:"profile-photo",children:s.jsx("img",{src:"https://avatars.githubusercontent.com/u/34955311",alt:"profile image"})})]})]})]})})}const N=[["Source","Order"],["Referral",600],["Organic",300],["Direct",500],["Youtube",200],["Instagram",200],["Other",68]],g=[{productName:"JavaScript Tutorial",productNumber:"85743",paymentStatus:"Due",status:"Pending"},{productName:"CSS Full Course",productNumber:"97245",paymentStatus:"Refunded",status:"Declined"},{productName:"Flex-Box Tutorial",productNumber:"36452",paymentStatus:"Paid",status:"Active"}],v={legend:"none",pieSliceText:"label",backgroundColor:"transparent",chartArea:{width:"95%",height:"90%"},is3D:!0};function f(){return s.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"0",backgroundColor:"transparent"},children:s.jsx(x,{chartType:"PieChart",backgroundColor:"transparent",data:N,options:v,width:"100%",height:"20rem"})})}function y(){return s.jsx(s.Fragment,{children:s.jsxs("main",{children:[s.jsx(p,{}),s.jsxs("div",{className:"main-content",children:[s.jsxs("div",{className:"center-contents",children:[s.jsxs("div",{className:"dashboard",children:[s.jsx("div",{className:"sales",children:s.jsxs("div",{className:"status",children:[s.jsxs("div",{className:"info",children:[s.jsx("h3",{children:"Total Sales"}),s.jsx("h1",{children:"$79,500"})]}),s.jsxs("div",{className:"progress",children:[s.jsx("svg",{children:s.jsx("circle",{cx:38,cy:38,r:36})}),s.jsx("div",{className:"percentage",children:s.jsx("p",{children:"+75%"})})]})]})}),s.jsx("div",{className:"visits",children:s.jsxs("div",{className:"status",children:[s.jsxs("div",{className:"info",children:[s.jsx("h3",{children:"Site Visits"}),s.jsx("h1",{children:"15,000"})]}),s.jsxs("div",{className:"progress",children:[s.jsx("svg",{children:s.jsx("circle",{cx:38,cy:38,r:36})}),s.jsx("div",{className:"percentage",children:s.jsx("p",{children:"-50%"})})]})]})}),s.jsx("div",{className:"searches",children:s.jsxs("div",{className:"status",children:[s.jsxs("div",{className:"info",children:[s.jsx("h3",{children:"Searches"}),s.jsx("h1",{children:"48,578"})]}),s.jsxs("div",{className:"progress",children:[s.jsx("svg",{children:s.jsx("circle",{cx:38,cy:38,r:36})}),s.jsx("div",{className:"percentage",children:s.jsx("p",{children:"+50%"})})]})]})}),s.jsx("div",{className:"leads",children:s.jsxs("div",{className:"status",children:[s.jsxs("div",{className:"info",children:[s.jsx("h3",{children:"Leads"}),s.jsx("h1",{children:"10,154"})]}),s.jsxs("div",{className:"progress",children:[s.jsx("svg",{children:s.jsx("circle",{cx:38,cy:38,r:36})}),s.jsx("div",{className:"percentage",children:s.jsx("p",{children:"+50%"})})]})]})})]}),s.jsxs("div",{className:"new-users",children:[s.jsx("h2",{children:"New Users"}),s.jsxs("div",{className:"user-list",children:[s.jsxs("div",{className:"user",children:[s.jsx("img",{src:"images/profile-2.jpg",alt:""}),s.jsx("h2",{children:"John"}),s.jsx("p",{children:"20 Min Ago"})]}),s.jsxs("div",{className:"user",children:[s.jsx("img",{src:"images/profile-3.jpg",alt:""}),s.jsx("h2",{children:"Joe"}),s.jsx("p",{children:"1 Day Ago"})]}),s.jsxs("div",{className:"user",children:[s.jsx("img",{src:"images/profile-4.jpg",alt:""}),s.jsx("h2",{children:"Jisoo"}),s.jsx("p",{children:"5 Hours Ago"})]}),s.jsxs("div",{className:"user",children:[s.jsx("img",{src:"images/plus.png",alt:""}),s.jsx("h2",{children:"More"}),s.jsx("p",{children:"New Users"})]})]})]}),s.jsxs("div",{className:"recent-orders",children:[s.jsx("h2",{children:"Recent Orders"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Product Name"}),s.jsx("th",{children:"Code Number"}),s.jsx("th",{children:"Payment"}),s.jsx("th",{children:"Status"}),s.jsx("th",{})]})}),s.jsx("tbody",{children:g.map((e,r)=>s.jsxs("tr",{children:[s.jsx("td",{children:e.productName}),s.jsx("td",{children:e.productNumber}),s.jsx("td",{children:e.paymentStatus}),s.jsx("td",{className:`${e.status==="Declined"?"danger":e.status==="Pending"?"warning":"primary"}`,children:e.status}),s.jsx("td",{children:s.jsx("a",{href:"#",children:"View"})})]},r))})]}),s.jsx("a",{href:"#",children:"Show All"})]})]}),s.jsxs("div",{className:"right-section",children:[s.jsxs("div",{className:"charts",children:[s.jsx("h3",{children:"Visit by Traffic Types"}),s.jsx(f,{})]}),s.jsxs("div",{className:"reminders",children:[s.jsxs("div",{className:"header",children:[s.jsx("h2",{children:"Reminders"}),s.jsx("span",{className:"material-symbols-outlined",children:"notifications_none"})]}),s.jsxs("div",{className:"notification",children:[s.jsx("div",{className:"icon",children:s.jsx("span",{className:"material-symbols-outlined",children:"volume_up"})}),s.jsxs("div",{className:"content",children:[s.jsxs("div",{className:"info",children:[s.jsx("h3",{children:"Workshop"}),s.jsx("small",{className:"text-muted",children:"10:30 AM - 12:45 PM"})]}),s.jsx("span",{className:"material-symbols-outlined",children:"more_vert"})]})]}),s.jsxs("div",{className:"notification deactivate",children:[s.jsx("div",{className:"icon",children:s.jsx("span",{className:"material-symbols-outlined",children:"edit"})}),s.jsxs("div",{className:"content",children:[s.jsxs("div",{className:"info",children:[s.jsx("h3",{children:"Workshop"}),s.jsx("small",{className:"text-muted",children:"10:30 AM - 12:45 PM"})]}),s.jsx("span",{className:"material-symbols-outlined",children:"more_vert"})]})]}),s.jsx("div",{className:"notification add-reminder",children:s.jsxs("div",{children:[s.jsx("span",{className:"material-symbols-outlined",children:"add"}),s.jsx("h3",{children:"Add Reminder"})]})})]})]})]})]})})}function b(){return s.jsxs(s.Fragment,{children:[s.jsx(u,{}),s.jsx(y,{})]})}function S(){return s.jsx(s.Fragment,{children:s.jsx("div",{className:"container",children:s.jsx(b,{})})})}const A={isOpen:!1};function O(e=A,r){switch(r.type){case"TOGGLE_SIDEBAR":return{...e,isOpen:!e.isOpen};default:return e}}const P=j({reducer:{sidebar:O}});o.createRoot(document.getElementById("root")).render(s.jsx(m,{store:P,children:s.jsx(S,{})}));
