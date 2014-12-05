/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function changeColor(){
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDay();
    var date = d.getDate();
    var hour = d.getHours();
    var result = checkMonthHour(month,day,date,hour);
    var status = getStatus(result.color);
    document.getElementById("boxColor").style.backgroundColor = result.color;
    document.getElementById("status").innerHTML = status;
    document.getElementById("peakEnd").innerHTML = result.endTime;
}

function isWeekend(day){
    return day == 0 || day ==6;
}

function checkMonthHour(month,day,date,hour){               
    var color;
    var endTime;
    //between march 9 and april 5 OR November 1 - December 31
    if((month == 2 && date >= 9) || (month == 3 && date <= 5) || (month >= 10)) { 
        if(!isWeekend(day)) {
            if(hour >= 18 && hour < 21) {
                color = "yellow";
                endTime = "9:00pm";
            } else {
                color = "green";
                if(hour < 18) { 
                    endTime = "6:00pm";
                } else if(hour >= 21) {
                    if(day == 5) {
                        endTime = "6:00pm next Monday"
                    } else {
                        endTime = "6:00pm Tomorrow";
                    }
                }
            }
        } else {
            color = "green";
            endTime = "6:00pm Monday";
        }
    }
    
    //april 6-april 30
    if((month == 3 && date >=6)) {
        if(!isWeekend(day)) {
            if(hour >= 17 && hour<20){
                color = "yellow";
                endTime = "8:00 pm";
            } else {
                color = "green";
                if(hour < 17) { 
                    endTime = "5:00pm";
                } else if(hour >= 20) {
                    if(day == 5) {
                        endTime = "5:00pm next Monday"
                    } else {
                        endTime = "5:00pm Tomorrow";
                    }
                }
            }
        } else{
            color = "green";
            endTime = "5:00pm Monday";
        }    
    }
    
    // may 1 - october 25
    if((month >= 4 && month <9) || (month==9 && date <= 25)){
        if(!isWeekend(day)) {
            if(hour >= 13 && hour<19){
                color = "red";
                endTime = "7:00pm"
            } else if(hour >= 10 && hour < 13){
                color = "yellow";
                endTime = "1:00pm";
            } else if(hour >= 19 && hour < 21) {
                color = "yellow";
                endTime = "9:00pm";
            } else {
                color = "green";
                if(day != 5) {
                    endTime = "10:00am";
                } else {
                    if(hour < 10) {
                        endTime = "10:00am";
                    } else {
                        endTime = "5:00pm Tomorrow";
                    }
                }
            }
        } else {
            if((hour >= 17 && hour<20)){
                color = "yellow";
                endTime = "8:00pm";
            } else {
                color = "green";
                if(hour < 17) {
                    endTime = "5:00pm";
                } else {
                    if(day == 0) {
                        endTime = "10:00am Tomorrow";
                    } else {
                        endTime = "5:00pm Tomorrow";
                    }
                }
            }
        }
    }
    
    //october 26-31
    if((month == 9 && date >=26)){
                if(!isWeekend(day)) {
            if(hour >= 14 && hour<20){
                color = "red";
                endTime = "8:00pm"
            } else if(hour >= 11 && hour < 14){
                color = "yellow";
                endTime = "2:00pm";
            } else if(hour >= 20 && hour < 22) {
                color = "yellow";
                endTime = "10:00pm";
            } else {
                color = "green";
                if(day != 5) {
                    endTime = "11:00am";
                } else {
                    if(hour < 11)
                    {
                        endTime = "11:00am"
                    } else {
                        endTime = "6:00pm Tomorrow";
                    }
                }
            }
        } else {
            if((hour >= 18 && hour<21)){
                color = "yellow";
                endTime = "9:00pm";
            } else {
                color = "green";
                if(hour < 18) {
                    endTime = "6:00pm";
                } else {
                    if(day == 0) {
                        endTime = "11:00am Tomorrow";
                    } else {
                        endTime = "6:00pm Tomorrow";
                    }
                }
            }
        }
    }
    
    return {color:color,endTime:endTime};
}

function getStatus(color){
    var status;
    if(color == "green"){
        status = "Off-Peak (Ok to use electricity).";
    }
    else if (color == "red"){
        status = "On-Peak (Try to conserve electricity).";
    }
    else{
        status = "Partial Peak";
    }
    return status;
}
