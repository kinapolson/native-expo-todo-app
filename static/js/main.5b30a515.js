(()=>{"use strict";var e={757:(e,t,r)=>{var n=r(9372),o=r(7810),i=r(8015),a=r(212),l=r(9700),d=r(6690),c=r(2782),s=r(4249),u=r(2928),f=r(8888),h=r(4922);const p=i.default.create({container:{flex:1,backgroundColor:"white",paddingTop:0},taskContainer:{flexDirection:"row",alignItems:"center",padding:10},taskText:{fontSize:18,fontFamily:"Courier"},completedText:{fontSize:18,textDecorationLine:"line-through",fontFamily:"Courier"},inputContainer:{flexDirection:"row",padding:10},input:{flex:1,borderWidth:1,padding:8,marginRight:10},checkboxContainer:{justifyContent:"center",alignItems:"center",padding:0,margin:0},checkbox:{width:20,height:20,borderRadius:12,justifyContent:"center",alignItems:"center"},checkboxText:{fontSize:16,color:"white"}});(0,n.default)((function(){const[e,t]=(0,o.useState)([{key:"1",description:"Watch Australian Grand Prix for F1",completed:!1}]),[r,n]=(0,o.useState)("");return(0,h.jsxs)(a.default,{style:p.container,children:[(0,h.jsx)(l.default,{data:e,renderItem:({item:e})=>(0,h.jsxs)(u.default,{style:p.taskContainer,children:[(0,h.jsx)(f.CheckBox,{checked:e.completed,onPress:()=>{return r=e.key,void t((e=>e.map((e=>e.key===r?Object.assign({},e,{completed:!e.completed}):e))));var r},containerStyle:p.checkboxContainer,checkedIcon:(0,h.jsx)(u.default,{style:[p.checkbox,{backgroundColor:"#14213D"}],children:(0,h.jsx)(d.default,{style:p.checkboxText})}),uncheckedIcon:(0,h.jsx)(u.default,{style:[p.checkbox,{backgroundColor:"transparent",borderWidth:1}],children:(0,h.jsx)(d.default,{style:p.checkboxText})})}),(0,h.jsx)(d.default,{style:e.completed?p.completedText:p.taskText,children:e.description})]})}),(0,h.jsxs)(u.default,{style:p.inputContainer,children:[(0,h.jsx)(c.default,{style:p.input,placeholder:"Add New Task",value:r,onChangeText:n}),(0,h.jsx)(s.default,{title:"Add",onPress:()=>{r.trim()&&(t([...e,{key:String(e.length+1),description:r,completed:!1}]),n(""))}})]})]})}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,o,i]=e[s],l=!0,d=0;d<n.length;d++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(l=!1,i<a&&(a=i));if(l){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="%3Ckinapolson%3E.github.io/%3Creact-native-expo-todo%3E/",(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,l,d]=n,c=0;if(a.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(d)var s=d(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(s)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[113],(()=>r(757)));n=r.O(n)})();
//# sourceMappingURL=main.5b30a515.js.map