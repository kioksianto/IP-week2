
//Gender function

function getGender(){
    var genders = document.getElementsByName("gender");
    if(genders[0].checked == true){
        var gender = "male";
    }
    else if(genders[1].checked == true){
        var gender = "female";
    }
  
    //Birthday
    
    let dateOfBirth = document.getElementsByName("birthday")();
    let weekNumber = dateOfBirth.getDay();
    
    //Array list
    
    function getWeekName(weekNumber){
        var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
        return dayOfWeek [weekNumber];
        
    }
    //Getting the Akan name
    
    function decideAkanName (male, female){
        let akanNameDataBase = {
            'male': { 'Sunday':Kwasi,'Monday':Kwadwo,'Tuesday':Kwabeka,'Wednesday':Kwaku,'Thursday':Yaw,'Friday':Kofi,'Saturday':Kwame},
            'female': { 'Sunday':Akosua,'Monday':Adwoa,'Tuesday':Abenaa,'Wednesday':Akua,'Thursday':Yaa,'Friday':Afua,'Saturday':Ama},
        };
        let akanName = akanNameDataBase [male][female];
        return akanName;
    
    }
    //Final Message
    
    function myText() {
        var finalMessage = 'Your Akan name is'+ ' ' + akanName;
        alert (finalMessage);
      }