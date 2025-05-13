function calculatebmi(){
    let weightinput=prompt("enter your weight in kg");
    let heightinput=prompt("enter your height in cm");
 
    let weight=parseFloat(weightinput);
    let heightCm=parseFloat(heightinput);
    
    let height = heightCm / 100;

    let bmi = weight / (height * height);

    document.getElementById("result").innerHTML = " your bmi is " + bmi.toFixed(2);
    document.getElementById("result").style.fontSize ="40px";
    document.getElementById("result").style.fontFamily =" verdana ";
    document.getElementById("result").style.color ="green";
}

