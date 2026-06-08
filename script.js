const birthDate=document.getElementById("age")
function calculateAge(){
    const birthday=birthDate.value;
    if(birthday==""){
        alert("Please Enter your Birthday");
    }
    const currentdate=new Date();
    const birthDayDate =new Date(birthday);
    let presentyear=currentdate.getFullYear();
    let presentmonth=currentdate.getMonth();
    let presentday=currentdate.getDate();
    let birthyear=birthDayDate.getFullYear();
    let birthmonth=birthDayDate.getMonth();
    let birthdate=birthDayDate.getDate();
    if(presentyear<birthyear||presentyear==birthyear && presentmonth<birthmonth||presentyear==birthyear && presentmonth==birthmonth && presentday<birthdate){
        alert("Enter valid Date of Birth!");
    }
    else{
       let age=getAge(birthday,currentdate,birthDayDate);
       document.getElementById("answer").innerText="You Are "+age+" Old";
    }
}
function getAge(birthday,currentdate,birthDayDate){
        let years= currentdate.getFullYear()-birthDayDate.getFullYear();
        let months=currentdate.getMonth()-birthDayDate.getMonth();
        let days=currentdate.getDate()-birthDayDate.getDate();
        if(currentdate.getDate()==birthDayDate.getDate() && currentdate.getMonth()==birthDayDate.getMonth()){
            document.getElementById("birthday").innerText="Happy BirthDay To You";
        }
        if(days<0){
          months--;
          let previousMonthDays=new Date(currentdate.getFullYear(),currentdate.getMonth(),0).getDate();
          days+=previousMonthDays;
         }
        if(months<0){
          years--;
          months+=12;
        }
     return years+" years "+months+" months "+days+" days ";
}