
jQuery('form.webform-client-form input').keypress(
function (event){ 
var x =0;
var item = event.target.form;
if(event.keyCode == 13){
for(x;x<event.target.form.length;x++){
    if(item[x].id===event.target.id){
        console.log("Found it")
        event.target = item[x+1]
        document.getElementById(event.target.id).focus()
        break;
    }
}}
return event.keyCode == 13 ? false : true;
 });
