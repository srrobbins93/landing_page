(function(){function g(b,a,d){for(var c=b.length;c--;)if(("function"===typeof d?d(b[c]):b[c])===a)return!0;return!1}function n(b,a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");b=(new RegExp("[\\?&]"+a+"=([^&#]*)","i")).exec(b);return null==b?null:b[1]}function p(){a._dv_win.dvbsScriptsInternal||(a._dv_win.dvbsScriptsInternal=[]);a._dv_win.dvbsProcessed||(a._dv_win.dvbsProcessed=[]);a._dv_win._dvScripts||(a._dv_win._dvScripts=[]);var b=document.getElementsByTagName("script"),c;for(c in b)if(b[c].src){var d=
b[c].src,f=a._dv_win.dv_config.bs_regex||/\.doubleverify\.com:?[0-9]*\/dvbs_src\.js/,e=function(a){return a.script};if(d&&d.match(f)&&!g(a._dv_win.dvbsScriptsInternal,b[c],e)&&!g(a._dv_win.dvbsProcessed,b[c],e)&&!g(a._dv_win._dvScripts,b[c]))return b={src_location:d.substr(0,d.indexOf("/dvbs_src.js")),script:b[c],loadtime:Date.now?Date.now():(new Date).getTime()},a._dv_win.dvbsScriptsInternal.push(b),b}return null}window.dvPerf={results:[],addTime:function(a){this.results.push({key:a,value:Date.now?
Date.now():(new Date).getTime()})}};var a=window;try{a._dv_win=a._dv_win||a;a._dv_win.dv_config=a._dv_win.dv_config||{};var q=a._dv_win.dv_config.dvbsInternalURL||"dvbs_src_internal100.js",e=p();if(e){var k=e.src_location+"/"+q,l=n(e.script.src,"tagformat");if(l&&"2"===l){var f=document.createElement("script");f.type="text/javascript";f.src=k;if(document.body)document.body.appendChild(f);else{var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(f,m)}}else document.write('<script type="text/javascript" src="'+
k+'">\x3c/script>')}else try{var h=a.location.protocol+"//rtb0.doubleverify.com/verify.js?ctx=818052&cmp=1619415&num=6&dvp_isLostImp=1&dvp_intErr=2";(new Image).src=h}catch(b){}}catch(b){try{h=a.location.protocol+"//rtb0.doubleverify.com/verify.js?ctx=818052&cmp=1619415&num=6&dvp_isLostImp=1&dvp_intErr=1&dvp_jsErrMsg="+encodeURIComponent(b),(new Image).src=h}catch(c){}}})();
