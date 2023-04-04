(()=>{var e={9892:(e,t,r)=>{"use strict";var n=r(210),o=r(1924),i=n("%TypeError%"),s=r(9582),a=r(317),l=r(4741),u=r(9739),c=r(4653),p=r(9058),d=r(561),h=r(9981),f=o("String.prototype.split"),m=Object("a"),y="a"!==m[0]||!(0 in m);e.exports=function(e){var t,r=p(this),n=y&&h(this)?f(this,""):r,o=c(n);if(!u(e))throw new i("Array.prototype.forEach callback must be a function");arguments.length>1&&(t=arguments[1]);for(var m=0;m<o;){var g=d(m),v=l(n,g);if(v){var b=a(n,g);s(e,t,[b,m,n])}m+=1}}},2026:(e,t,r)=>{"use strict";var n=r(4289),o=r(5559),i=r(1924),s=r(6378),a=r(9892),l=r(9306),u=l(),c=r(1143),p=i("Array.prototype.slice"),d=o.apply(u),h=function(e,t){return s(e),d(e,p(arguments,1))};n(h,{getPolyfill:l,implementation:a,shim:c}),e.exports=h},9306:(e,t,r)=>{"use strict";var n=r(2868),o=r(9892);e.exports=function(){var e=Array.prototype.forEach;return n(e)?e:o}},1143:(e,t,r)=>{"use strict";var n=r(4289),o=r(9306);e.exports=function(){var e=o();return n(Array.prototype,{forEach:e},{forEach:function(){return Array.prototype.forEach!==e}}),e}},1924:(e,t,r)=>{"use strict";var n=r(210),o=r(5559),i=o(n("String.prototype.indexOf"));e.exports=function(e,t){var r=n(e,!!t);return"function"==typeof r&&i(e,".prototype.")>-1?o(r):r}},5559:(e,t,r)=>{"use strict";var n=r(8612),o=r(210),i=o("%Function.prototype.apply%"),s=o("%Function.prototype.call%"),a=o("%Reflect.apply%",!0)||n.call(s,i),l=o("%Object.getOwnPropertyDescriptor%",!0),u=o("%Object.defineProperty%",!0),c=o("%Math.max%");if(u)try{u({},"a",{value:1})}catch(e){u=null}e.exports=function(e){var t=a(n,s,arguments);if(l&&u){var r=l(t,"length");r.configurable&&u(t,"length",{value:1+c(0,e.length-(arguments.length-1))})}return t};var p=function(){return a(n,i,arguments)};u?u(e.exports,"apply",{value:p}):e.exports.apply=p},7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",s="hour",a="day",l="week",u="month",c="quarter",p="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:g,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+g(n,2,"0")+":"+g(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,u),i=r-o<0,s=t.clone().add(n+(i?-1:1),u);return+(-(n+(r-o)/(i?o-s:s-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:p,w:l,d:a,D:d,h:s,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",_={};_[b]=y;var S=function(e){return e instanceof E},w=function(e,t,r){var n;if(!e)return b;if("string"==typeof e)_[e]&&(n=e),t&&(_[e]=t,n=e);else{var o=e.name;_[o]=e,n=o}return!r&&n&&(b=n),n||!r&&b},x=function(e,t){if(S(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new E(r)},k=v;k.l=w,k.i=S,k.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function y(e){this.$L=w(e.locale,null,!0),this.parse(e)}var g=y.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(f);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return k},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},g.isAfter=function(e,t){return x(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<x(e)},g.$g=function(e,t,r){return k.u(e)?this[t]:this.set(r,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var r=this,n=!!k.u(t)||t,c=k.p(e),h=function(e,t){var o=k.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(a)},f=function(e,t){return k.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,y=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case p:return n?h(1,0):h(31,11);case u:return n?h(1,y):h(0,y+1);case l:var b=this.$locale().weekStart||0,_=(m<b?m+7:m)-b;return h(n?g-_:g+(6-_),y);case a:case d:return f(v+"Hours",0);case s:return f(v+"Minutes",1);case i:return f(v+"Seconds",2);case o:return f(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var r,l=k.p(e),c="set"+(this.$u?"UTC":""),h=(r={},r[a]=c+"Date",r[d]=c+"Date",r[u]=c+"Month",r[p]=c+"FullYear",r[s]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],f=l===a?this.$D+(t-this.$W):t;if(l===u||l===p){var m=this.clone().set(d,1);m.$d[h](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[k.p(e)]()},g.add=function(n,c){var d,h=this;n=Number(n);var f=k.p(c),m=function(e){var t=x(h);return k.w(t.date(t.date()+Math.round(e*n)),h)};if(f===u)return this.set(u,this.$M+n);if(f===p)return this.set(p,this.$y+n);if(f===a)return m(1);if(f===l)return m(7);var y=(d={},d[i]=t,d[s]=r,d[o]=e,d)[f]||1,g=this.$d.getTime()+n*y;return k.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this;if(!this.isValid())return h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",n=k.z(this),o=this.$locale(),i=this.$H,s=this.$m,a=this.$M,l=o.weekdays,u=o.months,c=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].substr(0,i)},p=function(e){return k.s(i%12||12,e,"0")},d=o.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:k.s(a+1,2,"0"),MMM:c(o.monthsShort,a,u,3),MMMM:c(u,a),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:c(o.weekdaysMin,this.$W,l,2),ddd:c(o.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:k.s(i,2,"0"),h:p(1),hh:p(2),a:d(i,s,!0),A:d(i,s,!1),m:String(s),mm:k.s(s,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:n};return r.replace(m,(function(e,t){return t||f[e]||n.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,d,h){var f,m=k.p(d),y=x(n),g=(y.utcOffset()-this.utcOffset())*t,v=this-y,b=k.m(this,y);return b=(f={},f[p]=b/12,f[u]=b,f[c]=b/3,f[l]=(v-g)/6048e5,f[a]=(v-g)/864e5,f[s]=v/r,f[i]=v/t,f[o]=v/e,f)[m]||v,h?b:k.a(b)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return _[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=w(e,t,!0);return n&&(r.$L=n),r},g.clone=function(){return k.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},y}(),A=E.prototype;return x.prototype=A,[["$ms",n],["$s",o],["$m",i],["$H",s],["$W",a],["$M",u],["$y",p],["$D",d]].forEach((function(e){A[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,E,x),e.$i=!0),x},x.locale=w,x.isDayjs=S,x.unix=function(e){return x(1e3*e)},x.en=_[b],x.Ls=_,x.p={},x}()},4289:(e,t,r)=>{"use strict";var n=r(2215),o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,s=Array.prototype.concat,a=Object.defineProperty,l=a&&function(){var e={};try{for(var t in a(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(e){return!1}}(),u=function(e,t,r,n){var o;(!(t in e)||"function"==typeof(o=n)&&"[object Function]"===i.call(o)&&n())&&(l?a(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},c=function(e,t){var r=arguments.length>2?arguments[2]:{},i=n(t);o&&(i=s.call(i,Object.getOwnPropertySymbols(t)));for(var a=0;a<i.length;a+=1)u(e,i[a],t[i[a]],r[i[a]])};c.supportsDescriptors=!!l,e.exports=c},9582:(e,t,r)=>{"use strict";var n=r(210),o=r(1924),i=n("%TypeError%"),s=r(9340),a=n("%Reflect.apply%",!0)||o("%Function.prototype.apply%");e.exports=function(e,t){var r=arguments.length>2?arguments[2]:[];if(!s(r))throw new i("Assertion failed: optional `argumentsList`, if provided, must be a List");return a(e,t,r)}},317:(e,t,r)=>{"use strict";var n=r(210)("%TypeError%"),o=r(631),i=r(4220),s=r(4300);e.exports=function(e,t){if("Object"!==s(e))throw new n("Assertion failed: Type(O) is not Object");if(!i(t))throw new n("Assertion failed: IsPropertyKey(P) is not true, got "+o(t));return e[t]}},4741:(e,t,r)=>{"use strict";var n=r(210)("%TypeError%"),o=r(4220),i=r(4300);e.exports=function(e,t){if("Object"!==i(e))throw new n("Assertion failed: `O` must be an Object");if(!o(t))throw new n("Assertion failed: `P` must be a Property Key");return t in e}},9340:(e,t,r)=>{"use strict";var n=r(210)("%Array%"),o=!n.isArray&&r(1924)("Object.prototype.toString");e.exports=n.isArray||function(e){return"[object Array]"===o(e)}},9739:(e,t,r)=>{"use strict";e.exports=r(5320)},4220:e=>{"use strict";e.exports=function(e){return"string"==typeof e||"symbol"==typeof e}},4653:(e,t,r)=>{"use strict";var n=r(210)("%TypeError%"),o=r(317),i=r(4840),s=r(4300);e.exports=function(e){if("Object"!==s(e))throw new n("Assertion failed: `obj` must be an Object");return i(o(e,"length"))}},6378:(e,t,r)=>{"use strict";e.exports=r(8631)},8974:(e,t,r)=>{"use strict";var n=r(7195),o=r(9157);e.exports=function(e){var t=o(e);return 0!==t&&(t=n(t)),0===t?0:t}},4840:(e,t,r)=>{"use strict";var n=r(5376),o=r(8974);e.exports=function(e){var t=o(e);return t<=0?0:t>n?n:t}},9157:(e,t,r)=>{"use strict";var n=r(210),o=n("%TypeError%"),i=n("%Number%"),s=n("%RegExp%"),a=n("%parseInt%"),l=r(1924),u=r(1652),c=r(3126),p=l("String.prototype.slice"),d=u(/^0b[01]+$/i),h=u(/^0o[0-7]+$/i),f=u(/^[-+]0x[0-9a-f]+$/i),m=u(new s("["+["\x85","\u200b","\ufffe"].join("")+"]","g")),y=["\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join(""),g=new RegExp("(^["+y+"]+)|(["+y+"]+$)","g"),v=l("String.prototype.replace"),b=r(2159);e.exports=function e(t){var r=c(t)?t:b(t,i);if("symbol"==typeof r)throw new o("Cannot convert a Symbol value to a number");if("bigint"==typeof r)throw new o("Conversion from 'BigInt' to 'number' is not allowed.");if("string"==typeof r){if(d(r))return e(a(p(r,2),2));if(h(r))return e(a(p(r,2),8));if(m(r)||f(r))return NaN;var n=function(e){return v(e,g,"")}(r);if(n!==r)return e(n)}return i(r)}},9058:(e,t,r)=>{"use strict";var n=r(210)("%Object%"),o=r(6378);e.exports=function(e){return o(e),n(e)}},2159:(e,t,r)=>{"use strict";var n=r(1503);e.exports=function(e){return arguments.length>1?n(e,arguments[1]):n(e)}},561:(e,t,r)=>{"use strict";var n=r(210),o=n("%String%"),i=n("%TypeError%");e.exports=function(e){if("symbol"==typeof e)throw new i("Cannot convert a Symbol value to a string");return o(e)}},4300:(e,t,r)=>{"use strict";var n=r(1276);e.exports=function(e){return"symbol"==typeof e?"Symbol":"bigint"==typeof e?"BigInt":n(e)}},8631:(e,t,r)=>{"use strict";var n=r(210)("%TypeError%");e.exports=function(e,t){if(null==e)throw new n(t||"Cannot call method on "+e);return e}},7195:(e,t,r)=>{"use strict";var n=r(2683),o=r(9711),i=r(7196),s=r(1214),a=r(3060),l=r(4099);e.exports=function(e){var t=i(e);return s(t)?0:0!==t&&a(t)?l(t)*o(n(t)):t}},7196:(e,t,r)=>{"use strict";var n=r(1318);e.exports=function(e){var t=n(e,Number);if("string"!=typeof t)return+t;var r=t.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g,"");return/^0[ob]|^[+-]0x/.test(r)?NaN:+r}},1318:(e,t,r)=>{"use strict";e.exports=r(2116)},1276:e=>{"use strict";e.exports=function(e){return null===e?"Null":void 0===e?"Undefined":"function"==typeof e||"object"==typeof e?"Object":"number"==typeof e?"Number":"boolean"==typeof e?"Boolean":"string"==typeof e?"String":void 0}},2683:(e,t,r)=>{"use strict";var n=r(210)("%Math.abs%");e.exports=function(e){return n(e)}},9711:e=>{"use strict";var t=Math.floor;e.exports=function(e){return t(e)}},3060:e=>{"use strict";var t=Number.isNaN||function(e){return e!=e};e.exports=Number.isFinite||function(e){return"number"==typeof e&&!t(e)&&e!==1/0&&e!==-1/0}},1214:e=>{"use strict";e.exports=Number.isNaN||function(e){return e!=e}},3126:e=>{"use strict";e.exports=function(e){return null===e||"function"!=typeof e&&"object"!=typeof e}},5376:(e,t,r)=>{"use strict";var n=r(210),o=n("%Math%"),i=n("%Number%");e.exports=i.MAX_SAFE_INTEGER||o.pow(2,53)-1},1652:(e,t,r)=>{"use strict";var n=r(210)("RegExp.prototype.test"),o=r(5559);e.exports=function(e){return o(n,e)}},4099:e=>{"use strict";e.exports=function(e){return e>=0?1:-1}},2868:e=>{e.exports=function(e){var t=!0,r=!0,n=!1;if("function"==typeof e){try{e.call("f",(function(e,r,n){"object"!=typeof n&&(t=!1)})),e.call([null],(function(){"use strict";r="string"==typeof this}),"x")}catch(e){n=!0}return!n&&t&&r}return!1}},1503:(e,t,r)=>{"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator,o=r(4149),i=r(5320),s=r(8923),a=r(2636),l=function(e,t){if(null==e)throw new TypeError("Cannot call method on "+e);if("string"!=typeof t||"number"!==t&&"string"!==t)throw new TypeError('hint must be "string" or "number"');var r,n,s,a="string"===t?["toString","valueOf"]:["valueOf","toString"];for(s=0;s<a.length;++s)if(r=e[a[s]],i(r)&&(n=r.call(e),o(n)))return n;throw new TypeError("No default value")},u=function(e,t){var r=e[t];if(null!=r){if(!i(r))throw new TypeError(r+" returned for property "+t+" of object "+e+" is not a function");return r}};e.exports=function(e){if(o(e))return e;var t,r="default";if(arguments.length>1&&(arguments[1]===String?r="string":arguments[1]===Number&&(r="number")),n&&(Symbol.toPrimitive?t=u(e,Symbol.toPrimitive):a(e)&&(t=Symbol.prototype.valueOf)),void 0!==t){var i=t.call(e,r);if(o(i))return i;throw new TypeError("unable to convert exotic object to primitive")}return"default"===r&&(s(e)||a(e))&&(r="string"),l(e,"default"===r?"number":r)}},2116:(e,t,r)=>{"use strict";var n=Object.prototype.toString,o=r(4149),i=r(5320),s=function(e){var t;if((t=arguments.length>1?arguments[1]:"[object Date]"===n.call(e)?String:Number)===String||t===Number){var r,s,a=t===String?["toString","valueOf"]:["valueOf","toString"];for(s=0;s<a.length;++s)if(i(e[a[s]])&&(r=e[a[s]](),o(r)))return r;throw new TypeError("No default value")}throw new TypeError("invalid [[DefaultValue]] hint supplied")};e.exports=function(e){return o(e)?e:arguments.length>1?s(e,arguments[1]):s(e)}},4149:e=>{"use strict";e.exports=function(e){return null===e||"function"!=typeof e&&"object"!=typeof e}},7648:e=>{"use strict";var t="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,n=Object.prototype.toString,o="[object Function]";e.exports=function(e){var i=this;if("function"!=typeof i||n.call(i)!==o)throw new TypeError(t+i);for(var s,a=r.call(arguments,1),l=function(){if(this instanceof s){var t=i.apply(this,a.concat(r.call(arguments)));return Object(t)===t?t:this}return i.apply(e,a.concat(r.call(arguments)))},u=Math.max(0,i.length-a.length),c=[],p=0;p<u;p++)c.push("$"+p);if(s=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(l),i.prototype){var d=function(){};d.prototype=i.prototype,s.prototype=new d,d.prototype=null}return s}},8612:(e,t,r)=>{"use strict";var n=r(7648);e.exports=Function.prototype.bind||n},210:(e,t,r)=>{"use strict";var n,o=SyntaxError,i=Function,s=TypeError,a=function(e){try{return i('"use strict"; return ('+e+").constructor;")()}catch(e){}},l=Object.getOwnPropertyDescriptor;if(l)try{l({},"")}catch(e){l=null}var u=function(){throw new s},c=l?function(){try{return u}catch(e){try{return l(arguments,"callee").get}catch(e){return u}}}():u,p=r(1405)(),d=Object.getPrototypeOf||function(e){return e.__proto__},h={},f="undefined"==typeof Uint8Array?n:d(Uint8Array),m={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":p?d([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":h,"%AsyncGenerator%":h,"%AsyncGeneratorFunction%":h,"%AsyncIteratorPrototype%":h,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":h,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":p?d(d([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&p?d((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&p?d((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":p?d(""[Symbol.iterator]()):n,"%Symbol%":p?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":c,"%TypedArray%":f,"%TypeError%":s,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet},y=function e(t){var r;if("%AsyncFunction%"===t)r=a("async function () {}");else if("%GeneratorFunction%"===t)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=a("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&(r=d(o.prototype))}return m[t]=r,r},g={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},v=r(8612),b=r(7642),_=v.call(Function.call,Array.prototype.concat),S=v.call(Function.apply,Array.prototype.splice),w=v.call(Function.call,String.prototype.replace),x=v.call(Function.call,String.prototype.slice),k=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,E=/\\(\\)?/g,A=function(e){var t=x(e,0,1),r=x(e,-1);if("%"===t&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return w(e,k,(function(e,t,r,o){n[n.length]=r?w(o,E,"$1"):t||e})),n},P=function(e,t){var r,n=e;if(b(g,n)&&(n="%"+(r=g[n])[0]+"%"),b(m,n)){var i=m[n];if(i===h&&(i=y(n)),void 0===i&&!t)throw new s("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:i}}throw new o("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new s('"allowMissing" argument must be a boolean');var r=A(e),n=r.length>0?r[0]:"",i=P("%"+n+"%",t),a=i.name,u=i.value,c=!1,p=i.alias;p&&(n=p[0],S(r,_([0,1],p)));for(var d=1,h=!0;d<r.length;d+=1){var f=r[d],y=x(f,0,1),g=x(f,-1);if(('"'===y||"'"===y||"`"===y||'"'===g||"'"===g||"`"===g)&&y!==g)throw new o("property names with quotes must have matching quotes");if("constructor"!==f&&h||(c=!0),b(m,a="%"+(n+="."+f)+"%"))u=m[a];else if(null!=u){if(!(f in u)){if(!t)throw new s("base intrinsic for "+e+" exists, but the property is not available.");return}if(l&&d+1>=r.length){var v=l(u,f);u=(h=!!v)&&"get"in v&&!("originalValue"in v.get)?v.get:u[f]}else h=b(u,f),u=u[f];h&&!c&&(m[a]=u)}}return u}},1405:(e,t,r)=>{"use strict";var n="undefined"!=typeof Symbol&&Symbol,o=r(5419);e.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&o())))}},5419:e=>{"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},6410:(e,t,r)=>{"use strict";var n=r(5419);e.exports=function(){return n()&&!!Symbol.toStringTag}},7642:(e,t,r)=>{"use strict";var n=r(8612);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},5320:e=>{"use strict";var t,r,n=Function.prototype.toString,o="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof o&&"function"==typeof Object.defineProperty)try{t=Object.defineProperty({},"length",{get:function(){throw r}}),r={},o((function(){throw 42}),null,t)}catch(e){e!==r&&(o=null)}else o=null;var i=/^\s*class\b/,s=function(e){try{var t=n.call(e);return i.test(t)}catch(e){return!1}},a=Object.prototype.toString,l="function"==typeof Symbol&&!!Symbol.toStringTag,u="object"==typeof document&&void 0===document.all&&void 0!==document.all?document.all:{};e.exports=o?function(e){if(e===u)return!0;if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;if("function"==typeof e&&!e.prototype)return!0;try{o(e,null,t)}catch(e){if(e!==r)return!1}return!s(e)}:function(e){if(e===u)return!0;if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;if("function"==typeof e&&!e.prototype)return!0;if(l)return function(e){try{return!s(e)&&(n.call(e),!0)}catch(e){return!1}}(e);if(s(e))return!1;var t=a.call(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}},8923:(e,t,r)=>{"use strict";var n=Date.prototype.getDay,o=Object.prototype.toString,i=r(6410)();e.exports=function(e){return"object"==typeof e&&null!==e&&(i?function(e){try{return n.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o.call(e))}},9981:(e,t,r)=>{"use strict";var n=String.prototype.valueOf,o=Object.prototype.toString,i=r(6410)();e.exports=function(e){return"string"==typeof e||"object"==typeof e&&(i?function(e){try{return n.call(e),!0}catch(e){return!1}}(e):"[object String]"===o.call(e))}},2636:(e,t,r)=>{"use strict";var n=Object.prototype.toString;if(r(1405)()){var o=Symbol.prototype.toString,i=/^Symbol\(.*\)$/;e.exports=function(e){if("symbol"==typeof e)return!0;if("[object Symbol]"!==n.call(e))return!1;try{return function(e){return"symbol"==typeof e.valueOf()&&i.test(o.call(e))}(e)}catch(e){return!1}}}else e.exports=function(e){return!1}},5026:(e,t,r)=>{"use strict";r.r(t),r.d(t,{customElement:()=>n,eventOptions:()=>l,property:()=>i,query:()=>u,queryAll:()=>c,queryAssignedNodes:()=>f,queryAsync:()=>p,state:()=>s});const n=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),o=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function i(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):o(e,t)}function s(e){return i({...e,state:!0,attribute:!1})}const a=({finisher:e,descriptor:t})=>(r,n)=>{var o;if(void 0===n){const n=null!==(o=r.originalKey)&&void 0!==o?o:r.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(r.key)}:{...r,key:n};return null!=e&&(i.finisher=function(t){e(t,n)}),i}{const o=r.constructor;void 0!==t&&Object.defineProperty(r,n,t(n)),null==e||e(o,n)}};function l(e){return a({finisher:(t,r)=>{Object.assign(t.prototype[r],e)}})}function u(e,t){return a({descriptor:r=>{const n={get(){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():"__"+r;n.get=function(){var r;return void 0===this[t]&&(this[t]=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)),this[t]}}return n}})}function c(e){return a({descriptor:t=>({get(){var t;return null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e)},enumerable:!0,configurable:!0})})}function p(e){return a({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}const d=Element.prototype,h=d.msMatchesSelector||d.webkitMatchesSelector;function f(e="",t=!1,r=""){return a({descriptor:n=>({get(){var n,o;const i="slot"+(e?`[name=${e}]`:":not([name])");let s=null===(o=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(i))||void 0===o?void 0:o.assignedNodes({flatten:t});return s&&r&&(s=s.filter((e=>e.nodeType===Node.ELEMENT_NODE&&(e.matches?e.matches(r):h.call(e,r))))),s},enumerable:!0,configurable:!0})})}},6451:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Directive:()=>i,PartType:()=>n,directive:()=>o});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=e=>(...t)=>({_$litDirective$:e,values:t});class i{constructor(e){}T(e,t,r){this.\u03a3dt=e,this.M=t,this.\u03a3ct=r}S(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3558:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CSSResult:()=>i,LitElement:()=>he,ReactiveElement:()=>b,UpdatingElement:()=>de,_\u03a3:()=>ie,_\u03a6:()=>fe,adoptStyles:()=>c,css:()=>u,defaultConverter:()=>y,getCompatibleStyle:()=>p,html:()=>U,noChange:()=>H,notEqual:()=>g,nothing:()=>q,render:()=>W,supportsAdoptingStyleSheets:()=>n,svg:()=>V,unsafeCSS:()=>l});const n=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol();class i{constructor(e,t){if(t!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return n&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const s=new Map,a=e=>{let t=s.get(e);return void 0===t&&s.set(e,t=new i(e,o)),t},l=e=>a("string"==typeof e?e:e+""),u=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,n)=>t+(e=>{if(e instanceof i)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return a(r)},c=(e,t)=>{n?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style");r.textContent=t.cssText,e.appendChild(r)}))},p=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return l(t)})(e):e;var d,h,f,m;const y={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},g=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:g};class b extends HTMLElement{constructor(){super(),this.\u03a0i=new Map,this.\u03a0o=void 0,this.\u03a0l=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.\u03a0h=null,this.u()}static addInitializer(e){var t;null!==(t=this.v)&&void 0!==t||(this.v=[]),this.v.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const n=this.\u03a0p(r,t);void 0!==n&&(this.\u03a0m.set(n,r),e.push(n))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.\u03a0m=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(p(e))}else void 0!==e&&t.push(p(e));return t}static \u03a0p(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this.\u03a0g=new Promise((e=>this.enableUpdating=e)),this.L=new Map,this.\u03a0_(),this.requestUpdate(),null===(e=this.constructor.v)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this.\u03a0U)&&void 0!==t?t:this.\u03a0U=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this.\u03a0U)||void 0===t||t.splice(this.\u03a0U.indexOf(e)>>>0,1)}\u03a0_(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this.\u03a0i.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this.\u03a0U)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})),this.\u03a0l&&(this.\u03a0l(),this.\u03a0o=this.\u03a0l=void 0)}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this.\u03a0U)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})),this.\u03a0o=new Promise((e=>this.\u03a0l=e))}attributeChangedCallback(e,t,r){this.K(e,r)}\u03a0j(e,t,r=v){var n,o;const i=this.constructor.\u03a0p(e,r);if(void 0!==i&&!0===r.reflect){const s=(null!==(o=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:y.toAttribute)(t,r.type);this.\u03a0h=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this.\u03a0h=null}}K(e,t){var r,n,o;const i=this.constructor,s=i.\u03a0m.get(e);if(void 0!==s&&this.\u03a0h!==s){const e=i.getPropertyOptions(s),a=e.converter,l=null!==(o=null!==(n=null===(r=a)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==o?o:y.fromAttribute;this.\u03a0h=s,this[s]=l(t,e.type),this.\u03a0h=null}}requestUpdate(e,t,r){let n=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||g)(this[e],t)?(this.L.has(e)||this.L.set(e,t),!0===r.reflect&&this.\u03a0h!==e&&(void 0===this.\u03a0k&&(this.\u03a0k=new Map),this.\u03a0k.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this.\u03a0g=this.\u03a0q())}async \u03a0q(){this.isUpdatePending=!0;try{for(await this.\u03a0g;this.\u03a0o;)await this.\u03a0o}catch(e){Promise.reject(e)}const e=this.performUpdate();return null!=e&&await e,!this.isUpdatePending}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this.\u03a0i&&(this.\u03a0i.forEach(((e,t)=>this[t]=e)),this.\u03a0i=void 0);let t=!1;const r=this.L;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this.\u03a0U)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this.\u03a0$()}catch(e){throw t=!1,this.\u03a0$(),e}t&&this.E(r)}willUpdate(e){}E(e){var t;null===(t=this.\u03a0U)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}\u03a0$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.\u03a0g}shouldUpdate(e){return!0}update(e){void 0!==this.\u03a0k&&(this.\u03a0k.forEach(((e,t)=>this.\u03a0j(t,this[t],e))),this.\u03a0k=void 0),this.\u03a0$()}updated(e){}firstUpdated(e){}}var _,S,w,x;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null===(h=(d=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(d,{ReactiveElement:b}),(null!==(f=(m=globalThis).reactiveElementVersions)&&void 0!==f?f:m.reactiveElementVersions=[]).push("1.0.0-rc.2");const k=globalThis.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,P="?"+A,O=`<${P}>`,j=document,C=(e="")=>j.createComment(e),R=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,I=e=>{var t;return L(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,M=/>/g,D=/>|[ \x09\n\x0c\r](?:([^\s"'>=/]+)([ \x09\n\x0c\r]*=[ \x09\n\x0c\r]*(?:[^ \x09\n\x0c\r"'`<>=]|("|')|))|$)/g,B=/'/g,F=/"/g,z=/^(?:script|style|textarea)$/i,$=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),U=$(1),V=$(2),H=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),K=new WeakMap,W=(e,t,r)=>{var n,o;const i=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:t;let s=i._$litPart$;if(void 0===s){const e=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:null;i._$litPart$=s=new X(t.insertBefore(C(),e),e,void 0,r)}return s.I(e),s},G=j.createTreeWalker(j,129,null,!1),J=(e,t)=>{const r=e.length-1,n=[];let o,i=2===t?"<svg>":"",s=T;for(let t=0;t<r;t++){const r=e[t];let a,l,u=-1,c=0;for(;c<r.length&&(s.lastIndex=c,l=s.exec(r),null!==l);)c=s.lastIndex,s===T?"!--"===l[1]?s=N:void 0!==l[1]?s=M:void 0!==l[2]?(z.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=D):void 0!==l[3]&&(s=D):s===D?">"===l[0]?(s=null!=o?o:T,u=-1):void 0===l[1]?u=-2:(u=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?D:'"'===l[3]?F:B):s===F||s===B?s=D:s===N||s===M?s=T:(s=D,o=void 0);const p=s===D&&e[t+1].startsWith("/>")?" ":"";i+=s===T?r+O:u>=0?(n.push(a),r.slice(0,u)+"$lit$"+r.slice(u)+A+p):r+A+(-2===u?(n.push(void 0),t):p)}const a=i+(e[r]||"<?>")+(2===t?"</svg>":"");return[void 0!==E?E.createHTML(a):a,n]};class Y{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,i=0;const s=e.length-1,a=this.parts,[l,u]=J(e,t);if(this.el=Y.createElement(l,r),G.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=G.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(A)){const r=u[i++];if(e.push(t),void 0!==r){const e=n.getAttribute(r.toLowerCase()+"$lit$").split(A),t=/([.?@])?(.*)/.exec(r);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?te:"?"===t[1]?re:"@"===t[1]?ne:ee})}else a.push({type:6,index:o})}for(const t of e)n.removeAttribute(t)}if(z.test(n.tagName)){const e=n.textContent.split(A),t=e.length-1;if(t>0){n.textContent=k?k.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],C()),G.nextNode(),a.push({type:2,index:++o});n.append(e[t],C())}}}else if(8===n.nodeType)if(n.data===P)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(A,e+1));)a.push({type:7,index:o}),e+=A.length-1}o++}}static createElement(e,t){const r=j.createElement("template");return r.innerHTML=e,r}}function Z(e,t,r=e,n){var o,i,s,a;if(t===H)return t;let l=void 0!==n?null===(o=r.\u03a3i)||void 0===o?void 0:o[n]:r.\u03a3o;const u=R(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==u&&(null===(i=null==l?void 0:l.O)||void 0===i||i.call(l,!1),void 0===u?l=void 0:(l=new u(e),l.T(e,r,n)),void 0!==n?(null!==(s=(a=r).\u03a3i)&&void 0!==s?s:a.\u03a3i=[])[n]=l:r.\u03a3o=l),void 0!==l&&(t=Z(e,l.S(e,t.values),l,n)),t}class Q{constructor(e,t){this.l=[],this.N=void 0,this.D=e,this.M=t}u(e){var t;const{el:{content:r},parts:n}=this.D,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:j).importNode(r,!0);G.currentNode=o;let i=G.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new X(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new oe(i,this,e)),this.l.push(t),l=n[++a]}s!==(null==l?void 0:l.index)&&(i=G.nextNode(),s++)}return o}v(e){let t=0;for(const r of this.l)void 0!==r&&(void 0!==r.strings?(r.I(e,r,t),t+=r.strings.length-2):r.I(e[t])),t++}}class X{constructor(e,t,r,n){this.type=2,this.N=void 0,this.A=e,this.B=t,this.M=r,this.options=n}setConnected(e){var t;null===(t=this.P)||void 0===t||t.call(this,e)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(e,t=this){e=Z(this,e,t),R(e)?e===q||null==e||""===e?(this.H!==q&&this.R(),this.H=q):e!==this.H&&e!==H&&this.m(e):void 0!==e._$litType$?this._(e):void 0!==e.nodeType?this.$(e):I(e)?this.g(e):this.m(e)}k(e,t=this.B){return this.A.parentNode.insertBefore(e,t)}$(e){this.H!==e&&(this.R(),this.H=this.k(e))}m(e){const t=this.A.nextSibling;null!==t&&3===t.nodeType&&(null===this.B?null===t.nextSibling:t===this.B.previousSibling)?t.data=e:this.$(j.createTextNode(e)),this.H=e}_(e){var t;const{values:r,_$litType$:n}=e,o="number"==typeof n?this.C(e):(void 0===n.el&&(n.el=Y.createElement(n.h,this.options)),n);if((null===(t=this.H)||void 0===t?void 0:t.D)===o)this.H.v(r);else{const e=new Q(o,this),t=e.u(this.options);e.v(r),this.$(t),this.H=e}}C(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Y(e)),t}g(e){L(this.H)||(this.H=[],this.R());const t=this.H;let r,n=0;for(const o of e)n===t.length?t.push(r=new X(this.k(C()),this.k(C()),this,this.options)):r=t[n],r.I(o),n++;n<t.length&&(this.R(r&&r.B.nextSibling,n),t.length=n)}R(e=this.A.nextSibling,t){var r;for(null===(r=this.P)||void 0===r||r.call(this,!1,!0,t);e&&e!==this.B;){const t=e.nextSibling;e.remove(),e=t}}}class ee{constructor(e,t,r,n,o){this.type=1,this.H=q,this.N=void 0,this.V=void 0,this.element=e,this.name=t,this.M=n,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this.H=Array(r.length-1).fill(q),this.strings=r):this.H=q}get tagName(){return this.element.tagName}I(e,t=this,r,n){const o=this.strings;let i=!1;if(void 0===o)e=Z(this,e,t,0),i=!R(e)||e!==this.H&&e!==H,i&&(this.H=e);else{const n=e;let s,a;for(e=o[0],s=0;s<o.length-1;s++)a=Z(this,n[r+s],t,s),a===H&&(a=this.H[s]),i||(i=!R(a)||a!==this.H[s]),a===q?e=q:e!==q&&(e+=(null!=a?a:"")+o[s+1]),this.H[s]=a}i&&!n&&this.W(e)}W(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class te extends ee{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===q?void 0:e}}class re extends ee{constructor(){super(...arguments),this.type=4}W(e){e&&e!==q?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class ne extends ee{constructor(){super(...arguments),this.type=5}I(e,t=this){var r;if((e=null!==(r=Z(this,e,t,0))&&void 0!==r?r:q)===H)return;const n=this.H,o=e===q&&n!==q||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==q&&(n===q||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this.H=e}handleEvent(e){var t,r;"function"==typeof this.H?this.H.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this.H.handleEvent(e)}}class oe{constructor(e,t,r){this.element=e,this.type=6,this.N=void 0,this.V=void 0,this.M=t,this.options=r}I(e){Z(this,e)}}const ie={Z:"$lit$",U:A,Y:P,q:1,X:J,tt:Q,it:I,st:Z,et:X,ot:ee,nt:re,rt:ne,lt:te,ht:oe};var se,ae,le,ue,ce,pe;null===(S=(_=globalThis).litHtmlPlatformSupport)||void 0===S||S.call(_,Y,X),(null!==(w=(x=globalThis).litHtmlVersions)&&void 0!==w?w:x.litHtmlVersions=[]).push("2.0.0-rc.3");const de=b;(null!==(se=(pe=globalThis).litElementVersions)&&void 0!==se?se:pe.litElementVersions=[]).push("3.0.0-rc.2");class he extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.\u03a6t=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();super.update(e),this.\u03a6t=W(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this.\u03a6t)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.\u03a6t)||void 0===e||e.setConnected(!1)}render(){return H}}he.finalized=!0,he._$litElement$=!0,null===(le=(ae=globalThis).litElementHydrateSupport)||void 0===le||le.call(ae,{LitElement:he}),null===(ce=(ue=globalThis).litElementPlatformSupport)||void 0===ce||ce.call(ue,{LitElement:he});const fe={K:(e,t,r)=>{e.K(t,r)},L:e=>e.L}},3465:(e,t,r)=>{e=r.nmd(e);var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",s="[object Boolean]",a="[object Date]",l="[object Function]",u="[object GeneratorFunction]",c="[object Map]",p="[object Number]",d="[object Object]",h="[object Promise]",f="[object RegExp]",m="[object Set]",y="[object String]",g="[object Symbol]",v="[object WeakMap]",b="[object ArrayBuffer]",_="[object DataView]",S="[object Float32Array]",w="[object Float64Array]",x="[object Int8Array]",k="[object Int16Array]",E="[object Int32Array]",A="[object Uint8Array]",P="[object Uint8ClampedArray]",O="[object Uint16Array]",j="[object Uint32Array]",C=/\w*$/,R=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,I={};I[i]=I["[object Array]"]=I[b]=I[_]=I[s]=I[a]=I[S]=I[w]=I[x]=I[k]=I[E]=I[c]=I[p]=I[d]=I[f]=I[m]=I[y]=I[g]=I[A]=I[P]=I[O]=I[j]=!0,I["[object Error]"]=I[l]=I[v]=!1;var T="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,N="object"==typeof self&&self&&self.Object===Object&&self,M=T||N||Function("return this")(),D=t&&!t.nodeType&&t,B=D&&e&&!e.nodeType&&e,F=B&&B.exports===D;function z(e,t){return e.set(t[0],t[1]),e}function $(e,t){return e.add(t),e}function U(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function V(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function H(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function q(e,t){return function(r){return e(t(r))}}function K(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var W,G=Array.prototype,J=Function.prototype,Y=Object.prototype,Z=M["__core-js_shared__"],Q=(W=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"",X=J.toString,ee=Y.hasOwnProperty,te=Y.toString,re=RegExp("^"+X.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ne=F?M.Buffer:void 0,oe=M.Symbol,ie=M.Uint8Array,se=q(Object.getPrototypeOf,Object),ae=Object.create,le=Y.propertyIsEnumerable,ue=G.splice,ce=Object.getOwnPropertySymbols,pe=ne?ne.isBuffer:void 0,de=q(Object.keys,Object),he=Be(M,"DataView"),fe=Be(M,"Map"),me=Be(M,"Promise"),ye=Be(M,"Set"),ge=Be(M,"WeakMap"),ve=Be(Object,"create"),be=Ve(he),_e=Ve(fe),Se=Ve(me),we=Ve(ye),xe=Ve(ge),ke=oe?oe.prototype:void 0,Ee=ke?ke.valueOf:void 0;function Ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Pe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Oe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function je(e){this.__data__=new Pe(e)}function Ce(e,t){var r=qe(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Ke(e)}(e)&&ee.call(e,"callee")&&(!le.call(e,"callee")||te.call(e)==i)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var s in e)!t&&!ee.call(e,s)||o&&("length"==s||$e(s,n))||r.push(s);return r}function Re(e,t,r){var n=e[t];ee.call(e,t)&&He(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Le(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1}function Ie(e,t,r,n,o,h,v){var R;if(n&&(R=h?n(e,o,h,v):n(e)),void 0!==R)return R;if(!Je(e))return e;var L=qe(e);if(L){if(R=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&ee.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,R)}else{var T=ze(e),N=T==l||T==u;if(We(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(T==d||T==i||N&&!h){if(V(e))return h?e:{};if(R=function(e){return"function"!=typeof e.constructor||Ue(e)?{}:(t=se(e),Je(t)?ae(t):{});var t}(N?{}:e),!t)return function(e,t){return Me(e,Fe(e),t)}(e,function(e,t){return e&&Me(t,Ye(t),e)}(R,e))}else{if(!I[T])return h?e:{};R=function(e,t,r,n){var o=e.constructor;switch(t){case b:return Ne(e);case s:case a:return new o(+e);case _:return function(e,t){var r=t?Ne(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case S:case w:case x:case k:case E:case A:case P:case O:case j:return function(e,t){var r=t?Ne(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case c:return function(e,t,r){return U(t?r(H(e),!0):H(e),z,new e.constructor)}(e,n,r);case p:case y:return new o(e);case f:return function(e){var t=new e.constructor(e.source,C.exec(e));return t.lastIndex=e.lastIndex,t}(e);case m:return function(e,t,r){return U(t?r(K(e),!0):K(e),$,new e.constructor)}(e,n,r);case g:return i=e,Ee?Object(Ee.call(i)):{}}var i}(e,T,Ie,t)}}v||(v=new je);var M=v.get(e);if(M)return M;if(v.set(e,R),!L)var D=r?function(e){return function(e,t,r){var n=t(e);return qe(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ye,Fe)}(e):Ye(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(D||e,(function(o,i){D&&(o=e[i=o]),Re(R,i,Ie(o,t,r,n,i,e,v))})),R}function Te(e){return!(!Je(e)||(t=e,Q&&Q in t))&&(Ge(e)||V(e)?re:R).test(Ve(e));var t}function Ne(e){var t=new e.constructor(e.byteLength);return new ie(t).set(new ie(e)),t}function Me(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var s=t[o],a=n?n(r[s],e[s],s,r,e):void 0;Re(r,s,void 0===a?e[s]:a)}return r}function De(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function Be(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Te(r)?r:void 0}Ae.prototype.clear=function(){this.__data__=ve?ve(null):{}},Ae.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Ae.prototype.get=function(e){var t=this.__data__;if(ve){var r=t[e];return r===n?void 0:r}return ee.call(t,e)?t[e]:void 0},Ae.prototype.has=function(e){var t=this.__data__;return ve?void 0!==t[e]:ee.call(t,e)},Ae.prototype.set=function(e,t){return this.__data__[e]=ve&&void 0===t?n:t,this},Pe.prototype.clear=function(){this.__data__=[]},Pe.prototype.delete=function(e){var t=this.__data__,r=Le(t,e);return!(r<0)&&(r==t.length-1?t.pop():ue.call(t,r,1),!0)},Pe.prototype.get=function(e){var t=this.__data__,r=Le(t,e);return r<0?void 0:t[r][1]},Pe.prototype.has=function(e){return Le(this.__data__,e)>-1},Pe.prototype.set=function(e,t){var r=this.__data__,n=Le(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Oe.prototype.clear=function(){this.__data__={hash:new Ae,map:new(fe||Pe),string:new Ae}},Oe.prototype.delete=function(e){return De(this,e).delete(e)},Oe.prototype.get=function(e){return De(this,e).get(e)},Oe.prototype.has=function(e){return De(this,e).has(e)},Oe.prototype.set=function(e,t){return De(this,e).set(e,t),this},je.prototype.clear=function(){this.__data__=new Pe},je.prototype.delete=function(e){return this.__data__.delete(e)},je.prototype.get=function(e){return this.__data__.get(e)},je.prototype.has=function(e){return this.__data__.has(e)},je.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Pe){var n=r.__data__;if(!fe||n.length<199)return n.push([e,t]),this;r=this.__data__=new Oe(n)}return r.set(e,t),this};var Fe=ce?q(ce,Object):function(){return[]},ze=function(e){return te.call(e)};function $e(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||L.test(e))&&e>-1&&e%1==0&&e<t}function Ue(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Y)}function Ve(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function He(e,t){return e===t||e!=e&&t!=t}(he&&ze(new he(new ArrayBuffer(1)))!=_||fe&&ze(new fe)!=c||me&&ze(me.resolve())!=h||ye&&ze(new ye)!=m||ge&&ze(new ge)!=v)&&(ze=function(e){var t=te.call(e),r=t==d?e.constructor:void 0,n=r?Ve(r):void 0;if(n)switch(n){case be:return _;case _e:return c;case Se:return h;case we:return m;case xe:return v}return t});var qe=Array.isArray;function Ke(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}(e.length)&&!Ge(e)}var We=pe||function(){return!1};function Ge(e){var t=Je(e)?te.call(e):"";return t==l||t==u}function Je(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ye(e){return Ke(e)?Ce(e):function(e){if(!Ue(e))return de(e);var t=[];for(var r in Object(e))ee.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return Ie(e,!0,!0)}},2307:(e,t,r)=>{e=r.nmd(e);var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",s="[object Array]",a="[object Boolean]",l="[object Date]",u="[object Error]",c="[object Function]",p="[object Map]",d="[object Number]",h="[object Object]",f="[object Promise]",m="[object RegExp]",y="[object Set]",g="[object String]",v="[object Symbol]",b="[object WeakMap]",_="[object ArrayBuffer]",S="[object DataView]",w=/^\[object .+?Constructor\]$/,x=/^(?:0|[1-9]\d*)$/,k={};k["[object Float32Array]"]=k["[object Float64Array]"]=k["[object Int8Array]"]=k["[object Int16Array]"]=k["[object Int32Array]"]=k["[object Uint8Array]"]=k["[object Uint8ClampedArray]"]=k["[object Uint16Array]"]=k["[object Uint32Array]"]=!0,k[i]=k[s]=k[_]=k[a]=k[S]=k[l]=k[u]=k[c]=k[p]=k[d]=k[h]=k[m]=k[y]=k[g]=k[b]=!1;var E="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,A="object"==typeof self&&self&&self.Object===Object&&self,P=E||A||Function("return this")(),O=t&&!t.nodeType&&t,j=O&&e&&!e.nodeType&&e,C=j&&j.exports===O,R=C&&E.process,L=function(){try{return R&&R.binding&&R.binding("util")}catch(e){}}(),I=L&&L.isTypedArray;function T(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function N(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function M(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var D,B,F,z=Array.prototype,$=Function.prototype,U=Object.prototype,V=P["__core-js_shared__"],H=$.toString,q=U.hasOwnProperty,K=(D=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+D:"",W=U.toString,G=RegExp("^"+H.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=C?P.Buffer:void 0,Y=P.Symbol,Z=P.Uint8Array,Q=U.propertyIsEnumerable,X=z.splice,ee=Y?Y.toStringTag:void 0,te=Object.getOwnPropertySymbols,re=J?J.isBuffer:void 0,ne=(B=Object.keys,F=Object,function(e){return B(F(e))}),oe=Le(P,"DataView"),ie=Le(P,"Map"),se=Le(P,"Promise"),ae=Le(P,"Set"),le=Le(P,"WeakMap"),ue=Le(Object,"create"),ce=Me(oe),pe=Me(ie),de=Me(se),he=Me(ae),fe=Me(le),me=Y?Y.prototype:void 0,ye=me?me.valueOf:void 0;function ge(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ve(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function be(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function _e(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new be;++t<r;)this.add(e[t])}function Se(e){var t=this.__data__=new ve(e);this.size=t.size}function we(e,t){var r=Fe(e),n=!r&&Be(e),o=!r&&!n&&ze(e),i=!r&&!n&&!o&&qe(e),s=r||n||o||i,a=s?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],l=a.length;for(var u in e)!t&&!q.call(e,u)||s&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Ne(u,l))||a.push(u);return a}function xe(e,t){for(var r=e.length;r--;)if(De(e[r][0],t))return r;return-1}function ke(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?function(e){var t=q.call(e,ee),r=e[ee];try{e[ee]=void 0;var n=!0}catch(e){}var o=W.call(e);n&&(t?e[ee]=r:delete e[ee]);return o}(e):function(e){return W.call(e)}(e)}function Ee(e){return He(e)&&ke(e)==i}function Ae(e,t,r,n,o){return e===t||(null==e||null==t||!He(e)&&!He(t)?e!=e&&t!=t:function(e,t,r,n,o,c){var f=Fe(e),b=Fe(t),w=f?s:Te(e),x=b?s:Te(t),k=(w=w==i?h:w)==h,E=(x=x==i?h:x)==h,A=w==x;if(A&&ze(e)){if(!ze(t))return!1;f=!0,k=!1}if(A&&!k)return c||(c=new Se),f||qe(e)?je(e,t,r,n,o,c):function(e,t,r,n,o,i,s){switch(r){case S:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!i(new Z(e),new Z(t)));case a:case l:case d:return De(+e,+t);case u:return e.name==t.name&&e.message==t.message;case m:case g:return e==t+"";case p:var c=N;case y:var h=1&n;if(c||(c=M),e.size!=t.size&&!h)return!1;var f=s.get(e);if(f)return f==t;n|=2,s.set(e,t);var b=je(c(e),c(t),n,o,i,s);return s.delete(e),b;case v:if(ye)return ye.call(e)==ye.call(t)}return!1}(e,t,w,r,n,o,c);if(!(1&r)){var P=k&&q.call(e,"__wrapped__"),O=E&&q.call(t,"__wrapped__");if(P||O){var j=P?e.value():e,C=O?t.value():t;return c||(c=new Se),o(j,C,r,n,c)}}if(!A)return!1;return c||(c=new Se),function(e,t,r,n,o,i){var s=1&r,a=Ce(e),l=a.length,u=Ce(t).length;if(l!=u&&!s)return!1;var c=l;for(;c--;){var p=a[c];if(!(s?p in t:q.call(t,p)))return!1}var d=i.get(e);if(d&&i.get(t))return d==t;var h=!0;i.set(e,t),i.set(t,e);var f=s;for(;++c<l;){var m=e[p=a[c]],y=t[p];if(n)var g=s?n(y,m,p,t,e,i):n(m,y,p,e,t,i);if(!(void 0===g?m===y||o(m,y,r,n,i):g)){h=!1;break}f||(f="constructor"==p)}if(h&&!f){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h}(e,t,r,n,o,c)}(e,t,r,n,Ae,o))}function Pe(e){return!(!Ve(e)||function(e){return!!K&&K in e}(e))&&($e(e)?G:w).test(Me(e))}function Oe(e){if(r=(t=e)&&t.constructor,n="function"==typeof r&&r.prototype||U,t!==n)return ne(e);var t,r,n,o=[];for(var i in Object(e))q.call(e,i)&&"constructor"!=i&&o.push(i);return o}function je(e,t,r,n,o,i){var s=1&r,a=e.length,l=t.length;if(a!=l&&!(s&&l>a))return!1;var u=i.get(e);if(u&&i.get(t))return u==t;var c=-1,p=!0,d=2&r?new _e:void 0;for(i.set(e,t),i.set(t,e);++c<a;){var h=e[c],f=t[c];if(n)var m=s?n(f,h,c,t,e,i):n(h,f,c,e,t,i);if(void 0!==m){if(m)continue;p=!1;break}if(d){if(!T(t,(function(e,t){if(s=t,!d.has(s)&&(h===e||o(h,e,r,n,i)))return d.push(t);var s}))){p=!1;break}}else if(h!==f&&!o(h,f,r,n,i)){p=!1;break}}return i.delete(e),i.delete(t),p}function Ce(e){return function(e,t,r){var n=t(e);return Fe(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ke,Ie)}function Re(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function Le(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Pe(r)?r:void 0}ge.prototype.clear=function(){this.__data__=ue?ue(null):{},this.size=0},ge.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ge.prototype.get=function(e){var t=this.__data__;if(ue){var r=t[e];return r===n?void 0:r}return q.call(t,e)?t[e]:void 0},ge.prototype.has=function(e){var t=this.__data__;return ue?void 0!==t[e]:q.call(t,e)},ge.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ue&&void 0===t?n:t,this},ve.prototype.clear=function(){this.__data__=[],this.size=0},ve.prototype.delete=function(e){var t=this.__data__,r=xe(t,e);return!(r<0)&&(r==t.length-1?t.pop():X.call(t,r,1),--this.size,!0)},ve.prototype.get=function(e){var t=this.__data__,r=xe(t,e);return r<0?void 0:t[r][1]},ve.prototype.has=function(e){return xe(this.__data__,e)>-1},ve.prototype.set=function(e,t){var r=this.__data__,n=xe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},be.prototype.clear=function(){this.size=0,this.__data__={hash:new ge,map:new(ie||ve),string:new ge}},be.prototype.delete=function(e){var t=Re(this,e).delete(e);return this.size-=t?1:0,t},be.prototype.get=function(e){return Re(this,e).get(e)},be.prototype.has=function(e){return Re(this,e).has(e)},be.prototype.set=function(e,t){var r=Re(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},_e.prototype.add=_e.prototype.push=function(e){return this.__data__.set(e,n),this},_e.prototype.has=function(e){return this.__data__.has(e)},Se.prototype.clear=function(){this.__data__=new ve,this.size=0},Se.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Se.prototype.get=function(e){return this.__data__.get(e)},Se.prototype.has=function(e){return this.__data__.has(e)},Se.prototype.set=function(e,t){var r=this.__data__;if(r instanceof ve){var n=r.__data__;if(!ie||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new be(n)}return r.set(e,t),this.size=r.size,this};var Ie=te?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[o++]=s)}return i}(te(e),(function(t){return Q.call(e,t)})))}:function(){return[]},Te=ke;function Ne(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||x.test(e))&&e>-1&&e%1==0&&e<t}function Me(e){if(null!=e){try{return H.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function De(e,t){return e===t||e!=e&&t!=t}(oe&&Te(new oe(new ArrayBuffer(1)))!=S||ie&&Te(new ie)!=p||se&&Te(se.resolve())!=f||ae&&Te(new ae)!=y||le&&Te(new le)!=b)&&(Te=function(e){var t=ke(e),r=t==h?e.constructor:void 0,n=r?Me(r):"";if(n)switch(n){case ce:return S;case pe:return p;case de:return f;case he:return y;case fe:return b}return t});var Be=Ee(function(){return arguments}())?Ee:function(e){return He(e)&&q.call(e,"callee")&&!Q.call(e,"callee")},Fe=Array.isArray;var ze=re||function(){return!1};function $e(e){if(!Ve(e))return!1;var t=ke(e);return t==c||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Ue(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}function Ve(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function He(e){return null!=e&&"object"==typeof e}var qe=I?function(e){return function(t){return e(t)}}(I):function(e){return He(e)&&Ue(e.length)&&!!k[ke(e)]};function Ke(e){return null!=(t=e)&&Ue(t.length)&&!$e(t)?we(e):Oe(e);var t}e.exports=function(e,t){return Ae(e,t)}},4078:(e,t,r)=>{"use strict";var n=r(2026),o=r(4244),i=r(2473),s=r(7642),a=r(6057),l=function(e){i(!1,e)},u=String.prototype.replace,c=String.prototype.split,p="||||",d=function(e){var t=e%100,r=t%10;return 11!==t&&1===r?0:2<=r&&r<=4&&!(t>=12&&t<=14)?1:2},h={pluralTypes:{arabic:function(e){if(e<3)return e;var t=e%100;return t>=3&&t<=10?3:t>=11?4:5},bosnian_serbian:d,chinese:function(){return 0},croatian:d,french:function(e){return e>=2?1:0},german:function(e){return 1!==e?1:0},russian:d,lithuanian:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=9&&(e%100<11||e%100>19)?1:2},czech:function(e){return 1===e?0:e>=2&&e<=4?1:2},polish:function(e){if(1===e)return 0;var t=e%10;return 2<=t&&t<=4&&(e%100<10||e%100>=20)?1:2},icelandic:function(e){return e%10!=1||e%100==11?1:0},slovenian:function(e){var t=e%100;return 1===t?0:2===t?1:3===t||4===t?2:3}},pluralTypeToLanguages:{arabic:["ar"],bosnian_serbian:["bs-Latn-BA","bs-Cyrl-BA","srl-RS","sr-RS"],chinese:["id","id-ID","ja","ko","ko-KR","lo","ms","th","th-TH","zh"],croatian:["hr","hr-HR"],german:["fa","da","de","en","es","fi","el","he","hi-IN","hu","hu-HU","it","nl","no","pt","sv","tr"],french:["fr","tl","pt-br"],russian:["ru","ru-RU"],lithuanian:["lt"],czech:["cs","cs-CZ","sk"],polish:["pl"],icelandic:["is"],slovenian:["sl-SL"]}};function f(e,t){var r,i,s=(r=e.pluralTypeToLanguages,i={},n(o(r),(function(e){var t=e[0],r=e[1];n(r,(function(e){i[e]=t}))})),i);return s[t]||s[c.call(t,/-/,1)[0]]||s.en}function m(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var y,g=(y={},function(e,t){var r=y[t];return r&&!e.pluralTypes[r]&&(r=null,y[t]=r),r||(r=f(e,t))&&(y[t]=r),r}),v=/%\{(.*?)\}/g;function b(e,t,r,n,o){if("string"!=typeof e)throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");if(null==t)return e;var i=e,l=n||v,d="number"==typeof t?{smart_count:t}:t;if(null!=d.smart_count&&e){var f=o||h,m=c.call(e,p),y=function(e,t,r){return e.pluralTypes[t](r)}(f,g(f,r||"en"),d.smart_count);i=a(m[y]||m[0])}return i=u.call(i,l,(function(e,t){return s(d,t)&&null!=d[t]?d[t]:e}))}function _(e){var t=e||{};this.phrases={},this.extend(t.phrases||{}),this.currentLocale=t.locale||"en";var r=t.allowMissing?b:null;this.onMissingKey="function"==typeof t.onMissingKey?t.onMissingKey:r,this.warn=t.warn||l,this.tokenRegex=function(e){var t=e&&e.prefix||"%{",r=e&&e.suffix||"}";if(t===p||r===p)throw new RangeError('"||||" token is reserved for pluralization');return new RegExp(m(t)+"(.*?)"+m(r),"g")}(t.interpolation),this.pluralRules=t.pluralRules||h}_.prototype.locale=function(e){return e&&(this.currentLocale=e),this.currentLocale},_.prototype.extend=function(e,t){n(o(e||{}),(function(e){var r=e[0],n=e[1],o=t?t+"."+r:r;"object"==typeof n?this.extend(n,o):this.phrases[o]=n}),this)},_.prototype.unset=function(e,t){"string"==typeof e?delete this.phrases[e]:n(o(e||{}),(function(e){var r=e[0],n=e[1],o=t?t+"."+r:r;"object"==typeof n?this.unset(n,o):delete this.phrases[o]}),this)},_.prototype.clear=function(){this.phrases={}},_.prototype.replace=function(e){this.clear(),this.extend(e)},_.prototype.t=function(e,t){var r,n,o=null==t?{}:t;if("string"==typeof this.phrases[e])r=this.phrases[e];else if("string"==typeof o._)r=o._;else if(this.onMissingKey){n=(0,this.onMissingKey)(e,o,this.currentLocale,this.tokenRegex,this.pluralRules)}else this.warn('Missing translation for key: "'+e+'"'),n=e;return"string"==typeof r&&(n=b(r,o,this.currentLocale,this.tokenRegex,this.pluralRules)),n},_.prototype.has=function(e){return s(this.phrases,e)},_.transformPhrase=function(e,t,r){return b(e,t,r)},e.exports=_},631:(e,t,r)=>{var n="function"==typeof Map&&Map.prototype,o=Object.getOwnPropertyDescriptor&&n?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,i=n&&o&&"function"==typeof o.get?o.get:null,s=n&&Map.prototype.forEach,a="function"==typeof Set&&Set.prototype,l=Object.getOwnPropertyDescriptor&&a?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,u=a&&l&&"function"==typeof l.get?l.get:null,c=a&&Set.prototype.forEach,p="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,d="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,h="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,f=Boolean.prototype.valueOf,m=Object.prototype.toString,y=Function.prototype.toString,g=String.prototype.match,v=String.prototype.slice,b=String.prototype.replace,_=String.prototype.toUpperCase,S=String.prototype.toLowerCase,w=RegExp.prototype.test,x=Array.prototype.concat,k=Array.prototype.join,E=Array.prototype.slice,A=Math.floor,P="function"==typeof BigInt?BigInt.prototype.valueOf:null,O=Object.getOwnPropertySymbols,j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,C="function"==typeof Symbol&&"object"==typeof Symbol.iterator,R="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===C||"symbol")?Symbol.toStringTag:null,L=Object.prototype.propertyIsEnumerable,I=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function T(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||w.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var n=e<0?-A(-e):A(e);if(n!==e){var o=String(n),i=v.call(t,o.length+1);return b.call(o,r,"$&_")+"."+b.call(b.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return b.call(t,r,"$&_")}var N=r(4654).custom,M=N&&z(N)?N:null;function D(e,t,r){var n="double"===(r.quoteStyle||t)?'"':"'";return n+e+n}function B(e){return b.call(String(e),/"/g,"&quot;")}function F(e){return!("[object Array]"!==V(e)||R&&"object"==typeof e&&R in e)}function z(e){if(C)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return!0;if(!e||"object"!=typeof e||!j)return!1;try{return j.call(e),!0}catch(e){}return!1}e.exports=function e(t,r,n,o){var a=r||{};if(U(a,"quoteStyle")&&"single"!==a.quoteStyle&&"double"!==a.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(U(a,"maxStringLength")&&("number"==typeof a.maxStringLength?a.maxStringLength<0&&a.maxStringLength!==1/0:null!==a.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var l=!U(a,"customInspect")||a.customInspect;if("boolean"!=typeof l&&"symbol"!==l)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(U(a,"indent")&&null!==a.indent&&"\t"!==a.indent&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(U(a,"numericSeparator")&&"boolean"!=typeof a.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var m=a.numericSeparator;if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return q(t,a);if("number"==typeof t){if(0===t)return 1/0/t>0?"0":"-0";var _=String(t);return m?T(t,_):_}if("bigint"==typeof t){var w=String(t)+"n";return m?T(t,w):w}var A=void 0===a.depth?5:a.depth;if(void 0===n&&(n=0),n>=A&&A>0&&"object"==typeof t)return F(t)?"[Array]":"[Object]";var O=function(e,t){var r;if("\t"===e.indent)r="\t";else{if(!("number"==typeof e.indent&&e.indent>0))return null;r=k.call(Array(e.indent+1)," ")}return{base:r,prev:k.call(Array(t+1),r)}}(a,n);if(void 0===o)o=[];else if(H(o,t)>=0)return"[Circular]";function N(t,r,i){if(r&&(o=E.call(o)).push(r),i){var s={depth:a.depth};return U(a,"quoteStyle")&&(s.quoteStyle=a.quoteStyle),e(t,s,n+1,o)}return e(t,a,n+1,o)}if("function"==typeof t){var $=function(e){if(e.name)return e.name;var t=g.call(y.call(e),/^function\s*([\w$]+)/);if(t)return t[1];return null}(t),K=Z(t,N);return"[Function"+($?": "+$:" (anonymous)")+"]"+(K.length>0?" { "+k.call(K,", ")+" }":"")}if(z(t)){var Q=C?b.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):j.call(t);return"object"!=typeof t||C?Q:W(Q)}if(function(e){if(!e||"object"!=typeof e)return!1;if("undefined"!=typeof HTMLElement&&e instanceof HTMLElement)return!0;return"string"==typeof e.nodeName&&"function"==typeof e.getAttribute}(t)){for(var X="<"+S.call(String(t.nodeName)),ee=t.attributes||[],te=0;te<ee.length;te++)X+=" "+ee[te].name+"="+D(B(ee[te].value),"double",a);return X+=">",t.childNodes&&t.childNodes.length&&(X+="..."),X+="</"+S.call(String(t.nodeName))+">"}if(F(t)){if(0===t.length)return"[]";var re=Z(t,N);return O&&!function(e){for(var t=0;t<e.length;t++)if(H(e[t],"\n")>=0)return!1;return!0}(re)?"["+Y(re,O)+"]":"[ "+k.call(re,", ")+" ]"}if(function(e){return!("[object Error]"!==V(e)||R&&"object"==typeof e&&R in e)}(t)){var ne=Z(t,N);return"cause"in t&&!L.call(t,"cause")?"{ ["+String(t)+"] "+k.call(x.call("[cause]: "+N(t.cause),ne),", ")+" }":0===ne.length?"["+String(t)+"]":"{ ["+String(t)+"] "+k.call(ne,", ")+" }"}if("object"==typeof t&&l){if(M&&"function"==typeof t[M])return t[M]();if("symbol"!==l&&"function"==typeof t.inspect)return t.inspect()}if(function(e){if(!i||!e||"object"!=typeof e)return!1;try{i.call(e);try{u.call(e)}catch(e){return!0}return e instanceof Map}catch(e){}return!1}(t)){var oe=[];return s.call(t,(function(e,r){oe.push(N(r,t,!0)+" => "+N(e,t))})),J("Map",i.call(t),oe,O)}if(function(e){if(!u||!e||"object"!=typeof e)return!1;try{u.call(e);try{i.call(e)}catch(e){return!0}return e instanceof Set}catch(e){}return!1}(t)){var ie=[];return c.call(t,(function(e){ie.push(N(e,t))})),J("Set",u.call(t),ie,O)}if(function(e){if(!p||!e||"object"!=typeof e)return!1;try{p.call(e,p);try{d.call(e,d)}catch(e){return!0}return e instanceof WeakMap}catch(e){}return!1}(t))return G("WeakMap");if(function(e){if(!d||!e||"object"!=typeof e)return!1;try{d.call(e,d);try{p.call(e,p)}catch(e){return!0}return e instanceof WeakSet}catch(e){}return!1}(t))return G("WeakSet");if(function(e){if(!h||!e||"object"!=typeof e)return!1;try{return h.call(e),!0}catch(e){}return!1}(t))return G("WeakRef");if(function(e){return!("[object Number]"!==V(e)||R&&"object"==typeof e&&R in e)}(t))return W(N(Number(t)));if(function(e){if(!e||"object"!=typeof e||!P)return!1;try{return P.call(e),!0}catch(e){}return!1}(t))return W(N(P.call(t)));if(function(e){return!("[object Boolean]"!==V(e)||R&&"object"==typeof e&&R in e)}(t))return W(f.call(t));if(function(e){return!("[object String]"!==V(e)||R&&"object"==typeof e&&R in e)}(t))return W(N(String(t)));if(!function(e){return!("[object Date]"!==V(e)||R&&"object"==typeof e&&R in e)}(t)&&!function(e){return!("[object RegExp]"!==V(e)||R&&"object"==typeof e&&R in e)}(t)){var se=Z(t,N),ae=I?I(t)===Object.prototype:t instanceof Object||t.constructor===Object,le=t instanceof Object?"":"null prototype",ue=!ae&&R&&Object(t)===t&&R in t?v.call(V(t),8,-1):le?"Object":"",ce=(ae||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(ue||le?"["+k.call(x.call([],ue||[],le||[]),": ")+"] ":"");return 0===se.length?ce+"{}":O?ce+"{"+Y(se,O)+"}":ce+"{ "+k.call(se,", ")+" }"}return String(t)};var $=Object.prototype.hasOwnProperty||function(e){return e in this};function U(e,t){return $.call(e,t)}function V(e){return m.call(e)}function H(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function q(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return q(v.call(e,0,t.maxStringLength),t)+n}return D(b.call(b.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,K),"single",t)}function K(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+_.call(t.toString(16))}function W(e){return"Object("+e+")"}function G(e){return e+" { ? }"}function J(e,t,r,n){return e+" ("+t+") {"+(n?Y(r,n):k.call(r,", "))+"}"}function Y(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+k.call(e,","+r)+"\n"+t.prev}function Z(e,t){var r=F(e),n=[];if(r){n.length=e.length;for(var o=0;o<e.length;o++)n[o]=U(e,o)?t(e[o],e):""}var i,s="function"==typeof O?O(e):[];if(C){i={};for(var a=0;a<s.length;a++)i["$"+s[a]]=s[a]}for(var l in e)U(e,l)&&(r&&String(Number(l))===l&&l<e.length||C&&i["$"+l]instanceof Symbol||(w.call(/[^\w$]/,l)?n.push(t(l,e)+": "+t(e[l],e)):n.push(l+": "+t(e[l],e))));if("function"==typeof O)for(var u=0;u<s.length;u++)L.call(e,s[u])&&n.push("["+t(s[u])+"]: "+t(e[s[u]],e));return n}},8987:(e,t,r)=>{"use strict";var n;if(!Object.keys){var o=Object.prototype.hasOwnProperty,i=Object.prototype.toString,s=r(1414),a=Object.prototype.propertyIsEnumerable,l=!a.call({toString:null},"toString"),u=a.call((function(){}),"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(e){var t=e.constructor;return t&&t.prototype===e},d={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},h=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!d["$"+e]&&o.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{p(window[e])}catch(e){return!0}}catch(e){return!0}return!1}();n=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===i.call(e),n=s(e),a=t&&"[object String]"===i.call(e),d=[];if(!t&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var f=u&&r;if(a&&e.length>0&&!o.call(e,0))for(var m=0;m<e.length;++m)d.push(String(m));if(n&&e.length>0)for(var y=0;y<e.length;++y)d.push(String(y));else for(var g in e)f&&"prototype"===g||!o.call(e,g)||d.push(String(g));if(l)for(var v=function(e){if("undefined"==typeof window||!h)return p(e);try{return p(e)}catch(e){return!1}}(e),b=0;b<c.length;++b)v&&"constructor"===c[b]||!o.call(e,c[b])||d.push(c[b]);return d}}e.exports=n},2215:(e,t,r)=>{"use strict";var n=Array.prototype.slice,o=r(1414),i=Object.keys,s=i?function(e){return i(e)}:r(8987),a=Object.keys;s.shim=function(){Object.keys?function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2)||(Object.keys=function(e){return o(e)?a(n.call(e)):a(e)}):Object.keys=s;return Object.keys||s},e.exports=s},1414:e=>{"use strict";var t=Object.prototype.toString;e.exports=function(e){var r=t.call(e),n="[object Arguments]"===r;return n||(n="[object Array]"!==r&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===t.call(e.callee)),n}},5340:(e,t,r)=>{"use strict";var n=r(6378),o=r(1924),i=o("Object.prototype.propertyIsEnumerable"),s=o("Array.prototype.push");e.exports=function(e){var t=n(e),r=[];for(var o in t)i(t,o)&&s(r,[o,t[o]]);return r}},4244:(e,t,r)=>{"use strict";var n=r(4289),o=r(5559),i=r(5340),s=r(6490),a=r(5506),l=o(s(),Object);n(l,{getPolyfill:s,implementation:i,shim:a}),e.exports=l},6490:(e,t,r)=>{"use strict";var n=r(5340);e.exports=function(){return"function"==typeof Object.entries?Object.entries:n}},5506:(e,t,r)=>{"use strict";var n=r(6490),o=r(4289);e.exports=function(){var e=n();return o(Object,{entries:e},{entries:function(){return Object.entries!==e}}),e}},1040:(e,t,r)=>{"use strict";var n=r(6378),o=r(561),i=r(1924)("String.prototype.replace"),s=/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,a=/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;e.exports=function(){var e=o(n(this));return i(i(e,s,""),a,"")}},6057:(e,t,r)=>{"use strict";var n=r(5559),o=r(4289),i=r(1040),s=r(254),a=r(29),l=n(s());o(l,{getPolyfill:s,implementation:i,shim:a}),e.exports=l},254:(e,t,r)=>{"use strict";var n=r(1040);e.exports=function(){return String.prototype.trim&&"\u200b"==="\u200b".trim()?String.prototype.trim:n}},29:(e,t,r)=>{"use strict";var n=r(4289),o=r(254);e.exports=function(){var e=o();return n(String.prototype,{trim:e},{trim:function(){return String.prototype.trim!==e}}),e}},3177:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.CustomTimeSkip=void 0;const i=r(5026),s=r(3558),a=r(1563),l=r(3727),u=r(83),c=r(7287),p=r(8081),d=r(3128);let h=class extends s.LitElement{constructor(e,t,r,n,o,i,s,a){super(),this.shortcutElement=new u.ShortcutElement("six first-in-row",e,t,o),this.timeSkipElement=new c.NumberInput("two",r,null,null,i),this.enabledButton=new p.OnOffButton("two",n,s),this.deleteButton=new d.GenericButton("two trash","\u{1f5d1}",a)}render(){return s.html`<div class="row">
        ${this.shortcutElement}
        ${this.timeSkipElement}
        ${this.enabledButton}
        ${this.deleteButton}
        </div>`}};h.styles=[a.getNormalizeCss(),a.getSkeletonCss(),a.getSkeletonFirstChildCss(),a.getPopupCss()],h=n([i.customElement("custom-time-skip"),o("design:paramtypes",[l.ShortcutRecorder,l.Shortcut,Number,Boolean,Function,Function,Function,Function])],h),t.CustomTimeSkip=h},7214:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.FeedbackSelector=void 0;const i=r(5026),s=r(374),a=r(2694),l=r(9692);let u=class extends s.GenericSelector{constructor(e,t,r){super([{id:a.TextAction.none,text:l._t("popup.feedback.nothing")},{id:a.TextAction.simple,text:l._t("popup.feedback.text_only")},{id:a.TextAction.circle,text:l._t("popup.feedback.circled")}],e,t,r)}};u=n([i.customElement("feedback-selector"),o("design:paramtypes",[String,Number,Function])],u),t.FeedbackSelector=u},3128:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.GenericButton=void 0;const i=r(3558),s=r(5026),a=r(1563);let l=class extends i.LitElement{constructor(e,t,r){super(),this.widthColumns=e,this.initialTextValue=t,this.onClickCallback=r}extraClasses(){return[]}textValue(){return this.initialTextValue}render(){const e=this.extraClasses(),t=0===e.length?"":" "+e.join(" ");return i.html`<button @click=${this.onClick} class="${this.widthColumns} columns${t}">${this.textValue()}</button>`}onClick(e){this.onClickCallback&&this.onClickCallback(e)}};l.styles=[a.getNormalizeCss(),a.getSkeletonCss(),a.getPopupCss()],n([s.property({attribute:!0}),o("design:type",String)],l.prototype,"initialTextValue",void 0),l=n([s.customElement("generic-button"),o("design:paramtypes",[String,String,Function])],l),t.GenericButton=l},437:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.GenericInput=void 0;const i=r(3558),s=r(6451),a=r(5026),l=r(1563);class u extends s.Directive{update(e,[t]){for(const r in t)e.element.setAttribute(r,t[r]);return this.render(t)}render(e){return""}}const c=s.directive(u);class p extends i.LitElement{constructor(e,t,r){super(),this.widthColumns=e,this.value=t,this.onChange=r}getValue(){return this.value}setValue(e){this.value=e,this.inputNode&&(this.inputNode.value=`${e}`)}render(){const e=this.extraAttributes(),t={};Array.from(Object.keys(e)).filter((e=>"class"!==e)).forEach((r=>{t[r]=e[r]}));const r=e.class||"";return i.html`<input @input=${this.onInput} type="${this.inputType()}" value="${this.value}" class="${this.widthColumns} columns ${r}" ${c(t)}>`}onInput(){var e;const t=null===(e=this.inputNode)||void 0===e?void 0:e.value,r=t?this.fromInputValue(t):null;null==r||"number"==typeof r&&isNaN(r)||(this.value=r,this.onChange(this.value))}}p.styles=[l.getNormalizeCss(),l.getSkeletonCss(),l.getPopupCss()],n([a.property({attribute:!0}),o("design:type",Object)],p.prototype,"value",void 0),n([a.query("input"),o("design:type",HTMLInputElement)],p.prototype,"inputNode",void 0),t.GenericInput=p},374:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.GenericSelector=void 0;const i=r(3558),s=r(5026),a=r(1563);class l extends i.LitElement{constructor(e,t,r,n){super(),this.widthColumns=t,this.value=r,this.choices=e,this.onChange=n}getValue(){return this.value}setValue(e){if(this.value=e,this.selectNode){for(let e=0;e<this.choices.length;e++)if(this.choices[e].id===this.value)return void(this.selectNode.selectedIndex=e);const e=this.choices.map((e=>e.id)).join(", ");throw new Error(`Invalid value set: ${this.value}, expected one of:[${e}]`)}}render(){return i.html`<select class="feedback ${this.widthColumns} columns" @change="${this.selectionChanged}">
        ${this.choices.map((e=>i.html`<option value="${e.id}" ?selected=${this.value===e.id}>${e.text}</option>`))}
        </select>`}selectionChanged(){var e,t;this.value=parseInt((null===(e=this.selectNode)||void 0===e?void 0:e.options[null===(t=this.selectNode)||void 0===t?void 0:t.selectedIndex].value)||"1"),this.onChange(this.value)}}l.styles=[a.getNormalizeCss(),a.getSkeletonCss(),a.getPopupCss()],n([s.property({type:Number,attribute:!0}),o("design:type",Object)],l.prototype,"value",void 0),n([s.query("select"),o("design:type",HTMLSelectElement)],l.prototype,"selectNode",void 0),n([s.state(),o("design:type",Object)],l.prototype,"choices",void 0),t.GenericSelector=l},9256:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.LabelElement=void 0;const i=r(5026),s=r(3558),a=r(1563);let l=class extends s.LitElement{constructor(e,t,r=null,n=null){super(),this.customStyle=null,this.extraClasses=e,this.text=t,this.help=r,this.customStyle=n}render(){return s.html`<label class="${this.extraClasses} columns"
                     style=${this.customStyle}>${this.text}${this.getInfoIcon()}</label>`}getInfoIcon(){if(null===this.help)return s.html``;const e=s.html`<svg style="position: relative; top: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" preserveAspectRatio="xMinYMin" width="16" height="16" enable-background="new 0 0 64 64">
            <path d="m32 2c-16.568 0-30 13.432-30 30s13.432 30 30 30 30-13.432 30-30-13.432-30-30-30m5 49.75h-10v-24h10v24m-5-29.5c-2.761 0-5-2.238-5-5s2.239-5 5-5c2.762 0 5 2.238 5 5s-2.238 5-5 5" fill="#0f84be"/>
            </svg>`;return s.html` <abbr class="info-icon" title="${this.help}">${e}</abbr>`}};l.styles=[a.getNormalizeCss(),a.getSkeletonCss(),a.getSkeletonFirstChildCss(),a.getPopupCss()],n([i.property({attribute:!0}),o("design:type",String)],l.prototype,"extraClasses",void 0),n([i.property({attribute:!0}),o("design:type",String)],l.prototype,"text",void 0),n([i.property({attribute:!0}),o("design:type",Object)],l.prototype,"help",void 0),n([i.property({attribute:!0}),o("design:type",Object)],l.prototype,"customStyle",void 0),l=n([i.customElement("label-element"),o("design:paramtypes",[String,String,Object,Object])],l),t.LabelElement=l},9e3:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.LabelShortcutFeedback=void 0;const i=r(5026),s=r(3558),a=r(1563),l=r(3727),u=r(83),c=r(7214),p=r(9256);let d=class extends s.LitElement{constructor(e,t,r,n,o,i,s,a){if(super(),3!==a.length)throw new Error("Expected 3 column widths");this.labelElement=new p.LabelElement(`desc align-right ${a[0]} first-in-row`,e,t,"white-space: nowrap"),this.shortcutElement=new u.ShortcutElement(a[1],r,n,i),this.feedbackElement=new c.FeedbackSelector(a[2],o,s)}render(){return s.html`<div class="row">${this.labelElement}${this.shortcutElement}${this.feedbackElement}</div>`}};d.styles=[a.getNormalizeCss(),a.getSkeletonFirstChildCss(),a.getSkeletonCss(),a.getPopupCss()],d=n([i.customElement("label-shortcut-feedback"),o("design:paramtypes",[String,Object,l.ShortcutRecorder,l.Shortcut,Number,Function,Function,Array])],d),t.LabelShortcutFeedback=d},7341:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.LanguageSelector=void 0;const i=r(5026),s=r(9692),a=r(1476),l=r(374);let u=class extends l.GenericSelector{constructor(e,t,r){super(a.NetflixLanguageList.getAll().map(((e,t)=>({id:t,text:s._t(e.translationKey)}))),e,t,r)}};u=n([i.customElement("language-selector"),o("design:paramtypes",[String,Number,Function])],u),t.LanguageSelector=u},8785:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.LogLevelSelector=void 0;const i=r(5026),s=r(374),a=r(5570);let l=class extends s.GenericSelector{constructor(e,t,r){super([{id:a.LogLevel.ERROR,text:"ERROR"},{id:a.LogLevel.WARN,text:"WARN"},{id:a.LogLevel.INFO,text:"INFO"},{id:a.LogLevel.DEBUG,text:"DEBUG"}].concat([]),e,t,r)}};l=n([i.customElement("log-level-selector"),o("design:paramtypes",[String,Number,Function])],l),t.LogLevelSelector=l},7287:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NumberInput=void 0;const i=r(5026),s=r(437);let a=class extends s.GenericInput{constructor(e,t,r,n,o){super(e,t,o),this.minValue=r,this.maxValue=n}extraAttributes(){const e={};return null!==this.minValue&&(e.min=this.minValue.toString()),null!==this.maxValue&&(e.max=this.maxValue.toString()),e}inputType(){return"number"}fromInputValue(e){return parseFloat(e)}};a=n([i.customElement("number-input"),o("design:paramtypes",[String,Number,Object,Object,Function])],a),t.NumberInput=a},8081:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.OnOffButton=void 0;const i=r(5026),s=r(9692),a=r(3128);let l=class extends a.GenericButton{constructor(e,t,r){super(e,""),this.boolValue=t,this.onChange=r}getValue(){return this.boolValue}setValue(e){this.boolValue=e}extraClasses(){return[this.boolValue?"enabled":"disabled"]}textValue(){return this.boolValue?s._t("popup.on_off.yes"):s._t("popup.on_off.no")}onClick(){this.boolValue=!this.boolValue,this.onChange(this.boolValue)}};n([i.property({attribute:!0}),o("design:type",Boolean)],l.prototype,"boolValue",void 0),l=n([i.customElement("on-off-button"),o("design:paramtypes",[String,Boolean,Function])],l),t.OnOffButton=l},1563:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPopupCss=t.getNormalizeCss=t.getSkeletonCss=t.getSkeletonFirstChildCss=void 0;const n=r(3558);t.getSkeletonFirstChildCss=function(){return n.css`
.columns.first-in-row {
  margin-left: 0;
}`},t.getSkeletonCss=function(){return n.css`
/* Grid
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box; }
.column,
.columns {
  width: 100%;
  float: left;
  box-sizing: border-box; }

/* For devices larger than 400px */
@media (min-width: 400px) {
  .container {
    width: 85%;
    padding: 0; }
}

/* For devices larger than 450px */
/*
@media (min-width: 450px) {
    */
  .container {
    width: 80%; }
  .column,
  .columns {
    margin-left: 4%; }
/*
  .column:first-child,
  .columns:first-child {
    margin-left: 0; }
*/

  .one.column,
  .one.columns                    { width: 4.66666666667%; }
  .two.columns                    { width: 13.3333333333%; }
  .three.columns                  { width: 22%;            }
  .four.columns                   { width: 30.6666666667%; }
  .five.columns                   { width: 39.3333333333%; }
  .six.columns                    { width: 48%;            }
  .seven.columns                  { width: 56.6666666667%; }
  .eight.columns                  { width: 65.3333333333%; }
  .nine.columns                   { width: 74.0%;          }
  .ten.columns                    { width: 82.6666666667%; }
  .eleven.columns                 { width: 91.3333333333%; }
  .twelve.columns                 { width: 100%; margin-left: 0; }

  .one-third.column               { width: 30.6666666667%; }
  .two-thirds.column              { width: 65.3333333333%; }

  .one-half.column                { width: 48%; }

  /* Offsets */
  .offset-by-one.column,
  .offset-by-one.columns          { margin-left: 8.66666666667%; }
  .offset-by-two.column,
  .offset-by-two.columns          { margin-left: 17.3333333333%; }
  .offset-by-three.column,
  .offset-by-three.columns        { margin-left: 26%;            }
  .offset-by-four.column,
  .offset-by-four.columns         { margin-left: 34.6666666667%; }
  .offset-by-five.column,
  .offset-by-five.columns         { margin-left: 43.3333333333%; }
  .offset-by-six.column,
  .offset-by-six.columns          { margin-left: 52%;            }
  .offset-by-seven.column,
  .offset-by-seven.columns        { margin-left: 60.6666666667%; }
  .offset-by-eight.column,
  .offset-by-eight.columns        { margin-left: 69.3333333333%; }
  .offset-by-nine.column,
  .offset-by-nine.columns         { margin-left: 78.0%;          }
  .offset-by-ten.column,
  .offset-by-ten.columns          { margin-left: 86.6666666667%; }
  .offset-by-eleven.column,
  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }

  .offset-by-one-third.column,
  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }
  .offset-by-two-thirds.column,
  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }

  .offset-by-one-half.column,
  .offset-by-one-half.columns     { margin-left: 52%; }

  /*
}
*/

/* Base Styles
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/* NOTE
html is set to 62.5% so that all the REM measurements throughout Skeleton
are based on 10px sizing. So basically 1.5rem = 15px :) */
html {
  font-size: 62.5%; }
body {
  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */
  line-height: 1.6;
  font-weight: 400;
  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #222; }


/* Typography
–––––––––––––––––––––––––––––––––––––––––––––––––– */
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300; }
h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}
h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }
h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }

/* Larger than phablet */
@media (min-width: 550px) {
  h1 { font-size: 5.0rem; }
  h2 { font-size: 4.2rem; }
  h3 { font-size: 3.6rem; }
  h4 { font-size: 3.0rem; }
  h5 { font-size: 2.4rem; }
  h6 { font-size: 1.5rem; }
}

p {
  margin-top: 0; }


/* Links
–––––––––––––––––––––––––––––––––––––––––––––––––– */
a {
  color: #1EAEDB; }
a:hover {
  color: #0FA0CE; }


/* Buttons
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.button,
button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #555;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box; }
.button:hover,
button:hover,
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
.button:focus,
button:focus,
input[type="submit"]:focus,
input[type="reset"]:focus,
input[type="button"]:focus {
  color: #333;
  border-color: #888;
  outline: 0; }
.button.button-primary,
button.button-primary,
input[type="submit"].button-primary,
input[type="reset"].button-primary,
input[type="button"].button-primary {
  color: #FFF;
  background-color: #33C3F0;
  border-color: #33C3F0; }
.button.button-primary:hover,
button.button-primary:hover,
input[type="submit"].button-primary:hover,
input[type="reset"].button-primary:hover,
input[type="button"].button-primary:hover,
.button.button-primary:focus,
button.button-primary:focus,
input[type="submit"].button-primary:focus,
input[type="reset"].button-primary:focus,
input[type="button"].button-primary:focus {
  color: #FFF;
  background-color: #1EAEDB;
  border-color: #1EAEDB; }


/* Forms
–––––––––––––––––––––––––––––––––––––––––––––––––– */
input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea,
select {
  height: 38px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #fff;
  border: 1px solid #D1D1D1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box; }
/* Removes awkward default styles on some inputs for iOS */
input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none; }
textarea {
  min-height: 65px;
  padding-top: 6px;
  padding-bottom: 6px; }
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="text"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus {
  border: 1px solid #33C3F0;
  outline: 0; }
label,
legend {
  display: block;
  margin-bottom: .5rem;
  font-weight: 600; }
fieldset {
  padding: 0;
  border-width: 0; }
input[type="checkbox"],
input[type="radio"] {
  display: inline; }
label > .label-body {
  display: inline-block;
  margin-left: .5rem;
  font-weight: normal; }


/* Lists
–––––––––––––––––––––––––––––––––––––––––––––––––– */
ul {
  list-style: circle inside; }
ol {
  list-style: decimal inside; }
ol, ul {
  padding-left: 0;
  margin-top: 0; }
ul ul,
ul ol,
ol ol,
ol ul {
  margin: 1.5rem 0 1.5rem 3rem;
  font-size: 90%; }
li {
  margin-bottom: 1rem; }


/* Code
–––––––––––––––––––––––––––––––––––––––––––––––––– */
code {
  padding: .2rem .5rem;
  margin: 0 .2rem;
  font-size: 90%;
  white-space: nowrap;
  background: #F1F1F1;
  border: 1px solid #E1E1E1;
  border-radius: 4px; }
pre > code {
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre; }


/* Tables
–––––––––––––––––––––––––––––––––––––––––––––––––– */
th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #E1E1E1; }
th:first-child,
td:first-child {
  padding-left: 0; }
th:last-child,
td:last-child {
  padding-right: 0; }


/* Spacing
–––––––––––––––––––––––––––––––––––––––––––––––––– */
button,
.button {
  margin-bottom: 1rem; }
input,
textarea,
select,
fieldset {
  margin-bottom: 1.5rem; }
pre,
blockquote,
dl,
figure,
table,
p,
ul,
ol,
form {
  margin-bottom: 2.5rem; }


/* Utilities
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.u-full-width {
  width: 100%;
  box-sizing: border-box; }
.u-max-full-width {
  max-width: 100%;
  box-sizing: border-box; }
.u-pull-right {
  float: right; }
.u-pull-left {
  float: left; }


/* Misc
–––––––––––––––––––––––––––––––––––––––––––––––––– */
hr {
  margin-top: 3rem;
  margin-bottom: 3.5rem;
  border-width: 0;
  border-top: 1px solid #E1E1E1; }


/* Clearing
–––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Self Clearing Goodness */
.container:after,
.row:after,
.u-cf {
  content: "";
  display: table;
  clear: both; }


/* Media Queries
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/*
Note: The best way to structure the use of media queries is to create the queries
near the relevant code. For example, if you wanted to change the styles for buttons
on small devices, paste the mobile query code up in the buttons section and style it
there.
*/


/* Larger than mobile */
@media (min-width: 400px) {}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 550px) {}

/* Larger than tablet */
@media (min-width: 750px) {}

/* Larger than desktop */
@media (min-width: 1000px) {}

/* Larger than Desktop HD */
@media (min-width: 1200px) {}

`},t.getNormalizeCss=function(){return n.css`
/*! normalize.css v3.0.2 | MIT License | git.io/normalize */

/**
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS text size adjust after orientation change, without disabling
 *    user zoom.
 */

html {
    font-family: sans-serif; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
}

/**
 * Remove default margin.
 */

body {
    margin: 0;
}

/* HTML5 display definitions
    ========================================================================== */

/**
 * Correct block display not defined for any HTML5 element in IE 8/9.
 * Correct block display not defined for details or summary in IE 10/11
 * and Firefox.
 * Correct block display not defined for main in IE 11.
 */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
    display: block;
}

/**
 * 1. Correct inline-block display not defined in IE 8/9.
 * 2. Normalize vertical alignment of progress in Chrome, Firefox, and Opera.
 */

audio,
canvas,
progress,
video {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
}

/**
 * Prevent modern browsers from displaying audio without controls.
 * Remove excess height in iOS 5 devices.
 */

audio:not([controls]) {
    display: none;
    height: 0;
}

/**
 * Address [hidden] styling not present in IE 8/9/10.
 * Hide the template element in IE 8/9/11, Safari, and Firefox < 22.
 */

[hidden],
template {
    display: none;
}

/* Links
    ========================================================================== */

/**
 * Remove the gray background color from active links in IE 10.
 */

a {
    background-color: transparent;
}

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */

a:active,
a:hover {
    outline: 0;
}

/* Text-level semantics
    ========================================================================== */

/**
 * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
 */

abbr[title] {
    border-bottom: 1px dotted;
}

/**
 * Address style set to bolder in Firefox 4+, Safari, and Chrome.
 */

b,
strong {
    font-weight: bold;
}

/**
 * Address styling not present in Safari and Chrome.
 */

dfn {
    font-style: italic;
}

/**
 * Address variable h1 font-size and margin within section and article
 * contexts in Firefox 4+, Safari, and Chrome.
 */

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

/**
 * Address styling not present in IE 8/9.
 */

mark {
    background: #ff0;
    color: #000;
}

/**
 * Address inconsistent and variable font size in all browsers.
 */

small {
    font-size: 80%;
}

/**
 * Prevent sub and sup affecting line-height in all browsers.
 */

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sup {
    top: -0.5em;
}

sub {
    bottom: -0.25em;
}

/* Embedded content
    ========================================================================== */

/**
 * Remove border when inside a element in IE 8/9/10.
 */

img {
    border: 0;
}

/**
 * Correct overflow not hidden in IE 9/10/11.
 */

svg:not(:root) {
    overflow: hidden;
}

/* Grouping content
    ========================================================================== */

/**
 * Address margin not present in IE 8/9 and Safari.
 */

figure {
    margin: 1em 40px;
}

/**
 * Address differences between Firefox and other browsers.
 */

hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
}

/**
 * Contain overflow in all browsers.
 */

pre {
    overflow: auto;
}

/**
 * Address odd em-unit font size rendering in all browsers.
 */

code,
kbd,
pre,
samp {
    font-family: monospace, monospace;
    font-size: 1em;
}

/* Forms
    ========================================================================== */

/**
 * Known limitation: by default, Chrome and Safari on OS X allow very limited
 * styling of select, unless a border property is set.
 */

/**
 * 1. Correct color not being inherited.
 *    Known issue: affects color of disabled elements.
 * 2. Correct font properties not being inherited.
 * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
 */

button,
input,
optgroup,
select,
textarea {
    color: inherit; /* 1 */
    font: inherit; /* 2 */
    margin: 0; /* 3 */
}

/**
 * Address overflow set to hidden in IE 8/9/10/11.
 */

button {
    overflow: visible;
}

/**
 * Address inconsistent text-transform inheritance for button and select.
 * All other form control elements do not inherit text-transform values.
 * Correct button style inheritance in Firefox, IE 8/9/10/11, and Opera.
 * Correct select style inheritance in Firefox.
 */

button,
select {
    text-transform: none;
}

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native audio
 *    and video controls.
 * 2. Correct inability to style clickable input types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    input and others.
 */

button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button; /* 2 */
    cursor: pointer; /* 3 */
}

/**
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled] {
    cursor: default;
}

/**
 * Remove inner padding and border in Firefox 4+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

/**
 * Address Firefox 4+ setting line-height on input using !important in
 * the UA stylesheet.
 */

input {
    line-height: normal;
}

/**
 * It's recommended that you don't attempt to style these elements.
 * Firefox's implementation doesn't respect box-sizing, padding, or width.
 *
 * 1. Address box sizing set to content-box in IE 8/9/10.
 * 2. Remove excess padding in IE 8/9/10.
 */

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
}

/**
 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
 * font-size values of the input, it causes the cursor style of the
 * decrement button to change from default to text.
 */

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

/**
 * 1. Address appearance set to searchfield in Safari and Chrome.
 * 2. Address box-sizing set to border-box in Safari and Chrome
 *    (include -moz to future-proof).
 */

input[type="search"] {
    -webkit-appearance: textfield; /* 1 */
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box; /* 2 */
    box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
 * Safari (but not Chrome) clips the cancel button when the search input has
 * padding (and textfield appearance).
 */

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

/**
 * Define consistent border, margin, and padding.
 */

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct color not being inherited in IE 8/9/10/11.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */

legend {
    border: 0; /* 1 */
    padding: 0; /* 2 */
}

/**
 * Remove default vertical scrollbar in IE 8/9/10/11.
 */

textarea {
    overflow: auto;
}

/**
 * Don't inherit the font-weight (applied by a rule above).
 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
 */

optgroup {
    font-weight: bold;
}

/* Tables
    ========================================================================== */

/**
 * Remove most spacing between table cells.
 */

table {
    border-collapse: collapse;
    border-spacing: 0;
}

td,
th {
    padding: 0;
}
`},t.getPopupCss=function(){return n.css`
/* popup.css */
:root {
    --popup-width: 680px;
    }

body {
    width: var(--popup-width);
    height: 580px;
    color: #222;
    margin: 0em;
    padding: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
}

/* always show scrollbar */
::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
}

::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}

div.header-fixed {
    top: 0px;
    position: fixed;
    overflow: hidden;
    margin-bottom: 20px;
    width: var(--popup-width);
    background-color: white;
    z-index: 999;
    padding-top: 10px;
    height: 40px;
    border-bottom: 1px solid #ccc;
}
div.first-content {
    margin-top: 50px;
}

label.invalid {
    position: absolute;
    top: 12px;
    right: 5px;
    color: red;
    display: block;
}

button.save-changes, button.revert-changes {
    position: absolute;
    top: 5px;
}

button.save-changes {
    right: 5px;
}

button.revert-changes {
    left: 5px;
}

h1.top {
    width: 100%;
    margin-left: -0.4em;
    margin-right: 0em;
    text-align: center;
    font-family: sans-serif;
    font-size: 17pt;
}

h1.top img {
    height: 29px;
    width: 29px;
    margin-right: 16px;
    margin-bottom: -10px;
}

label.desc {
    display: inline;
    padding-top: 7px;
}

input.key {
    text-align: center;
    border: 1px solid #777;
}

input.invalid-field,
input[type="text"].invalid-field:focus,
input[type="number"].invalid-field:focus {
    border: 1px solid red;
}

div.container {
    margin: 0px; /* remove 35px margin set by skeleton */
    width: 100%;
}

div.bottom-border {
    border-bottom: 1px solid #eee;
    margin-bottom: 0.5em;
}

.align-right {
    text-align: right;
}

.align-center {
    text-align: center;
}

select.feedback {
    -webkit-appearance: none;
    background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+);
    background-position-x: 98%;
    background-position-y: 45%;
    background-repeat: no-repeat;
}

button.trash {
    text-align: center;
    padding-left: 0px;
    padding-right: 0px;
}

button.time-shortcut {
    padding-left: 18px;
}

fieldset {
    border: 1px solid silver;
    padding: 8px;
    border-radius: 4px;
}
legend{
    padding: 2px;
}

h3.category {
    margin-top: 0.5em;
    font-size: 14pt;
    font-weight: normal;
    border-bottom: 1px solid silver;
}

button.enabled {
    color: green;
}

button.disabled {
    color: red;
}

em.disclaimer {
    text-align: center;
    border-top: 1px solid #aaa;
    margin-top: 0.8em;
    padding-top: 0.8em;
    padding-bottom: 0.8em;
}

/* separator between sections of the popup */
div.block-separator {
    border-bottom: 1px solid #aaa;
    font-size: 12pt;
    margin-bottom: 0.5em;
    margin-top: .4em;
}


/* <shortcuts>   */
div.shortcut {
    /* width: 14em; */ /* avoid conflicting with skeleton.css */
    height: 38px;
    border: 1px solid #444;
    border-radius: 4px;
    display: inline-block;
    text-align: center;
}

div.shortcut-selected {
    border: 1px solid #33C3F0;
    box-shadow: 0px 0px 2px 2px #33C3F0;
    /* in order: x offset, y offset, blur size, spread size, color
        blur size and spread size are optional (they default to 0) */
}

div.shortcut-key {
    border: none;
    border-radius: 4px;
    background-color: #444;
    height: 1.5em;

    font-family: sans-serif;
    font-size: 12pt;
    color: white;

    padding-top: 0.1em;
    padding-bottom: 0.2em;
    padding-left: 0.4em;
    padding-right: 0.4em;
    vertical-align: middle;

    margin-top: 0.2em;
    margin-bottom: 0.2em;
    margin-left: 0.7em;
    margin-right: 0em;
    display: inline-block;

    text-align: center;
}

div.shortcut > div:first-child {
    margin-left: 0.2em;
}
/* </shortcuts>   */


div.container {
    padding: 0em;
}

.hidden {
    display: none;
}

.visible {
    display: initial;
}

span.last-saved-date {
    padding-top: 8px; /* to align it vertically with the label to its left */
}

abbr[title].info-icon { /* just a [i] info icon, no underline needed */
    text-decoration: none;
    border-bottom: none;
}

`}},83:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.ShortcutElement=void 0;const i=r(5026),s=r(3558),a=r(5026),l=r(1563),u=r(3727);let c=class extends s.LitElement{constructor(e,t,r,n){super(),this.widthColumns=e,this.recorder=t,this.shortcut=r,this.onChange=n}getValue(){return this.shortcut}setValue(e){this.shortcut=e}firstUpdated(){this.divNode&&this.recorder.addContainer(this.divNode,this.shortcut,(e=>this.onChange(e)))}render(){return s.html`<div class="shortcut ${this.widthColumns} columns"></div>`}};c.styles=[l.getNormalizeCss(),l.getSkeletonCss(),l.getSkeletonFirstChildCss(),l.getPopupCss()],n([a.query("div"),o("design:type",HTMLDivElement)],c.prototype,"divNode",void 0),c=n([i.customElement("shortcut-element"),o("design:paramtypes",[String,u.ShortcutRecorder,u.Shortcut,Function])],c),t.ShortcutElement=c},9503:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.SubtitlesSizeSelector=void 0;const i=r(5026),s=r(6247),a=r(374);let l=class extends a.GenericSelector{constructor(e,t,r){super(s.SubtitlesSize.allInstances().map((e=>({id:e.getStorageId(),text:e.getDisplayString()}))),e,t,r)}};l=n([i.customElement("subtitles-size-selector"),o("design:paramtypes",[String,Number,Function])],l),t.SubtitlesSizeSelector=l},9242:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContentToBackgroundEvents=t.BackgroundToContentEvents=void 0,function(e){e.START="B2C_START",e.UPDATE_PREFS="B2C_UPDATE_PREFS"}(t.BackgroundToContentEvents||(t.BackgroundToContentEvents={})),function(e){e.SAVE_PREFS="B2C_SAVE_PREFS"}(t.ContentToBackgroundEvents||(t.ContentToBackgroundEvents={}))},9671:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LanguageDispatch=void 0;const o=n(r(102)),i=n(r(5892)),s=n(r(4303)),a=r(9692);class l{static configureLanguageForLocale(e){let t;return t=e.startsWith("en_")?this.DEFAULT_LANGUAGE:e.startsWith("fr")?new a.Language("fr",i.default,this.DEFAULT_LANGUAGE):e.startsWith("es")?new a.Language("es",s.default,this.DEFAULT_LANGUAGE):this.DEFAULT_LANGUAGE,a.setCurrentLanguage(t),t}}t.LanguageDispatch=l,l.DEFAULT_LANGUAGE=new a.Language("en",o.default)},102:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={language:{code:"en",preferred_subtitles:"English",preferred_subtitles_code:"en"},language_selector:{en:"English",ar:"Arabic",zhs:"Chinese (Simplified)",zht:"Chinese (Traditional)",hr:"Croatian",fil:"Filipino",fr:"French",de:"German",he:"Hebrew",hi:"Hindi",it:"Italian",ja:"Japanese",ko:"Korean",fa:"Persian",pl:"Polish",pt:"Portuguese",ru:"Russian",es:"Spanish",tl:"Tagalog",ta:"Tamil",th:"Thai",vi:"Vietnamese"},history:{viewing:"Viewing history",open_info:"Click to open information page for this show",watch_again:"Click to watch again",delete:"Click to remove from viewing history"},show_overlay:{predicted_match:"Predicted match for your taste, based on your viewing history",quality_hd:"HD",no_synopsis:"(no synopsis available)",num_seasons:"{{smart_count}} Season |||| {{smart_count}} Seasons",percent_match:"{{percent}}% Match",duration_minutes:"{{duration}}m",season_number:{with_year:"Season {{number}} ({{year}})",no_year:"Season {{number}}"}},movie_overlay:{predicted_match:"Predicted match for your taste, based on your viewing history",quality_hd:"HD",no_synopsis:"(no synopsis available)",percent_match:"{{percent}}% Match",duration_minutes:"{{duration}}m",go_to_info_page:"Open information page"},common_overlay:{like_video:"Like video",dislike_video:"Dislike video"},subtitles:{size:{small:"Small",medium:"Medium",large:"Large"},feedback:{small:"S",medium:"M",large:"L"}},text:{invalid_action:"Invalid text action: {{action}}"},reserved:{f_full_screen:"F used for full-screen",m_mute_unmute:"M used for mute/unmute",arrows_scrubbing:"\u2190\u2192 used for scrubbing",arrows_volume:"\u2191\u2193 used for volume",space_play_pause:"Space used for play/pause",enter_play_pause:"Enter used for play/pause",shortcut_logs:" Ctrl {{alt}} {{shift}} L shows logs",shortcut_debug:" Ctrl {{alt}} {{shift}} D is debug mode"},popup:{keys:{play_pause:"Play/pause",play_faster:"Play faster",play_slower:"Play slower",next_frame:"Next frame",previous_frame:"Previous frame",next_episode:"Next episode",previous_episode:"Previous episode",toggle_pip:"Toggle PiP",stream_stats:"Stream stats",view_history:"View history",view_show_info:"View show info",subtitles_on_off:"Subtitles (on/off)",subtitles_size:"Subtitles size",subtitles_next:"Subtitles (next)",subtitles_previous:"Subtitles (previous)",audio_next:"Audio (next)",audio_previous:"Audio (previous)",mute_unmute:"Mute/unmute",volume_up:"Volume up",volume_down:"Volume down",save_position:"Save position",restore_position:"Restore position",delete_position:"Delete position",like_video:"Like video",dislike_video:"Dislike video",remove_rating:"Remove rating"},help:{play_pause:"Use this to define a keyboard shortcut that will alternate between playing the video and pausing it when pressed.",play_faster:"Plays the video faster (press again to go even faster).",play_slower:"Plays the video slower (press again to go even slower).",next_frame:"Moves ahead by only one frame.\nNote: only works when the video is paused.",previous_frame:"Moves back by only one frame.\nNote: only works when the video is paused.",next_episode:"Starts playing the next episode, if watching a series.",previous_episode:"Starts playing the previous episode, if watching a series.",toggle_pip:'Toggles "Picture-in-Picture", which is when the video you\'re watching floats above other windows.',stream_stats:"Shows internal stats about the video stream coming from Netflix.",view_history:"Shows Netflix history, lets your replay the videos you liked and delete the ones you didn't.",view_show_info:"Shows information about the current movie or series, lets you jump to a different episode.",subtitles_on_off:"Turns subtitles on or off.",subtitles_size:"Cycles through the subtitles sizes, between small/medium/large.",subtitles_next:"Changes the subtitles language to the next one in the list",subtitles_previous:"Changes the subtitles language to the previous one in the list",audio_next:"Changes the audio language to the next one in the list.",audio_previous:"Changes the audio language to the previous one in the list.",mute_unmute:'Note that you can already use "m" to mute or unmute any Netflix video. This allows you to define a new shortcut, as long as it does not conflict with the existing Netflix shortcut.',volume_up:'Netflix already supports increasing the volume with the up arrow, but you can define a second shortcut here and customize by how much it changes the volume using the "volume change" field below.',volume_down:'Netflix already supports decreasing the volume with the down arrow, but you can define a second shortcut here and customize by how much it changes the volume using the "volume change" field below.',save_position:'Saves your current position in the video. Use the "restore" shortcut to jump back to it.',restore_position:"Jumps back to a previously-saved position in the video you are watching.",delete_position:'Deletes the saved position for the current video. After this, using the "restore" shortcut will no longer jump to a different time in the video.',like_video:'Marks the current video as "liked", to improve the Netflix recommendations.',dislike_video:'Marks the current video as "disliked", to improve the Netflix recommendations.',remove_rating:"Removes the like/dislike rating for the current video."},label:{extension_name:"Netflix\u2122\ufe0f Keyboard Shortcuts",duplicate_keys:"Duplicate keys",invalid_volume:"Invalid volume change",invalid_speed:"Invalid speed change",revert_preferences:"\u26a0\ufe0f Really revert preferences?",last_saved:"Last saved",disclaimer:"Netflix is a trademark of Netflix, Inc.{{newline}}This extension is in {{start_underline}}no way{{end_underline}} created, sponsored, or endorsed by Netflix."},button:{revert:"REVERT",save:"SAVE",revert_initial:"Revert",revert_confirm:"Confirm",revert_cancel:"Cancel",new_time_shortcut:"New time shortcut"},feedback:{nothing:"Nothing",text_only:"Text only",circled:"Circled"},on_off:{yes:"YES",no:"NO"},column_header:{action:"Action",shortcut:"Shortcut",visual:"Visual",nav_shortcuts:"Shortcut",nav_skip:"Skip (sec.)",nav_enabled:"Enabled",nav_remove:"Remove"},separators:{custom_shortcuts:"Custom shortcuts for jumping through the video",num_keys:"Numeric keys (0 to 9)",other:"Other"},help_text:{time_skip:"Visual",percent_jumps:"Keys 0-9 go to 0% to 90% of the video",percent_jumps_feedback:"What visual to display when pressed",volume_delta:"Volume change for shortcuts (%)",speed_delta:"Playback speed change for shortcuts (%)",skip_intro:"Automatically skip intro for series",skip_recap:"Automatically skip recap for series",play_next_episode:"Automatically play next episode for series",double_rating:"Re-rating removes previous rating",default_lang:"Preferred subtitles language",default_sub_size:"Default subtitles size",revert:"Revert settings to extension defaults",last_saved:"Last saved",log_level:"Log level"},help_html:{time_skip:"For these custom shortcuts, what visual feedback to show on screen.",percent_jumps:"When you press keys 0 to 9 on your keyboard, whether to jump to 0% of the video when 0 is pressed, 10% of the video when 1 is pressed, etc. up to 90% with 9. This provides an easy way to skip through the video without having to press the same key for a long time.",percent_jumps_feedback:"When you press keys 0 to 9 on your keyboard, whether to show the percentage of the video to which you're jumping, and if so with what design.",volume_delta:"For the Volume up/Volume down shortcuts, how much to change the audio volume by (the volume range goes from 0 to 100).",speed_delta:"For the Play faster/slower shortcuts, how much to change the playback speed by (e.g. if the value is 5, increase or decrease by 5%).",skip_intro:'When a series has a "skip" button to skip the intro credits, automatically click the button.',skip_recap:'When a series has a "skip recap" button to skip the recap from the previous episode, automatically click the button.',play_next_episode:'When a series has a "Next Episode" button around the end credits, automatically click the button.',double_rating:"If enabled with YES, submitting the same rating twice (e.g. \u{1f44d} and then \u{1f44d} again) removes the rating.\nIf disabled with NO, voting twice just sends it again to Netflix but doesn't remove the rating.",default_lang:'When the shortcut for "Subtitles (on/off)" is used, which subtitles language to select if subtitles hadn\'t been turned on before.',default_sub_size:'When the shortcut for "Subtitles (on/off)" is used, which subtitles size to select.',revert:"This deletes *all* your custom key bindings and preferences for this extension and reverts them to the default values that this extension came with.",last_saved:"When preferences were last saved",log_level:"For developers: how much information to log in the browser console."}}}},5892:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={language:{code:"fr",preferred_subtitles:"French",preferred_subtitles_code:"fr"},language_selector:{en:"Anglais",ar:"Arabe",zhs:"Chinois (simplifi\xe9)",zht:"Chinois (traditionnel)",hr:"Croate",fil:"Philippin",fr:"Fran\xe7ais",de:"Allemand",he:"H\xe9breu",hi:"Hindi",it:"Italien",ja:"Japonais",ko:"Kor\xe9en",fa:"Farsi",pl:"Polonais",pt:"Portugais",ru:"Russe",es:"Espagnol",tl:"Tagalog",ta:"Tamoul",th:"Tha\xef",vi:"Vietnamien"},history:{viewing:"Activit\xe9 r\xe9cente",open_info:"Ouvrir la page d'information",watch_again:"Cliquez ici pour regarder \xe0 nouveau",delete:"Cliquez ici pour supprimer cette entr\xe9e"},show_overlay:{predicted_match:"Score de similarit\xe9 bas\xe9 sur votre historique de visionnage",quality_hd:"HD",no_synopsis:"(aucune description disponible)",num_seasons:"{{smart_count}} Saison |||| {{smart_count}} Saisons",percent_match:"{{percent}}% Similaire",duration_minutes:"{{duration}}m",season_number:{with_year:"Saison {{number}} ({{year}})",no_year:"Saison {{number}}"}},movie_overlay:{predicted_match:"Score de similarit\xe9 bas\xe9 sur votre historique de visionnage",quality_hd:"HD",no_synopsis:"(aucune description disponible)",percent_match:"{{percent}}% Similaire",duration_minutes:"{{duration}}m",go_to_info_page:"Plus d'informations"},common_overlay:{like_video:"J'aime cette vid\xe9o",dislike_video:"Je n'aime pas cette vid\xe9o"},subtitles:{size:{small:"Petit",medium:"Moyen",large:"Grand"},feedback:{small:"P",medium:"M",large:"G"}},text:{invalid_action:"Action texte invalide: {{action}}"},reserved:{f_full_screen:"F pour plein \xe9cran",m_mute_unmute:"M pour couper le son",arrows_scrubbing:"\u2190\u2192 pour avancer/reculer",arrows_volume:"\u2191\u2193 pour le volume",space_play_pause:"Espace pour jouer/pause",enter_play_pause:"Entrer pour jouer/pause",shortcut_logs:" Ctrl {{alt}} {{shift}} L pour les log",shortcut_debug:" Ctrl {{alt}} {{shift}} D pour le mode dev"},popup:{keys:{play_pause:"Jouer/pause",play_faster:"Plus rapide",play_slower:"Plus lent",next_frame:"Image suivante",previous_frame:"Image pr\xe9c\xe9dente",next_episode:"\xc9pisode suivant",previous_episode:"\xc9pisode pr\xe9c\xe9dent",toggle_pip:"Image en vue \xe0 part",stream_stats:"Statistiques",view_history:"Historique",view_show_info:"Information vid\xe9o",subtitles_on_off:"Sous-titres (on/off)",subtitles_size:"Taille sous-titres",subtitles_next:"Sous-titre suivant",subtitles_previous:"Sous-titre pr\xe9c\xe9dent",audio_next:"Audio (suivant)",audio_previous:"Audio (pr\xe9c\xe9dent)",mute_unmute:"Son (on/off)",volume_up:"Volume +",volume_down:"Volume -",save_position:"Sauver le moment",restore_position:"Jouer moment sauv\xe9",delete_position:"Supprimer moment",like_video:"Aimer la vid\xe9o",dislike_video:"Ne pas aimer",remove_rating:"Enlever le vote"},help:{play_pause:"Utilisez ce champ pour d\xe9finir un raccour\xe7i clavier qui va alterner entre jouer et pause.",play_faster:"Jouer la vid\xe9o plus vite (appuyez encore pour acc\xe9l\xe9rer encore plus).",play_slower:"Jouer la vid\xe9o plus lentement (appuyez encore pour ralentir encore plus).",next_frame:"Avancer d'une image seulement\nNotez que cela ne fonctionne que lorsque la vid\xe9o est en pause.",previous_frame:"Reculer d'une image seulement\nNotez que cela ne fonctionne que lorsque la vid\xe9o est en pause.",next_episode:"Jouer l'\xe9pisode suivant, si c'est une s\xe9rie.",previous_episode:"Jouer l'\xe9pisode pr\xe9c\xe9dent, si c'est une s\xe9rie.",toggle_pip:'Activer le mode "Picture-in-Picture", qui est quand la vid\xe9o flotte au dessus du navigateur.',stream_stats:"Voir des statistiques de streaming de Netflix.",view_history:"Voir l'historique de visionnage, permet \xe9galement de supprimer des vid\xe9os de cette liste.",view_show_info:"Voir des infos sur la vid\xe9o en cours de visionnage, permet \xe9galement de jouer un autre \xe9pisode.",subtitles_on_off:"Active ou d\xe9sactive les sous-titres.",subtitles_size:"Change la taille des sous-titres, entre petit, moyen, et grand.",subtitles_next:"Passe \xe0 la langue suivante pour les sous-titres.",subtitles_previous:"Passe \xe0 la langue pr\xe9c\xe9dente pour les sous-titres.",audio_next:"Passe \xe0 la langue suivante pour les vid\xe9os doubl\xe9es.",audio_previous:"Passe \xe0 la langue pr\xe9c\xe9dente pour les vid\xe9os doubl\xe9es.",mute_unmute:"Vous pouvez d\xe9j\xe0 utiliser \"m\" pour couper ou remettre le son. Ceci vous permet de d\xe9finir un nouveau raccour\xe7i, du moment qu'il n'est pas d\xe9j\xe0 utilis\xe9 par Netflix.",volume_up:"Vous pouvez d\xe9j\xe0 monter le son avec la fl\xe8che du haut, mais ce champ vous permet de d\xe9finir un nouveau raccour\xe7i et de configurer plus bas de combien changer le volume.",volume_down:"Vous pouvez d\xe9j\xe0 baisser le son avec la fl\xe8che du bas, mais ce champ vous permet de d\xe9finir un nouveau raccour\xe7i et de configurer plus bas de combien changer le volume.",save_position:"Se souvenir du moment actuel dans la vid\xe9o (l'horodatage). Un second raccour\xe7i vous permet d'y retourner en pressant une seule touche.",restore_position:"Revient au moment enregistr\xe9 pr\xe9c\xe9demment.",delete_position:"Efface le moment enregistr\xe9.",like_video:'Envoie \xe0 Netflix "j\'aime cette vid\xe9o", pour raffiner leurs recommendations.',dislike_video:'Envoie \xe0 Netflix "je n\'aime pas cette vid\xe9o", pour raffiner leurs recommendations.',remove_rating:"Enl\xe8ve votre vote pour cette vid\xe9o."},label:{extension_name:"Raccour\xe7is Clavier pour Netflix\u2122\ufe0f",duplicate_keys:"Config en double",invalid_volume:"Changement de volume invalide",invalid_speed:"Changement de vitesse invalide",revert_preferences:"\u26a0\ufe0f Revenir \xe0 la config de base?",last_saved:"Derni\xe8re sauvegarde",disclaimer:"Netflix est une marque d\xe9pos\xe9e de Netflix, Inc.{{newline}}Cette extension n'est {{start_underline}}pas du tout{{end_underline}} faite, sponsoris\xe9e, ou promue par Netflix."},button:{revert:"ANNULER",save:"SAUVEGARDER",revert_initial:"R\xe9-initialiser",revert_confirm:"Confirmer",revert_cancel:"Annuler",new_time_shortcut:"Nouveau raccour\xe7i temps"},feedback:{nothing:"Aucun",text_only:"Texte seul",circled:"Cercle"},on_off:{yes:"OUI",no:"NON"},column_header:{action:"Action",shortcut:"Raccour\xe7i clavier",visual:"Visuel",nav_shortcuts:"Raccour\xe7i",nav_skip:"Temps (sec.)",nav_enabled:"Activ\xe9",nav_remove:"Supprimer"},separators:{custom_shortcuts:"Raccour\xe7is pour avancer ou reculer dans la vid\xe9o",num_keys:"Touches num\xe9riques (0 \xe0 9)",other:"Autres param\xe8tres"},help_text:{time_skip:"Visuel",percent_jumps:"0-9 pour aller de 0% \xe0 90% de la vid\xe9o",percent_jumps_feedback:"Visuel \xe0 afficher quand 0-9 est appuy\xe9",volume_delta:"Changement de volume (pourcentage)",speed_delta:"Changement de vitesse (pourcentage)",skip_intro:"Passer l'intro des s\xe9ries",skip_recap:"Passer le r\xe9cap' des s\xe9ries",play_next_episode:"Jouer automatiquement l'\xe9pisode suivant",double_rating:"Re-voter enl\xe8ve le vote pr\xe9c\xe9dent",default_lang:"Langue par d\xe9faut pour les sous-titres",default_sub_size:"Taille sous-titres par d\xe9faut",revert:"Revenir \xe0 la config de base",last_saved:"Derni\xe8re sauvegarde",log_level:"Niveau de log"},help_html:{time_skip:"Pour ces raccour\xe7is personnels, quel visuel afficher \xe0 l'\xe9cran quand ces touches sont press\xe9es.",percent_jumps:"En appuyant sur les touches 0 \xe0 9, s'il faut aller \xe0 0% de la vid\xe9o quand 0 est pr\xe9ss\xe9, 10% pour 1, etc. jusqu'\xe0 90% pour 9.",percent_jumps_feedback:"Quand vous appuyez sur les touches 0 \xe0 9, s'il faut afficher le pourcentage de la vid\xe9o \xe0 charger, et avec quel visuel.",volume_delta:"Pour les raccour\xe7is de volume, de combien changer le volume, en pourcentage.",speed_delta:'Pour les raccour\xe7is plus rapide/plus lent, de combien changer la vitesse de la vid\xe9o (par exemple si la valeur est 5, jouer 5% plus rapidement quand le raccour\xe7i "plus vite" est utilis\xe9).',skip_intro:"Quand une s\xe9rie a un bouton \"passer l'intro\", s'il faut le cliquer automatiquement.",skip_recap:"Quand une s\xe9rie a un bouton \"ignorer le r\xe9cap'\", s'il faut le cliquer automatiquement.",play_next_episode:"Quand une s\xe9rie a un bouton \"\xc9pisode suivant\" \xe0 la fin d'un \xe9pisode, s'il faut le cliquer automatiquement.",double_rating:"Avec OUI, voter deux fois pareil (par exemple \u{1f44d} et encore \u{1f44d}) enl\xe8ve le second vote.\nAvec NON, voter la m\xeame chose deux fois ne change rien.",default_lang:'Quand le raccour\xe7i pour "Sous-titres (on/off)" est utilis\xe9, quelle langue choisir automatiquement pour les sous-titres.',default_sub_size:'Quand le raccour\xe7i pour "Sous-titres (on/off)" est utilis\xe9, quelle taille de sous-titres choisir automatiquement.',revert:"Supprime *tous* vos raccour\xe7is persos et revient aux pr\xe9f\xe9rences par d\xe9faut de cette extension.",last_saved:"Quand les pr\xe9f\xe9rences ont \xe9t\xe9 sauv\xe9es",log_level:"Pour les d\xe9velopeurs, quel niveau de log afficher dans la console."}}}},1476:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NetflixLanguageList=t.NetflixLanguage=void 0;const n=r(9692);class o{constructor(e,t,r){this.bcp47=e,this.displayName=t,this.translationKey=r}}t.NetflixLanguage=o;t.NetflixLanguageList=class{static getAll(){const e=[new o("en","English","language_selector.en"),new o("ar","Arabic","language_selector.ar"),new o("zh-Hans","Chinese (Simplified)","language_selector.zhs"),new o("zh-Hant","Chinese (Traditional)","language_selector.zht"),new o("hr","Croatian","language_selector.hr"),new o("fil","Filipino","language_selector.fil"),new o("fr","French","language_selector.fr"),new o("de","German","language_selector.de"),new o("he","Hebrew","language_selector.he"),new o("hi","Hindi","language_selector.hi"),new o("it","Italian","language_selector.it"),new o("ja","Japanese","language_selector.ja"),new o("ko","Korean","language_selector.ko"),new o("fa","Persian","language_selector.fa"),new o("pl","Polish","language_selector.pl"),new o("pt","Portuguese","language_selector.pt"),new o("ru","Russian","language_selector.ru"),new o("es","Spanish","language_selector.es"),new o("tl","Tagalog","language_selector.tl"),new o("ta","Tamil","language_selector.ta"),new o("th","Thai","language_selector.th"),new o("vi","Vietnamese","language_selector.vi")],t=n._t("language.preferred_subtitles_code"),r=e.find((e=>e.bcp47===t))||e[0],i=e.filter((e=>e.bcp47!==t));return[r].concat(i.sort(((e,t)=>n._t(e.translationKey).localeCompare(n._t(t.translationKey)))))}}},9692:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t._t=t.unsetCurrentLanguage_TestOnly=t.setCurrentLanguage=t.Language=void 0;const o=n(r(4078));t.Language=class{constructor(e,t,r){this.onMissingKey=null,this.defaultLanguage=r,this.languageCode=e;const n={phrases:t,locale:e,interpolation:{prefix:"{{",suffix:"}}"}};void 0!==this.defaultLanguage?n.onMissingKey=(e,t,r)=>{var n;return this.handleMissingKey(e,t,r),(null===(n=this.defaultLanguage)||void 0===n?void 0:n.t(e))||e}:n.onMissingKey=(e,t,r)=>(this.handleMissingKey(e,t,r),e),this.polyglot=new o.default(n)}handleMissingKey(e,t,r){null!==this.onMissingKey&&this.onMissingKey(e)}setCallbackOnMissingKey(e){this.onMissingKey=e}t(e,t){return this.polyglot.t(e,t)}getLanguageCode(){return this.languageCode}};let i=null;t.setCurrentLanguage=function(e){if(null!==i)throw new Error("Language already set!");i=e},t.unsetCurrentLanguage_TestOnly=function(){const e=i;return i=null,e},t._t=function(e,t){return(null==i?void 0:i.t(e,t))||e}},4303:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={language:{code:"es",preferred_subtitles:"Spanish",preferred_subtitles_code:"es"},language_selector:{en:"Ingl\xe9s",ar:"\xc1rabe",zhs:"Chino (simplificado)",zht:"Chino (tradicional)",hr:"Croata",fil:"Filipino",fr:"Franc\xe9s",de:"Alem\xe1n",he:"Hebreo",hi:"Hindi",it:"Italiano",ja:"Japon\xe9s",ko:"Coreano",fa:"Persa",pl:"Polaco",pt:"Portugu\xe9s",ru:"Ruso",es:"Espa\xf1ol",tl:"Tagalo",ta:"Tamil",th:"Tailand\xe9s",vi:"Vietnamita"},history:{viewing:"Historial de reproducci\xf3n",open_info:"Haz clic para abrir la p\xe1gina de informaci\xf3n de este programa",watch_again:"Haz clic para verlo de nuevo",delete:"Haz clic para eliminarlo del historial de visualizaci\xf3n"},show_overlay:{predicted_match:"Predicci\xf3n de coincidencia con tus gustos, basada en tu historial de visionado",quality_hd:"HD",no_synopsis:"(sin sinopsis disponible)",num_seasons:"Temporada {{smart_count}} |||| Temporadas {{smart_count}}",percent_match:"{{percent}} % de coincidencia",duration_minutes:"{{duration}}m",season_number:{with_year:"Temporada {{number}} ({{year}})",no_year:"Temporada {{number}}"}},movie_overlay:{predicted_match:"Predicci\xf3n de coincidencia con tus gustos, basada en tu historial de visionado",quality_hd:"HD",no_synopsis:"(sin sinopsis disponible)",percent_match:"{{percent}}% de coincidencia",duration_minutes:"{{duration}}m",go_to_info_page:"Abrir p\xe1gina de informaci\xf3n"},common_overlay:{like_video:"Me gusta este v\xeddeo",dislike_video:"No me gusta este v\xeddeo"},subtitles:{size:{small:"Peque\xf1o",medium:"Medio",large:"Grande"},feedback:{small:"P",medium:"M",large:"G"}},text:{invalid_action:"Acci\xf3n de texto no v\xe1lida: {{action}}"},reserved:{f_full_screen:"F es para pantalla completa",m_mute_unmute:"M es para activar el silencio",arrows_scrubbing:"\u2190\u2192 para avanzar o retroceder",arrows_volume:"\u2191\u2193 es para volumen",space_play_pause:"Espacio es para pausar",enter_play_pause:"Intro es para pausar",shortcut_logs:" Ctrl {{alt}} {{shift}} L\nmuestra registros",shortcut_debug:"Ctrl {{alt}} {{shift}} D\nes el modo de depuraci\xf3n"},popup:{keys:{play_pause:"Reproducir/pausar",play_faster:"Reproducir m\xe1s r\xe1pido",play_slower:"Reproducir m\xe1s lento",next_frame:"Siguiente fotograma",previous_frame:"Fotograma anterior",next_episode:"Siguiente episodio",previous_episode:"Episodio anterior",toggle_pip:"Alternar PiP",stream_stats:"Estad\xedsticas de transmisi\xf3n",view_history:"Ver historial",view_show_info:"Ver info. del programa",subtitles_on_off:"Activar/desactivar subt\xedtulos",subtitles_size:"Tama\xf1o de los subt\xedtulos",subtitles_next:"Subt\xedtulos (siguiente)",subtitles_previous:"Subt\xedtulos (anterior)",audio_next:"Audio (siguiente)",audio_previous:"Audio (anterior)",mute_unmute:"Activar/desactivar silencio",volume_up:"Subir volumen",volume_down:"Bajar volumen",save_position:"Guardar posici\xf3n",restore_position:"Restaurar posici\xf3n",delete_position:"Borrar posici\xf3n",like_video:"Me gusta el v\xeddeo",dislike_video:"No me gusta el v\xeddeo",remove_rating:"Eliminar calificaci\xf3n"},help:{play_pause:"Usa esta opci\xf3n para definir un atajo de teclado que alternar\xe1 entre la reproducci\xf3n del v\xeddeo y la pausa cuando se pulse.",play_faster:"Reproduce el v\xeddeo m\xe1s r\xe1pido (pulsa de nuevo para ir a\xfan m\xe1s r\xe1pido).",play_slower:"Reproduce el v\xeddeo m\xe1s lento (pulsa de nuevo para ir a\xfan m\xe1s lento).",next_frame:"Avanza solo un fotograma.\nNota: solo funciona cuando el v\xeddeo est\xe1 en pausa.",previous_frame:"Retrocede solo un fotograma.\nNota: solo funciona cuando el v\xeddeo est\xe1 en pausa.",next_episode:"Empieza a reproducir el siguiente episodio, si est\xe1s viendo una serie.",previous_episode:"Empieza a reproducir el episodio anterior, si est\xe1s viendo una serie.",toggle_pip:'Activa la funci\xf3n "Picture-in-Picture", que es cuando el v\xeddeo que est\xe1s viendo se sit\xfaa por encima de otras ventanas.',stream_stats:"Muestra estad\xedsticas internas sobre la transmisi\xf3n de v\xeddeo proveniente de Netflix.",view_history:"Muestra el historial de visualizaci\xf3n de Netflix, te permite reproducir los v\xeddeos que te gustaron y eliminar los que no.",view_show_info:"Muestra informaci\xf3n sobre la pel\xedcula o serie actual, te permite saltar a un episodio diferente.",subtitles_on_off:"Activa o desactiva los subt\xedtulos.",subtitles_size:"Recorre los tama\xf1os de los subt\xedtulos, entre peque\xf1o/mediano/grande.",subtitles_next:"Cambia el idioma de los subt\xedtulos al siguiente de la lista.",subtitles_previous:"Cambia el idioma de los subt\xedtulos al anterior en la lista.",audio_next:"Cambia el idioma del audio al siguiente de la lista.",audio_previous:"Cambia el idioma del audio al anterior en la lista.",mute_unmute:'Ten en cuenta que ya puedes usar "m" para activar o desactivar el silencio en cualquier v\xeddeo de Netflix. Esto te permite definir un nuevo atajo, siempre que no entre en conflicto con el atajo de Netflix existente.',volume_up:'Netflix ya admite aumentar el volumen con la flecha hacia arriba, pero puedes definir un segundo atajo aqu\xed y personalizar en qu\xe9 medida cambia el volumen con el campo "cambio de volumen" de abajo.',volume_down:'Netflix ya admite la disminuci\xf3n del volumen con la flecha hacia abajo, pero puedes definir un segundo atajo aqu\xed y personalizar en qu\xe9 medida cambia el volumen con el campo "cambio de volumen" de abajo.',save_position:'Guarda tu posici\xf3n actual en el v\xeddeo. Usa el atajo "restaurar" para regresar.',restore_position:"Vuelve a una posici\xf3n guardada anteriormente en el v\xeddeo que est\xe1s viendo.",delete_position:'Elimina la posici\xf3n guardada para el v\xeddeo actual. Despu\xe9s de esto, el uso del atajo "restaurar" ya no saltar\xe1 a un tiempo diferente en el v\xeddeo.',like_video:'Marca el v\xeddeo actual como "me gusta" para mejorar las recomendaciones de Netflix.',dislike_video:'Marca el v\xeddeo actual como "no me gusta", para mejorar las recomendaciones de Netflix.',remove_rating:"Elimina la clasificaci\xf3n de me gusta/no me gusta del v\xeddeo actual."},label:{extension_name:"Atajos de teclado de Netflix\u2122\ufe0f",duplicate_keys:"Teclas duplicadas",invalid_volume:"Cambio de volumen no v\xe1lido",invalid_speed:"Cambio de velocidad no v\xe1lido",revert_preferences:"\u26a0\ufe0f \xbfSeguro que quieres restaurar las preferencias?",last_saved:"\xdaltimo guardado",disclaimer:"Netflix es una marca comercial de Netflix, Inc.{{newline}}Netflix no ha creado, patrocinado o respaldado esta extensi\xf3n {{start_underline}}de ninguna forma{{end_underline}}."},button:{revert:"RESTAURAR",save:"GUARDAR",revert_initial:"Restaurar todo",revert_confirm:"S\xed",revert_cancel:"No",new_time_shortcut:"Nuevo atajo de tiempo"},feedback:{nothing:"Nada",text_only:"Solo texto",circled:"Circulado"},on_off:{yes:"S\xcd",no:"NO"},column_header:{action:"Acci\xf3n",shortcut:"Atajo de teclado",visual:"Visual",nav_shortcuts:"Atajo de teclado",nav_skip:"Omitir (seg.)",nav_enabled:"Habilitado",nav_remove:"Eliminar"},separators:{custom_shortcuts:"Atajos de teclado personalizados para saltar a trav\xe9s del v\xeddeo",num_keys:"Teclas num\xe9ricas (0 a 9)",other:"Otro ajustes"},help_text:{time_skip:"Informaci\xf3n visual",percent_jumps:"Las teclas 0-9 van del 0% al 90% del v\xeddeo",percent_jumps_feedback:"Qu\xe9 informaci\xf3n visual mostrar cuando se pulsa",volume_delta:"Cambio de volumen para accesos directos (%)",speed_delta:"Cambio de velocidad de reproducci\xf3n en esta cantidad (%)",skip_intro:"Omitir autom\xe1ticamente la introducci\xf3n de la serie",skip_recap:"Omitir autom\xe1ticamente el resumen de la serie",play_next_episode:"Reproducir autom\xe1ticamente el pr\xf3ximo episodio",double_rating:"Volver a calificar elimina la calificaci\xf3n anterior",default_lang:"Idioma de subt\xedtulos preferido",default_sub_size:"Tama\xf1o de subt\xedtulos predeterminado",revert:"Restaurar la configuraci\xf3n a los valores predeterminados",last_saved:"\xdaltimo guardado",log_level:"Nivel de registro"},help_html:{time_skip:"Para estos atajos de teclado personalizados, qu\xe9 informaci\xf3n visual mostrar en la pantalla.",percent_jumps:"Cuando pulsas las teclas 0 a 9 de tu teclado, ya sea para saltar al 0% del v\xeddeo cuando se pulsa el 0, al 10% del v\xeddeo cuando se pulsa el 1, etc. hasta el 90% con el 9. Esto permite saltar f\xe1cilmente a trav\xe9s del v\xeddeo sin tener que pulsar la misma tecla durante mucho tiempo.",percent_jumps_feedback:"Cuando pulsas las teclas 0 a 9 en tu teclado, \xbfquieres que se muestre el porcentaje del v\xeddeo al que est\xe1s saltando? De ser as\xed, \xbfcon qu\xe9 dise\xf1o?",volume_delta:"Para los atajos de teclado de subir/bajar volumen, cu\xe1nto cambiar el volumen de audio (el rango de volumen va de 0 a 100).",speed_delta:"Para los atajos de teclado de reproducir m\xe1s r\xe1pido/m\xe1s lento, cu\xe1nto cambiar la velocidad de reproducci\xf3n (por ejemplo, si el valor es 5, aumenta o disminuye en un 5 %).",skip_intro:'Cuando una serie tiene un bot\xf3n "Saltar" para saltar los cr\xe9ditos de introducci\xf3n, haz clic autom\xe1ticamente en el bot\xf3n.',skip_recap:'Cuando una serie tiene un bot\xf3n "Omitir resumen" para saltar el resumen del episodio anterior, haz clic autom\xe1ticamente en el bot\xf3n.',play_next_episode:'Cuando una serie tiene un bot\xf3n "Siguiente episodio" al final de un episodio, haz clic autom\xe1ticamente en el bot\xf3n.',double_rating:"Si est\xe1 habilitado con S\xcd, enviar la misma calificaci\xf3n dos veces (por ejemplo, \u{1f44d} y luego \u{1f44d} nuevamente) elimina la calificaci\xf3n.\nSi est\xe1 inhabilitado con NO, votar dos veces solo lo env\xeda nuevamente a Netflix, pero no elimina la calificaci\xf3n.",default_lang:'Cuando se usa el atajo para "Subt\xedtulos (activar/desactivar)", qu\xe9 idioma de subt\xedtulos seleccionar si los subt\xedtulos no se han activado antes.',default_sub_size:'Cuando se usa el atajo para "Subt\xedtulos (activar/desactivar)", qu\xe9 tama\xf1o de subt\xedtulos seleccionar.',revert:"Esto elimina *todas* las combinaciones de teclas personalizadas y las preferencias para esta extensi\xf3n y las restaura a los valores predeterminados con los que viene esta extensi\xf3n.",last_saved:"\xbfCu\xe1ndo se guardaron las preferencias por \xfaltima vez?",log_level:"Para los desarrolladores: \xbfcu\xe1nta informaci\xf3n hay que registrar en la consola del navegador?"}}}},5570:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.Logger=t.LogLevel=void 0,function(e){e[e.ERROR=0]="ERROR",e[e.WARN=1]="WARN",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG",e[e.TRACE=4]="TRACE"}(r=t.LogLevel||(t.LogLevel={}));t.Logger=class{constructor(e){this.level=e}error(...e){this.level>=r.ERROR&&console.trace(...Array.prototype.slice.call(this.getPrefix("E","red").concat(Array.from(e))))}warn(...e){this.level>=r.WARN&&console.info(...Array.prototype.slice.call(this.getPrefix("W","goldenrod").concat(Array.from(e))))}info(...e){this.level>=r.INFO&&console.info(...Array.prototype.slice.call(this.getPrefix("I","blue").concat(Array.from(e))))}debug(...e){this.isDebugEnabled()&&console.debug(...Array.prototype.slice.call(this.getPrefix("D","green").concat(Array.from(e))))}trace(...e){this.isTraceEnabled()&&console.trace(...Array.prototype.slice.call(this.getPrefix("T","purple").concat(Array.from(e))))}traceNoStack(...e){this.isTraceEnabled()&&console.debug(...Array.prototype.slice.call(this.getPrefix("T","purple").concat(Array.from(e))))}isDebugEnabled(){return this.level>=r.DEBUG}isTraceEnabled(){return this.level>=r.TRACE}getPrefix(e,t){return[`%c[${e}]`,`color: ${t}; font-weight: bold;`]}}},8489:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.swallowEventIfConflictingWithNetflix=t.NetflixReserved=void 0;const n=r(9692),o=r(8707),i=r(3727);class s{constructor(e,t){this.fun=e,this.message=t}}class a{constructor(e){this.shortcuts=e,this.validators=[new s((()=>this.hasFullScreenShortcut()),n._t("reserved.f_full_screen")),new s((()=>this.hasMuteShortcut()),n._t("reserved.m_mute_unmute")),new s((()=>this.hasLeftRightArrowShortcuts()),n._t("reserved.arrows_scrubbing")),new s((()=>this.hasUpDownArrowShortcuts()),n._t("reserved.arrows_volume")),new s((()=>this.hasSpaceShortcut()),n._t("reserved.space_play_pause")),new s((()=>this.hasEnterShortcut()),n._t("reserved.enter_play_pause")),new s((()=>this.hasLogsShortcut()),n._t("reserved.shortcut_logs",{alt:o.Portability.altKey(),shift:"\u21e7"})),new s((()=>this.hasDebugShortcut()),n._t("reserved.shortcut_debug",{alt:o.Portability.altKey(),shift:"\u21e7"}))]}usesReservedKeys(){return this.validators.some((e=>e.fun.apply(this)))}hasFullScreenShortcut(){return this.shortcuts.some((e=>e.letter&&"KeyF"===e.code))}hasMuteShortcut(){return this.shortcuts.some((e=>e.letter&&"KeyM"===e.code))}hasLeftRightArrowShortcuts(){return this.shortcuts.some((e=>"ArrowLeft"===e.code||"ArrowRight"===e.code))}hasUpDownArrowShortcuts(){return this.shortcuts.some((e=>"ArrowUp"===e.code||"ArrowDown"===e.code))}hasSpaceShortcut(){return this.shortcuts.some((e=>"Space"===e.code))}hasEnterShortcut(){return this.shortcuts.some((e=>"Enter"===e.code))}hasLogsShortcut(){const e=new i.Shortcut(!0,!0,!0,!1,!1,!0,"KeyL","\xd2");return this.shortcuts.some((t=>t.equals(e)))}hasDebugShortcut(){const e=new i.Shortcut(!0,!0,!0,!1,!1,!0,"KeyD","\xce");return this.shortcuts.some((t=>t.equals(e)))}errorDescription(){var e;return(null===(e=this.validators.find((e=>e.fun.apply(this))))||void 0===e?void 0:e.message)||null}}t.NetflixReserved=a,t.swallowEventIfConflictingWithNetflix=function(e){new a([i.Shortcut.fromKeyDownEvent(e)]).usesReservedKeys()&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())}},6501:(e,t)=>{"use strict";function r(e,t){const r=Object.create(t);return Object.assign(r,e),r}Object.defineProperty(t,"__esModule",{value:!0}),t.convertType=t.convertTypes=void 0,t.convertTypes=function(e,t){return e.map((e=>r(e,t)))},t.convertType=r},975:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(3465)),i=n(r(2307)),s=r(7484),a=r(2694),l=r(3727),u=r(8489),c=r(8707),p=r(9671),d=r(9692),h=r(1476),f=r(7214),m=r(8081),y=(r(8785),r(7287)),g=r(9e3),v=r(3177),b=r(3128),_=r(9503),S=r(7341);class w{constructor(){if(this.COLUMN_WIDTHS_EN=["three","six","three"],this.COLUMN_WIDTHS_ES=["four","five","three"],this.BOTTOM_WIDTHS_EN=["six","six"],this.BOTTOM_WIDTHS_ES=["eight","four"],this.REVERT_BUTTONS_EN="three",this.REVERT_BUTTONS_ES="two",this.TIME_SKIPS_LABEL_EN="two",this.TIME_SKIPS_LABEL_ES="three",this.TIME_SKIPS_DROPDOWN_EN="four",this.TIME_SKIPS_DROPDOWN_ES="three",this.textForKeybindings=[{key:"playPause",text:"popup.keys.play_pause",help:"popup.help.play_pause"},{key:"speedFaster",text:"popup.keys.play_faster",help:"popup.help.play_faster"},{key:"speedSlower",text:"popup.keys.play_slower",help:"popup.help.play_slower"},{key:"frameNext",text:"popup.keys.next_frame",help:"popup.help.next_frame"},{key:"framePrev",text:"popup.keys.previous_frame",help:"popup.help.previous_frame"},{key:"nextEpisode",text:"popup.keys.next_episode",help:"popup.help.next_episode"},{key:"prevEpisode",text:"popup.keys.previous_episode",help:"popup.help.previous_episode"},{key:"pictureInPicture",text:"popup.keys.toggle_pip",help:"popup.help.toggle_pip"},{key:"statsForNerds",text:"popup.keys.stream_stats",help:"popup.help.stream_stats"},{key:"viewHistory",text:"popup.keys.view_history",help:"popup.help.view_history"},{key:"showInfo",text:"popup.keys.view_show_info",help:"popup.help.view_show_info"},{key:"subtitlesOnOff",text:"popup.keys.subtitles_on_off",help:"popup.help.subtitles_on_off"},{key:"subtitlesSize",text:"popup.keys.subtitles_size",help:"popup.help.subtitles_size"},{key:"subtitlesNextLang",text:"popup.keys.subtitles_next",help:"popup.help.subtitles_next"},{key:"subtitlesPrevLang",text:"popup.keys.subtitles_previous",help:"popup.help.subtitles_previous"},{key:"audioNextLang",text:"popup.keys.audio_next",help:"popup.help.audio_next"},{key:"audioPrevLang",text:"popup.keys.audio_previous",help:"popup.help.audio_previous"},{key:"muteOnOff",text:"popup.keys.mute_unmute",help:"popup.help.mute_unmute"},{key:"volumeUp",text:"popup.keys.volume_up",help:"popup.help.volume_up"},{key:"volumeDown",text:"popup.keys.volume_down",help:"popup.help.volume_down"},{key:"bookmarkBackup",text:"popup.keys.save_position",help:"popup.help.save_position"},{key:"bookmarkRestore",text:"popup.keys.restore_position",help:"popup.help.restore_position"},{key:"bookmarkDelete",text:"popup.keys.delete_position",help:"popup.help.delete_position"},{key:"thumbsLike",text:"popup.keys.like_video",help:"popup.help.like_video"},{key:"thumbsDislike",text:"popup.keys.dislike_video",help:"popup.help.dislike_video"},{key:"thumbsRemove",text:"popup.keys.remove_rating",help:"popup.help.remove_rating"}],this.userPrefs=null,this.savedUserPrefs=null,this.demoMode=!0,this.shortcutHandler=null,this.elements={keys:{timeskipBinding:{}},numberPercent:{},other:{},subtitles:{},audio:{},customTimeskips:[],labelShortcutFeedbacks:[]},"chrome"in window&&chrome&&chrome.storage&&chrome.storage.sync)a.UserPrefs.load((e=>this.onUserPrefsLoaded(!1,e)));else{const e=a.UserPrefs.validateAndRebuildUserPrefsObjects(a.UserPrefs.create());this.onUserPrefsLoaded(!0,e)}}onUserPrefsLoaded(e,t){this.demoMode=e,this.demoMode&&(window.backingObject=this),this.userPrefs=t,this.savedUserPrefs=o.default(t),this.translateAllStrings(),this.adjustWidthsBasedOnLanguage(),this.installShortcutHandler(),this.installVariousSectionHandlers(),this.installTopButtonHandlers(),this.installRevertHandlers(),this.addVersionInfo(),this.updateHtmlElementsForShortcuts(),this.updateHtmlElementsForTimeSkips(),this.updateHtmlElementsForVariousSection()}addVersionInfo(){const e=document.getElementById("img-top-logo");if(e&&!this.demoMode){const t=chrome.runtime.getManifest().version;e.title=d._t("popup.label.extension_name")+` v${t}`}}adjustWidthsBasedOnLanguage(){var e,t,r,n,o,i;if(this.inSpanishLanguage()){null===(e=document.getElementById("headerLabel-action"))||void 0===e||e.classList.remove(this.COLUMN_WIDTHS_EN[0]),null===(t=document.getElementById("headerLabel-action"))||void 0===t||t.classList.add(this.COLUMN_WIDTHS_ES[0]),null===(r=document.getElementById("headerLabel-shortcut"))||void 0===r||r.classList.remove(this.COLUMN_WIDTHS_EN[1]),null===(n=document.getElementById("headerLabel-shortcut"))||void 0===n||n.classList.add(this.COLUMN_WIDTHS_ES[1]),null===(o=document.getElementById("headerLabel-visual"))||void 0===o||o.classList.remove(this.COLUMN_WIDTHS_EN[2]),null===(i=document.getElementById("headerLabel-visual"))||void 0===i||i.classList.add(this.COLUMN_WIDTHS_ES[2]),this.changeAttributeFromTo('[extraclasses*="bottom-left"]',"extraclasses",this.BOTTOM_WIDTHS_EN[0]+" ",this.BOTTOM_WIDTHS_ES[0]+" "),this.changeAttributeFromTo('[extraclasses*="bottom-right"]',"extraclasses",this.BOTTOM_WIDTHS_EN[1]+" ",this.BOTTOM_WIDTHS_ES[1]+" "),this.changeAttributeFromTo('[class*="bottom-left"]',"class",this.BOTTOM_WIDTHS_EN[0]+" ",this.BOTTOM_WIDTHS_ES[0]+" "),this.changeAttributeFromTo('[class*="bottom-right"]',"class",this.BOTTOM_WIDTHS_EN[1]+" ",this.BOTTOM_WIDTHS_ES[1]+" "),this.changeAttributeFromTo("#label-time-skip","extraclasses",this.TIME_SKIPS_LABEL_EN+" ",this.TIME_SKIPS_LABEL_ES+" ");const s=document.getElementById("button-revert-confirm");null==s||s.classList.remove(this.REVERT_BUTTONS_EN),null==s||s.classList.add(this.REVERT_BUTTONS_ES);const a=document.getElementById("button-revert-cancel");null==a||a.classList.remove(this.REVERT_BUTTONS_EN),null==a||a.classList.add(this.REVERT_BUTTONS_ES)}}inSpanishLanguage(){return"es"===d._t("language.code")}changeAttributeFromTo(e,t,r,n){for(const o of Array.from(document.querySelectorAll(e)))o.setAttribute(t,o.getAttribute(t).replace(r,n))}translateAllStrings(){document.getElementById("topLabel-ext-name").innerHTML+=d._t("popup.label.extension_name");const e={"topLabel-duplicateKeys":"popup.label.duplicate_keys","topLabel-invalidVolume":"popup.label.invalid_volume","topLabel-invalidSpeed":"popup.label.invalid_speed","topButton-revert":"popup.button.revert","topButton-save":"popup.button.save","headerLabel-action":"popup.column_header.action","headerLabel-shortcut":"popup.column_header.shortcut","headerLabel-visual":"popup.column_header.visual","separator-custom-shortcuts":"popup.separators.custom_shortcuts","separator-num-keys":"popup.separators.num_keys","separator-other":"popup.separators.other","headerLabel-nav-shortcut":"popup.column_header.nav_shortcuts","headerLabel-nav-skip":"popup.column_header.nav_skip","headerLabel-nav-enabled":"popup.column_header.nav_enabled","headerLabel-nav-remove":"popup.column_header.nav_remove","button-revert-initial":"popup.button.revert_initial","revert-preferences":"popup.label.revert_preferences","button-revert-confirm":"popup.button.revert_confirm","button-revert-cancel":"popup.button.revert_cancel"};for(const[t,r]of Object.entries(e)){const e=document.getElementById(t);e&&(e.innerText=d._t(r))}const t={"label-time-skip":"time_skip","label-percent-jumps":"percent_jumps","label-percent-jumps-feedback":"percent_jumps_feedback","label-volume-delta":"volume_delta","label-speed-delta":"speed_delta","label-skip-intro":"skip_intro","label-skip-recap":"skip_recap","label-play-next-episode":"play_next_episode","label-double-rating":"double_rating","label-default-lang":"default_lang","label-default-sub-size":"default_sub_size","label-logLevel":"log_level","label-last-saved":"last_saved","label-revert":"revert"};for(const[e,r]of Object.entries(t)){const t=document.getElementById(e);t&&(t.setAttribute("text",d._t("popup.help_text."+r)),t.setAttribute("help",d._t("popup.help_html."+r)))}document.getElementById("em-disclaimer").innerHTML=d._t("popup.label.disclaimer",{newline:"</br>",start_underline:"<u>",end_underline:"</u>"})}updateHtmlElementsForShortcuts(){const e=document.getElementById("container-keybindings");for(let e=0;e<this.elements.labelShortcutFeedbacks.length;e++)this.elements.labelShortcutFeedbacks[e].remove();this.elements.labelShortcutFeedbacks=[],e.innerHTML="";for(let t=0;t<this.textForKeybindings.length;t++){const r=t,n=this.textForKeybindings[t].key,o=this.textForKeybindings[t].text,i=o.startsWith("popup.keys.")?d._t(o):o,s=this.textForKeybindings[t].help,a=(s&&s.startsWith("popup.help.")?d._t(s):s)||null,l=this.userPrefs.keys[n],u=this.inSpanishLanguage()?this.COLUMN_WIDTHS_ES:this.COLUMN_WIDTHS_EN,c=new g.LabelShortcutFeedback(i,a,this.shortcutHandler,l.shortcut,l.feedback,(e=>this.onKeyBindingShortcutUpdate(r,e)),(e=>this.changedFeedbackForKeyBinding(r,e)),u);e.appendChild(c),this.elements.labelShortcutFeedbacks.push(c)}}updateHtmlElementsForTimeSkips(){const e=document.getElementById("container-timeskips");for(let e=0;e<this.elements.customTimeskips.length;e++)this.elements.customTimeskips[e].remove();this.elements.customTimeskips=[],e.innerHTML="";for(let t=0;t<this.userPrefs.timeSkips.length;t++){const r=t,n=this.userPrefs.timeSkips[t],o=new v.CustomTimeSkip(this.shortcutHandler,n.shortcut,n.deltaSec,n.enabled,(e=>this.onTimeSkipShortcutUpdate(r,e)),(e=>this.updateDeltaSecForTimeSkipAtIndex(r,e)),(e=>this.switchOnOffTimeSkipAtIndex(r,e)),(()=>this.removeTimeSkipAtIndex(r)));e.appendChild(o),this.elements.customTimeskips.push(o)}}getRowById(e){return document.getElementById(e)}installVariousSectionHandlers(){const e=this.inSpanishLanguage()?this.BOTTOM_WIDTHS_ES[1]:"six",t=this.getRowById("row-timeSkipsFeedback");this.elements.keys.timeskipBinding.feedback=new f.FeedbackSelector(this.inSpanishLanguage()?this.TIME_SKIPS_DROPDOWN_ES:this.TIME_SKIPS_DROPDOWN_EN,this.userPrefs.keys.timeSkipBinding.feedback,(e=>{this.userPrefs.keys.timeSkipBinding.feedback=e,this.onAnyValueChanged()})),t.appendChild(this.elements.keys.timeskipBinding.feedback),this.elements.keys.timeskipBinding.newTimeSkipButton=new b.GenericButton("six",d._t("popup.button.new_time_shortcut"),(()=>this.onButtonClickAddTimeSkip())),t.appendChild(this.elements.keys.timeskipBinding.newTimeSkipButton),this.elements.audio.volumeDelta=new y.NumberInput(e,this.userPrefs.audio.volumeDelta,0,100,(e=>{this.userPrefs.audio.volumeDelta=e,this.onAnyValueChanged()})),this.getRowById("row-audioVolumeDeltaPercent").appendChild(this.elements.audio.volumeDelta),this.elements.other.speedDelta=new y.NumberInput(e,this.userPrefs.other.speedDelta,1,100,(e=>{this.userPrefs.other.speedDelta=e,this.onAnyValueChanged()})),this.getRowById("row-speedDeltaPercent").appendChild(this.elements.other.speedDelta),this.elements.numberPercent.enabled=new m.OnOffButton(e,this.userPrefs.numberPercents.enabled,(e=>{this.userPrefs.numberPercents.enabled=e,this.onAnyValueChanged()})),this.getRowById("row-percentJumpsEnabled").appendChild(this.elements.numberPercent.enabled),this.elements.numberPercent.feedback=new f.FeedbackSelector(e,this.userPrefs.numberPercents.feedback,(e=>{this.userPrefs.numberPercents.feedback=e,this.onAnyValueChanged()})),this.getRowById("row-percentJumpsFeedback").appendChild(this.elements.numberPercent.feedback),this.elements.other.skipIntroEnabled=new m.OnOffButton(e,this.userPrefs.other.skipIntroEnabled,(e=>{this.userPrefs.other.skipIntroEnabled=e,this.onAnyValueChanged()})),this.getRowById("row-skipIntroEnabled").appendChild(this.elements.other.skipIntroEnabled),this.elements.other.skipRecapEnabled=new m.OnOffButton(e,this.userPrefs.other.skipRecapEnabled,(e=>{this.userPrefs.other.skipRecapEnabled=e,this.onAnyValueChanged()})),this.getRowById("row-skipRecapEnabled").appendChild(this.elements.other.skipRecapEnabled),this.elements.other.playNextEpisodeEnabled=new m.OnOffButton(e,this.userPrefs.other.playNextEpisodeEnabled,(e=>{this.userPrefs.other.playNextEpisodeEnabled=e,this.onAnyValueChanged()})),this.getRowById("row-playNextEpisodeEnabled").appendChild(this.elements.other.playNextEpisodeEnabled),this.elements.other.doubleRatingCancels=new m.OnOffButton(e,this.userPrefs.other.doubleRatingCancels,(e=>{this.userPrefs.other.doubleRatingCancels=e,this.onAnyValueChanged()})),this.getRowById("row-doubleRating").appendChild(this.elements.other.doubleRatingCancels);const r=h.NetflixLanguageList.getAll(),n=this.getIndexInSubtitlesLanguageList(r);this.elements.subtitles.defaultLanguage=new S.LanguageSelector(e,n,(e=>{this.userPrefs.subtitles.defaultLanguage=e>=0&&e<r.length?r[e].bcp47:"",this.onAnyValueChanged()})),this.getRowById("row-defaultLanguage").appendChild(this.elements.subtitles.defaultLanguage),this.elements.subtitles.preferredSubSize=new _.SubtitlesSizeSelector(e,this.userPrefs.subtitles.preferredSize,(e=>{this.userPrefs.subtitles.preferredSize=e,this.onAnyValueChanged()})),this.getRowById("row-preferredSubSize").appendChild(this.elements.subtitles.preferredSubSize);this.getRowById("row-logLevel").remove()}getIndexInSubtitlesLanguageList(e){const t=this.userPrefs.subtitles.defaultLanguage||"",r=e.findIndex((e=>t&&(e.bcp47===t||e.displayName.toLowerCase()===t.toLowerCase())));return r>=0?r:0}installTopButtonHandlers(){document.getElementById("topButton-revert").addEventListener("click",(e=>this.onRevertClick())),document.getElementById("topButton-save").addEventListener("click",(e=>this.saveChanges()))}onRevertClick(){this.userPrefs=a.UserPrefs.validateAndRebuildUserPrefsObjects(o.default(this.savedUserPrefs)),this.updateAllHtmlFieldsAfterUserPrefsChanged()}updateAllHtmlFieldsAfterUserPrefsChanged(){this.updateHtmlElementsForShortcuts(),this.updateHtmlElementsForTimeSkips(),this.updateHtmlElementsForVariousSection(),this.onAnyValueChanged()}installRevertHandlers(){document.getElementById("button-revert-initial").addEventListener("click",(e=>this.flipRevertToDefaultConfirmRow())),document.getElementById("button-revert-confirm").addEventListener("click",(e=>{const t=a.UserPrefs.validateAndRebuildUserPrefsObjects(a.UserPrefs.create());t.savedAt=this.userPrefs.savedAt,this.userPrefs=t,this.flipRevertToDefaultConfirmRow(),this.updateAllHtmlFieldsAfterUserPrefsChanged()})),document.getElementById("button-revert-cancel").addEventListener("click",(e=>{this.flipRevertToDefaultConfirmRow()}))}flipRevertToDefaultConfirmRow(){const e=document.getElementById("revert-confirm-row");e.classList.toggle("hidden"),e.classList.toggle("visible")}updateHtmlElementsForVariousSection(){this.elements.keys.timeskipBinding.feedback.setValue(this.userPrefs.keys.timeSkipBinding.feedback),this.elements.audio.volumeDelta.setValue(this.userPrefs.audio.volumeDelta),this.elements.numberPercent.enabled.setValue(this.userPrefs.numberPercents.enabled),this.elements.other.skipIntroEnabled.setValue(this.userPrefs.other.skipIntroEnabled),this.elements.other.skipRecapEnabled.setValue(this.userPrefs.other.skipRecapEnabled),this.elements.other.playNextEpisodeEnabled.setValue(this.userPrefs.other.playNextEpisodeEnabled),this.elements.other.doubleRatingCancels.setValue(this.userPrefs.other.doubleRatingCancels),this.elements.subtitles.preferredSubSize.setValue(this.userPrefs.subtitles.preferredSize),this.elements.other.speedDelta.setValue(this.userPrefs.other.speedDelta),this.elements.numberPercent.feedback.setValue(this.userPrefs.numberPercents.feedback);const e=h.NetflixLanguageList.getAll(),t=this.getIndexInSubtitlesLanguageList(e);this.elements.subtitles.defaultLanguage.setValue(t),this.showRevertButtonIfNeeded(),this.updateLastSaveDateLabel()}showRevertButtonIfNeeded(){const e=this.prefObjectsMatch(this.userPrefs,a.UserPrefs.create()),t=document.getElementById("revert-defaults-row");t.classList.toggle("visible",!e),t.classList.toggle("hidden",e)}updateLastSaveDateLabel(){document.getElementById("span-lastSaved").innerText=s(this.userPrefs.savedAt).format("MMM DD, YYYY [at] hh:mm A")}onButtonClickAddTimeSkip(){this.userPrefs.timeSkips.push(new a.TimeSkip(l.Shortcut.newEmpty(),0,!0)),this.updateHtmlElementsForTimeSkips(),this.onAnyValueChanged()}onTimeSkipShortcutUpdate(e,t){this.userPrefs.timeSkips[e].shortcut=t,this.onAnyValueChanged()}updateDeltaSecForTimeSkipAtIndex(e,t){this.userPrefs.timeSkips[e].deltaSec=t,this.onAnyValueChanged()}switchOnOffTimeSkipAtIndex(e,t){this.userPrefs.timeSkips[e].enabled=t,this.onAnyValueChanged()}applyBooleanToOnOffButton(e,t){e.classList.toggle("enabled",t),e.classList.toggle("disabled",!t),e.innerText=t?"YES":"NO"}removeTimeSkipAtIndex(e){this.userPrefs.timeSkips.splice(e,1),this.updateHtmlElementsForTimeSkips(),this.onAnyValueChanged()}installShortcutHandler(){const e=new l.ShortcutRecorder;e.setDeletingShortcut(l.Shortcut.keyAndCode("Backspace","Backspace")),e.addBackground(document.getElementById("shortcut-background")),e.startListeningForEvents(),this.shortcutHandler=e}onKeyBindingShortcutUpdate(e,t){const r=this.textForKeybindings[e].key;this.userPrefs.keys[r].shortcut=t,this.onAnyValueChanged()}changedFeedbackForKeyBinding(e,t){const r=this.textForKeybindings[e].key;this.userPrefs.keys[r].feedback=t,this.onAnyValueChanged()}showButton(e,t){e.classList.remove(t?"hidden":"visible"),e.classList.add(t?"visible":"hidden")}showLabel(e,t){e.classList.remove(t?"hidden":"invalid"),e.classList.add(t?"invalid":"hidden")}onAnyValueChanged(){this.showButton(document.getElementById("topButton-save"),this.canBeSaved()),this.showButton(document.getElementById("topButton-revert"),this.canBeReverted());const e=this.usesReservedKeys(),t=this.hasDuplicateKeys(),r=this.hasInvalidVolumeDelta(),n=this.hasInvalidSpeedDelta(),o=document.getElementById("topLabel-reservedKeys"),i=document.getElementById("topLabel-duplicateKeys"),s=document.getElementById("topLabel-invalidVolume"),a=document.getElementById("topLabel-invalidSpeed");[o,i,s,a].forEach((e=>this.showLabel(e,!1))),e?(this.showLabel(o,!0),o.innerText=this.getReservedKeysError()):t?this.showLabel(i,!0):r?this.showLabel(s,!0):n&&this.showLabel(a,!0),this.showRevertButtonIfNeeded(),this.updateLastSaveDateLabel()}canBeSaved(){return!this.prefObjectsMatch(this.userPrefs,this.savedUserPrefs)&&!this.hasInvalidInputs()}prefObjectsMatch(e,t){const r=o.default(e),n=o.default(t);for(const e of["logger","savedAt"])delete r[e],delete n[e];return i.default(r,n)}canBeReverted(){return this.canBeSaved()||this.hasInvalidInputs()}hasInvalidInputs(){return this.usesReservedKeys()||this.hasDuplicateKeys()||this.hasInvalidVolumeDelta()||this.hasInvalidSpeedDelta()}hasInvalidVolumeDelta(){return this.isInvalidPercentValue(this.userPrefs.audio.volumeDelta)||this.isInvalidPercentValue(this.elements.audio.volumeDelta.getValue())}hasInvalidSpeedDelta(){return this.isInvalidPercentValue(this.userPrefs.other.speedDelta,1,100)||this.isInvalidPercentValue(this.elements.other.speedDelta.getValue(),1,100)}isInvalidPercentValue(e,t=0,r=100){return e<t||e>r||e!==Math.floor(e)}usesReservedKeys(){return new u.NetflixReserved(this.getAllAssignedShortcuts()).usesReservedKeys()}getReservedKeysError(){return new u.NetflixReserved(this.getAllAssignedShortcuts()).errorDescription()}hasDuplicateKeys(){const e=this.getAllAssignedShortcuts();return e.length!==new Set(e.map((e=>e.repr()))).size}getAllAssignedShortcuts(){var e;return this.getAllKeybindings().map((e=>e.shortcut)).concat(this.userPrefs.timeSkips.map((e=>e.shortcut))).concat((null===(e=this.userPrefs)||void 0===e?void 0:e.numberPercents.enabled)?[...Array(10).keys()].map((e=>l.Shortcut.simple(e.toString()))):[]).filter((e=>null!=e&&!e.isEmpty()))}getAllKeybindings(){return this.textForKeybindings.map((e=>this.userPrefs.keys[e.key]))}saveChanges(){if(this.canBeSaved())if(this.userPrefs.savedAt=Date.now(),this.demoMode)console.log("SAVED! (demo mode)"),this.savedUserPrefs=o.default(this.userPrefs),this.onAnyValueChanged();else{const e=o.default(this.userPrefs);delete e.logger,c.BrowserStorage.set({prefs:e},(()=>{this.savedUserPrefs=o.default(this.userPrefs),this.onAnyValueChanged()}))}}}window.addEventListener("DOMContentLoaded",(e=>{const t=new URL(location.href);chrome.i18n?p.LanguageDispatch.configureLanguageForLocale(chrome.i18n.getMessage("@@ui_locale")):t.hash.startsWith("#lang=")?p.LanguageDispatch.configureLanguageForLocale(t.hash.substring(6)):p.LanguageDispatch.configureLanguageForLocale("en_US");new w}))},8707:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserStorage=t.Portability=void 0;class r{static altKey(){return r.isMacOS()?"\u2325":"Alt"}static metaKey(){return r.isMacOS()?"\u2318":"\u229e Win"}static isMacOS(){return-1!==window.navigator.platform.indexOf("Mac")&&(-1!==window.navigator.appVersion.indexOf("Mac OS")||-1!==window.navigator.appVersion.indexOf("Macintosh"))}}t.Portability=r;t.BrowserStorage=class{static get(e,t){chrome.storage.sync.get(e,t)}static set(e,t){chrome.storage.sync.set(e,t)}}},3727:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShortcutRecorder=t.ShortcutStyles=t.ShortcutContainer=t.Shortcut=void 0;const n=r(8707);class o{constructor(e,t,r,n,o,i,s,a){this.ctrl=e,this.shift=t,this.alt=r,this.meta=n,this.digit=o,this.letter=i,this.code=s,this.key=a}static newEmpty(){return new o(!1,!1,!1,!1,!1,!1,null,null)}static simple(e){const t=1===e.length&&e>="0"&&e<="9",r=!t&&e.toUpperCase()===e,n=1===e.length&&(e>="a"&&e<="z"||e>="A"&&e<="Z"),i=t?"Digit"+e:n?"Key"+e.toUpperCase():e;return new o(!1,r,!1,!1,t,n,i,e)}static keyAndCode(e,t){return new o(!1,!1,!1,!1,!1,!1,t,e)}shifted(){const e=this.letter&&this.key&&1===this.key.length&&this.key>="a"&&this.key<="z";return new o(this.ctrl,!0,this.alt,this.meta,this.digit,this.letter,this.code,e?this.key.toUpperCase():this.key)}static fromJsonObject(e){const t=o.newEmpty();return Object.assign(t,e),t}isEmpty(){return!1===this.ctrl&&!1===this.shift&&!1===this.alt&&!1===this.meta&&!1===this.digit&&!1===this.letter&&null===this.code&&null===this.key}static fromKeyDownEvent(e){const t=e.ctrlKey,r=e.shiftKey,n=e.altKey,i=e.metaKey,s=e.code.startsWith("Digit"),a=e.code.startsWith("Key"),l=o.removeForbidden(e.code),u=o.removeForbidden(e.key);return new o(t,r,n,i,s,a,l,u)}static removeForbidden(e){return"CapsLock"===e?null:e}countBoolean(e){return e?1:0}length(){return this.countBoolean(this.ctrl)+this.countBoolean(this.shift)+this.countBoolean(this.alt)+this.countBoolean(this.meta)+this.countBoolean(this.digit)+this.countBoolean(this.letter)+this.countBoolean(!!this.code)+this.countBoolean(!!this.key)}hasAnyModifiers(){return this.ctrl||this.shift||this.alt||this.meta}usesArrowKey(){const e=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];return!!this.code&&!!this.key&&e.some((e=>e===this.code))&&e.some((e=>e===this.key))}equals(e){return null!==e&&this.repr()===e.repr()}repr(){return"c="+this.booleanRepr(this.ctrl)+",s="+this.booleanRepr(this.shift)+",a="+this.booleanRepr(this.alt)+",m="+this.booleanRepr(this.meta)+",d="+this.booleanRepr(this.digit)+",l="+this.booleanRepr(this.letter)+",(code="+this.code+")(key="+this.key+")"}booleanRepr(e){return e?"T":"F"}}t.Shortcut=o;class i{constructor(e,t){this.element=e,this.shortcut=t,this.savedShortcut=null,this.onShortcutUpdated=null}}t.ShortcutContainer=i;class s{constructor(e,t,r){this.shortcutContainer=e,this.shortcutContainerSelected=t,this.shortcutKey=r}}t.ShortcutStyles=s;t.ShortcutRecorder=class{constructor(){this.cssClasses=new s("shortcut","shortcut-selected","shortcut-key"),this.background=null,this.containers=new Set,this.selectedContainer=null,this.deletingShortcut=null}addBackground(e){if(this.background)throw new Error("Background element has already been set");this.background=e,e.addEventListener("click",(()=>this.onBackgroundClick()))}addContainer(e,t,r){this.containers.forEach((t=>{if(t.element==e)throw new Error("Element is already tracked")}));const n=new i(e,t);return this.containers.add(n),e.addEventListener("click",(e=>this.onShortcutInputClick(e))),r&&(n.onShortcutUpdated=r),t&&this.displayShortcutInContainer(n),n}setCssClasses(e){if(!e.shortcutContainer||!e.shortcutContainerSelected||!e.shortcutKey)throw new Error("Invalid styles: all fields must be set")}getAllContainerElements(){return Array.from(this.containers.values()).map((e=>e.element))}getContainerByElement(e){return Array.from(this.containers.values()).find((t=>t.element==e))||null}removeContainerByElement(e){let t=null;for(const r of this.containers.values())if(r.element==e){t=r;break}t&&this.containers.delete(t)}startListeningForEvents(){document.addEventListener("keydown",(e=>this.onKeyDown(e))),document.addEventListener("keyup",(e=>this.onKeyUp(e)))}setDeletingShortcut(e){this.deletingShortcut=e}onBackgroundClick(){this.deselectCurrentlySelectedElement()}deselectCurrentlySelectedElement(){this.selectedContainer&&(this.selectedContainer.element.classList.remove(this.cssClasses.shortcutContainerSelected),this.selectedContainer.shortcut&&this.selectedContainer.shortcut.isEmpty()&&this.selectedContainer.savedShortcut&&(this.selectedContainer.shortcut=this.selectedContainer.savedShortcut,this.selectedContainer.savedShortcut=null,this.displayShortcutInContainer(this.selectedContainer)),this.selectedContainer=null)}onShortcutInputClick(e){const t=e.target;if(!t||!t.classList.contains(this.cssClasses.shortcutContainer))return;const r=this.getContainerByElement(t);r&&(r!=this.selectedContainer&&(this.selectedContainer&&this.deselectCurrentlySelectedElement(),t.classList.add(this.cssClasses.shortcutContainerSelected),this.selectedContainer=r,r.savedShortcut=r.shortcut,r.shortcut=o.newEmpty()),e.stopPropagation())}onKeyDown(e){if(!this.selectedContainer)return;const t=o.fromKeyDownEvent(e);"Escape"!==t.key||t.hasAnyModifiers()?this.selectedContainer.shortcut&&this.selectedContainer.shortcut.length()>t.length()||(this.selectedContainer.shortcut=t,this.displayShortcutInContainer(this.selectedContainer),e.preventDefault()):this.onBackgroundClick()}onKeyUp(e){this.selectedContainer&&(e.ctrlKey||e.shiftKey||e.metaKey||e.altKey||(this.selectedContainer.shortcut&&this.selectedContainer.shortcut.equals(this.deletingShortcut)&&(this.selectedContainer.shortcut=o.newEmpty(),this.displayShortcutInContainer(this.selectedContainer)),this.selectedContainer.onShortcutUpdated&&this.selectedContainer.shortcut&&this.selectedContainer.onShortcutUpdated(this.selectedContainer.shortcut),this.selectedContainer.element.classList.remove(this.cssClasses.shortcutContainerSelected),this.selectedContainer=null,e.preventDefault()))}displayShortcutInContainer(e){const t=e.element;t.innerHTML="";const r=e.shortcut||o.newEmpty();this.deletingShortcut&&r.equals(this.deletingShortcut)||(r.ctrl&&this.addBlock(t,"Ctrl"),r.alt&&this.addBlock(t,n.Portability.altKey()),r.meta&&this.addBlock(t,n.Portability.metaKey()),r.shift&&this.addBlock(t,"\u21e7"),r.digit&&r.code?this.addBlock(t,r.code.substring("Digit".length)):r.letter&&r.code?this.addBlock(t,r.code.substring("Key".length)):r.key&&!this.isModifier(r.key)&&this.addBlock(t,this.keyToString(r.key,r.code)))}addBlock(e,t){const r=document.createElement("div");r.classList.add(this.cssClasses.shortcutKey),r.innerText=t,e.appendChild(r)}isModifier(e){return"Control"===e||"Alt"===e||"Meta"===e||"Shift"===e}keyToString(e,t){return"Backspace"===e?"\u232b":"Enter"===e?"\u21b5":"Backslash"===t?"\\":"Backquote"===t?"`":"Escape"===t?"\u238b":"Insert"===t?"Ins":"Delete"===t?"\u2326":"PageUp"===e?"\u21de":"PageDown"===e?"\u21df":"Space"===t?"\u2423":"Tab"===t?"\u21b9":"BracketLeft"===t?"[":"BracketRight"===t?"]":"ArrowLeft"===t?"\u2190":"ArrowRight"===t?"\u2192":"ArrowUp"===t?"\u2191":"ArrowDown"===t?"\u2193":"Home"===t?"\u2196":"End"===t?"\u2198":e||""}}},6247:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SubtitlesSize=void 0;const n=r(9692);class o{constructor(e,t,r,n){this.storageId=e,this.netflixString=t,this.displayStringKey=r,this.feedbackStringKey=n}static allInstances(){return[o.SMALL,o.MEDIUM,o.LARGE]}static fromNetflixString(e){return o.allInstances().find((t=>t.getNetflixString()===e))||o.MEDIUM}getNetflixString(){return this.netflixString}getDisplayString(){return n._t(this.displayStringKey)}equals(e){return this.storageId===e.storageId}nextSubtitlesSize(){const e=this.storageId%o.allInstances().length+1;return o.fromStorageId(e)}static fromStorageId(e){return o.allInstances().find((t=>t.storageId===e))||o.MEDIUM}getStorageId(){return this.storageId}toFeedbackString(){return n._t(this.feedbackStringKey)}toString(){return this.netflixString.toLowerCase()}}t.SubtitlesSize=o,o.SMALL=new o(1,"SMALL","subtitles.size.small","subtitles.feedback.small"),o.MEDIUM=new o(2,"MEDIUM","subtitles.size.medium","subtitles.feedback.medium"),o.LARGE=new o(3,"LARGE","subtitles.size.large","subtitles.feedback.large")},2694:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.corruptUserPrefs=t.isSingleNumberKeyPress=t.UserPrefs=t.SavePoint=t.TimeSkip=t.KeyBinding=t.BookmarkRestoreAction=t.TextAction=void 0;const o=r(3727),i=r(5570),s=r(6501),a=n(r(3465)),l=n(r(2307)),u=r(8707),c=r(9242),p=r(6247);var d,h;!function(e){e[e.none=1]="none",e[e.simple=2]="simple",e[e.circle=3]="circle",e[e.rounded=4]="rounded"}(d=t.TextAction||(t.TextAction={})),function(e){e[e.startPlaying=1]="startPlaying",e[e.keepCurrentState=2]="keepCurrentState",e[e.preserveSavedState=3]="preserveSavedState"}(h=t.BookmarkRestoreAction||(t.BookmarkRestoreAction={}));class f{constructor(e,t=d.none){this.shortcut=e,this.feedback=t}static fromJsonObject(e){return new f(o.Shortcut.fromJsonObject(e.shortcut),e.feedback)}static matchesEvent(e,t,r){const n=o.Shortcut.fromKeyDownEvent(r),i=Array.isArray(t.shortcut)?t.shortcut:[t.shortcut];for(const t of i)if(n.equals(t))return y(e,t,r),m(r),!0;return!1}}function m(e){e.preventDefault(),e.stopPropagation()}function y(e,t,r){e.logger.trace("Matched shortcut",t,"for event",r)}t.KeyBinding=f;class g{constructor(e,t,r){this.shortcut=e,this.deltaSec=t,this.enabled=r}static fromJsonObject(e){return new g(o.Shortcut.fromJsonObject(e.shortcut),e.deltaSec,e.enabled)}}t.TimeSkip=g;t.SavePoint=class{constructor(e,t){this.time=e,this.playing=t}};class v{constructor(e,t,r,n,o,s,a,l,u){this.savedAt=e,this.logLevel=t,this.logger=new i.Logger(t),this.keys=r,this.numberPercents=n,this.timeSkips=o,this.bookmarks=s,this.subtitles=a,this.other=l,this.audio=u}static load(e){u.BrowserStorage.get("prefs",(t=>{if(t.prefs){const r=v.validateAndRebuildUserPrefsObjects(t.prefs);e(r)}else v.initStorage(e)}))}static initStorage(e){const t=v.create();t.logger.info("[UserPrefs::initStorage] create returned",t),u.BrowserStorage.set({prefs:t},(()=>{e(t)}))}static create(){return new v(Date.now(),i.LogLevel.INFO,{playPause:new f(o.Shortcut.simple("k"),d.simple),speedFaster:new f(o.Shortcut.keyAndCode(">","Period").shifted(),d.circle),speedSlower:new f(o.Shortcut.keyAndCode("<","Comma").shifted(),d.circle),frameNext:new f(o.Shortcut.keyAndCode(".","Period"),d.none),framePrev:new f(o.Shortcut.keyAndCode(",","Comma"),d.none),nextEpisode:new f(o.Shortcut.simple("N"),d.none),prevEpisode:new f(o.Shortcut.simple("P"),d.none),pictureInPicture:new f(o.Shortcut.simple("p"),d.none),subtitlesOnOff:new f(o.Shortcut.simple("c"),d.none),subtitlesSize:new f(o.Shortcut.simple("s"),d.circle),subtitlesNextLang:new f(o.Shortcut.simple("v"),d.simple),subtitlesPrevLang:new f(o.Shortcut.simple("V"),d.simple),audioNextLang:new f(o.Shortcut.simple("a"),d.simple),audioPrevLang:new f(o.Shortcut.simple("A"),d.simple),muteOnOff:new f(o.Shortcut.newEmpty(),d.none),volumeUp:new f(o.Shortcut.keyAndCode("PageUp","PageUp"),d.none),volumeDown:new f(o.Shortcut.keyAndCode("PageDown","PageDown"),d.none),statsForNerds:new f(o.Shortcut.simple("d"),d.none),viewHistory:new f(o.Shortcut.simple("h"),d.none),showInfo:new f(o.Shortcut.simple("i"),d.none),timeSkipBinding:new f(o.Shortcut.newEmpty(),d.simple),bookmarkBackup:new f(o.Shortcut.simple("b"),d.simple),bookmarkDelete:new f(o.Shortcut.simple("B"),d.simple),bookmarkRestore:new f(o.Shortcut.simple("r"),d.simple),thumbsLike:new f(o.Shortcut.keyAndCode("=","Equal"),d.simple),thumbsDislike:new f(o.Shortcut.keyAndCode("-","Minus"),d.simple),thumbsRemove:new f(o.Shortcut.keyAndCode("Backspace","Backspace").shifted(),d.simple)},{enabled:!0,feedback:d.circle},[new g(o.Shortcut.simple("j"),-10,!0),new g(o.Shortcut.simple("l"),10,!0),new g(o.Shortcut.simple("J"),-60,!0),new g(o.Shortcut.simple("L"),60,!0),new g(o.Shortcut.keyAndCode("[","BracketLeft"),-5,!0),new g(o.Shortcut.keyAndCode("]","BracketRight"),5,!0),new g(o.Shortcut.keyAndCode("{","BracketLeft").shifted(),-1,!0),new g(o.Shortcut.keyAndCode("}","BracketRight").shifted(),1,!0)],{savePoints:{},playAction:h.keepCurrentState},{defaultLanguage:"en",preferredSize:p.SubtitlesSize.MEDIUM.getStorageId()},{skipIntroEnabled:!0,skipRecapEnabled:!1,playNextEpisodeEnabled:!0,doubleRatingCancels:!1,speedDelta:5},{volumeDelta:5})}static validateAndRebuildUserPrefsObjects(e,t=!1){const r=a.default(e),n=Object.create(v.prototype),o=v.create();Object.assign(n,e),n.logLevel&&"number"==typeof n.logLevel||(n.logLevel=o.logLevel),n.logger=new i.Logger(n.logLevel);v.validateUserPrefsObject(n)||(n.logger.warn("Replacing saved user preferences with clean slate"),Object.assign(n,o));for(const e in o.keys)e in n.keys||(o.logger.warn(`Missing "key" field in user preferences: ${e}`),n.keys[e]=o.keys[e]);n.bookmarks&&n.bookmarks.savePoints||(o.logger.warn('Invalid "bookmarks" field in user preferences, replacing.'),n.bookmarks=o.bookmarks),n.subtitles?("defaultLanguage"in n.subtitles||(o.logger.warn('Invalid "subtitles" field in user preferences, replacing.'),n.subtitles.defaultLanguage=o.subtitles.defaultLanguage),"preferredSize"in n.subtitles||(o.logger.warn('Invalid "preferredSize" field in user preferences, replacing.'),n.subtitles.preferredSize=o.subtitles.preferredSize)):n.subtitles=o.subtitles,"number"!=typeof n.subtitles.preferredSize&&(n.subtitles.preferredSize=o.subtitles.preferredSize),n.other?("skipIntroEnabled"in n.other||(o.logger.warn('Missing "other.skipIntroEnabled" field in user preferences, replacing.'),n.other.skipIntroEnabled=o.other.skipIntroEnabled),"skipRecapEnabled"in n.other||(o.logger.warn('Missing "other.skipRecapEnabled" field in user preferences, replacing.'),n.other.skipRecapEnabled=o.other.skipRecapEnabled),"playNextEpisodeEnabled"in n.other||(o.logger.warn('Missing "other.playNextEpisodeEnabled" field in user preferences, replacing.'),n.other.playNextEpisodeEnabled=o.other.playNextEpisodeEnabled),"speedDelta"in n.other||(o.logger.warn('Missing "other.speedDelta" field in user preferences, replacing.'),n.other.speedDelta=o.other.speedDelta)):(o.logger.info('Missing "other" field in user preferences, replacing.'),n.other=o.other),n.audio&&"volumeDelta"in n.audio||(o.logger.warn('Invalid "audio" field in user preferences, replacing.'),n.audio=o.audio);for(const e of Object.keys(n.keys))n.keys[e]&&!f.prototype.isPrototypeOf(n.keys[e])&&(n.keys[e]=f.fromJsonObject(n.keys[e]));for(let e=0;e<n.timeSkips.length;e++)n.timeSkips[e]&&!g.prototype.isPrototypeOf(n.timeSkips[e])&&(n.timeSkips[e]=g.fromJsonObject(n.timeSkips[e]));const l=Object.keys(n);for(const e of l)e in o||delete n[e];return v.prototype.isPrototypeOf(n)?(t||v.isEqualWithoutLogger(n,r)||v.saveUserPrefsIfPossible(n),n):s.convertType(n,v.prototype)}static isEqualWithoutLogger(e,t){const r=a.default(e);delete r.logger;const n=a.default(t);return delete n.logger,l.default(r,n)}static saveUserPrefsIfPossible(e){e.logger&&e.logger.info("Saving restored user preferences");{const t=new CustomEvent(c.ContentToBackgroundEvents.SAVE_PREFS,{detail:{action:"saveUserPrefs",prefs:JSON.stringify(e)}});window.dispatchEvent(t)}}static validateUserPrefsObject(e){const t=e,r=v.create(),n=r.logger,o=Object.keys(r).filter((e=>"logger"!==e&&"savedAt"!==e));try{for(const n of o){if(!(n in e))throw new Error(`missing field "${n}"`);const o=t[n];if(null===o)throw new Error(`null field "${n}"`);const i=typeof r[n],s=typeof o;if(i!==s)throw new Error(`type mismatch for field "${n}": expected "${i}", found "${s}"`)}return!0}catch(e){return n.warn(`Invalid user prefs: ${e.message}`),!1}}static getTimeSkipForShortcut(e,t){return e.timeSkips.find((e=>t.equals(e.shortcut)))||null}static save(e,t=(()=>{})){e.logger&&e.logger.debug("[UserPrefs::save]");const r=a.default(e);delete r.logger,u.BrowserStorage.set({prefs:r},t)}}t.UserPrefs=v,t.isSingleNumberKeyPress=function(e,t){const r=o.Shortcut.fromKeyDownEvent(t),n=[...Array(10).keys()].map((e=>o.Shortcut.simple(e.toString()))).some((e=>e.equals(r)));return n&&(y(e,r,t),m(t)),n},t.corruptUserPrefs=function(e){const t=e.logger;t.info("corruptUserPrefs!");const r={foo:123,bar:"abc",keys:[]};u.BrowserStorage.set({prefs:r},(()=>{t.info('Set "prefs" to',r)}))}},2473:e=>{"use strict";var t=function(){};e.exports=t},4654:()=>{}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);r(975)})();