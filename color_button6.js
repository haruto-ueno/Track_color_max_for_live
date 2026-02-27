autowatch = 1;
var menu=null;
mgraphics.init();
mgraphics.relative_coords = 0; 
mgraphics.autofill = 0;
var BG_R=0.639;
var BG_G=0.294;
var BG_B=0.678;
var color_index=67;
var shared= new Global("current_button");


function load_bang(){
    mgraphics.redraw();
}
function list(index,R,G,B){
    if (shared.current_button===6){
        BG_R=R;
        BG_G=G;
        BG_B=B;
        color_index=index;
        mgraphics.redraw();
    }


}
function paint() {
    var w = this.box.rect[2] - this.box.rect[0];
    var h = this.box.rect[3] - this.box.rect[1];

   
    mgraphics.set_source_rgba(BG_R,BG_G,BG_B, 1);
    mgraphics.paint();
    if (shared.current_button===6){
        var line_thickness = 3;
        var half_line = line_thickness / 2;
        
    
        mgraphics.set_source_rgba(1, 1, 1, 1); // 白
        mgraphics.set_line_width(line_thickness);
        
        
        mgraphics.rectangle(
            half_line,
            half_line,
            w - line_thickness,
            h - line_thickness
        );
        mgraphics.stroke();
    }
}

function onclick(){
    shared.current_button=6;
    mgraphics.redraw();
}

function msg_float(flag){
    //post("recieve_flag");
    mgraphics.redraw();
}

function bang(){
    outlet(0,color_index,BG_R,BG_G,BG_B);
}

function onresize(w,h) {
    mgraphics.redraw();
}