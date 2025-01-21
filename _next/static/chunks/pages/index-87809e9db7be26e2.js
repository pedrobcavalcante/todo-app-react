(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7949)}])},7949:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>E});var s=a(4848),l=a(6540),o=a(8657),r=a.n(o);let n=(e,t)=>{let a="object"==typeof t?JSON.stringify(t):t;localStorage.setItem(e,a)},c=e=>{let t=localStorage.getItem(e);try{return t?JSON.parse(t):null}catch(e){return t}},i=()=>{let[e,t]=(0,l.useState)("light");return(0,l.useEffect)(()=>{let e=c("theme")||"light";t(e),document.body.className=e},[]),{theme:e,toggleTheme:()=>{let a="light"===e?"dark":"light";t(a),document.body.className=a,n("theme",a)}}};var d=a(7945),_=a.n(d);let m=()=>{let{theme:e,toggleTheme:t}=i();return(0,s.jsx)("button",{onClick:t,className:_().button,"aria-label":"Toggle Theme",children:"dark"===e?(0,s.jsx)("img",{src:"/icons/icon-sun.svg",alt:"Light Theme",className:_().icon}):(0,s.jsx)("img",{src:"/icons/icon-moon.svg",alt:"Dark Theme",className:_().icon})})},u=e=>{let{onSearch:t,onClearSearch:a}=e,[o,n]=(0,l.useState)(""),[c,i]=(0,l.useState)(!1);return(0,s.jsxs)("header",{className:r().header,children:[(0,s.jsx)("h1",{className:r().title,children:"TODO"}),(0,s.jsxs)("div",{className:r().searchContainer,children:[(0,s.jsx)("input",{type:"text",placeholder:"Search tasks...",value:o,className:r().searchInput,onChange:e=>n(e.target.value)}),(0,s.jsx)("button",{className:r().searchButton,onClick:()=>{o.trim()&&(t(o.trim()),i(!0))},disabled:!o.trim(),children:"Search"}),(0,s.jsx)("button",{className:r().clearButton,onClick:()=>{n(""),i(!1),a()},disabled:!c,children:"Clear Search"}),(0,s.jsx)(m,{})]})]})};var h=a(4381),p=a.n(h);let x=e=>{let{placeholder:t,onChange:a,value:l,onEnter:o}=e;return(0,s.jsx)("input",{type:"text",className:p().input,placeholder:t,onChange:a,value:l,onKeyPress:e=>{"Enter"===e.key&&o&&o()}})};var k=a(8989),g=a.n(k);let T=e=>{let{remainingTasks:t,filter:a,setFilter:l,clearCompleted:o}=e;return(0,s.jsxs)("footer",{className:g().footer,children:[(0,s.jsxs)("span",{children:[t," items left"]}),(0,s.jsxs)("div",{className:g().filters,children:[(0,s.jsx)("button",{onClick:()=>l("all"),className:"all"===a?g().activeFilter:"",children:"All"}),(0,s.jsx)("button",{onClick:()=>l("active"),className:"active"===a?g().activeFilter:"",children:"Active"}),(0,s.jsx)("button",{onClick:()=>l("completed"),className:"completed"===a?g().activeFilter:"",children:"Completed"})]}),(0,s.jsx)("button",{onClick:o,className:g().clearCompleted,children:"Clear Completed"})]})};var j=a(2601),C=a.n(j),v=a(69),N=a.n(v);let b=e=>{let{id:t,text:a,completed:o,onToggle:r,onEdit:n,onDelete:c}=e,[i,d]=(0,l.useState)(!1),[_,m]=(0,l.useState)(a),u=()=>{d(!1),_.trim()!==a&&n(t,_.trim())};return(0,s.jsxs)("li",{className:"".concat(N().task," ").concat(o?N().completed:""),children:[(0,s.jsx)("button",{className:"".concat(N().checkButton," ").concat(o?N().checked:""),onClick:()=>r(t),"aria-label":o?"Mark as incomplete":"Mark as complete",children:o&&(0,s.jsx)("img",{src:"/icons/icon-check.svg",alt:"Checked"})}),i?(0,s.jsx)("input",{type:"text",value:_,onChange:e=>m(e.target.value),onBlur:u,onKeyDown:e=>"Enter"===e.key&&u(),autoFocus:!0,className:N().editInput}):(0,s.jsx)("span",{onClick:()=>d(!0),className:N().text,children:a}),(0,s.jsx)("button",{className:N().deleteButton,onClick:()=>c(t),"aria-label":"Delete task",children:(0,s.jsx)("img",{src:"/icons/icon-cross.svg",alt:"Delete"})})]})};var f=a(4591),B=a.n(f);let L=e=>{let{tasks:t,onToggle:a,onEdit:l,onDelete:o}=e;return(0,s.jsx)("ul",{className:B().taskList,children:t.map(e=>(0,s.jsx)(b,{id:e.id,text:e.text,completed:e.completed,onToggle:a,onEdit:l,onDelete:o},e.id))})},S=()=>{let[e,t]=(0,l.useState)([]),[a,s]=(0,l.useState)("all"),[o,r]=(0,l.useState)("");return{tasks:e.filter(e=>o?e.text.toLowerCase().includes(o.toLowerCase()):"active"===a?!e.completed:"completed"!==a||e.completed),addTask:a=>{if(""===a.trim())return;let s={id:e.length+1,text:a.trim(),completed:!1};t(e=>[...e,s])},editTask:(e,a)=>{t(t=>t.map(t=>t.id===e?{...t,text:a}:t))},toggleTask:e=>{t(t=>t.map(t=>t.id===e?{...t,completed:!t.completed}:t))},clearCompleted:()=>{t(e=>e.filter(e=>!e.completed))},setFilter:s,remainingTasks:e.filter(e=>!e.completed).length,filter:a,searchTasks:e=>{r(e)},clearSearch:()=>{r("")},deleteTask:e=>{t(t=>t.filter(t=>t.id!==e))}}},I=()=>{let{tasks:e,addTask:t,editTask:a,toggleTask:o,clearCompleted:r,setFilter:n,remainingTasks:c,filter:i,searchTasks:d,clearSearch:_,deleteTask:m}=S(),[h,p]=(0,l.useState)("");return(0,s.jsxs)("main",{className:C().todoPage,children:[(0,s.jsx)(u,{onSearch:e=>{d(e)},onClearSearch:_}),(0,s.jsx)("div",{className:C().inputContainer,children:(0,s.jsx)(x,{placeholder:"Create a new todo...",value:h,onChange:e=>p(e.target.value),onEnter:()=>{t(h),p("")}})}),(0,s.jsx)(L,{tasks:e,onToggle:o,onEdit:a,onDelete:m}),(0,s.jsx)(T,{remainingTasks:c,setFilter:n,clearCompleted:r,filter:i})]})},y=()=>(0,s.jsx)(I,{}),E=()=>(0,s.jsx)(y,{})},2601:e=>{e.exports={todoPage:"Todo_todoPage__ns6c_",header:"Todo_header__OMYcj",title:"Todo_title__mAYz_",themeToggleButton:"Todo_themeToggleButton__POvZs",inputContainer:"Todo_inputContainer___NOQf",input:"Todo_input__PYIVQ",taskList:"Todo_taskList__s5z5W",task:"Todo_task__suvem",completed:"Todo_completed__dbZ0_",filters:"Todo_filters__7upZq",activeFilter:"Todo_activeFilter__71EwN"}},8989:e=>{e.exports={footer:"ListFooter_footer__R80HQ",filters:"ListFooter_filters__tqmv5",activeFilter:"ListFooter_activeFilter__3k9PT",clearCompleted:"ListFooter_clearCompleted__gD227"}},8657:e=>{e.exports={header:"ListHeader_header__T9kJh",title:"ListHeader_title__71MJm",searchContainer:"ListHeader_searchContainer__AUzQq",searchInput:"ListHeader_searchInput___aH_w",searchButton:"ListHeader_searchButton__BW7VP",clearButton:"ListHeader_clearButton__WKTKe"}},4381:e=>{e.exports={input:"Input_input__BmygY"}},7945:e=>{e.exports={button:"ThemeToggle_button__ru1qJ",icon:"ThemeToggle_icon__0YUjH"}},69:e=>{e.exports={task:"TodoItem_task__rvgEz",completed:"TodoItem_completed__8b7uX",text:"TodoItem_text__bCdyX",checkButton:"TodoItem_checkButton__o2dzi",checked:"TodoItem_checked__VUkDu",editInput:"TodoItem_editInput__lHEBB",deleteButton:"TodoItem_deleteButton__VMWtx"}},4591:e=>{e.exports={taskList:"TodoList_taskList__dCW_1"}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(2022)),_N_E=e.O()}]);