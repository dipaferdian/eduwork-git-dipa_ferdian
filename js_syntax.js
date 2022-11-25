var first_variable = 10;
var second_variable = " saya belajar javascript ";
var third_variable = 20;


function count(){
    return first_variable + (typeof second_variable == "string" ? third_variable : second_variable)
}

console.log(count());
