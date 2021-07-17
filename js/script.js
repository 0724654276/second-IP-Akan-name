function getAkanName() {
    // declariaring variables
    var day = document.getElementById("day").Value;
    var dd = parseInt(day);
    var month = document.getElementById("month").Value;
    var mm = parseInt(month);
    var year = document.getElementById("year").Value;
    var yy = parseInt(year);
    var cc =Math.ceil(year / 100)
    // using the formulae
    //d = Day of the week
    var d = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
    // validating input form
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (document.getElementById("gender").checked) {
      var gender = 'male';
    }
    else {
      var gender = 'female';
    }
    if (dd <= 0 || dd > 31) {
      alert("invalid date");
    }
    else if (mm <= 0 || mm > 12) {
      alert("invalid month");
    }
    else if (mm == 2||dd > 29) {
        alert("invalid date of the month");
    }
    /*determining the date of the week and their respective akan names*/ 
    else if (Math.round(d) == 0 && gender === 'male') {
        document.getElementById("final").innerHTML = ("You were born on Sunday, your Akan Name is " + maleNames[0]);
      }
      else if (Math.round(d) == 1 || Math.round(d) == -1 && gender === 'male') {
        document.getElementById("final").innerHTML = ("You were born on Monday, your Akan Name is " + maleNames[1]);
      }
      else if (Math.round(d) == 2 || Math.round(d) == -2 && gender === 'male') {
        document.getElementById("final").innerHTML = ("You were born on Tuesday, your Akan Name is " + maleNames[2]);
      }
      else if (Math.round(d) == 3 || Math.round(d) == -3 && gender === 'male') {
        document.getElementById("final").innerHTML = ("You were born on Wednesday, your Akan Name is " + maleNames[3]);
      }
      else if (Math.round(d) == 4 || Math.round(d) == -4 && gender === 'male') {
        document.getElementById("final").innerHTML = ("You were born on Thursday, your Akan Name is " + maleNames[4]);
      }
      else if (Math.round(d) == 5 || Math.round(d) == -5 && gender === 'male') {
        document.getElementById("final").innerHTML = ("You were born on Friday, your Akan Name is " + maleNames[5]);
      }
      else if (Math.round(d) == 6 || Math.round(d) == -6 && gender === 'male') {
        document.getElementById("final").innerHTML = ("You were born on Saturday, your Akan Name is " + maleNames[6]);
      }
      else if (Math.round(d) == 0 && gender === 'female') {
        document.getElementById("final").innerHTML = ("You were born on Sunday, your Akan name is " + femaleNames[0]);
      }
      else if (Math.round(d) == 1 || Math.round(d) == -1 && gender === 'female') {
        document.getElementById("final").innerHTML = ("You were born on Monday, your Akan Name is " + femaleNames[1]);
      }
      else if (Math.round(d) == 2 || Math.round(d) == -2 && gender === 'female') {
        document.getElementById("final").innerHTML = ("You were born on Tuesday, your Akan Name is " + femaleNames[2]);
      }
      else if (Math.round(d) == 3 || Math.round(d) == -3 && gender === 'female') {
        document.getElementById("final").innerHTML = ("You were born on Wednesday, your Akan Name is " + femaleNames[3]);
      }
      else if (Math.round(d) == 4 || Math.round(d) == -4 && gender === 'female') {
        document.getElementById("final").innerHTML = ("You were born on Thursday, your Akan Name is " + femaleNames[4]);
      }
      else if (Math.round(d) == 5 || Math.round(d) == -5 && gender === 'female') {
        document.getElementById("final").innerHTML = ("You were born on Friday, your Akan Name is " + femaleNames[5]);
      }
      else if (Math.round(d) == 6 || Math.round(d) == -6 && gender === 'female') {
        document.getElementById("final").innerHTML = ("You were born on Saturday, your Akan Name is " + femaleNames[6]);
      }
      else {
          alert("please input all data");
    }
      
  }

