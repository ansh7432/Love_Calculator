

document.querySelector("button").addEventListener("click", function clicked()
{
    var n= Math.random();
    document.querySelector("h2").innerText="Your Partner Loves You "+(Math.floor(n*100)+"%")

    if(20>n>50){
        alert("NOT WORKING");
    } 
});




