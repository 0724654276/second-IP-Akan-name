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
    







}