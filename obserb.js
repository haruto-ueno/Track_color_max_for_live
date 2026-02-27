autowatch = 1;
outlets = 1;


var shared= new Global("current_button");
var last_value = 1;


var monitor_task = new Task(function() {
    var current_value = shared.current_button;


    if (current_value !== last_value) {
        
        last_value = current_value;
        
        outlet(0, 1);//send flag
    
    }
}, this);

monitor_task.interval = 30; 

function notify_deleted() {
    monitor_task.cancel();
}
function loadbang() {
    monitor_task.repeat();
}
function interval(ms) {
    monitor_task.interval = ms;
}