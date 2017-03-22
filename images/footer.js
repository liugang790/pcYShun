var H3C = H3C || {};
H3C.isWeiXinBrowser = function(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
 	} else {
		return false;
	}
}
var SendEmail = function(subject) {
    var sendEmailUrl = "http://" + location.hostname + "/Aspx/ContractMe/Default.aspx";
    subject = escape(subject);
    var url = escape(window.location.href);
    sendEmailUrl = sendEmailUrl + "?subject=" + subject + "&url=" + url;
    window.open(sendEmailUrl, "send", "left=300,top=120,status=no,scrollbars=no,resizable=no,width=500,height=500");
}
var addQR = function () {
	var htmlArray = [];
	htmlArray.push('<div class="jiathis_style_32x32 suface">');
	htmlArray.push('<a class="jiathis_button_weixin wx"><img src="/tres/WebUI/images/tf_11.png" ></a>');
	htmlArray.push('</div>');
	htmlArray.push('<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js?uid=1370485270555516" charset="utf-8"></scr' + 'ipt>');
	var qrhtml = htmlArray.join('');
	$('#shareQR').html(qrhtml);
}


if (H3C.isWeiXinBrowser()) {
	var _head = $('head:eq(0)');
	var imgUrl = "http://www.h3c.com.cn/tres/WebUI/images/h3c-wxshare-logo.jpg";
	var lineLink = window.location.href;
	var descContent = $('meta[name="description"]', _head).attr('content');
	var shareTitle = $('title', _head).html();
	var appid = '';
	function shareFriend() {
		WeixinJSBridge.invoke('sendAppMessage', {
			"appid": appid,
			"img_url": imgUrl,
			"img_width": "200",
			"img_height": "200",
			"link": lineLink,
			"desc": descContent,
			"title": shareTitle
		}, function (res) {
          
		})
	}
	function shareTimeline() {
		WeixinJSBridge.invoke('shareTimeline', {
			"img_url": imgUrl,
			"img_width": "200",
			"img_height": "200",
			"link": lineLink,
			"desc": descContent,
			"title": shareTitle
		}, function (res) {
			   
		});
	}
	function shareWeibo() {
		WeixinJSBridge.invoke('shareWeibo', {
			"content": descContent,
			"url": lineLink
		}, function (res) {
			//_report('weibo', res.err_msg);             
		});
	}
	// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。        
	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
		// 发送给好友            
		WeixinJSBridge.on('menu:share:appmessage', function (argv) {
			shareFriend();
		});
		// 分享到朋友圈             
		WeixinJSBridge.on('menu:share:timeline', function (argv) {
			shareTimeline();
		});
		// 分享到微博             
		WeixinJSBridge.on('menu:share:weibo', function (argv) {
			shareWeibo();
		});
	}, false);
} 



function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function SetRead() {
    var cookie = H3C.getCookie("h3ccookie");
    if (cookie == '') {
        cookie = S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
    }
    H3C.setCookie("h3ccookie", cookie,24*365*10); //把GUID写入IIS
}
function get_browser() {

    var Sys = {};

    var ua = navigator.userAgent.toLowerCase();

    var s;

    (s = ua.match(/qqbrowser\/([\d.]+)/)) ? Sys.qq = s[1] :

      (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :

      (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :

      (s = ua.match(/taobrowser\/([\d.]+)/)) ? Sys.tao = s[1] :

      (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :

      (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :

      (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;


    //以下进行测试 

    if (Sys.ie) {

       // return 'IE' + Sys.ie;
        return 'IE';
    }
    if (Sys.firefox) {

        return 'Firefox';
    }

    if (Sys.qq) {

        return 'QQ';
    }

    if (Sys.tao) {

        return 'Tao';
    }

    if (Sys.chrome) {

        return 'Chrome';
    }

    if (Sys.opera) {

        return 'Opera';
    }

    if (Sys.safari) {

        return 'Safari';
    }

}
function get_os() {

    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;

        if (isWin2K) return "Win2000";

        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;

        if (isWinXP) return "WinXP";

        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;

        if (isWin2003) return "Win2003";

        var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;

        if (isWinVista) return "WinVista";

        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows7") > -1;

        if (isWin7) return "Win7";
        var isWin8 = sUserAgent.indexOf("Windows NT 6.2") > -1 || sUserAgent.indexOf("Windows NT 6.3") > -1 || sUserAgent.indexOf("Windows8") > -1;

        if (isWin8) return "Win8";
    }
    return "other";
}
function get_uri_query(){
    var search = location.search;
    if(search && search.length>1){
    	return search.substr(1);
    }
	return "";
}
function get_uri(){
 	return location.pathname;
}
function get_language() {
   return navigator.browserLanguage||navigator.language;
}

var script = '<script type="text/javascript"  charset="gb2312">'
	+ '+function btnClick(Id) {'
	+ 'var img = null;'
	+ 'SetRead();'
	+ 'var reResolution = (screen.width) + "×" + (screen.height);'
	+ 'var reIP = H3C.internet?ILData[0]:"10.63.10.77";'
	+ 'var reIPType = H3C.internet?ILData[1]:"公司内网";'
	+ 'var reCity = H3C.internet?ILData[2]:"杭州";'
	+ 'var reOperators = H3C.internet?ILData[4]:"电信";'
	+ 'var reOS = get_os();'
	+ 'var rebrowser = get_browser(); '
	+ 'var relanguage = get_language(); '
	+ 'var theUri = get_uri();'
	+ 'var theQuery = get_uri_query();'
	+ 'var img = new Image;'
	+ 'img.onload = function () {'
	+ '};'
	+ 'img.src ="http://bdp-log.h3c.com/weblog/h3c.jpg?buttonId=" + encodeURIComponent(Id) +'
	+ '"&brow=" + encodeURIComponent(rebrowser) +'
	+ '"&uri="+encodeURIComponent(theUri)+"&uri-query="+encodeURIComponent(theQuery) +'
	+ '"&resolution=" + encodeURIComponent(reResolution) + "&cookie=" + encodeURIComponent(document.cookie) +'
	+ '"&ip=" + encodeURIComponent(reIP) + "&ipType=" + encodeURIComponent(reIPType) +'
	+ '"&city=" + encodeURIComponent(reCity) + "&operators=" + encodeURIComponent(reOperators) +'
	+ '"&os=" + encodeURIComponent(reOS) + "&language=" + encodeURIComponent(relanguage) +"&TheTime=" +new Date();'
	+ ' }();'
	+ '</sc' + 'ript>';
var loadBDResult = function(){
if($('#bd_rst').length>0)
	{
		var cookieId=H3C.getCookie('h3ccookie');
		var ulArray = [];
		var ulString= [];
		var url = location.pathname.toLowerCase();
		var t = '';
		if(url.indexOf('/service/')>=0)
		{
			t='S';
		}
		else{
			t='O';
		}
		$.ajax({
            type: 'Get',
            async: false,
            dataType: 'JSON',
            data: { 'url': location.pathname },
            url: "/aspx/bigdata/Getdata.aspx",
            success: function (result) {
                if (result.result != '500') {
                    $(result.result).each(function (index, jsonObject) {
                        if (!ulArray[jsonObject.title]) {
                            ulArray[jsonObject.title]=jsonObject.url;
                            ulString.push('<li><a href="' + jsonObject.url + '">' + jsonObject.title + '</a></li>')
                        }
                    });
					var content = ulString.join('');
					if(content.length>0)
					{
						$('#bd_rst>ul').append(content);
						$('#bd_rst').attr('style','display:block');
					}	
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
		$.ajax({
			type: 'Get',
			async: false,
			dataType: 'JSON',
			data:{'cookieId':cookieId,'t':t},
			url: "/aspx/bigdata/Getdata.aspx",
			success: function (result) {
				if (result.result!='500') {
					ulString= [];
					$(result.result).each(function(index,jsonObject){
						if(!ulArray[jsonObject.title])
						{
							ulArray[jsonObject.title]=jsonObject.url;
							ulString.push('<li><a href="'+jsonObject.url+'">'+jsonObject.title+'</a></li>')
						}
					});
					var content = ulString.join('');
					if(content.length>0)
					{
						$('#bd_rst>ul').append(content);
						$('#bd_rst').attr('style','display:block');
					}	
				}	
			},
			error: function (jqXHR, textStatus, errorThrown) {
				
			}
		});
	}
}
$(document).ready(function() {
    var jiathis_config = {
		title: "",
		summary: "",
		pic: ""
	}        
	if (H3C.internet) {
		addQR();
	}
	else {
		var img = new Image;
		img.onload = function () {
			addQR();
		};
		img.src = 'http://www.baidu.com/img/bdlogo.png?r='+Math.random();
	}
	setTimeout(loadBDResult,10);
});
+function log2server(Id) {
	var img = null;
	SetRead();
	var reResolution = (screen.width) + "×" + (screen.height);
	var reOS = get_os();
	var rebrowser = get_browser(); 
	var relanguage = get_language(); 
	var theUri = get_uri();
	var theQuery = get_uri_query();
	var img = new Image;
	img.onload = function () {
	};
	img.src ="http://bdp-log.h3c.com/weblog/h3c.jpg?buttonId=" + encodeURIComponent(Id) +
	"&brow=" + encodeURIComponent(rebrowser) +
	"&uri="+encodeURIComponent(theUri)+"&uri-query="+encodeURIComponent(theQuery) +
	"&resolution=" + encodeURIComponent(reResolution) + "&cookie=" + encodeURIComponent(document.cookie) +
	"&os=" + encodeURIComponent(reOS) + "&language=" + encodeURIComponent(relanguage) +"&TheTime=" +new Date();
 }();
var SetFeedBackUrl= function(obj)
{
	window.scrollBy(0,100000);
}


