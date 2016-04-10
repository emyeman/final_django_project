;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}
if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}
f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}
d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+ e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l- r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+ e))||0;g[c]-=parseInt(f.css('border'+ e+'Width'))||0}
g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/ 100 * m : o}
if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+ e;if(!d(a).is('html,body'))return a[h]- d(a)[e.toLowerCase()]();var c='client'+ e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])- Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires='; expires='+ date.toUTCString();}
var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+ 1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+ 1));break;}}}
return cookieValue;}};(function(){var special=jQuery.event.special,uid1='D'+(+new Date()),uid2='D'+(+new Date()+ 1);jQuery.event.special.focus={setup:function(){var _self=this,handler=function(e){e=jQuery.event.fix(e);e.type='focus';if(_self===document){jQuery.event.handle.call(_self,e);}};jQuery(this).data(uid1,handler);if(_self===document){if(_self.addEventListener){_self.addEventListener('focus',handler,true);}else{_self.attachEvent('onfocusin',handler);}}else{return false;}},teardown:function(){var handler=jQuery(this).data(uid1);if(this===document){if(this.removeEventListener){this.removeEventListener('focus',handler,true);}else{this.detachEvent('onfocusin',handler);}}}};jQuery.event.special.blur={setup:function(){var _self=this,handler=function(e){e=jQuery.event.fix(e);e.type='blur';if(_self===document){jQuery.event.handle.call(_self,e);}};jQuery(this).data(uid2,handler);if(_self===document){if(_self.addEventListener){_self.addEventListener('blur',handler,true);}else{_self.attachEvent('onfocusout',handler);}}else{return false;}},teardown:function(){var handler=jQuery(this).data(uid2);if(this===document){if(this.removeEventListener){this.removeEventListener('blur',handler,true);}else{this.detachEvent('onfocusout',handler);}}}};})();function set_clientwidth(){if($.browser.msie){if(document.body.clientWidth<1003){$('#header, #footer').css('width','1002px');}}
var clientwidth=document.body.clientWidth;if(clientwidth!=$.cookie("clientwidth")){$.cookie("clientwidth",escape(document.body.clientWidth),{path:"/",expires:365});}
var obj=$('#stocks').parent().width();if(obj){stock_cols=Math.floor(obj/161);var padding=(obj- 158*stock_cols- 15)/ 2;$('#stocks').css("padding-left",padding+"px");}}
function web_login(){$.post('/web/login',str,function(data){if(data=='OK'){href=window.location.href;if(href1=href.substring(0,href.indexOf('#'))){href=href1;}
window.location.href=href;}else{alert(data);}});}
function setLoginTransparent(){if($('#login-form').size()){$login_form=$('#login-form');}else if($('#login-form2').size()){$login_form=$('#login-form2');}else{return false;}
$login_form.hover(function(){if(!login_form_opacity){login_form_opacity=true;}},function(){if(login_form_opacity&&!login_form_focus){login_form_opacity=false;}});}
function setSearchTransparent(){$search_form=$('#search-form');$search_form.hover(function(){if(!search_form_opacity){search_form_opacity=true;}},function(){if(search_form_opacity&&!search_form_focus){search_form_opacity=false;}});}
function trail(event){var windowHeight=$(window).height();var pointerX=event.pageX;var pointerY=event.pageY;var correctedY=pointerY- 150;var windowY=event.clientY;if(windowHeight<340){pointerX=-500;correctedY=-500;}else if(windowY+ 170>windowHeight){correctedY=correctedY-(windowY+ 170- windowHeight);}else if(windowY- 170<0){correctedY=correctedY-(windowY- 170)}
$('#previewBlock').css({'left':pointerX+ 30,'top':correctedY});}
function showPopup(){var preview=$('#previewBlock img');preview.parent().css('display','block');if(preview.width()>0&&preview.height()>0){var leftOffset=(300- preview.width())/ 2;var topOffset=(300- preview.height())/ 2;preview.css({'margin-left':leftOffset,'margin-top':topOffset}).parent().css({'visibility':'visible'});}}
function hidePopup(){preview_state='hide';$('#previewBlock').stop().css({display:'none',visibility:'hidden'});document.onmousemove="";}
$(document).ready(function(){$('[name=article-newsletter]').appendTo('.newsletter-container').show();$('[name=freebies-download]').appendTo('.freebies-container').show();});function previewLoad(previewSrc){$('#previewBlock img').stop().attr({src:'/images/login-loader.gif'}).css({display:'block',visibility:'visible'});preview_state='loading';img=new Image();$(img).load(function(){$(this).hide();if(preview_state=='loading'){$('#previewBlock img').attr({'src':previewSrc});preview_state='show';}else{hidePopup();}}).attr('src',previewSrc);document.onmousemove=followmousePreview;}
function extractSource(source){var articleSrc=source;articleSrc=articleSrc.substring(0,articleSrc.length- 5);var startArticleNum=articleSrc.lastIndexOf('.')+ 1;var endArticleNum=articleSrc.length;var articleNum=articleSrc.substring(startArticleNum,endArticleNum);var imageSrc='/img_articles/'+ articleNum+'/previewImage';return imageSrc;}
function catalog_redirect(base_url,params_level,params_items){$("#level").change(function(){document.location.href=base_url+'/page-1.html?level='+ $(this).val()+ params_level;});$("#page-num").change(function(){document.location.href=base_url+'/page-1.html?items='+ $(this).val()+ params_items;});}
jQuery(function(){set_clientwidth();$(window).resize(function(){set_clientwidth();});$('.block-category > div.content > div.collapsed > a').toggle(function(){$(this).parent('div.hasChildren').removeClass('collapsed').addClass('expanded').children('div.sub-menu').show();return false;},function(){$(this).parent('div.hasChildren').removeClass('expanded').addClass('collapsed').children('div.sub-menu').hide();return false;});$('.block-category > div.content > div.expanded > a').toggle(function(){$(this).parent('div.hasChildren').removeClass('expanded').addClass('collapsed').children('div.sub-menu').hide();return false;},function(){$(this).parent('div.hasChildren').removeClass('collapsed').addClass('expanded').children('div.sub-menu').show();return false;});$('.butenter').hover(function(){$(this).css({color:'#085d7e',background:'#fff'});},function(){$(this).css({color:'#fff',background:'#085d7e'});});$('form#register').submit(function(){$('form .required').each(function(){if($.trim($(this).val())==null){return false;}});if(!$('input[name=read]').attr('checked')){alert('You have not accepted "Copyright Notice"');return false;}});$('form #country').change(function(){if(($(this).val()!=1)&&($(this).val()!=40)){$('#state').val(0);}});$('form #state').change(function(){if(($('#country').val()!=1)&&($('#country').val()!=40)){$(this).val(0);}});unsubscribe=0;$("form#newsletter input[value=Unsubscribe]").click(function(){unsubscribe=1;$('form#newsletter').submit();});$('form#newsletter').submit(function(){if(unsubscribe){$('form#newsletter').find("input[name=act]").val('Unsubscribe');return true;}
var is_news=$('#news_daily').attr('checked')||$('#news_weekly').attr('checked');var is_tuts=$('#report_notify').attr('checked')||$('#report_weekly').attr('checked');if(is_tuts&&!$('.chkCat:checked').size()){alert('Please Choose Your Topics of Interest');return false;}else if(!is_tuts&&!is_news){alert('Please Choose Your Type of Subscription');return false;}
return true;});$('#forgot').live('click',function(e){e.preventDefault();$('#forgot_form').find('.label').show();$('#dialog').modal();$('#forgot_form').submit(function(){str={act:'forgot'};$(this).find('input').each(function(n,element){str[$(element).attr('name')]=$(element).val();});$.post('/forgot',str,function(data){if(data.status==1){$('form#forgot_form').find('.label').fadeOut();}
$('#dialog_message').fadeOut("slow",function(){$(this).text(data.message).fadeIn()});},"json");return false;});return false;});$('#logout').live('click',function(){$.post("/logout",{act:'logout'},function(data){href=window.location.href;if(href1=href.substring(0,href.indexOf('#'))){href=href1;}
window.location.href=href;});return false;});$('.rate_form a').click(function(){$rate_form=$(this).parent().parent();var id=$rate_form.find('input[name=id]').val();var type=$rate_form.find('input[name=type]').val();var value=$(this).text();$.post('/voting',{id:id,type:type,value:value,action:'rate'},function(data){$rate_form.fadeOut('fast',function(){$rate_form.prev().fadeIn('slow')});});});$("a").each(function(){if($(this).attr('href')){$(this).filter(function(){return $(this).attr('href').match(/http.*/);}).click(function(e){var href=$(this).attr('href');var needle='templatemonster.';var is_tm=href.indexOf(needle,0)>=0;if(is_tm){_gaq.push(['_trackPageview','/outbound/tm']);}else{_gaq.push(['_trackPageview','/outbound/'+ $(this).attr('href')]);}});}});search_form_opacity=login_form_opacity=false;search_form_focus=login_form_focus=false;setLoginTransparent();setSearchTransparent();$('#login-form input, #login-form a').live('focus',function(){login_form_focus=true;if(!login_form_opacity){login_form_opacity=true;}});$('#login-form input, #login-form a').live('blur',function(){login_form_focus=false;if(login_form_opacity){login_form_opacity=false;}});$('#search-keyword, #category, #b_search, #search-form a').live('focus',function(){search_form_focus=true;if(!search_form_opacity){search_form_opacity=true;}});$('#search-keyword, #category, #b_search, #search-form a').live('blur',function(){search_form_focus=false;if(search_form_opacity){search_form_opacity=false;}});var target=location.hash;if(target)$.scrollTo(target,1200);if($('#previewBlock').length==0){$('body').append('<div id="previewBlock" style="display:none;"><img src="" alt="" onload="showPopup()" /></div>');}
$('#previewBlock').mouseover(function(){hidePopup();});preview_state='hide';$('.block-today-added a.preview, .epicks a.preview, .catalog-item h2 a.preview, #random_block a.preview').hover(function(e){$('#previewBlock').css({'margin-top':0,'margin-left':0,'left':(e.pageX+ 10),'top':(e.pageY+ 10)});var articleSrc=$(this).attr('data-preview-src');previewLoad(articleSrc);},function(){hidePopup();});$('.catalog-item a.preview img').hover(function(){previewSrc=extractSource($(this).parent().attr('href'));previewLoad(previewSrc);},function(){hidePopup()});$('.catalog-item a.preview img, .epicks a.preview, #taText a.preview, .catalog-item h2 a.preview, #random_block a.preview').mousemove(function(event){trail(event);});if($.browser.msie&&$.browser.version.substr(0,1)<7){$('.catalog-item a.preview img:first').hover(function(){previewSrc=extractSource($(this).parent().attr('href'));previewLoad(previewSrc);$('select#level').css('visibility','hidden');},function(){$('select#level').css('visibility','visible');hidePopup();});$('.catalog-item h2 a.preview').hover(function(){previewSrc=extractSource($(this).attr('href'));previewLoad(previewSrc);},function(){hidePopup()});}});$('#freebies_download').click(function(){var file=$(this).attr('data-file');var url='/download.php?file=downloads/uploads/'+file;console.log(url);var mail=$('#freebies-email').val();var msg_block=$('.notice-block');$.ajax({url:'/aweber.php',type:'POST',data:{'subscriber_email':mail},beforeSend:function(){msg_block.addClass('text-preloader').removeClass('warning-message').text('Please wait. System verifies your email').show();},success:function(data){data=$.parseJSON(data);if(data.code===1||data.code===3){if(data.code===1){var msg='The download process has started! Please, take a minute';}else{var msg='Looks like you already subscribed. Wait a minute, the download process has started!';}
$.ajax({type:'GET',url:url,success:function(data){msg_block.removeClass('text-preloader');msg_block.text('');msg_block.html(msg);window.location=""+url+"";},error:function(xhr){console.log(xhr);}})}else if(data.code===2){msg_block.removeClass('text-preloader');msg_block.empty();msg_block.append('Attention! You have entered an invalid e-mail address.');}}});})
$('#newsletter_download_article').click(function(){var type=$('.content-newsletter').attr('data-type');switch(type){case'ebook':sendAjaxEbook();break;case'social':sendAjaxSocial();break;}
function sendAjaxEbook(){var $url='/download.php?file=downloads/Beginners_Guide_to_HTML.pdf';$.ajax({type:'GET',url:$url,success:function(data){if(data==true){alert('This file is not available for download.');}else{$('.err-block').append('<span style="color: #004400;"> The download process has started! Wait a minute, please. Check your email and confirm your subscriptions.</span>');window.location=""+$url+"";}}})};function sendAjaxSocial(){var $url='/download.php?file=downloads/social_template.zip';$.ajax({type:'GET',url:$url,success:function(data){if(data==true){alert('This file is not available for download.');}else{$('.err-block').append('<span style="color: #004400;"> The download process has started! Wait a minute, please. Check your email and confirm your subscriptions.</span>');window.location=""+$url+"";}}})}});function addSearchBar(){if($.browser.msie||$.browser.mozilla){if($.browser.msie&&$.browser.version.substr(0,1)<7){alert("Your browser doesn't support the search bar plugin. Please upgrade your browser to Internet Explorer 7+ to use the plugin.");}else if($.browser.mozilla&&($.browser.mozilla&&$.browser.version.substr(0,3)<"1.9")){alert("Your browser doesn't support the search bar plugin. Please upgrade your browser to Firefox 2.0+ to use the plugin.");}else{if($.browser.msie&&$.browser.version.substr(0,1)==7)window.external.AddSearchProvider('http://www.webdesign.org/search_ie7.xml');else window.external.AddSearchProvider('http://www.webdesign.org/search.xml');}}
return false;}
$(function(){if(($.browser.msie&&$.browser.version.substr(0,1)>=7)||($.browser.mozilla&&$.browser.version.substr(0,3)>="1.9")){$('#search_bar').show();}
$('#search_bar').live('click',function(){return addSearchBar();});});var LettSub=$('#letter-form #ns-subscrb');var ButtColl=$('#letter-form .button-column');var SubText=$('#letter-form #subscrb-mail');var EmailColl=$('#letter-form .email-column');var LetterForm=$('#letter-form form');var BlockError=$('#letter-form .content .err-block');var RegEmail=/([a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]+[\.]{0,1}[a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]+\@[a-zA-Z0-9]+[\.a-zA-Z]+)/;LetterForm.on('submit',function(){BlockError.hide();$.ajax({url:'/aweber.php',type:'POST',data:{'subscriber_email':SubText.val()},beforeSend:function(){BlockError.addClass('text-preloader').removeClass('warning-message').text('Please wait. System verifies your email').show();},success:function(data){data=$.parseJSON(data);if(data.code===1){BlockError.addClass('success-message').removeClass('text-preloader').removeClass('warning-message').text(data.message).show();SubText.val('').addClass('black');ButtColl.hide();EmailColl.hide();}else{BlockError.addClass('warning-message').removeClass('text-preloader').removeClass('success-message').text(data.message).show();}}});return false;});var LettSub2=$('.content-newsletter .button-column input');var ButtColl2=$('.content-newsletter .button-column');var SubText2=$('.content-newsletter .email-column input');var EmailColl2=$('.content-newsletter .email-column');var LetterForm2=$('.content-newsletter form');var BlockError2=$('.content-newsletter .content .err-block');var RegEmail2=/([a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]+[\.]{0,1}[a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]+\@[a-zA-Z0-9]+[\.a-zA-Z]+)/;LetterForm2.on('submit',function(){BlockError2.hide();$.ajax({url:'/aweber.php',type:'POST',data:{'subscriber_email':SubText2.val()},beforeSend:function(){BlockError2.addClass('text-preloader').removeClass('warning-message').text('Please wait. System verifies your email').show();},success:function(data){data=$.parseJSON(data);if(data.code===1){BlockError2.addClass('success-message').removeClass('text-preloader').removeClass('warning-message').text(data.message).show();SubText2.val('').addClass('black');ButtColl2.hide();EmailColl2.hide();}else{BlockError2.addClass('warning-message').removeClass('text-preloader').removeClass('success-message').text(data.message).show();}}});return false;});$(document).ready(function(){var input=$('#lb-dialog #subscrb-mail');input.focus(function(){if(input.val()=='E-mail address'){input.val('');}
input.css({'color':'#000000'});});input.blur(function(){if(input.val()==''){input.css({'color':'#999999'});input.val('E-mail address');}});var nid=$('.form-content #n_id'),nname=$('.form-content #n_name'),ntitle=$('.form-content #n_title'),ndescription=$('.form-content #n_description'),nparent=$('.form-content #n_parent'),nalias=$('.form-content #n_alias'),nmeta=$('.form-content #n_meta'),ncontent=$('.form-content #n_content'),nurl=$('.form-content #n_url');$(document).on('click','.npage-link',function(){var id=$(this).attr('data-id');$.ajax({url:'/admin/loadPageInfo',type:'POST',dataType:'json',data:{'id':id},success:function(data){nid.val(data.id);nname.val(data.name);ntitle.val(data.title);ndescription.val(data.description);nparent.val(data.parent);nalias.val(data.alias);nmeta.val(data.meta_keywords);ncontent.val(data.content);nurl.val(data.url);},error:function(xhr){console.log(xhr);}});}).click();$(document).on('click','#newsletter_download',function(){var email=$('#lb-dialog #subscrb-mail').val();var type=$('#lb-dialog #letter-form').attr('data-type');switch(type){case'standart':sendAjaxStandart();break;case'ebook':sendAjaxEbook();break;case'social':sendAjaxSocial();break;}
function sendAjaxStandart(){if(email.length!=0&&email!='E-mail address'){$.ajax({url:'/aweber.php',type:'POST',data:{'subscriber_email':email},beforeSend:function(){var content='<div class="text text-preloader">Please wait. System verifies your email.</div>';content+='<div class="pic"></div>';$('#lb-dialog #letter-form .content').html(content);},success:function(data){data=$.parseJSON(data);if(data.code==1){var content='<div class="text-heading">Thank You!</div>';content+='<div class="text">'+ data.message+'</div>';content+='<div class="pic"></div>';$('#lb-dialog #letter-form .content').html(content);}
else if(data.code==2){var content='<div class="text text-warning">'+ data.message+'</div>';content+='<div class="pic"></div>';$('#lb-dialog #letter-form .content').html(content);}
else if(data.code==3){var content='<div class="text text-notice">'+ data.message+'</div>';content+='<div class="pic"></div>';$('#lb-dialog #letter-form .content').html(content);}else{console.log(data);$('#lb-dialog #letter-form .content .err-block').text(data.message).css({'display':'block'});}}});}}
function sendAjaxEbook(){if(email.length!=0&&email!='E-mail address'){$.ajax({url:'/aweber.php',type:'POST',data:{'subscriber_email':email},beforeSend:function(){var content='<div class="text ebook-text-preloader">Please wait. System verifies your email.</div>';content+='<div class="img_wrapper loader_img_wrapper">';content+='</div>';$('#lb-dialog #letter-form .content').html(content);},success:function(data){data=$.parseJSON(data);if(data.code==1){var $url='/download.php?file=downloads/Beginners_Guide_to_HTML.pdf';$.ajax({type:'GET',url:$url,success:function(data){if(data==true){alert('This file is not available for download.');}else{window.location=""+$url+"";}}})
content='<div class="success-text text">The download process has started! You might have noticed you signed up for something with your email. Don’t fret, we do not spam! We’ll only send you some freebies and other valuable stuff once in a while.</div>';$('#lb-dialog #letter-form .content').html(content);}
else if(data.code==2){var content='<div class="text text-warning">'+ data.message+'</div>';$('#lb-dialog #letter-form .content').html(content);}else if(data.code==3){var $url='/download.php?file=downloads/Beginners_Guide_to_HTML.pdf';$.ajax({type:'GET',url:$url,success:function(data){if(data==true){alert('This file is not available for download.');}else{window.location=""+$url+"";}}})
content='<div class="success-text text">The download process has started!</div>';$('#lb-dialog #letter-form .content').html(content);}else{console.log(data);$('#lb-dialog #letter-form .content .err-block').text(data.message).css({'display':'block'});}}});}}
function sendAjaxSocial(){if(email.length!=0&&email!='E-mail address'){$.ajax({url:'/aweber.php',type:'POST',data:{'subscriber_email':email},beforeSend:function(){var content='<div class="text social-text-preloader">Please wait. System verifies your email.</div>';content+='<div class="img_wrapper loader_img_wrapper">';content+='</div>';$('#lb-dialog #letter-form .content').html(content);},success:function(data){data=$.parseJSON(data);if(data.code==1){var $url='/download.php?file=downloads/social_template.zip';$.ajax({type:'GET',url:$url,success:function(data){if(data==true){alert('This file is not available for download.');}else{window.location=""+$url+"";}}})
content='<div class="success-text text">The download process has started! You might have noticed you signed up for something with your email. Don’t fret, we do not spam! We’ll only send you some freebies and other valuable stuff once in a while.</div>';$('#lb-dialog #letter-form .content').html(content);}
else if(data.code==2){var content='<div class="text text-warning">'+ data.message+'</div>';content+='<div class="success-text text">The download process has started!</div>';$('#lb-dialog #letter-form .content').html(content);}
else if(data.code==3){var $url='/download.php?file=downloads/social_template.zip';$.ajax({type:'GET',url:$url,success:function(data){if(data==true){alert('This file is not available for download.');}else{window.location=""+$url+"";}}})
content='<div class="success-text text">The download process has started!</div>';content+='<div class="text">Awesome WP Theme Social Optimized</div>';$('#lb-dialog #letter-form .content').html(content);}else{console.log(data);$('#lb-dialog #letter-form .content err-block').text(data.message).css({'display':'block'});}}});}}}).click();});$(document).on('click','#form101',function(){var email=$('#letter-form #subscrb-mail').val();var type=$('#letter-form').attr('data-type');var url=null;if(email.length!=0&&email!=' Your E-mail Here'){if(type=='freebies'){url='/aweber_freebies.php';}else if(type=='standart'){url='/aweber.php';}else{url='/aweber.php';}
$.ajax({url:url,type:'POST',data:{'subscriber_email':email},beforeSend:function(){var content='<div class="text text-preloader">Please wait. System verifies your email.</div>';},success:function(data){data=$.parseJSON(data);if(data.code==1){var content='<div class="text-heading">Thank You!</div>';content+='<div class="text">'+ data.message+'</div>';content+='<div class="pic"></div>';$('#letter-form .content .err-block').html(content);}
else if(data.code==2){var content='<div class="text text-warning">'+ data.message+'</div>';content+='<div class="pic"></div>';$('#letter-form .content .err-block').html(content);}
else if(data.code==3){var content='<div class="text text-notice">'+ data.message+'</div>';content+='<div class="pic"></div>';$('#letter-form .content .err-block').html(content);}else{console.log(data);$('#letter-form .content .err-block').text(data.message).css({'display':'block'});}}});}});SubText.focus(function(){if($(this).val()===' Your E-mail Here'){$(this).val('').addClass('blackout');}});SubText.blur(function(){if($(this).val()==''){$(this).val(' Your E-mail Here').addClass('noblackout');}});$('#all').hide();$('#all').click(function(){$('#all').hide();$('#search-soft-form').fadeOut();});$('#all_cat').hide();$('#all_cat').click(function(){$('#all_cat').hide();$('#search-cat-form').fadeOut();});function close_all(){$('#all_cat').hide();$('#search-cat-form').fadeOut();};$('#cate').change(function(){$('.sort').submit();});$('#license').change(function(){$('.sort').submit();});$('#show_form select').change(function(){$('#show_form').submit();});function ayl_focus(id,value){if($('#'+ id).val()==value){$('#'+ id).val('').css({'color':'#000'});}}
function ayl_blur(id,value){if($('#'+ id).val()==''){$('#'+ id).val(value).css({'color':'#ccc'});}}
function chekdesc(Val){var l=200;if($('#description').val()!='Description text'){var val=$('#description').val();l=l- val.length;if(l<0){$('#description').val($('#description').val().substr(0,200));l=0;}}
$('#char_left').text(l);if(Val==1){setTimeout(function(){chekdesc(1);},100)}else{return false;}}
if($('#description').length>0){chekdesc(1);}
$('#post_resources div div:first').css('border-right','none');$('#write_letter_form').submit(function(){return false;});$('#write_letter').click(function(){alert('her');});if($('.adv_search_popup')){var newWidth=$(window).width()/ 2 - $('.adv_search_popup').width() / 2;$('.adv_search_popup').css('left',newWidth);}
$('#taText .add_one').last().removeClass().addClass('add_one_no');$(document).ready(function(){$('#tab_left').on('click','.close',function(){$('#tab_left .block-category').slideDown(500);$(this).removeClass('close').addClass('open')});$('#tab_left').on('click','.open',function(){$('#tab_left .block-category').slideUp(500);$(this).removeClass('open').addClass('close')});if($('.divider-border')){$('center h2').hide();}
var main_block=$('#tab_center').height();if(main_block<2080){$('.karetka').addClass('normal-view');}
$(window).scroll(function(){var var_window=$(window);var var_header=$('#tab_left .tmp');var var_slider=$('.karetka');var var_footer=$('.footer');var padding=10;if(var_window.scrollTop()<=var_header.offset().top+ var_header.height()){var_slider.css({'position':'relative','top':'0px'});}else{if((var_window.scrollTop()+ var_window.height())<var_footer.offset().top){var_slider.css({'position':'fixed','top':padding+'px','margin-top':0});}else{if((var_footer.offset().top- var_window.scrollTop()- 2*padding)>=var_slider.height()){var_slider.css({'position':'fixed','top':padding+'px','margin-top':0});}else{var_slider.css({'position':'fixed','top':0+'px','margin-top':(var_footer.offset().top- var_slider.height()- padding- var_window.scrollTop())+'px'});}}}});});function followmousePreview(e){var currentScreenBaseX=$(document).scrollLeft();var currentScreenBaseY=$(document).scrollTop();var xCoordMin=currentScreenBaseX+ 20;var xCoordMax=currentScreenBaseX+ $(window).width()- 20;var yCoordMin=currentScreenBaseY+ 20;var yCoordMax=currentScreenBaseY+ $(window).height()- 20;var containerW=$('#previewBlock').width()+ 30;var containerH=$('#previewBlock').height()+ 20;if(!e)var e=window.event;if(e.pageX||e.pageY){var cursorX=e.pageX;var cursorY=e.pageY;}else if(e.clientX||e.clientY){var cursorX=e.clientX+ document.body.scrollLeft+ document.documentElement.scrollLeft;var cursorY=e.clientY+ document.body.scrollTop+ document.documentElement.scrollTop;}
if((containerW+ offsetfrommouse[0])<(xCoordMax- cursorX)){var containerX=cursorX+ offsetfrommouse[0];}else{if((containerW+ offsetfrommouse[0])<(cursorX- xCoordMin)){var containerX=cursorX- containerW- offsetfrommouse[0];}else{var containerX=xCoordMax- containerW;}}
if((containerH+ offsetfrommouse[1])<(yCoordMax- cursorY)){var containerY=cursorY+ offsetfrommouse[1];}else{if((containerH+ offsetfrommouse[1])<(cursorY- yCoordMin)){var containerY=cursorY- containerH- offsetfrommouse[1];}else{var containerY=yCoordMax- containerH;}}
$('#previewBlock').css({'left':containerX,'top':containerY});var iOS=false,p=navigator.platform;if(p==='iPad'||p==='iPhone'||p==='iPod'){iOS=true;}
if(navigator.userAgent.indexOf('Safari')!=-1&&navigator.userAgent.indexOf('Chrome')==-1){var correct_width=$('.block-search').width()- 81+'px';$('.category').css('width',correct_width);}
if(iOS){var correct_width=$('.block-search').width()- 81+'px';$('.category').css('width',correct_width);}}
function wdlIsValidEmail(email){var emailRegex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return emailRegex.test(email);}
jQuery(document).ready(function($){if(typeof window.livechat_script_loaded!=='undefined')return;window.livechat_script_loaded=true;if(typeof wdl==='undefined')return;wdl.overlay=wdl.overlay&&wdl.overlay=='1'?true:false;wdl.blink_period=parseInt(wdl.blink_period);wdl.blink_frequency=parseInt(wdl.blink_frequency);wdl.blink_count=parseInt(wdl.blink_count);var bodyEl=$('body'),liveChatEl=$('.livechat'),liveChatCloseEl=$('.chat-close'),chatBtnCloseEl=$('.chat-btn-close'),chatHeaderEl=$('.chat-close .chat-header'),blinkInterval,isLiveChatOpened=false;var wdlCenterLiveChat=function(manual){if(liveChatEl.is(':visible')){if(!manual||wdl.float==='center'||$(window).width()<=435){liveChatEl.css({'bottom':'inherit','right':'inherit'});liveChatEl.css({'top':($(window).height()/ 2 - liveChatEl.height() / 2) + "px",'left':($(window).width()/ 2 - liveChatEl.width() / 2) + "px"});}else{liveChatEl.css({'top':'','left':'','bottom':'','right':''});}}};var wdlLiveChatOpen=function(manual){isLiveChatOpened=true;manual=typeof manual==='undefined'?false:manual;if(!manual&&wdl.overlay){bodyEl.addClass('live-chat-overlay');}
wdlCenterLiveChat(manual);if(typeof blinkInterval!=='undefined'&&blinkInterval)clearInterval(blinkInterval);if($.cookie("wdl_blog_live_chat_opened")!=1){$.cookie("wdl_blog_live_chat_opened",1,{expires:1,path:'/'});}};var wdlLiveChatClose=function(){if(wdl.overlay)bodyEl.removeClass('live-chat-overlay');};if(typeof jQuery.ui!=='undefined'){liveChatEl.draggable({'start':function(){liveChatEl.css({'bottom':'inherit','right':'inherit'});}});}
chatHeaderEl.on('click',function(e,el,manual){e.preventDefault();manual=typeof manual==='undefined'?true:manual;liveChatCloseEl.css('display','none');liveChatEl.css('display','block');$(".chat-name").focus();wdlLiveChatOpen(manual);});chatBtnCloseEl.on('click',function(e){e.preventDefault();liveChatCloseEl.css('display','block');liveChatEl.css('display','none');wdlLiveChatClose();});var myForm=document.getElementById('chat-form');if(myForm){myForm.onsubmit=function(){var name=$(myForm).find('.chat-name').val(),email=$(myForm).find('.chat-mail').val(),referer=$(myForm).find('.chat-referer').val(),result=false;if(wdlIsValidEmail(email)){$(myForm).find('.chat-mail').css('border-color','');}else{$(myForm).find('.chat-mail').css('border-color','red');return false;}
$.ajax({url:'/livechat_action',data:{'referer':referer,'name':name,'email':email},type:'POST',dataType:'json',cache:false,async:false,success:function(data){if($.isPlainObject(data)&&data.status==1){$(myForm).attr('action',data.action);var chatWidth=805,chatHeight=675,snDef=(typeof screen!=='undefined'),chatLeft=snDef?((screen.width/2)-(chatWidth/2)):312,chatTop=snDef?((screen.height/2)-(chatHeight/2)):234;window.open('about:blank','Popup_Window','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width='+ chatWidth+',height='+ chatHeight+',left = '+ chatLeft+',top = '+ chatTop);myForm.target='Popup_Window';result=true;}},error:function(data,status){}});chatBtnCloseEl.trigger('click');return result;};}
if($.cookie("wdl_blog_live_chat")!=1){var lcSteps=$.cookie("wdl_blog_live_chat_steps")==null?1:$.cookie("wdl_blog_live_chat_steps");if(lcSteps>=(wdl.steps*1)){var liveChatT=setTimeout(function(){if(!isLiveChatOpened)chatHeaderEl.trigger('click',[chatHeaderEl,false]);$.cookie("wdl_blog_live_chat",1,{expires:wdl.period*1,path:'/'});clearTimeout(liveChatT);},wdl.open_time*1000);}}
if($.cookie("wdl_blog_live_chat_opened")!=1){if(wdl.blink_period&&wdl.blink_frequency&&wdl.blink_count){var blinkCount;blinkInterval=setInterval(function(){chatHeaderEl.addClass('live-chat-hover');blinkCount=0;var frequencyT=setInterval(function(){if(++blinkCount>=wdl.blink_count*2){chatHeaderEl.removeClass('live-chat-hover');clearTimeout(frequencyT);return;}
if(chatHeaderEl.hasClass('live-chat-hover')){chatHeaderEl.removeClass('live-chat-hover');}else{chatHeaderEl.addClass('live-chat-hover');}},wdl.blink_frequency);},wdl.blink_period*1000);}}});$('#mask').on('click',function(){$('#boxes').remove();})
$(document).on('change','#lb_type',function(){var str="";$("#lb_type option:selected").each(function(){str+=$(this).val();if(str=='page_lightbox'){$.ajax({url:'/admin/load_cat',type:'POST',dataType:'json',success:function(data){var content='<td><label for="lb_pages">Pages:</label></td><td><select multiple="multiple" size="3" name="lb_pages[]" id="lb_pages">';$.each(data,function(){content+='<option value='+this.id+'>'+this.name+'</option>';$.each(this.node,function(k,v){content+='<option class="cat-child" value='+k+'>&nbsp;&nbsp;'+v+'</option>';})});content+='</select></td>';$(".pages").html(content);},error:function(xhr){console.log(xhr);}});}else if(str=='click_lightbox'){$('.pages').children().remove();}});}).change();$(document).on('click','#add_new',function(){var content='<form action="" enctype="multipart/form-data" method="post" style="width:900px;">';content+='<fieldset><b><legend>Lightbox</legend></b>';content+='<table><tr><td><label for="lb_type">Lightbox type:</label></td>';content+='<td><select class="lightbox-type-chooser" id="lb_type" name="lb_type">';content+='<option value="click_lightbox">Lightbox after click</option>';content+='<option value="page_lightbox">Lightbox on pages</option></select></td></tr>';content+='<tr class="pages"></tr>';content+='<tr><td><label for="lb_header">Header:</label></td>';content+='<td><input style="width:366px;" type="text" name="lb_header" id="lb_header" value="" /></td>';content+='</tr> <tr><td><label for="lb_content">Content:</label></td>';content+='<td><textarea style="width:366px;height:300px" name="lb_content" id="lb_content"></textarea></td>';content+='</tr><tr><td><label for="lb_footer">Footer:</label></td>';content+='<td> <input style="width:366px;" type="text" name="lb_footer" id="lb_footer" value="" /></td></tr>';content+='<tr><td></td><td><input type="submit" name="add_button" value="Add this lightbox" id="add"></td></tr>';content+='<input type="hidden" name="lb_color" value="ffffff"><input type="hidden" name="lb_bgcolor" value="3b5998"></tr></table></fieldset></form>';$('.main-lightbox-content').html(content);});if('.ui-widget-overlay'){}
$(document).on('click','#lb-close',function(){$('body').css('overflow-y','scroll');})
$(document).on('change','#lb_newsletter',function(){var type='';var content='';var container=$(this).parent('td').parent('tr').prev('tr').prev('tr').children('td').children('textarea');$('#lb_newsletter option:selected').each(function(){type+=$(this).val();console.log(type);if(type=='none'){content='';}else if(type=='standart'){content='<div class="block-subscribe" id="letter-form" data-type="standart">';content+='<div class="inner">';content+='<div class="heading">subscribe to newsletter</div>';content+='<div class="content">';content+='<div class="email-column">';content+='<input type="text" id="subscrb-mail" name="email" placeholder="E-mail address" value="">';content+='</div>';content+='<div class="button-column">';content+='<input type="submit" id="ns-subscrb newsletter_download" value="">';content+='</div>';content+='<div class="err-block"></div>';content+='</div>';content+='</div>    ';content+='</div>';}else if(type=='ebook'){content='<div data-type="ebook" id="letter-form" class="block-subscribe content-newsletter form_banner2">';content+='<div class="img_wrapper">';content+='<img alt="" src="/images/img2.png">';content+='</div>';content+='<div class="inner">';content+='<div class="heading">Get Our Free Ebook <span>Beginners Guide to HTML</span></div>';content+='<div class="content">';content+='<div class="email-column">';content+='<input type="text" id="subscrb-mail" name="email" placeholder="E-mail address" value=""/>';content+='</div>';content+='<div class="button-column">';content+='<input id="newsletter_download" type="submit" value="Download" />';content+='</div>';content+='<div class="err-block"></div>';content+='</div>';content+='</div>';content+='</div>';}else if(type=='social'){content='<div id="letter-form" data-type="social" class="block-subscribe content-newsletter form_banner4">';content+='<div class="img_wrapper">';content+='</div>';content+='<div class="inner">';content+='<div class="heading">Get Our Free  <span>Social Template</span></div>';content+='<div class="content">';content+='<div class="text">Awesome WP Theme Social Optimized </div>';content+='<div class="email-column">';content+='<input type="text" id="subscrb-mail" name="email" placeholder="E-mail address" value=""/>';content+='</div>';content+='<div class="button-column">';content+='<input id="newsletter_download" type="submit" value="Download" />';content+='</div>';content+='<div class="err-block"></div>';content+='</div>';content+='</div>';content+='</div>';}});container.val(container.val()+content);}).change();$(document).on('click','.showcase_like',function(){var showcaseId=$(this).data('showcase-id');$.post('/showcase_like_action',{'showcaseId':showcaseId},function(data){console.log(data);if(data.id){var $showcase=$('.showcase_like[data-showcase-id="'+ data.id+'"]');console.log($.cookie('showcase_likes'));$showcase.find('.result').text(data.likes);if($showcase.hasClass('active')){$showcase.removeClass('active');}else{$showcase.addClass('active');}}},'json');});