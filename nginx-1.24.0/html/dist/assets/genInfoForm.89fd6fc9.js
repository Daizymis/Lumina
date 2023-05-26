import{r as T,H,a as u,o as d,h as V,w as l,e,k as o,f as w,G as U,c as N,F as y,g as L,y as C,v as W,i as F,l as $}from"./index.579e7092.js";import{l as J}from"./menu.779863fc.js";const K=F("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),Q=F("h4",{class:"form-header"},"\u5176\u4ED6\u4FE1\u606F",-1),R=F("h4",{class:"form-header"},"\u5173\u8054\u4FE1\u606F",-1),Z={__name:"genInfoForm",props:{info:{type:Object,default:null},tables:{type:Array,default:null}},setup(t){const g=t,I=T([]),q=T([]),{proxy:P}=$(),M=T({tplCategory:[{required:!0,message:"\u8BF7\u9009\u62E9\u751F\u6210\u6A21\u677F",trigger:"blur"}],packageName:[{required:!0,message:"\u8BF7\u8F93\u5165\u751F\u6210\u5305\u8DEF\u5F84",trigger:"blur"}],moduleName:[{required:!0,message:"\u8BF7\u8F93\u5165\u751F\u6210\u6A21\u5757\u540D",trigger:"blur"}],businessName:[{required:!0,message:"\u8BF7\u8F93\u5165\u751F\u6210\u4E1A\u52A1\u540D",trigger:"blur"}],functionName:[{required:!0,message:"\u8BF7\u8F93\u5165\u751F\u6210\u529F\u80FD\u540D",trigger:"blur"}]});function B(c){g.info.subTableFkName=""}function S(c){c!=="sub"&&(g.info.subTableName="",g.info.subTableFkName="")}function h(c){for(var a in g.tables){const b=g.tables[a].tableName;if(c===b){I.value=g.tables[a].columns;break}}}function j(){J().then(c=>{q.value=P.handleTree(c.data,"menuId")})}return H(()=>g.info.subTableName,c=>{h(c)}),j(),(c,a)=>{const b=u("el-option"),_=u("el-select"),m=u("el-form-item"),f=u("el-col"),r=u("question-filled"),i=u("el-icon"),s=u("el-tooltip"),v=u("el-input"),z=u("tree-select"),x=u("el-radio"),O=u("el-button"),A=u("el-dropdown-item"),D=u("el-dropdown-menu"),E=u("el-dropdown"),k=u("el-row"),G=u("el-form");return d(),V(G,{ref:"genInfoForm",model:t.info,rules:w(M),"label-width":"150px"},{default:l(()=>[e(k,null,{default:l(()=>[e(f,{span:12},{default:l(()=>[e(m,{prop:"tplCategory"},{label:l(()=>[o("\u751F\u6210\u6A21\u677F")]),default:l(()=>[e(_,{modelValue:t.info.tplCategory,"onUpdate:modelValue":a[0]||(a[0]=n=>t.info.tplCategory=n),onChange:S},{default:l(()=>[e(b,{label:"\u5355\u8868\uFF08\u589E\u5220\u6539\u67E5\uFF09",value:"crud"}),e(b,{label:"\u6811\u8868\uFF08\u589E\u5220\u6539\u67E5\uFF09",value:"tree"}),e(b,{label:"\u4E3B\u5B50\u8868\uFF08\u589E\u5220\u6539\u67E5\uFF09",value:"sub"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(m,{prop:"packageName"},{label:l(()=>[o(" \u751F\u6210\u5305\u8DEF\u5F84 "),e(s,{content:"\u751F\u6210\u5728\u54EA\u4E2Ajava\u5305\u4E0B\uFF0C\u4F8B\u5982 com.ruoyi.system",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(v,{modelValue:t.info.packageName,"onUpdate:modelValue":a[1]||(a[1]=n=>t.info.packageName=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(m,{prop:"moduleName"},{label:l(()=>[o(" \u751F\u6210\u6A21\u5757\u540D "),e(s,{content:"\u53EF\u7406\u89E3\u4E3A\u5B50\u7CFB\u7EDF\u540D\uFF0C\u4F8B\u5982 system",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(v,{modelValue:t.info.moduleName,"onUpdate:modelValue":a[2]||(a[2]=n=>t.info.moduleName=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(m,{prop:"businessName"},{label:l(()=>[o(" \u751F\u6210\u4E1A\u52A1\u540D "),e(s,{content:"\u53EF\u7406\u89E3\u4E3A\u529F\u80FD\u82F1\u6587\u540D\uFF0C\u4F8B\u5982 user",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(v,{modelValue:t.info.businessName,"onUpdate:modelValue":a[3]||(a[3]=n=>t.info.businessName=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(m,{prop:"functionName"},{label:l(()=>[o(" \u751F\u6210\u529F\u80FD\u540D "),e(s,{content:"\u7528\u4F5C\u7C7B\u63CF\u8FF0\uFF0C\u4F8B\u5982 \u7528\u6237",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(v,{modelValue:t.info.functionName,"onUpdate:modelValue":a[4]||(a[4]=n=>t.info.functionName=n)},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[o(" \u4E0A\u7EA7\u83DC\u5355 "),e(s,{content:"\u5206\u914D\u5230\u6307\u5B9A\u83DC\u5355\u4E0B\uFF0C\u4F8B\u5982 \u7CFB\u7EDF\u7BA1\u7406",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(z,{value:t.info.parentMenuId,"onUpdate:value":a[5]||(a[5]=n=>t.info.parentMenuId=n),options:w(q),objMap:{value:"menuId",label:"menuName",children:"children"},placeholder:"\u8BF7\u9009\u62E9\u7CFB\u7EDF\u83DC\u5355"},null,8,["value","options"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(m,{prop:"genType"},{label:l(()=>[o(" \u751F\u6210\u4EE3\u7801\u65B9\u5F0F "),e(s,{content:"\u9ED8\u8BA4\u4E3Azip\u538B\u7F29\u5305\u4E0B\u8F7D\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u751F\u6210\u8DEF\u5F84",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(x,{modelValue:t.info.genType,"onUpdate:modelValue":a[6]||(a[6]=n=>t.info.genType=n),label:"0"},{default:l(()=>[o("zip\u538B\u7F29\u5305")]),_:1},8,["modelValue"]),e(x,{modelValue:t.info.genType,"onUpdate:modelValue":a[7]||(a[7]=n=>t.info.genType=n),label:"1"},{default:l(()=>[o("\u81EA\u5B9A\u4E49\u8DEF\u5F84")]),_:1},8,["modelValue"])]),_:1})]),_:1}),t.info.genType=="1"?(d(),V(f,{key:0,span:24},{default:l(()=>[e(m,{prop:"genPath"},{label:l(()=>[o(" \u81EA\u5B9A\u4E49\u8DEF\u5F84 "),e(s,{content:"\u586B\u5199\u78C1\u76D8\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u82E5\u4E0D\u586B\u5199\uFF0C\u5219\u751F\u6210\u5230\u5F53\u524DWeb\u9879\u76EE\u4E0B",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(v,{modelValue:t.info.genPath,"onUpdate:modelValue":a[9]||(a[9]=n=>t.info.genPath=n)},{append:l(()=>[e(E,null,{dropdown:l(()=>[e(D,null,{default:l(()=>[e(A,{onClick:a[8]||(a[8]=n=>t.info.genPath="/")},{default:l(()=>[o("\u6062\u590D\u9ED8\u8BA4\u7684\u751F\u6210\u57FA\u7840\u8DEF\u5F84")]),_:1})]),_:1})]),default:l(()=>[e(O,{type:"primary"},{default:l(()=>[o(" \u6700\u8FD1\u8DEF\u5F84\u5FEB\u901F\u9009\u62E9 "),K]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):U("",!0)]),_:1}),t.info.tplCategory=="tree"?(d(),N(y,{key:0},[Q,L(e(k,null,{default:l(()=>[e(f,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[o(" \u6811\u7F16\u7801\u5B57\u6BB5 "),e(s,{content:"\u6811\u663E\u793A\u7684\u7F16\u7801\u5B57\u6BB5\u540D\uFF0C \u5982\uFF1Adept_id",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(_,{modelValue:t.info.treeCode,"onUpdate:modelValue":a[10]||(a[10]=n=>t.info.treeCode=n),placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(d(!0),N(y,null,C(t.info.columns,(n,p)=>(d(),V(b,{key:p,label:n.columnName+"\uFF1A"+n.columnComment,value:n.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[o(" \u6811\u7236\u7F16\u7801\u5B57\u6BB5 "),e(s,{content:"\u6811\u663E\u793A\u7684\u7236\u7F16\u7801\u5B57\u6BB5\u540D\uFF0C \u5982\uFF1Aparent_Id",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(_,{modelValue:t.info.treeParentCode,"onUpdate:modelValue":a[11]||(a[11]=n=>t.info.treeParentCode=n),placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(d(!0),N(y,null,C(t.info.columns,(n,p)=>(d(),V(b,{key:p,label:n.columnName+"\uFF1A"+n.columnComment,value:n.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[o(" \u6811\u540D\u79F0\u5B57\u6BB5 "),e(s,{content:"\u6811\u8282\u70B9\u7684\u663E\u793A\u540D\u79F0\u5B57\u6BB5\u540D\uFF0C \u5982\uFF1Adept_name",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(_,{modelValue:t.info.treeName,"onUpdate:modelValue":a[12]||(a[12]=n=>t.info.treeName=n),placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(d(!0),N(y,null,C(t.info.columns,(n,p)=>(d(),V(b,{key:p,label:n.columnName+"\uFF1A"+n.columnComment,value:n.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},512),[[W,t.info.tplCategory=="tree"]])],64)):U("",!0),t.info.tplCategory=="sub"?(d(),N(y,{key:1},[R,e(k,null,{default:l(()=>[e(f,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[o(" \u5173\u8054\u5B50\u8868\u7684\u8868\u540D "),e(s,{content:"\u5173\u8054\u5B50\u8868\u7684\u8868\u540D\uFF0C \u5982\uFF1Asys_user",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(_,{modelValue:t.info.subTableName,"onUpdate:modelValue":a[13]||(a[13]=n=>t.info.subTableName=n),placeholder:"\u8BF7\u9009\u62E9",onChange:B},{default:l(()=>[(d(!0),N(y,null,C(t.tables,(n,p)=>(d(),V(b,{key:p,label:n.tableName+"\uFF1A"+n.tableComment,value:n.tableName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(m,null,{label:l(()=>[o(" \u5B50\u8868\u5173\u8054\u7684\u5916\u952E\u540D "),e(s,{content:"\u5B50\u8868\u5173\u8054\u7684\u5916\u952E\u540D\uFF0C \u5982\uFF1Auser_id",placement:"top"},{default:l(()=>[e(i,null,{default:l(()=>[e(r)]),_:1})]),_:1})]),default:l(()=>[e(_,{modelValue:t.info.subTableFkName,"onUpdate:modelValue":a[14]||(a[14]=n=>t.info.subTableFkName=n),placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(d(!0),N(y,null,C(w(I),(n,p)=>(d(),V(b,{key:p,label:n.columnName+"\uFF1A"+n.columnComment,value:n.columnName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})],64)):U("",!0)]),_:1},8,["model","rules"])}}};export{Z as default};
