// Excercise: JavaScript alert
// alert("Hello, world!");

// Exercise: Hello World Button
// function decorations(){
//     alert("Hello, world!");
// }

//Exercise: Bigger Decorations Button
// function increaseTextSize(){
//     var textItem = document.getElementById("textAreaOne");
//     textItem.style.fontSize= "24pt";
//     textItem.style.width= "237px";
//     textItem.style.height= "62px";
// }

//Exercise: Bling Checkbox
function blingChecked(){
    var checkBox=document.getElementById("blingCheck");
    var textItem = document.getElementById("textAreaOne");
    if(checkBox.checked==true){
        textItem.style.fontWeight="bold";
        textItem.style.color="green";
        textItem.style.textDecoration="underline";
    } else {
        textItem.style.fontWeight="normal";
        textItem.style.color="black";
        textItem.style.textDecoration="none";
    }
}
//Exercise: Font Timer 1
function increaseTextSize(){
    var textItem = document.getElementById("textAreaOne");
    var getSizeVal=window.getComputedStyle(textItem,null).getPropertyValue('font-size');
    var currSize=parseFloat(getSizeVal);
    textItem.style.fontSize= currSize+2+"px";
    textItem.style.width= "237px";
    textItem.style.height= "62px";
}
//Exercise: Font Timer 2
function slowIncreaseSize(){
    setInterval(increaseTextSize,1000);
}