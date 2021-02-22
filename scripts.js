<<<<<<< HEAD
function akanNameGenerator(){

let orientation = gender()
let dateOfBirth = birthday();
let dayOfWeek = dateOfBirth.getDay();

}
=======
lets


let dateOfBirth = new Date();
let dayOfWeek = dateOfBirth.getDay();

>>>>>>> 2a651f109660f806158ccd07cb2fdc51d443e6c6
function getWeekName(weekNumber){
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
    return dayOfWeek [weekNumber];
}
<<<<<<< HEAD
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
=======
>>>>>>> 2a651f109660f806158ccd07cb2fdc51d443e6c6
