import{s as t}from"./index.579e7092.js";function r(){return t({url:"/monitor/cache",method:"get"})}function o(){return t({url:"/monitor/cache/getNames",method:"get"})}function n(e){return t({url:"/monitor/cache/getKeys/"+e,method:"get"})}function l(e,c){return t({url:"/monitor/cache/getValue/"+e+"/"+c,method:"get"})}function h(e){return t({url:"/monitor/cache/clearCacheName/"+e,method:"delete"})}function u(e){return t({url:"/monitor/cache/clearCacheKey/"+e,method:"delete"})}function m(){return t({url:"/monitor/cache/clearCacheAll",method:"delete"})}export{n as a,u as b,h as c,l as d,m as e,r as g,o as l};
