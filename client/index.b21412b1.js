import{S as t,i as s,s as e,e as a,t as c,a as l,c as n,b as r,d as i,f as o,g as h,h as f,j as d,k as u,l as m,n as v,m as p,o as g,p as w,q as D,r as y,u as b,v as T,w as E,x as O,y as k,z as I,A as N,B as j,C as x}from"./client.9ccc6cba.js";function $(t){let s,e;return{c(){s=a("img"),this.h()},l(t){s=n(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){f(s,"class","item-picture svelte-6i70x6"),s.src!==(e=t[0].enclosure.url)&&f(s,"src",e),f(s,"alt","picture")},m(t,e){d(t,s,e)},p(t,a){1&a&&s.src!==(e=t[0].enclosure.url)&&f(s,"src",e)},d(t){t&&o(s)}}}function S(t){let s,e;return{c(){s=a("img"),this.h()},l(t){s=n(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){f(s,"class","item-picture svelte-6i70x6"),s.src!==(e=t[0].image.url)&&f(s,"src",e),f(s,"alt","picture")},m(t,e){d(t,s,e)},p(t,a){1&a&&s.src!==(e=t[0].image.url)&&f(s,"src",e)},d(t){t&&o(s)}}}function V(t){let s,e,p,g,w,D,y,b,T,E,O,k,I,N=t[0].title+"",j=new Date(t[0].isoDate).toLocaleString()+"",x=t[0].content+"";function V(t,s){return(null==k||1&s)&&(k=!!Object.getOwnPropertyNames(t[0]).includes("image")),k?S:((null==I||1&s)&&(I=!!Object.getOwnPropertyNames(t[0]).includes("enclosure")),I?$:void 0)}let L=V(t,-1),B=L&&L(t);return{c(){s=a("div"),e=a("div"),p=a("a"),g=c(N),D=l(),y=a("div"),b=c(j),T=l(),E=a("div"),O=l(),B&&B.c(),this.h()},l(t){s=n(t,"DIV",{class:!0});var a=r(s);e=n(a,"DIV",{class:!0});var c=r(e);p=n(c,"A",{class:!0,href:!0,target:!0});var l=r(p);g=i(l,N),l.forEach(o),D=h(c),y=n(c,"DIV",{class:!0});var f=r(y);b=i(f,j),f.forEach(o),T=h(c),E=n(c,"DIV",{class:!0}),r(E).forEach(o),O=h(c),B&&B.l(c),c.forEach(o),a.forEach(o),this.h()},h(){f(p,"class","item-link svelte-6i70x6"),f(p,"href",w=t[0].link),f(p,"target","_blank"),f(y,"class","item-date"),f(E,"class","item-content svelte-6i70x6"),f(e,"class","item-cont"),f(s,"class","item svelte-6i70x6")},m(t,a){d(t,s,a),u(s,e),u(e,p),u(p,g),u(e,D),u(e,y),u(y,b),u(e,T),u(e,E),E.innerHTML=x,u(e,O),B&&B.m(e,null)},p(t,[s]){1&s&&N!==(N=t[0].title+"")&&m(g,N),1&s&&w!==(w=t[0].link)&&f(p,"href",w),1&s&&j!==(j=new Date(t[0].isoDate).toLocaleString()+"")&&m(b,j),1&s&&x!==(x=t[0].content+"")&&(E.innerHTML=x),L===(L=V(t,s))&&B?B.p(t,s):(B&&B.d(1),(B=L&&L(t))&&(B.c(),B.m(e,null)))},i:v,o:v,d(t){t&&o(s),B&&B.d()}}}function L(t,s,e){let{item:a}=s;return t.$set=(t=>{"item"in t&&e(0,a=t.item)}),[a]}class B extends t{constructor(t){super(),s(this,t,L,V,e,{item:0})}}function U(t,s,e){const a=t.slice();return a[10]=s[e],a}function P(t){let s;const e=new B({props:{item:t[10]}});return{c(){p(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,a){w(e,t,a),s=!0},p(t,s){const a={};4&s&&(a.item=t[10]),e.$set(a)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}function R(t){let s,e,m,v,p,g,w,b,j,$,S,V,L,B,R,M,C,A,G,H,J,_,q,z,F,K=t[2],Q=[];for(let s=0;s<K.length;s+=1)Q[s]=P(U(t,K,s));const W=t=>y(Q[t],1,1,()=>{Q[t]=null});return{c(){s=l(),e=a("div"),m=a("input"),v=l(),p=a("button"),g=c("Load"),w=l(),b=a("button"),j=c("Remove"),$=l(),S=a("div"),V=a("div"),L=a("div"),B=a("button"),R=c("Reload"),M=l(),C=a("button"),A=c("Newest"),G=l(),H=a("button"),J=c("Oldest"),_=l(),q=a("div");for(let t=0;t<Q.length;t+=1)Q[t].c();this.h()},l(t){T('[data-svelte="svelte-1r6y55i"]',document.head).forEach(o),s=h(t),e=n(t,"DIV",{class:!0});var a=r(e);m=n(a,"INPUT",{class:!0,type:!0,placeholder:!0}),v=h(a),p=n(a,"BUTTON",{class:!0});var c=r(p);g=i(c,"Load"),c.forEach(o),w=h(a),b=n(a,"BUTTON",{class:!0});var l=r(b);j=i(l,"Remove"),l.forEach(o),a.forEach(o),$=h(t),S=n(t,"DIV",{class:!0});var f=r(S);V=n(f,"DIV",{class:!0});var d=r(V);L=n(d,"DIV",{class:!0});var u=r(L);B=n(u,"BUTTON",{class:!0});var D=r(B);R=i(D,"Reload"),D.forEach(o),M=h(u),C=n(u,"BUTTON",{class:!0});var y=r(C);A=i(y,"Newest"),y.forEach(o),G=h(u),H=n(u,"BUTTON",{class:!0});var E=r(H);J=i(E,"Oldest"),E.forEach(o),u.forEach(o),_=h(d),q=n(d,"DIV",{class:!0});var O=r(q);for(let t=0;t<Q.length;t+=1)Q[t].l(O);O.forEach(o),d.forEach(o),f.forEach(o),this.h()},h(){document.title="RSS_reader",f(m,"class","feed-input svelte-153df5s"),f(m,"type","text"),f(m,"placeholder","https://www.sme.sk/rss-title"),f(p,"class","button svelte-153df5s"),f(b,"class","button svelte-153df5s"),f(e,"class","add-feed"),f(B,"class","button1 svelte-153df5s"),f(C,"class","button svelte-153df5s"),f(H,"class","button svelte-153df5s"),f(L,"class","articles-actions svelte-153df5s"),f(q,"class","articles-list svelte-153df5s"),f(V,"class","articles svelte-153df5s"),f(S,"class","container svelte-153df5s")},m(a,c,l){d(a,s,c),d(a,e,c),u(e,m),E(m,t[0]),u(e,v),u(e,p),u(p,g),u(e,w),u(e,b),u(b,j),d(a,$,c),d(a,S,c),u(S,V),u(V,L),u(L,B),u(B,R),u(L,M),u(L,C),u(C,A),u(L,G),u(L,H),u(H,J),u(V,_),u(V,q);for(let t=0;t<Q.length;t+=1)Q[t].m(q,null);z=!0,l&&O(F),F=[k(m,"input",t[8]),k(p,"click",t[6]),k(b,"click",t[9]),k(B,"click",t[3]),k(C,"click",t[5]),k(H,"click",t[4])]},p(t,[s]){if(1&s&&m.value!==t[0]&&E(m,t[0]),4&s){let e;for(K=t[2],e=0;e<K.length;e+=1){const a=U(t,K,e);Q[e]?(Q[e].p(a,s),D(Q[e],1)):(Q[e]=P(a),Q[e].c(),D(Q[e],1),Q[e].m(q,null))}for(x(),e=K.length;e<Q.length;e+=1)W(e);I()}},i(t){if(!z){for(let t=0;t<K.length;t+=1)D(Q[t]);z=!0}},o(t){Q=Q.filter(Boolean);for(let t=0;t<Q.length;t+=1)y(Q[t]);z=!1},d(t){t&&o(s),t&&o(e),t&&o($),t&&o(S),N(Q,t),O(F)}}}function M(t,s,e){let a="https://www.sme.sk/rss-title",c=[],l=[];j(async()=>{const t=await fetch("/api/list").then(t=>t.json());e(1,c=t)});const n=async()=>{const t=await fetch("/api/refresh").then(t=>t.json());e(2,l=t.map(t=>{const{items:s,...e}=t;return s.map(t=>({...t,feed:e}))}).reduce((t,s)=>t.concat(s),[]))},r=async t=>{const{removed:s,rssList:a}=await fetch("/api/del",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})}).then(t=>t.json());s&&(e(1,c=a),n())};return[a,c,l,n,async()=>(e(2,l=l.sort((t,s)=>new Date(t.isoDate)-new Date(s.isoDate))),l),async()=>(e(2,l=l.sort((t,s)=>new Date(s.isoDate)-new Date(t.isoDate))),l),async()=>{const{added:t,rssList:s}=await fetch("/api/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:a})}).then(t=>t.json());t&&(r(c[0]),e(1,c=s),n())},r,function(){a=this.value,e(0,a)},()=>r(c[0])]}export default class extends t{constructor(t){super(),s(this,t,M,R,e,{})}}