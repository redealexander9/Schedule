

let dayOfWeek = Date().substring(3, 0);
let classDay;
let timeHour = Date().substring(16, 18);
let timeMinute = Date().substring(19, 21);
let timeOfDay;
let classAct;
if(timeHour > 12){
    timeOfDay = 'AM';
    timeHour = timeHour - 12;
}
else{
    timeOfDay = 'PM';
}
switch(dayOfWeek){
    case 'Mon': 
    case 'Wed':
    case 'Fri':
        classDay = 'MWF';
        break;
    case 'Tue':
    case 'Thu':
        classDay = 'TR';
        break;
    default:
        classDay = 'none';  
        break;

}
if(classDay == 'MWF'){
    if(timeHour == 10 && timeMinute < 50){      // In GUI programming class
        classAct = 'GUI programming class';
    }

}