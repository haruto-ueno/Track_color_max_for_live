autowatch = 1;
var api = null;
var txt="";
var tnacks= new Global("TrackNameAndColorKeyshort");
tnacks.flag=0;



function text(textString) {
    
    if (typeof textString != "undefined") {
    txt=textString;
    //post("Received string: " + textString); 
    }
}

function bang() {
    try{
        if(tnacks.flag==1){
            return;
        }
        tnacks.flag=1;
        var track =new LiveAPI("live_set view selected_track");
       
        if(txt===""){
            return;
        }
        track.set("name",txt);
    }catch(e){
        post("unexpected error"+e+"\n");
    }finally{
        tnacks.flag=0;
    }
}
