define("src/js/module/msg_call",["seajs/seajs-css/1.0.4/seajs-css.js"],function(a,b){b.init=function(b){var c=$(b);a("seajs/seajs-css/1.0.4/seajs-css.js"),seajs.use((seajs.ISDEV?"./":"")+"src/css/module/msg_call.css"),c.find("#j-clearAll").click(function(){return $("#j-noHistory").show().siblings(".clc-msg-call-title").hide(),$("#j-historyList").hide(),!1})}});