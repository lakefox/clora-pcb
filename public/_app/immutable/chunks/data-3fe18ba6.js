import{S as d,i as m,s as C,e as G,c as _,a as f,d as p,b as r,g as u,E as O,t as P,h as y,J as I,j as b,U as v,V as g,F as N,l as D,G as B,H as L,I as M,q as w,o as E,C as h,w as V,x as A,y as R,z as k,A as U,B as K,W as S}from"./index-8c2c5986.js";function q(a){let e,n;return{c(){e=G("div"),n=P(a[0]),this.h()},l(t){e=_(t,"DIV",{class:!0,style:!0});var l=f(e);n=y(l,a[0]),l.forEach(p),this.h()},h(){r(e,"class","h4 svelte-vqoc5m"),r(e,"style",a[2])},m(t,l){u(t,e,l),I(e,n)},p(t,l){l&1&&b(n,t[0])},d(t){t&&p(e)}}}function z(a){let e,n;return{c(){e=G("div"),n=P(a[0]),this.h()},l(t){e=_(t,"DIV",{class:!0,style:!0});var l=f(e);n=y(l,a[0]),l.forEach(p),this.h()},h(){r(e,"class","h3 svelte-vqoc5m"),r(e,"style",a[2])},m(t,l){u(t,e,l),I(e,n)},p(t,l){l&1&&b(n,t[0])},d(t){t&&p(e)}}}function T(a){let e,n;return{c(){e=G("div"),n=P(a[0]),this.h()},l(t){e=_(t,"DIV",{class:!0,style:!0});var l=f(e);n=y(l,a[0]),l.forEach(p),this.h()},h(){r(e,"class","h2 svelte-vqoc5m"),r(e,"style",a[2])},m(t,l){u(t,e,l),I(e,n)},p(t,l){l&1&&b(n,t[0])},d(t){t&&p(e)}}}function F(a){let e,n;return{c(){e=G("div"),n=P(a[0]),this.h()},l(t){e=_(t,"DIV",{class:!0,style:!0});var l=f(e);n=y(l,a[0]),l.forEach(p),this.h()},h(){r(e,"class","h1 svelte-vqoc5m"),r(e,"style",a[2])},m(t,l){u(t,e,l),I(e,n)},p(t,l){l&1&&b(n,t[0])},d(t){t&&p(e)}}}function W(a){let e;function n(i,o){if(i[1]=="large")return F;if(i[1]=="medium")return T;if(i[1]=="small")return z;if(i[1]=="xsmall")return q}let t=n(a),l=t&&t(a);return{c(){e=G("main"),l&&l.c(),this.h()},l(i){e=_(i,"MAIN",{class:!0});var o=f(e);l&&l.l(o),o.forEach(p),this.h()},h(){r(e,"class","svelte-vqoc5m")},m(i,o){u(i,e,o),l&&l.m(e,null)},p(i,[o]){t===(t=n(i))&&l?l.p(i,o):(l&&l.d(1),l=t&&t(i),l&&(l.c(),l.m(e,null)))},i:O,o:O,d(i){i&&p(e),l&&l.d()}}}function j(a,e,n){let{value:t=""}=e,{size:l="medium"}=e,{color:i}=e,o=i?`color: ${i}`:"";return a.$$set=s=>{"value"in s&&n(0,t=s.value),"size"in s&&n(1,l=s.size),"color"in s&&n(3,i=s.color)},[t,l,o,i]}class ee extends d{constructor(e){super(),m(this,e,j,W,C,{value:0,size:1,color:3})}}function H(a){let e,n;return{c(){e=v("title"),n=P(a[0])},l(t){e=g(t,"title",{});var l=f(e);n=y(l,a[0]),l.forEach(p)},m(t,l){u(t,e,l),I(e,n)},p(t,l){l&1&&b(n,t[0])},d(t){t&&p(e)}}}function X(a){let e,n,t,l=a[0]&&H(a);const i=a[3].default,o=N(i,a,a[2],null);return{c(){e=v("svg"),l&&l.c(),n=D(),o&&o.c(),this.h()},l(s){e=g(s,"svg",{xmlns:!0,viewBox:!0,class:!0});var c=f(e);l&&l.l(c),n=D(),o&&o.l(c),c.forEach(p),this.h()},h(){r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"viewBox",a[1]),r(e,"class","svelte-c8tyih")},m(s,c){u(s,e,c),l&&l.m(e,null),I(e,n),o&&o.m(e,null),t=!0},p(s,[c]){s[0]?l?l.p(s,c):(l=H(s),l.c(),l.m(e,n)):l&&(l.d(1),l=null),o&&o.p&&(!t||c&4)&&B(o,i,s,s[2],t?M(i,s[2],c,null):L(s[2]),null),(!t||c&2)&&r(e,"viewBox",s[1])},i(s){t||(w(o,s),t=!0)},o(s){E(o,s),t=!1},d(s){s&&p(e),l&&l.d(),o&&o.d(s)}}}function J(a,e,n){let{$$slots:t={},$$scope:l}=e,{title:i=null}=e,{viewBox:o}=e;return a.$$set=s=>{"title"in s&&n(0,i=s.title),"viewBox"in s&&n(1,o=s.viewBox),"$$scope"in s&&n(2,l=s.$$scope)},[i,o,l,t]}class Q extends d{constructor(e){super(),m(this,e,J,X,C,{title:0,viewBox:1})}}function Y(a){let e;return{c(){e=v("path"),this.h()},l(n){e=g(n,"path",{d:!0}),f(e).forEach(p),this.h()},h(){r(e,"d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z")},m(n,t){u(n,e,t)},p:O,d(n){n&&p(e)}}}function Z(a){let e,n;const t=[{viewBox:"0 0 24 24"},a[0]];let l={$$slots:{default:[Y]},$$scope:{ctx:a}};for(let i=0;i<t.length;i+=1)l=h(l,t[i]);return e=new Q({props:l}),{c(){V(e.$$.fragment)},l(i){A(e.$$.fragment,i)},m(i,o){R(e,i,o),n=!0},p(i,[o]){const s=o&1?k(t,[t[0],U(i[0])]):{};o&2&&(s.$$scope={dirty:o,ctx:i}),e.$set(s)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){E(e.$$.fragment,i),n=!1},d(i){K(e,i)}}}function x(a,e,n){return a.$$set=t=>{n(0,e=h(h({},e),S(t)))},e=S(e),[e]}class le extends d{constructor(e){super(),m(this,e,x,Z,C,{})}}let te={boards:[{name:"Raspberry PI",width:2,height:20,type:0,data:[{label:"3v3 Power",type:"VCC",pin:1},{label:"GPIO 2 (I2C1) SDA",type:"GPIO",pin:3},{label:"GPIO 3 (I2C1) SCL",type:"GPIO",pin:5},{label:"GPIO 4 (GPCLK0)",type:"GPIO",pin:7},{label:"Ground",type:"GND",pin:9},{label:"GPIO 17",type:"GPIO",pin:11},{label:"GPIO 27",type:"GPIO",pin:13},{label:"GPIO 22",type:"GPIO",pin:15},{label:"3v3 Power",type:"VCC",pin:17},{label:"GPIO 10 (SPIO MOSI)",type:"GPIO",pin:19},{label:"GPIO 9 (SPIO MISO)",type:"GPIO",pin:21},{label:"GPIO 11 (SPIO SCLK)",type:"GPIO",pin:23},{label:"Ground",type:"GND",pin:25},{label:"GPIO 0 (EEPROM SDA)",type:"GPIO",pin:27},{label:"GPIO 5",type:"GPIO",pin:29},{label:"GPIO 6",type:"GPIO",pin:31},{label:"GPIO 13 (PWM1)",type:"GPIO",pin:33},{label:"GPIO 19 (PCM FS)",type:"GPIO",pin:35},{label:"GPIO 26",type:"GPIO",pin:37},{label:"Ground",type:"GND",pin:39},{label:"5v Power",type:"VCC",pin:2},{label:"5v Power",type:"VCC",pin:4},{label:"Ground",type:"GND",pin:6},{label:"GPIO 14 (UART TX)",type:"GPIO",pin:8},{label:"GPIO 15 (UART RX)",type:"GPIO",pin:10},{label:"GPIO 18 (PCM CLK)",type:"GPIO",pin:12},{label:"Ground",type:"GND",pin:14},{label:"GPIO 23",type:"GPIO",pin:16},{label:"GPIO 24",type:"GPIO",pin:18},{label:"Ground",type:"GPIO",pin:20},{label:"GPIO 25",type:"GPIO",pin:22},{label:"GPIO 8 (SPIO CE0)",type:"GPIO",pin:24},{label:"GPIO 7 (SPIO CE1)",type:"GPIO",pin:26},{label:"GPIO 1 (EEPROM SCL)",type:"GPIO",pin:28},{label:"Ground",type:"GND",pin:30},{label:"GPIO 12 (PWM0)",type:"GPIO",pin:32},{label:"Ground",type:"GND",pin:34},{label:"GPIO 16",type:"GPIO",pin:36},{label:"GPIO 20 (PCM DIN)",type:"GPIO",pin:38},{label:"GPIO 21 (PCM DOUT)",type:"GPIO",pin:40}]},{name:"MCP3008",width:2,height:8,type:1,data:[{label:"CH0",type:"CH",pin:1},{label:"CH1",type:"CH",pin:2},{label:"CH2",type:"CH",pin:3},{label:"CH3",type:"CH",pin:4},{label:"CH4",type:"CH",pin:5},{label:"CH5",type:"CH",pin:6},{label:"CH6",type:"CH",pin:7},{label:"CH7",type:"CH",pin:8},{label:"VDD",type:"VCC",pin:16},{label:"VREF",type:"VCC",pin:15},{label:"AGND",type:"GND",pin:14},{label:"CLK",type:"CLK",pin:13},{label:"DOUT",type:"SERIAL",pin:12},{label:"DIN",type:"SERIAL",pin:11},{label:"CS/SHDN",type:"GPIO",pin:10},{label:"DGND",type:"GND",pin:9}]}],rules:{VCC:["VCC"],GPIO:["GPIO","SERIAL","CLK"],GND:["GND","CH"],CH:["GND","CH"],CLK:["GPIO","CLK"],SERIAL:["GPIO"]},connections:[{name:"BUS 1",color:"#212121"},{name:"BUS 1",color:"#212121"},{name:"BUS 1",color:"#212121"},{name:"BUS 1",color:"#212121"}]};export{ee as H,Q as I,le as M,te as u};
