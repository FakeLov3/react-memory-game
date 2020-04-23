(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],{39:function(n,e,t){n.exports=t(52)},52:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(20),i=t.n(c),o=t(23),u=t(14),s=t(12),d=t(1),l=t(7),f=t(2);function m(){var n=Object(f.a)(["\n  font-size: 3.2rem;\n  font-weight: bold;\n"]);return m=function(){return n},n}function b(){var n=Object(f.a)([""]);return b=function(){return n},n}function p(){var n=Object(f.a)(["\n  padding: 8px 24px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: pointer;\n  user-select: none;\n  transition: background 0.1s ease-in-out;\n  border: 2px solid ",";\n  ","\n  &:hover {\n    background: rgba(0, 0, 0, 0.3);\n  }\n"]);return p=function(){return n},n}function h(){var n=Object(f.a)(["\n  background: "," !important;\n"]);return h=function(){return n},n}var g=Object(d.c)(h(),(function(n){return n.theme.accent})),v=d.d.div(p(),(function(n){return n.theme.primaryText}),(function(n){return n.isSelected?g:null})),x=d.d.div(b()),j=d.d.div(m()),O=function(n){var e=n.name,t=n.numOfCards,r=n.className,c=n.onClick,i=n.isSelected,o=void 0!==i&&i;return(a.a.createElement(v,{className:r,isSelected:o,onClick:c},a.a.createElement(x,null,e),a.a.createElement(j,null,t)))};function E(){var n=Object(f.a)(["\n  font-size: 2.4rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  border: 2px solid ",";\n  padding: 16px;\n  text-align: center;\n  border-radius: 5px;\n  margin-left: auto;\n  width: 50%;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n  &:hover {\n    background: ",";\n  }\n"]);return E=function(){return n},n}function y(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 24px;\n"]);return y=function(){return n},n}function k(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 24px;\n"]);return k=function(){return n},n}function S(){var n=Object(f.a)(["\n  width: 25%;\n  margin: 8px;\n  text-align: center;\n  flex: 1;\n"]);return S=function(){return n},n}function w(){var n=Object(f.a)(["\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 2rem;\n"]);return w=function(){return n},n}function C(){var n=Object(f.a)(["\n  padding: 3.2rem 2.4rem;\n"]);return C=function(){return n},n}function T(){var n=Object(f.a)(["\n  font-size: 2.8rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  background: ",";\n  color: ",";\n  padding: 8px 0;\n"]);return T=function(){return n},n}function F(){var n=Object(f.a)(["\n  border: 2px solid ",";\n  border-radius: 5px;\n  width: 50%;\n  min-width: 400px;\n  overflow: hidden;\n  box-shadow: -2px 2px 24px 1px rgba(0, 0, 0, 0.2);\n"]);return F=function(){return n},n}function M(){var n=Object(f.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n"]);return M=function(){return n},n}var I=d.d.div(M()),P=d.d.div(F(),(function(n){return n.theme.primaryText})),z=d.d.h1(T(),(function(n){return n.theme.primaryText}),(function(n){return n.theme.background})),L=d.d.div(C()),B=d.d.div(w()),N=Object(d.d)(O)(S()),V=d.d.div(k()),H=d.d.div(y()),W=d.d.div(E(),(function(n){return n.theme.primaryText}),(function(n){return n.theme.accent})),_=12,Y=20,q=28,D=32,G=function(){var n=Object(s.f)(),e=Object(r.useState)(Y),t=Object(l.a)(e,2),c=t[0],i=t[1],o=function(n){return function(){i(n)}};return a.a.createElement(I,null,a.a.createElement(P,null,a.a.createElement(z,null,"React Memory Game"),a.a.createElement(L,null,a.a.createElement(B,null,"Choose a Difficulty:"),a.a.createElement("div",null,"Each difficulty changes the number of cards"),a.a.createElement(V,null,a.a.createElement(N,{name:"Easy",numOfCards:_,onClick:o(_),isSelected:c===_}),a.a.createElement(N,{name:"Medium",numOfCards:Y,onClick:o(Y),isSelected:c===Y}),a.a.createElement(N,{name:"Hard",numOfCards:q,onClick:o(q),isSelected:c===q}),a.a.createElement(N,{name:"Very hard",numOfCards:D,onClick:o(D),isSelected:c===D})),a.a.createElement(H,null,a.a.createElement(W,{onClick:function(){var e={difficulty:c};n.push("/game",e)}},"Play")))))};function J(){var n=Object(f.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    outline: 0;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: 'Noto Sans', monospace;\n    background: ",";\n    ","\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  textarea, input, button {\n    font-family: 'Noto Sans', monospace;\n    ","\n  }\n"]);return J=function(){return n},n}function R(){var n=Object(f.a)(["\n  color: ",";\n  line-height: 1.5;\n  font-size: 1.6rem;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"]);return R=function(){return n},n}var A,K,Q,U=Object(d.c)(R(),(function(n){return n.theme.primaryText})),X=Object(d.b)(J(),(function(n){return n.theme.background}),U,U),Z=o.b,$=t(18);!function(n){n.dark="dark",n.light="light"}(A||(A={})),function(n){n.SET_THEME="SET_THEME"}(K||(K={}));var nn=(Q={},Object($.a)(Q,A.dark,{accent:"#00bbcc",primaryText:"#ffffff",secondaryText:"#ccc",background:"#333333",controlBar:"#222222",cardBackFace:"#111111",cardFrontFace:"#e6e6e6"}),Object($.a)(Q,A.light,{accent:"#00bbcc",primaryText:"#313131",secondaryText:"#616161",background:"#ffffff",controlBar:"#222222",cardBackFace:"#111111",cardFrontFace:"#e6e6e6"}),Q);function en(){var n=Object(f.a)(["\n  ","\n  background: rgba(0,0,0,0.3);\n"]);return en=function(){return n},n}function tn(){var n=Object(f.a)(["\n  ","\n  background: ",";\n"]);return tn=function(){return n},n}function rn(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 12px 24px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n  background: ",";\n  margin-left: 16px;\n  min-width: 25%;\n\n  &:hover {\n    transform: scale(1.02);\n  }\n"]);return rn=function(){return n},n}var an=Object(d.c)(rn(),(function(n){return n.theme.accent})),cn=d.d.div(tn(),an,(function(n){return n.theme.accent})),on=d.d.div(en(),an),un=t(9);function sn(){var n=Object(f.a)(["\n  padding: 24px;\n  display: flex;\n  justify-content: flex-end;\n"]);return sn=function(){return n},n}function dn(){var n=Object(f.a)(["\n  padding: 24px;\n"]);return dn=function(){return n},n}function ln(){var n=Object(f.a)(["\n  width: 4rem;\n  height: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n  &:hover {\n    background: ",";\n  }\n"]);return ln=function(){return n},n}function fn(){var n=Object(f.a)(["\n  font-size: 3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  flex: 1;\n"]);return fn=function(){return n},n}function mn(){var n=Object(f.a)(["\n  padding: 12px 12px 12px 24px;\n  display: flex;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.3);\n"]);return mn=function(){return n},n}function bn(){var n=Object(f.a)(["\n  background: ",";\n  border-radius: 5px;\n  width: 33%;\n  min-width: 300px;\n"]);return bn=function(){return n},n}function pn(){var n=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.9);\n  display: ",";\n  justify-content: center;\n  align-items: center;\n  transition: display 0.2s ease-in-out;\n  user-select: none;\n  box-shadow: -2px 2px 16px 1px rgba(0, 0, 0, 0.5);\n"]);return pn=function(){return n},n}var hn=d.d.div(pn(),(function(n){return n.isShowing?"flex":"none"})),gn=d.d.div(bn(),(function(n){return n.theme.background})),vn=d.d.div(mn()),xn=d.d.div(fn()),jn=d.d.div(ln(),(function(n){return n.theme.accent})),On=d.d.div(dn()),En=d.d.div(sn()),yn=function(n){var e=n.isShowing,t=void 0!==e&&e,r=n.onCloseModal,c=n.title,i=void 0===c?"":c,o=n.message,u=void 0===o?"":o,s=n.children;return(a.a.createElement(hn,{isShowing:t},a.a.createElement(gn,null,a.a.createElement(vn,null,a.a.createElement(xn,null,i),a.a.createElement(jn,{onClick:r},a.a.createElement(un.a,{icon:"times"}))),a.a.createElement(On,null,u),a.a.createElement(En,null,s))))},kn=Object(r.createContext)({}),Sn=["poo","anchor","moon","apple-alt","bell","bible","bomb","bone","car","cat","chess","skull","feather-alt","fire","heart","music"],wn=function(){var n=Object(r.useContext)(kn),e=n.setIconList,t=n.setIconFoundList,a=n.setIsPaused,c=n.setFirstSelectedCard,i=n.setSecondSelectedCard,o=n.difficulty,u=n.onStopTimer,s=function(n){for(var e,t,r=n.length;0!==r;)t=Math.floor(Math.random()*r),e=n[r-=1],n[r]=n[t],n[t]=e;return n};return function(){t([]),a(!0),c(-1),i(-1),u();var n=s(Sn).slice(0,o/2);n=n.concat(n);var r=s(n);e(r)}},Cn=function(){var n=Object(r.useContext)(kn),e=n.isShowingWinModal,t=n.setIsShowingWinModal,c=wn(),i=Object(s.f)();!function(){var n=Object(r.useContext)(kn),e=n.iconFoundList,t=n.difficulty,a=n.setIsShowingWinModal,c=n.setIsPaused,i=n.onPauseTimer;Object(r.useEffect)((function(){e.length===t/2&&(a(!0),c(!0),i())}),[t,e.length,i,c,a])}();var o=function(){t(!1),c()};return a.a.createElement(yn,{isShowing:e,onCloseModal:o,title:"Congratulations!",message:"You proved that your memory is powerful"},a.a.createElement(on,{onClick:function(){i.goBack()}},"Go Back"),a.a.createElement(cn,{onClick:o},"Play Again"))};function Tn(){var n=Object(f.a)(["\n  ","\n"]);return Tn=function(){return n},n}function Fn(){var n=Object(f.a)(["\n  background: transparent !important;\n  border: 1px solid transparent;\n  cursor: not-allowed;\n"]);return Fn=function(){return n},n}function Mn(){var n=Object(f.a)(["\n  margin-right: 8px;\n"]);return Mn=function(){return n},n}function In(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  height: ","px;\n  padding: 0 24px;\n  border-radius: 5px;\n  border: 1px solid ",";\n  cursor: pointer;\n  transition: background, border 0.2s ease-in-out;\n\n  &:hover {\n    background: ",";\n  }\n\n  "," {\n    margin-left: 16px;\n  }\n"]);return In=function(){return n},n}function Pn(){var n=Object(f.a)(["\n  @media only screen and (max-width: 500px) {\n    display: none;\n  }\n"]);return Pn=function(){return n},n}function zn(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0 24px;\n  "," {\n    margin-left: 8px;\n  }\n"]);return zn=function(){return n},n}function Ln(){var n=Object(f.a)([""]);return Ln=function(){return n},n}function Bn(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  padding-right: 24px;\n"]);return Bn=function(){return n},n}function Nn(){var n=Object(f.a)(["\n  @media only screen and (max-width: 700px) {\n    display: none;\n  }\n"]);return Nn=function(){return n},n}function Vn(){var n=Object(f.a)(["\n  margin-right: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  border: 1px solid ",";\n  min-height: ","px;\n  min-width: ","px;\n  font-size: 2rem;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n\n  &:hover {\n    background: ",";\n  }\n"]);return Vn=function(){return n},n}function Hn(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n"]);return Hn=function(){return n},n}function Wn(){var n=Object(f.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 64px;\n  background: ",";\n  user-select: none;\n  padding: 0 24px;\n\n  @media only screen and (max-width: 400px) {\n    padding: 0 8px;\n  }\n"]);return Wn=function(){return n},n}var _n=d.d.div(Wn(),(function(n){return n.theme.controlBar})),Yn=d.d.div(Hn()),qn=d.d.div(Vn(),(function(n){return n.theme.secondaryText}),42,42,(function(n){return n.theme.accent})),Dn=d.d.div(Nn()),Gn=d.d.div(Bn()),Jn=d.d.span(Ln()),Rn=d.d.div(zn(),Jn),An=d.d.span(Pn()),Kn=d.d.div(In(),42,(function(n){return n.theme.secondaryText}),(function(n){return n.theme.accent}),An),Qn=Object(d.d)(Kn)(Mn()),Un=Object(d.c)(Fn()),Xn=Object(d.d)(Kn)(Tn(),(function(n){return n.isPaused?null:Un})),Zn=function(){var n=Object(r.useContext)(kn),e=n.difficulty,t=n.isPaused,c=n.setIsPaused,i=n.hoursText,o=n.minutesText,u=n.secondsText,d=n.onStartTimer,l=n.onPauseTimer,f=wn(),m=Object(s.f)();Object(r.useEffect)(f,[]);return a.a.createElement(_n,null,a.a.createElement(Yn,null,a.a.createElement(qn,{onClick:function(){window.confirm("Do you want to leave this awesome game?")&&m.goBack()}},a.a.createElement(un.a,{icon:"chevron-left"})),a.a.createElement(Dn,null,"Playing with ".concat(e," cards"))),a.a.createElement(Gn,null,a.a.createElement(Rn,null,a.a.createElement(un.a,{icon:"clock"}),a.a.createElement(Jn,null,"".concat(i,":").concat(o,":").concat(u))),a.a.createElement(Qn,{onClick:function(){c(!t),t?d():l()}},a.a.createElement(un.a,{icon:t?"play":"pause"})),a.a.createElement(Xn,{isPaused:t,onClick:function(){t&&f()}},a.a.createElement(un.a,{icon:"undo"}),a.a.createElement(An,null,"Restart"))))};function $n(){var n=Object(f.a)(["\n  height: 100%;\n"]);return $n=function(){return n},n}var ne=d.d.div($n()),ee=t(37);function te(){var n=Object(f.a)(["\n  /* width: calc(100vw / (32 / 5));\n  height: calc(100vh / 6);\n  font-size: 12rem; */\n  border-radius: 10px;\n  margin: 8px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background 0.1s ease-in-out;\n\n  opacity: ",";\n\n  pointer-events: ",";\n\n  color: ",";\n\n  background: ",";\n\n  &:hover {\n    background: ",";\n  }\n\n  /* transform-style: preserve-3d;\n  perspective: 1000px;\n  &:active {\n    transform: rotateY(180deg);\n  } */\n"]);return te=function(){return n},n}var re=d.d.div(te(),(function(n){return n.isVisible?"1":"0"}),(function(n){var e=n.isVisible;return n.disabled||!e?"none":"all"}),(function(n){var e=n.isShowingFrontFace,t=n.theme;return e?t.cardBackFace:t.cardFrontFace}),(function(n){var e=n.isShowingFrontFace,t=n.theme;return e?t.cardFrontFace+" !important":t.cardBackFace}),(function(n){return n.theme.accent})),ae=Object(r.memo)((function(n){var e=n.children,t=n.onClick,r=n.isShowingFrontFace,c=void 0!==r&&r,i=n.isVisible,o=void 0===i||i,u=n.className,s=n.disabled,d=void 0!==s&&s;return(a.a.createElement(re,{isVisible:o,className:u,isShowingFrontFace:c,onClick:t,disabled:d},c?e:a.a.createElement(un.a,{icon:"question-circle"})))}));function ce(){var n=Object(f.a)(["\n  min-height: 100px;\n  min-width: 100px;\n  height: 20vh;\n  font-size: 8rem;\n  flex: 1 0\n    calc(\n      (100% / ",") -\n        16px\n    );\n"]);return ce=function(){return n},n}function ie(){var n=Object(f.a)(["\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 0 16px 64px 16px;\n"]);return ie=function(){return n},n}var oe=d.d.div(ie()),ue=Object(d.d)(ae)(ce(),(function(n){return n.numOfCardsInEachLine})),se=function(){var n=Object(r.useContext)(kn),e=n.firstSelectedCard,t=n.setFirstSelectedCard,c=n.secondSelectedCard,i=n.setSecondSelectedCard,o=n.iconFoundList,u=n.setIconFoundList,s=n.iconList,d=n.isPaused,l=n.isCheckingCards,f=n.setIsCheckingCards,m=n.difficulty,b=function(){t(-1),i(-1),f(!1)};return Object(r.useEffect)((function(){if(-1!==e){f(!0);var n=s[e],t=s[c];n===t?setTimeout((function(){var e=Object(ee.a)(o);e.push(n),u(e),b()}),[1e3]):setTimeout(b,[1e3])}}),[c]),a.a.createElement(oe,null,s.map((function(n,r){var u=-1===o.indexOf(n),s=e===r,f=c===r,b=function(n){return function(){l||(-1===e?t(n):i(n))}}(r),p=s||f;return a.a.createElement(ue,{key:r,onClick:b,isVisible:u,isShowingFrontFace:p,disabled:d||p,numOfCardsInEachLine:m/4},a.a.createElement(un.a,{icon:n}))})))},de=function(){var n=Object(s.g)().state,e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1],o=Object(r.useState)([]),u=Object(l.a)(o,2),d=u[0],f=u[1],m=Object(r.useState)(-1),b=Object(l.a)(m,2),p=b[0],h=b[1],g=Object(r.useState)(-1),v=Object(l.a)(g,2),x=v[0],j=v[1],O=Object(r.useState)(!1),E=Object(l.a)(O,2),y=E[0],k=E[1],S=Object(r.useState)(!1),w=Object(l.a)(S,2),C=w[0],T=w[1],F=Object(r.useState)(!0),M=Object(l.a)(F,2),I=M[0],P=M[1],z=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=Object(r.useState)(n),a=Object(l.a)(t,2),c=a[0],i=a[1],o=Object(r.useState)(e),u=Object(l.a)(o,2),s=u[0],d=u[1],f=function(){i(!0)},m=function(){i(!1)},b=function(){i(!1),d(0)};Object(r.useEffect)((function(){var n=null;return c&&(n=setInterval((function(){d(s+100)}),100)),function(){n&&clearInterval(n)}}),[c,s]);var p=Object(r.useMemo)((function(){var n=s/1e3,e=n/60,t=e/60;return{seconds:n-60*Math.floor(e),minutes:e-60*Math.floor(t),hours:t}}),[s]),h=p.seconds,g=p.minutes,v=p.hours,x=function(n){var e=Math.floor(n);return e<10?"0".concat(e):"".concat(e)},j=Object(r.useMemo)((function(){return x(h)}),[h]),O=Object(r.useMemo)((function(){return x(g)}),[g]),E=Object(r.useMemo)((function(){return x(v)}),[v]);return{milliseconds:s,seconds:h,minutes:g,hours:v,secondsText:j,minutesText:O,hoursText:E,onStartTimer:f,onStopTimer:b,onPauseTimer:m}}(),L=z.hoursText,B=z.minutesText,N=z.secondsText,V=z.onStartTimer,H=z.onStopTimer,W=z.onPauseTimer;return a.a.createElement(kn.Provider,{value:{difficulty:n.difficulty,isPaused:I,setIsPaused:P,iconList:c,setIconList:i,iconFoundList:d,setIconFoundList:f,firstSelectedCard:p,setFirstSelectedCard:h,secondSelectedCard:x,setSecondSelectedCard:j,isCheckingCards:C,setIsCheckingCards:T,isShowingWinModal:y,setIsShowingWinModal:k,hoursText:L,minutesText:B,secondsText:N,onStartTimer:V,onStopTimer:H,onPauseTimer:W}},a.a.createElement(ne,null,a.a.createElement(se,null),a.a.createElement(Zn,null),a.a.createElement(Cn,null)))},le=function(){var n=Z((function(n){return n.Theme.type})),e=nn[n];return a.a.createElement(d.a,{theme:e},a.a.createElement(X,null),a.a.createElement(u.a,{basename:"/react-memory-game"},a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/",component:G}),a.a.createElement(s.a,{exact:!0,path:"/game",component:de}))))},fe=t(16),me=t(36),be={type:localStorage.getItem("THEME_KEY")||A.dark},pe=Object(fe.b)({Theme:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,e=arguments.length>1?arguments[1]:void 0,t=e.type,r=e.payload;switch(t){case K.SET_THEME:return Object(me.a)({},n,{},r);default:return n}}}),he=Object(fe.c)(pe),ge=t(19),ve=t(4);ge.b.add(ve.j,ve.r,ve.q,ve.w,ve.k,ve.t,ve.v,ve.s,ve.a,ve.o,ve.b,ve.c,ve.d,ve.e,ve.f,ve.g,ve.h,ve.i,ve.u,ve.l,ve.m,ve.n,ve.p);var xe=function(){return a.a.createElement(o.a,{store:he},a.a.createElement(le,null))};i.a.render(a.a.createElement(xe,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ef4f9b19.chunk.js.map