webpackJsonp([9,36],{EHSh:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},Ehkv:function(t,e,a){var i=a("EHSh");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("ee5b057c",i,!0,{})},NgvV:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"input-group caixa"},[a("input",{staticClass:"form-control",class:{"with-reset-button":t.clearButton},staticStyle:{width:"100%"},attrs:{type:"text",placeholder:t.placeholder,readonly:"",name:t.name},domProps:{value:t.val||t.value},on:{click:t.inputClick,input:function(t){return this.$emit("input",t.target.val)}}}),t._v(" "),a("div",{staticClass:"append"},[t.value?t._e():a("span",{staticClass:"btne",on:{click:t.changeToToday}},[t._v("Hoje ")]),t._v(" "),t.clearButton&&t.value?a("span",{staticClass:"btne",on:{click:t.cleanVal}},[t._v("   X   ")]):t._e()])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.displayDayView,expression:"displayDayView"}],staticClass:"datepicker-popup"},[a("div",{staticClass:"datepicker-inner"},[a("div",{staticClass:"datepicker-body"},[a("div",{staticClass:"datepicker-ctrl"},[a("span",{staticClass:"datepicker-preBtn fa fa-angle-left",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.preNextMonthClick(0)}}}),t._v(" "),a("span",{staticClass:"datepicker-nextBtn fa fa-angle-right",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.preNextMonthClick(1)}}}),t._v(" "),a("p",{on:{click:t.switchMonthView}},[t._v(t._s(t.stringifyDayHeader(t.currDate)))])]),t._v(" "),a("div",{staticClass:"datepicker-weekRange"},t._l(t.text.daysOfWeek,function(e,i){return a("span",{key:i},[t._v(t._s(e))])}),0),t._v(" "),a("div",{staticClass:"datepicker-dateRange"},t._l(t.dateRange,function(e,i){return a("span",{key:i,class:e.sclass,on:{click:function(a){return t.daySelect(e.date,this)}}},[t._v(t._s(e.text))])}),0)])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.displayMonthView,expression:"displayMonthView"}],staticClass:"datepicker-popup"},[a("div",{staticClass:"datepicker-inner"},[a("div",{staticClass:"datepicker-body"},[a("div",{staticClass:"datepicker-ctrl"},[a("span",{staticClass:"datepicker-preBtn fa fa-angle-left",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.preNextYearClick(0)}}}),t._v(" "),a("span",{staticClass:"datepicker-nextBtn fa fa-angle-right",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.preNextYearClick(1)}}}),t._v(" "),a("p",{on:{click:t.switchDecadeView}},[t._v(t._s(t.stringifyYearHeader(t.currDate)))])]),t._v(" "),a("div",{staticClass:"datepicker-monthRange"},[t._l(t.text.months,function(e,i){return[a("span",{key:i,class:{"datepicker-dateRange-item-active":t.text.months[t.parse(t.val).getMonth()]===e&&t.currDate.getFullYear()===t.parse(t.val).getFullYear()},on:{click:function(e){return t.monthSelect(i)}}},[t._v(t._s(e.substr(0,3)))])]})],2)])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.displayYearView,expression:"displayYearView"}],staticClass:"datepicker-popup"},[a("div",{staticClass:"datepicker-inner"},[a("div",{staticClass:"datepicker-body"},[a("div",{staticClass:"datepicker-ctrl"},[a("span",{staticClass:"datepicker-preBtn fa fa-angle-left",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.preNextDecadeClick(0)}}}),t._v(" "),a("span",{staticClass:"datepicker-nextBtn fa fa-angle-right",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.preNextDecadeClick(1)}}}),t._v(" "),a("p",[t._v(t._s(t.stringifyDecadeHeader(t.currDate)))])]),t._v(" "),a("div",{staticClass:"datepicker-monthRange decadeRange"},[t._l(t.decadeRange,function(e,i){return[a("span",{key:i,class:{"datepicker-dateRange-item-active":t.parse(this.val).getFullYear()===e.text},on:{click:function(a){return a.stopPropagation(),t.yearSelect(e.text)}}},[t._v(t._s(e.text))])]})],2)])])])])},staticRenderFns:[]}},Xnwp:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".datepicker[data-v-0d8e302a]{position:relative;display:inline-block}input.datepicker-input.with-reset-button[data-v-0d8e302a]{padding-right:25px}.datepicker>button.close[data-v-0d8e302a]{position:absolute;top:0;right:0;outline:none;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center}.datepicker>button.close[data-v-0d8e302a]:focus{opacity:.2}.datepicker-popup[data-v-0d8e302a]{position:absolute;border:1px solid #ccc;border-radius:5px;background:#fff;margin-top:2px;z-index:1000;box-shadow:0 6px 12px rgba(0,0,0,.175)}.datepicker-inner[data-v-0d8e302a]{width:218px}.datepicker-body[data-v-0d8e302a]{padding:10px}.datepicker-body span[data-v-0d8e302a],.datepicker-ctrl p[data-v-0d8e302a],.datepicker-ctrl span[data-v-0d8e302a]{display:inline-block;width:28px;line-height:28px;height:28px;border-radius:4px}.datepicker-ctrl p[data-v-0d8e302a]{width:65%}.datepicker-ctrl span[data-v-0d8e302a]{position:absolute}.datepicker-body span[data-v-0d8e302a]{text-align:center}.datepicker-monthRange span[data-v-0d8e302a]{width:48px;height:50px;line-height:45px}.datepicker-item-disable[data-v-0d8e302a]{background-color:#fff!important;cursor:not-allowed!important}.datepicker-item-disable[data-v-0d8e302a],.datepicker-item-gray[data-v-0d8e302a],.decadeRange span[data-v-0d8e302a]:first-child,.decadeRange span[data-v-0d8e302a]:last-child{color:#999}.datepicker-dateRange-item-active[data-v-0d8e302a],.datepicker-dateRange-item-active[data-v-0d8e302a]:hover{background:#3276b1!important;color:#fff!important}.datepicker-monthRange[data-v-0d8e302a]{margin-top:10px}.datepicker-ctrl p[data-v-0d8e302a],.datepicker-ctrl span[data-v-0d8e302a],.datepicker-dateRange span[data-v-0d8e302a],.datepicker-monthRange span[data-v-0d8e302a]{cursor:pointer}.datepicker-ctrl i[data-v-0d8e302a]:hover,.datepicker-ctrl p[data-v-0d8e302a]:hover,.datepicker-dateRange-item-hover[data-v-0d8e302a],.datepicker-dateRange span[data-v-0d8e302a]:hover,.datepicker-monthRange span[data-v-0d8e302a]:hover{background-color:#eee}.datepicker-weekRange span[data-v-0d8e302a]{font-weight:700}.datepicker-label[data-v-0d8e302a]{background-color:#f8f8f8;font-weight:700;padding:7px 0;text-align:center}.datepicker-ctrl[data-v-0d8e302a]{position:relative;height:30px;line-height:30px;font-weight:700;text-align:center}.month-btn[data-v-0d8e302a]{font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker-preBtn[data-v-0d8e302a]{left:2px}.datepicker-nextBtn[data-v-0d8e302a]{right:2px}.btne[data-v-0d8e302a]{cursor:pointer;display:flex;align-items:center;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;padding:5px}.caixa[data-v-0d8e302a]{width:100%;display:flex;flex-flow:column;z-index:1}.append[data-v-0d8e302a]{display:flex;align-self:flex-end;position:absolute;z-index:2}",""])},b0Eo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("s9Db"),r=a("wDOP");a.n(r);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.default={mixins:[i.a],components:{Datepicker:r.Datepicker},props:{unique:{type:Boolean,default:!1},idp:{type:String,default:""},dproc:{type:String,default:""},dref:{type:String,default:""},dano:{type:String,default:""}},data:function(){var t;return s(t={local:"",numero:"",letra:"",obs:"",opm:"",nome:"",toEdit:"",arquivos:[],only:!1,rg:""},"nome",""),s(t,"opm",""),s(t,"add",!1),s(t,"locais",["Arquivo COGER","Arquivo Geral(PMPR)","Cautela (Saída)"]),s(t,"letras",["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","aa","ab","ac","ad","ae","af","ag","ah","ai","aj","ak","al","am","an","ao","ap","aq","ar","as","at","au","av","aw","ax","ay","az","ba","bb","bc","bd","be","bf","bg","bh","bi","bj","bk","bl","bm","bn","bo","bp","bq","br","bs","bt","bu","bv","bw","bx","by","bz","ca","cb","cc","cd","ce","cf","cg","ch","ci","cj","ck","cl","cm","cn","co","cp","cq","cr","cs","ct","cu","cv","cw","cx","cy","cz","da","db","dc","dd","de","df","dg","dh","di","dj","dk","dl","dm","dn","do","dp","dq","dr","ds","dt","du","dv","dw","dx","dy","dz","ea","eb","ec","ed","ee","ef","eg","eh","ei","ej","ek","el","em","en","eo","ep","eq","er","es","et","eu","ev","ew","ex","ey","ez","fa","fb","fc","fd","fe","ff","fg","fh","fi","fj","fk","fl","fm","fn","fo","fp","fq","fr","fs","ft","fu","fv","fw","fx","fy","fz","ga","gb","gc","gd","ge","gf","gg","gh","gi","gj","gk","gl","gm","gn","go","gp","gq","gr","gs","gt","gu","gv","gw","gx","gy","gz","ha","hb","hc","hd","he","hf","hg","hh","hi","hj","hk","hl","hm","hn","ho","hp","hq","hr","hs","ht","hu","hv","hw","hx","hy","hz","ia","ib","ic","id","ie","if","ig","ih","ii","ij","ik","il","im","in","io","ip","iq","ir","is","it","iu","iv","iw","ix","iy","iz","ja","jb","jc","jd","je","jf","jg","jh","ji","jj","jk","jl","jm","jn","jo","jp","jq","jr","js","jt","ju","jv","jw","jx","jy","jz","ka","kb","kc","kd","ke","kf","kg","kh","ki","kj","kk","kl","km","kn","ko","kp","kq","kr","ks","kt","ku","kv","kw","kx","ky","kz","la","lb","lc","ld","le","lf","lg","lh","li","lj","lk","ll","lm","ln","lo","lp","lq","lr","ls","lt","lu","lv","lw","lx","ly","lz","ma","mb","mc","md","me","mf","mg","mh","mi","mj","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt","mu","mv","mw","mx","my","mz","na","nb","nc","nd","ne","nf","ng","nh","ni","nj","nk","nl","nm","nn","no","np","nq","nr","ns","nt","nu","nv","nw","nx","ny","nz","oa","ob","oc","od","oe","of","og","oh","oi","oj","ok","ol","om","on","oo","op","oq","or","os","ot","ou","ov","ow","ox","oy","oz","pa","pb","pc","pd","pe","pf","pg","ph","pi","pj","pk","pl","pm","pn","po","pp","pq","pr","ps","pt","pu","pv","pw","px","py","pz","qa","qb","qc","qd","qe","qf","qg","qh","qi","qj","qk","ql","qm","qn","qo","qp","qq","qr","qs","qt","qu","qv","qw","qx","qy","qz","ra","rb","rc","rd","re","rf","rg","rh","ri","rj","rk","rl","rm","rn","ro","rp","rq","rr","rs","rt","ru","rv","rw","rx","ry","rz","sa","sb","sc","sd","se","sf","sg","sh","si","sj","sk","sl","sm","sn","so","sp","sq","sr","ss","st","su","sv","sw","sx","sy","sz","ta","tb","tc","td","te","tf","tg","th","ti","tj","tk","tl","tm","tn","to","tp","tq","tr","ts","tt","tu","tv","tw","tx","ty","tz","ua","ub","uc","ud","ue","uf","ug","uh","ui","uj","uk","ul","um","un","uo","up","uq","ur","us","ut","uu","uv","uw","ux","uy","uz","va","vb","vc","vd","ve","vf","vg","vh","vi","vj","vk","vl","vm","vn","vo","vp","vq","vr","vs","vt","vu","vv","vw","vx","vy","vz","wa","wb","wc","wd","we","wf","wg","wh","wi","wj","wk","wl","wm","wn","wo","wp","wq","wr","ws","wt","wu","wv","ww","wx","wy","wz","xa","xb","xc","xd","xe","xf","xg","xh","xi","xj","xk","xl","xm","xn","xo","xp","xq","xr","xs","xt","xu","xv","xw","xx","xy","xz","ya","yb","yc","yd","ye","yf","yg","yh","yi","yj","yk","yl","ym","yn","yo","yp","yq","yr","ys","yt","yu","yv","yw","yx","yy","yz","za","zb","zc","zd","ze","zf","zg","zh","zi","zj","zk","zl","zm","zn","zo","zp","zq","zr","zs","zt","zu","zv","zw","zx","zy","zz"]),t},mounted:function(){this.verifyOnly,this.listArquivo(),this.rg=this.$root.dadoSession("rg"),this.nome=this.$root.dadoSession("nome"),this.opm=this.$root.dadoSession("cdopm")},computed:{today:function(){var t=new Date,e=t.getDate()>10?String(t.getDate()):"0"+t.getDate(),a=t.getMonth()+1>10?String(t.getMonth()+1):"0"+String(t.getMonth()+1);return t=t.getFullYear()+"-"+a+"-"+e,t},verifyOnly:function(){1==this.unique?this.only=!0:this.only=!1},canEdit:function(){return this.$root.hasPermission("editar-arquivamento")},canDelete:function(){return this.$root.hasPermission("apagar-arquivamento")}},methods:{listArquivo:function(){var t=this;this.clear(!0);var e=this.$root.baseUrl+"api/arquivo/list/"+this.dproc+"/"+this.idp;this.dproc&&this.idp&&axios.get(e).then(function(e){t.arquivos=e.data}).then(this.clear).catch(function(t){return console.log(t)})},createArquivo:function(){var t=this.$root.baseUrl+"api/arquivo/store",e=document.getElementById("formData"),a=new FormData(e);axios.post(t,a).then(this.listArquivo()).catch(function(t){return console.log(t)})},replaceArquivo:function(t){this.toEdit=t.id_arquivo,this.arquivo_data=t.arquivo_data,this.local=t.local_atual,this.numero=t.numero,this.letra=t.letra,this.obs=t.obs,this.add=!0},editArquivo:function(){var t=this,e=this.$root.baseUrl+"api/arquivo/edit/"+this.toEdit,a=document.getElementById("formData"),i=new FormData(a);axios.post(e,i).then(function(){t.listArquivo(),t.clear(!1)}).catch(function(t){return console.log(t)})},removeArquivo:function(t,e){var a=this.$root.baseUrl+"api/arquivo/destroy/"+t;axios.delete(a).then(this.arquivos.splice(e,1)).then(this.clear(!1)).catch(function(t){return console.log(t)})},clear:function(t){this.add=t,this.local="",this.numero="",this.letra="",this.obs="",this.toEdit=""}}}},dFl1:function(t,e,a){var i=a("VU/8")(a("b0Eo"),a("wTCu"),!1,function(t){a("Ehkv")},"data-v-f38fb3da",null);t.exports=i.exports},isTW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:String,default:""},format:{default:"dd/MM/yyyy"},disabledDaysOfWeek:{type:Array,default:function(){return[0,6]}},width:{type:String,default:"200px"},clearButton:{type:Boolean,default:!1},lang:{type:String,default:navigator.language},placeholder:{type:String,default:"Selecione"},name:{type:String,default:null}},data:function(){return{currDate:new Date,dateRange:[],decadeRange:[],displayDayView:!1,displayMonthView:!1,displayYearView:!1,val:this.value}},watch:{val:function(t){this.$emit("input",t)},currDate:function(){this.getDateRange()}},computed:{text:function(){return this.translations(this.lang)}},methods:{translations:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";return window.VueStrapLang?window.VueStrapLang(t):{daysOfWeek:["Dom","Seg","Ter","Qua","Qui","Sex","Sa"],limit:"Limite atingido ({{limit}} itens máximo).",loading:"Carregando...",minLength:"Min. comprimento",months:["Janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],notSelected:"Nada selecionado",required:"Obrigatório",search:"Busca"}},changeToToday:function(){this.val=this.today(),this.value=this.val},cleanVal:function(){this.val="",this.value=this.val},today:function(){var t=new Date;return t=String(t.getDate()).padStart(2,"0")+"/"+String(t.getMonth()+1).padStart(2,"0")+"/"+t.getFullYear(),t},close:function(){this.displayDayView=this.displayMonthView=this.displayYearView=!1},inputClick:function(){this.currDate=this.parse(this.val)||this.parse(new Date),this.displayMonthView||this.displayYearView?this.displayDayView=!1:this.displayDayView=!this.displayDayView},preNextDecadeClick:function(t){var e=this.currDate.getFullYear(),a=this.currDate.getMonth(),i=this.currDate.getDate();this.currDate=0===t?new Date(e-10,a,i):new Date(e+10,a,i)},preNextMonthClick:function(t){var e=this.currDate.getFullYear(),a=this.currDate.getMonth(),i=this.currDate.getDate();if(0===t){var r=this.getYearMonth(e,a-1);this.currDate=new Date(r.year,r.month,i)}else{var s=this.getYearMonth(e,a+1);this.currDate=new Date(s.year,s.month,i)}},preNextYearClick:function(t){var e=this.currDate.getFullYear(),a=this.currDate.getMonth(),i=this.currDate.getDate();this.currDate=0===t?new Date(e-1,a,i):new Date(e+1,a,i)},yearSelect:function(t){this.displayYearView=!1,this.displayMonthView=!0,this.currDate=new Date(t,this.currDate.getMonth(),this.currDate.getDate())},daySelect:function(t,e){if("datepicker-item-disable"===this.$el.classList[0])return!1;this.currDate=t,this.val=this.stringify(this.currDate),this.displayDayView=!1},switchMonthView:function(){this.displayDayView=!1,this.displayMonthView=!0},switchDecadeView:function(){this.displayMonthView=!1,this.displayYearView=!0},monthSelect:function(t){this.displayMonthView=!1,this.displayDayView=!0,this.currDate=new Date(this.currDate.getFullYear(),t,this.currDate.getDate())},getYearMonth:function(t,e){return e>11?(t++,e=0):e<0&&(t--,e=11),{year:t,month:e}},stringifyDecadeHeader:function(t){var e=t.getFullYear().toString(),a=e.substring(0,e.length-1)+0;return a+"-"+(parseInt(a,10)+10)},stringifyDayHeader:function(t){return this.text.months[t.getMonth()]+" "+t.getFullYear()},parseMonth:function(t){return this.text.months[t.getMonth()]},stringifyYearHeader:function(t){return t.getFullYear()},stringify:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.format;if(t||(t=this.parse()),!t)return"";var a=t.getFullYear(),i=t.getMonth()+1,r=t.getDate(),s=this.parseMonth(t);return e.replace(/yyyy/g,a).replace(/MMMM/g,s).replace(/MMM/g,s.substring(0,3)).replace(/MM/g,("0"+i).slice(-2)).replace(/dd/g,("0"+r).slice(-2)).replace(/yy/g,a).replace(/M(?!a)/g,i).replace(/d/g,r)},parse:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.val,e=void 0;return e=10!==t.length||"dd-MM-yyyy"!==this.format&&"dd/MM/yyyy"!==this.format?new Date(t):new Date(t.substring(6,10),t.substring(3,5),t.substring(0,2)),isNaN(e.getFullYear())?new Date:e},getDayCount:function(t,e){return 1===e&&(t%400==0||t%4==0&&t%100!=0)?29:[31,28,31,30,31,30,31,31,30,31,30,31][e]},getDateRange:function(){var t=this;this.dateRange=[],this.decadeRange=[];for(var e={year:this.currDate.getFullYear(),month:this.currDate.getMonth(),day:this.currDate.getDate()},a=e.year.toString(),i=a.substring(0,a.length-1)+0-1,r=0;r<12;r++)this.decadeRange.push({text:i+r});var s=new Date(e.year,e.month,1).getDay()+1;0===s&&(s=7);var n=this.getDayCount(e.year,e.month);if(s>1)for(var o=this.getYearMonth(e.year,e.month-1),c=this.getDayCount(o.year,o.month),l=1;l<s;l++){var d=c-s+l+1;this.dateRange.push({text:d,date:new Date(o.year,o.month,d),sclass:"datepicker-item-gray"})}for(var u=function(a){var i=new Date(e.year,e.month,a),r=i.getDay(),s="";if(t.disabledDaysOfWeek.forEach(function(t){r===parseInt(t,10)&&(s="datepicker-item-disable")}),a===e.day&&t.val){var n=t.parse(t.val);n&&n.getFullYear()===e.year&&n.getMonth()===e.month&&(s="datepicker-dateRange-item-active")}t.dateRange.push({text:a,date:i,sclass:s})},p=1;p<=n;p++)u(p);if(this.dateRange.length<42)for(var h=42-this.dateRange.length,v=this.getYearMonth(e.year,e.month+1),g=1;g<=h;g++)this.dateRange.push({text:g,date:new Date(v.year,v.month,g),sclass:"datepicker-item-gray"})}},mounted:function(){var t=this,e=this.$el;this._blur=function(a){e.contains(a.target)||t.close()},this.$emit("child-created",this),this.currDate=this.parse(this.val)||this.parse(new Date),window.addEventListener("click",this._blur)},beforeDestroy:function(){window.removeEventListner("click",this._blur)}}},s9Db:function(t,e,a){"use strict";e.a={data:function(){return{add:!1}},methods:{list:function(){var t=this,e=this.$root.baseUrl+"api/"+this.module+"/list/"+this.rg;this.rg&&axios.get(e).then(function(e){t.registros=e.data}).catch(function(t){return console.log(t)})},create:function(){var t=this,e=this.$root.baseUrl+"api/"+this.module+"/store";axios.post(e,this.registro).then(function(e){t.transation(e.data.success,"create")}).catch(function(t){return console.log(t)}),this.showModal=!1},edit:function(t){this.registro=t,this.showModal=!0},update:function(t){var e=this,a=this.$root.baseUrl+"api/"+this.module+"/update/"+t;axios.put(a,this.registro).then(function(t){e.transation(t.data.success,"edit")}).catch(function(t){return console.log(t)})},destroy:function(t){var e=this;if(confirm("Você tem certeza?")){var a=this.$root.baseUrl+"api/"+this.module+"/destroy/"+t;axios.delete(a).then(function(t){e.transation(t.data.success,"delete")}).catch(function(t){return console.log(t)})}},transation:function(t,e){var a=this.words(e);this.showModal=!1,t?(this.list(),this.$root.msg(a.success,"success"),this.registro=[]):this.$root.msg(a.fail,"danger")},words:function(t){return"create"==t?{success:"Inserido com sucesso",fail:"Erro ao inserir"}:"edit"==t?{success:"Editado com sucesso",fail:"Erro ao editar"}:"delete"==t?{success:"Apagado com sucesso",fail:"Erro ao apagar"}:void 0}}}},wDOP:function(t,e,a){var i=a("VU/8")(a("isTW"),a("NgvV"),!1,function(t){a("wr45")},"data-v-0d8e302a",null);t.exports=i.exports},wTCu:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12 col-md-12 col-xs-12 card"},[t._m(0),t._v(" "),t.only?t._e():a("div",{staticClass:"card-body",class:t.add?"bordaform":""},[t.add?a("div",[a("div",{staticClass:"row",attrs:{id:"ligacaoForm1"}},[a("form",{attrs:{id:"formData",name:"formData"}},[a("input",{attrs:{type:"hidden",name:"procedimento"},domProps:{value:t.dproc}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"id_"+t.dproc},domProps:{value:t.idp}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"sjd_ref"},domProps:{value:t.dref}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"sjd_ref_ano"},domProps:{value:t.dano}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"arquivo_data"},domProps:{value:t.today}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"rg"},domProps:{value:t.rg}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"nome"},domProps:{value:t.nome}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"opm"},domProps:{value:t.opm}}),t._v(" "),a("div",{staticClass:"col-lg-3 col-md-3 col-xs-3"},[a("label",{attrs:{for:"local_atual"}},[t._v("Local")]),a("br"),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.local,expression:"local"}],staticClass:"form-control",attrs:{name:"local_atual"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.local=e.target.multiple?a:a[0]}}},t._l(t.locais,function(e){return a("option",{key:e},[t._v(t._s(e))])}),0)]),t._v(" "),a("div",{staticClass:"col-lg-3 col-md-3 col-xs-3"},[a("label",{attrs:{for:"numero"}},[t._v("Número")]),a("br"),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.numero,expression:"numero"}],staticClass:"form-control",attrs:{name:"numero"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.numero=e.target.multiple?a:a[0]}}},t._l(100,function(e){return a("option",{key:e},[t._v(t._s(e))])}),0)]),t._v(" "),a("div",{staticClass:"col-lg-3 col-md-3 col-xs-3"},[a("label",{attrs:{for:"letra"}},[t._v("Letra")]),a("br"),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.letra,expression:"letra"}],staticClass:"form-control",attrs:{name:"letra"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.letra=e.target.multiple?a:a[0]}}},[a("option",[t._v("-")]),t._v(" "),t._l(t.letras,function(e){return a("option",{key:e},[t._v(t._s(e))])})],2)]),t._v(" "),a("div",{staticClass:"col-lg-3 col-md-3 col-xs-3"},[a("label",{attrs:{for:"obs"}},[t._v("Observações:")]),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.obs,expression:"obs"}],staticClass:"form-control",attrs:{name:"obs",type:"text",size:"30"},domProps:{value:t.obs},on:{input:function(e){e.target.composing||(t.obs=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 col-xs-6"},[a("label",[t._v("Cancelar")]),a("br"),t._v(" "),a("a",{staticClass:"btn btn-danger btn-block",on:{click:function(e){return t.clear(!1)}}},[a("i",{staticClass:"fa fa-times",staticStyle:{color:"white"}})])]),t._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 col-xs-6"},[t.toEdit?[a("label",[t._v("Editar")]),a("br"),t._v(" "),a("a",{staticClass:"btn btn-success btn-block",attrs:{disabled:!t.local},on:{click:t.editArquivo}},[a("i",{staticClass:"fa fa-plus",staticStyle:{color:"white"}})])]:[a("label",[t._v("Adicionar")]),a("br"),t._v(" "),a("a",{staticClass:"btn btn-success btn-block",attrs:{disabled:!t.local},on:{click:t.createArquivo}},[a("i",{staticClass:"fa fa-plus",staticStyle:{color:"white"}})])]],2)])])]):a("div",[a("button",{staticClass:"btn btn-success btn-block",on:{click:function(e){t.add=!t.add}}},[a("i",{staticClass:"fa fa-plus"}),t._v(" Adicionar arquivo")])])]),t._v(" "),a("div",{staticClass:"card-footer"},[t.arquivos.length?a("div",{staticClass:"row bordaform"},[a("div",{staticClass:"col-sm-12"},[a("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),a("tbody",t._l(t.arquivos,function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(i+1))]),t._v(" "),a("td",[t._v(t._s(t._f("date_br")(e.arquivo_data)))]),t._v(" "),a("td",[t._v(t._s(e.local_atual))]),t._v(" "),a("td",[t._v(t._s(e.numero)+"/"+t._s(e.letra))]),t._v(" "),a("td",[t._v(t._s(e.obs))]),t._v(" "),a("td",[t._v(t._s(e.rg))]),t._v(" "),a("td",[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"First group"}},[t.canEdit?a("a",{staticClass:"btn btn-success",staticStyle:{color:"white"},attrs:{type:"button"},on:{click:function(a){return t.replaceArquivo(e)}}},[a("i",{staticClass:"fa fa-edit"})]):t._e(),t._v(" "),t.canDelete?a("a",{staticClass:"btn btn-danger",staticStyle:{color:"white"},attrs:{type:"button"},on:{click:function(a){return t.removeArquivo(e.id_arquivo,i)}}},[a("i",{staticClass:"fa fa-trash"})]):t._e()])])])}),0)])])]):t._e(),t._v(" "),!t.arquivos.length&&t.only?a("div",[a("h6",[t._v("Não há registtros")])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h5",[e("b",[this._v("Arquivos")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"col-sm-1"},[t._v("#")]),t._v(" "),a("th",{staticClass:"col-sm-1"},[t._v("Data")]),t._v(" "),a("th",{staticClass:"col-sm-2"},[t._v("Local")]),t._v(" "),a("th",{staticClass:"col-sm-1"},[t._v("N°/Letra")]),t._v(" "),a("th",{staticClass:"col-sm-3"},[t._v("Obs")]),t._v(" "),a("th",{staticClass:"col-sm-2"},[t._v("RG")]),t._v(" "),a("th",{staticClass:"col-sm-2"},[t._v("Ações")])])])}]}},wr45:function(t,e,a){var i=a("Xnwp");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("1da49c3e",i,!0,{})}});