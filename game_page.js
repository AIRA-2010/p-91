player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML= player1_name + ":";
document.getElementById("player2_name").innerHTML= player2_name + ":";

document.getElementById("player1_score").innerHTML= player1_score ;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML= "QUESTION TURN - " + player1_name;
document.getElementById("player_answer").innerHTML= "ANSWER TURN - " + player2_name;

function send(){
    get_number1= document.getElementById("number1").value;
    get_number2= document.getElementById("number2").value;

    actual_ans = parseInt(get_number1) * parseInt(get_number2);



    question_number = "<h4>"+ get_number1 +"X"+get_number2+"</h4>";
    input_box = "<br> ans: <input id='input_check_box' type='text'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>CHECK</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

