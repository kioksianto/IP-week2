function akanNameGenerator(){

let orientation = gender()
let dateOfBirth = birthday();
let dayOfWeek = dateOfBirth.getDay();

}
function getWeekName(weekNumber){
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
    return dayOfWeek [weekNumber];
}
function decideAkanName (male, female){
    let akanNameDataBase = {
        'male': { 'Sunday':Kwasi,'Monday':Kwadwo,'Tuesday':Kwabeka,'Wednesday':Kwaku,'Thursday':Yaw,'Friday':Kofi,'Saturday':Kwame},
        'female': { 'Sunday':Akosua,'Monday':Adwoa,'Tuesday':Abenaa,'Wednesday':Akua,'Thursday':Yaa,'Friday':Afua,'Saturday':Ama},
    };
    let akanName = akanNameDataBase [male][female];
    return akanName;

}
function finalmessage([akanName]){
    return {'message': 'Your Akan name is'+ akanName}
}
