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
    var dayOFweek(d) = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
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






}