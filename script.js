document.querySelector("button").addEventListener("click", HandleClick);
//dont add parenthesis....you dont want function call manually...let eventlistener do it.
function HandleClick()
{
    alert("I got clicked");
}

var arr=document.querySelectorAll("drum");
for( var i=0; i<arr.length;i++)
    arr[i].addEventListener("click", HandleClick);