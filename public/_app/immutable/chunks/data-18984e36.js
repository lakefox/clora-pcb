import{S as O,i as h,s as m,e as f,c as u,a as P,d as p,b as o,g as I,E as _,t as d,h as G,J as b,j as y,U as v,V as D,F as L,l as g,G as N,H as R,I as w,q as S,o as E,C,w as V,x as A,y as K,z as B,A as k,B as q,W as H}from"./index-c6853e87.js";function z(i){let e,a;return{c(){e=f("div"),a=d(i[0]),this.h()},l(l){e=u(l,"DIV",{class:!0,style:!0});var t=P(e);a=G(t,i[0]),t.forEach(p),this.h()},h(){o(e,"class","h4 svelte-vqoc5m"),o(e,"style",i[2])},m(l,t){I(l,e,t),b(e,a)},p(l,t){t&1&&y(a,l[0])},d(l){l&&p(e)}}}function T(i){let e,a;return{c(){e=f("div"),a=d(i[0]),this.h()},l(l){e=u(l,"DIV",{class:!0,style:!0});var t=P(e);a=G(t,i[0]),t.forEach(p),this.h()},h(){o(e,"class","h3 svelte-vqoc5m"),o(e,"style",i[2])},m(l,t){I(l,e,t),b(e,a)},p(l,t){t&1&&y(a,l[0])},d(l){l&&p(e)}}}function U(i){let e,a;return{c(){e=f("div"),a=d(i[0]),this.h()},l(l){e=u(l,"DIV",{class:!0,style:!0});var t=P(e);a=G(t,i[0]),t.forEach(p),this.h()},h(){o(e,"class","h2 svelte-vqoc5m"),o(e,"style",i[2])},m(l,t){I(l,e,t),b(e,a)},p(l,t){t&1&&y(a,l[0])},d(l){l&&p(e)}}}function F(i){let e,a;return{c(){e=f("div"),a=d(i[0]),this.h()},l(l){e=u(l,"DIV",{class:!0,style:!0});var t=P(e);a=G(t,i[0]),t.forEach(p),this.h()},h(){o(e,"class","h1 svelte-vqoc5m"),o(e,"style",i[2])},m(l,t){I(l,e,t),b(e,a)},p(l,t){t&1&&y(a,l[0])},d(l){l&&p(e)}}}function W(i){let e;function a(n,r){if(n[1]=="large")return F;if(n[1]=="medium")return U;if(n[1]=="small")return T;if(n[1]=="xsmall")return z}let l=a(i),t=l&&l(i);return{c(){e=f("main"),t&&t.c(),this.h()},l(n){e=u(n,"MAIN",{class:!0});var r=P(e);t&&t.l(r),r.forEach(p),this.h()},h(){o(e,"class","svelte-vqoc5m")},m(n,r){I(n,e,r),t&&t.m(e,null)},p(n,[r]){l===(l=a(n))&&t?t.p(n,r):(t&&t.d(1),t=l&&l(n),t&&(t.c(),t.m(e,null)))},i:_,o:_,d(n){n&&p(e),t&&t.d()}}}function j(i,e,a){let{value:l=""}=e,{size:t="medium"}=e,{color:n}=e,r=n?`color: ${n}`:"";return i.$$set=s=>{"value"in s&&a(0,l=s.value),"size"in s&&a(1,t=s.size),"color"in s&&a(3,n=s.color)},[l,t,r,n]}class ee extends O{constructor(e){super(),h(this,e,j,W,m,{value:0,size:1,color:3})}}function M(i){let e,a;return{c(){e=v("title"),a=d(i[0])},l(l){e=D(l,"title",{});var t=P(e);a=G(t,i[0]),t.forEach(p)},m(l,t){I(l,e,t),b(e,a)},p(l,t){t&1&&y(a,l[0])},d(l){l&&p(e)}}}function X(i){let e,a,l,t=i[0]&&M(i);const n=i[3].default,r=L(n,i,i[2],null);return{c(){e=v("svg"),t&&t.c(),a=g(),r&&r.c(),this.h()},l(s){e=D(s,"svg",{xmlns:!0,viewBox:!0,class:!0});var c=P(e);t&&t.l(c),a=g(),r&&r.l(c),c.forEach(p),this.h()},h(){o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"viewBox",i[1]),o(e,"class","svelte-c8tyih")},m(s,c){I(s,e,c),t&&t.m(e,null),b(e,a),r&&r.m(e,null),l=!0},p(s,[c]){s[0]?t?t.p(s,c):(t=M(s),t.c(),t.m(e,a)):t&&(t.d(1),t=null),r&&r.p&&(!l||c&4)&&N(r,n,s,s[2],l?w(n,s[2],c,null):R(s[2]),null),(!l||c&2)&&o(e,"viewBox",s[1])},i(s){l||(S(r,s),l=!0)},o(s){E(r,s),l=!1},d(s){s&&p(e),t&&t.d(),r&&r.d(s)}}}function J(i,e,a){let{$$slots:l={},$$scope:t}=e,{title:n=null}=e,{viewBox:r}=e;return i.$$set=s=>{"title"in s&&a(0,n=s.title),"viewBox"in s&&a(1,r=s.viewBox),"$$scope"in s&&a(2,t=s.$$scope)},[n,r,t,l]}class Q extends O{constructor(e){super(),h(this,e,J,X,m,{title:0,viewBox:1})}}function Y(i){let e;return{c(){e=v("path"),this.h()},l(a){e=D(a,"path",{d:!0}),P(e).forEach(p),this.h()},h(){o(e,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z")},m(a,l){I(a,e,l)},p:_,d(a){a&&p(e)}}}function Z(i){let e,a;const l=[{viewBox:"0 0 24 24"},i[0]];let t={$$slots:{default:[Y]},$$scope:{ctx:i}};for(let n=0;n<l.length;n+=1)t=C(t,l[n]);return e=new Q({props:t}),{c(){V(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,r){K(e,n,r),a=!0},p(n,[r]){const s=r&1?B(l,[l[0],k(n[0])]):{};r&2&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){a||(S(e.$$.fragment,n),a=!0)},o(n){E(e.$$.fragment,n),a=!1},d(n){q(e,n)}}}function x(i,e,a){return i.$$set=l=>{a(0,e=C(C({},e),H(l)))},e=H(e),[e]}class te extends O{constructor(e){super(),h(this,e,x,Z,m,{})}}let le={boards:[{name:"Raspberry PI",width:2,height:20,type:0,data:[{label:"3v3 Power",type:"VCC",pin:1},{label:"GPIO 2 (I2C1) SDA",type:"GPIO",pin:3},{label:"GPIO 3 (I2C1) SCL",type:"GPIO",pin:5},{label:"GPIO 4 (GPCLK0)",type:"GPIO",pin:7},{label:"Ground",type:"GND",pin:9},{label:"GPIO 17",type:"GPIO",pin:11},{label:"GPIO 27",type:"GPIO",pin:13},{label:"GPIO 22",type:"GPIO",pin:15},{label:"3v3 Power",type:"VCC",pin:17},{label:"GPIO 10 (SPIO MOSI)",type:"GPIO",pin:19},{label:"GPIO 9 (SPIO MISO)",type:"GPIO",pin:21},{label:"GPIO 11 (SPIO SCLK)",type:"GPIO",pin:23},{label:"Ground",type:"GND",pin:25},{label:"GPIO 0 (EEPROM SDA)",type:"GPIO",pin:27},{label:"GPIO 5",type:"GPIO",pin:29},{label:"GPIO 6",type:"GPIO",pin:31},{label:"GPIO 13 (PWM1)",type:"GPIO",pin:33},{label:"GPIO 19 (PCM FS)",type:"GPIO",pin:35},{label:"GPIO 26",type:"GPIO",pin:37},{label:"Ground",type:"GND",pin:39},{label:"5v Power",type:"VCC",pin:2},{label:"5v Power",type:"VCC",pin:4},{label:"Ground",type:"GND",pin:6},{label:"GPIO 14 (UART TX)",type:"GPIO",pin:8},{label:"GPIO 15 (UART RX)",type:"GPIO",pin:10},{label:"GPIO 18 (PCM CLK)",type:"GPIO",pin:12},{label:"Ground",type:"GND",pin:14},{label:"GPIO 23",type:"GPIO",pin:16},{label:"GPIO 24",type:"GPIO",pin:18},{label:"Ground",type:"GPIO",pin:20},{label:"GPIO 25",type:"GPIO",pin:22},{label:"GPIO 8 (SPIO CE0)",type:"GPIO",pin:24},{label:"GPIO 7 (SPIO CE1)",type:"GPIO",pin:26},{label:"GPIO 1 (EEPROM SCL)",type:"GPIO",pin:28},{label:"Ground",type:"GND",pin:30},{label:"GPIO 12 (PWM0)",type:"GPIO",pin:32},{label:"Ground",type:"GND",pin:34},{label:"GPIO 16",type:"GPIO",pin:36},{label:"GPIO 20 (PCM DIN)",type:"GPIO",pin:38},{label:"GPIO 21 (PCM DOUT)",type:"GPIO",pin:40}]},{name:"MCP3008",width:2,height:8,type:1,data:[{label:"CH0",type:"CH",pin:1},{label:"CH1",type:"CH",pin:2},{label:"CH2",type:"CH",pin:3},{label:"CH3",type:"CH",pin:4},{label:"CH4",type:"CH",pin:5},{label:"CH5",type:"CH",pin:6},{label:"CH6",type:"CH",pin:7},{label:"CH7",type:"CH",pin:8},{label:"VDD",type:"VCC",pin:16},{label:"VREF",type:"VCC",pin:15},{label:"AGND",type:"GND",pin:14},{label:"CLK",type:"CLK",pin:13},{label:"DOUT",type:"SERIAL",pin:12},{label:"DIN",type:"SERIAL",pin:11},{label:"CS/SHDN",type:"GPIO",pin:10},{label:"DGND",type:"GND",pin:9}]}],rules:{VCC:["VCC"],GPIO:["GPIO","SERIAL","CLK"],GND:["GND","CH"],CH:["GND","CH"],CLK:["GPIO","CLK"],SERIAL:["GPIO"]},connections:[{name:"VCC",color:"#fff1bc",types:["VCC"],data:[{board:"Raspberry PI",pin:"4"},{board:"MCP3008",pin:"16"},{board:"MCP3008",pin:"15"}]},{name:"GND CH",color:"#86cbd8",types:["CH","GND"],data:[{board:"Raspberry PI",pin:"6"},{board:"MCP3008",pin:"1"},{board:"MCP3008",pin:"2"},{board:"MCP3008",pin:"3"},{board:"MCP3008",pin:"4"}]},{name:"CLK 23",color:"#f95d48",types:["CLK","SERIAL","GPIO"],data:[{board:"Raspberry PI",pin:"16"},{board:"MCP3008",pin:"13"}]},{name:"DOUT 24",color:"#21a55f",types:["CLK","GPIO"],data:[{board:"Raspberry PI",pin:"18"},{board:"Raspberry PI",pin:"18"},{board:"MCP3008",pin:"12"}]},{name:"DIN 25",color:"#34d857",types:["GPIO","SERIAL"],data:[{board:"MCP3008",pin:"11"},{board:"Raspberry PI",pin:"22"}]},{name:"CD/SHDN 8",color:"#c499e5",types:["SERIAL","CLK","GPIO"],data:[{board:"MCP3008",pin:"10"},{board:"Raspberry PI",pin:"24"}]}]};export{ee as H,Q as I,te as M,le as u};
