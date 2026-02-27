autowatch = 1;
var select=0;

function msg_float(number){
    select=number;


}
function bang(){
    if (select===1){
    max.launchbrowser("https://arplugz.booth.pm/");
    }else if (select===2){
        max.launchbrowser("https://soundcloud.com/ara_araur")
    }else if(select===3){
        max.launchbrowser("https://www.youtube.com/@AraAra-n8s");

    }else{
        return;
    }
}