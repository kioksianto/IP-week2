lets


let dateOfBirth = new Date();
let dayOfWeek = dateOfBirth.getDay();

function getWeekName(weekNumber){
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
    return dayOfWeek [weekNumber];
}
