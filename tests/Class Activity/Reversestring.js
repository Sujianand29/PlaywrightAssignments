var str1;

function strReverse(str){
    var strinput = "Testleaf";
    var reversed = "";
    for(var i=strinput.length-1; i>=0; i--){
        reversed += strinput.charAt(i);
    }
    console.log("Reversed string: " + reversed);
}
strReverse("str1");