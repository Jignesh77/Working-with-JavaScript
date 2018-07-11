var jk = function (){
    var a = document.myForm.user.value;
    if(a==""){
        alert("Field can't be Empty");
        document.myForm.user.focus();
        return false;
    }
    else{
        alert("Successfully Entered");
    }
    var b = document.myForm.num.value;
    if(b==""||isNaN(b)||b>10||b<3){
        alert("Please Enter Proper Moblie Number");
        document.myForm.num.focus();
        return false;
    }
    else{
        alert("Number is correct");
    }
    var c = document.myForm.course.value==" ";
    if(document.myForm.course.selectedIndex==0){
        alert("Please select atleast one of the following option");
        document.myForm.course.focus();
        return false;
    }
    else{
        alert("Option Selected");
    }
    var d = document.myForm.gender;
    var n = d.length;
    console.log(n);
    var x = "";
    for(var i=0;i<n;i++){
        if(d[i].checked){
            x = 10;
            break;
       }
    }
        if(x==10){
            alert("Selected successfully");
        }
        else{
        alert("Please see to it Radio is Selected");
           return false;
        }
}