var first_integer = ""
var random_numbers_cycles =  ["8","9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
var how_many_cycles = parseInt(random_numbers_cycles[Math.floor(Math.random() * 13)]);
console.log(how_many_cycles);
cycle_passed = 0;
function end(){
    // get_password_chosen_input.value = first_integer.slice(0, 9);
    console.log("Program Ended")
}
function pas_cycle(first_integer){
    var get_password_chosen_input = document.getElementById("password_chosen_input")
    var integers = "ABCDEFGRSTUVWXYZabcdefghiIJKLMjklm6nopqHNOPQrstuvwxyz!@#$%^&*(){}[]\|:;'<>,.?/`~123457890"
    // console.log(integers.length)
    var first_integer_number = Math.floor(Math.random() * integers.length)
    var random_num = integers[first_integer_number]
    var first_integer = first_integer + String(random_num)
    get_password_chosen_input.value = first_integer.slice(9,9+how_many_cycles)
    //undefined - 9 charecters    9 + random length
    // get_password_chosen_input.value = 
    // console.log(cycle_passed)
    console.log(first_integer)
    cycle_passed = cycle_passed + 1
    if (cycle_passed == how_many_cycles){
        end()
    }
    else{
        pas_cycle(first_integer)
    }
}
pas_cycle()
