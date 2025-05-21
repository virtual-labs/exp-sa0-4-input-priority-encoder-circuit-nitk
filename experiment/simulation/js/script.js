var count = 1;
var fault = "N/A";


function change(obj){
    if($(obj).is(":checked")){
        (obj).value = 1;
        if((obj).name != "input"){
            if(fault == "N/A"){
                fault = "";
                fault = fault + (obj).name;
            }
            else{
                fault = fault + ",";
                fault = fault + (obj).name;
            }
        }
    }
    else{
        (obj).value = 0;
        if((obj).name != "input"){
            if(fault.length == 1 || fault.length == 2){
                fault = "N/A";
            }
            else{
                for(var i = 0; i<fault.length; i++){
                    if((fault[i] + fault[i+1]) == (obj.name)){
                        if(i == 0){
                            fault = fault.substring(3, fault.length);
                        }
                        else{
                            fault = fault.substring(0, i-1) + fault.substring(i+2, fault.length);
                        }
                    }
                    if(fault[i] == (obj).name){
                        if(i == 0){
                            fault = fault.substring(2, fault.length);
                        }
                        else{
                            fault = fault.substring(0, i-1) + fault.substring(i+1, fault.length);
                        }
                    }
                }
            }
        }
    }
}

function output(){
    input1 = parseInt((document.getElementById("input1").children[0]).value);
    input2 = parseInt((document.getElementById("input2").children[0]).value);
    input3 = parseInt((document.getElementById("input3").children[0]).value);
    input4 = parseInt((document.getElementById("input4").children[0]).value);
    button1 = parseInt((document.getElementById("button1").children[0]).value);
    button2 = parseInt((document.getElementById("button2").children[0]).value);
    button3 = parseInt((document.getElementById("button3").children[0]).value);
    button4 = parseInt((document.getElementById("button4").children[0]).value);
    button5 = parseInt((document.getElementById("button5").children[0]).value);
    button6 = parseInt((document.getElementById("button6").children[0]).value);
    button7 = parseInt((document.getElementById("button7").children[0]).value);
    button8 = parseInt((document.getElementById("button8").children[0]).value);
    button9 = parseInt((document.getElementById("button9").children[0]).value);
    button10 = parseInt((document.getElementById("button10").children[0]).value);
    y = ((input1) || (!input2 && input3))? 1: 0;
    x = (input1 || input2)? 1: 0;
    v = (input1 || input2 || input3 || input4)? 1: 0;
    a = (!button1) && input1;
    b = (!button2) && input2;
    c = (!b) && (!button8);
    d = (!button3) && input3;
    e = (!button9) && (c && d);
    yf = ((!button5) && (a || e))? 1: 0;
    f = (!button10) && (a || b);
    xf = ((!button6) && (f))?1:0;
    g = (!button4) && input4;
    vf = ((!button7) && (f || d || g))?1:0;
    var table = document.getElementById("mytable").children[1];
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    var cell12 = row.insertCell(11);
    cell1.innerHTML = count;
    cell2.innerHTML = input4;
    cell3.innerHTML = input3;
    cell4.innerHTML = input2;
    cell5.innerHTML = input1;
    cell6.innerHTML = fault;
    cell7.innerHTML = y;
    cell8.innerHTML = x;
    cell9.innerHTML = v;
    cell10.innerHTML = yf;
    cell11.innerHTML = xf;
    cell12.innerHTML = vf;
    count = count + 1;
    console.log(count);
}

function on_off(){
    input1 = parseInt((document.getElementById("input1").children[0]).value);
    input2 = parseInt((document.getElementById("input2").children[0]).value);
    input3 = parseInt((document.getElementById("input3").children[0]).value);
    input4 = parseInt((document.getElementById("input4").children[0]).value);
    button1 = parseInt((document.getElementById("button1").children[0]).value);
    button2 = parseInt((document.getElementById("button2").children[0]).value);
    button3 = parseInt((document.getElementById("button3").children[0]).value);
    button4 = parseInt((document.getElementById("button4").children[0]).value);
    button5 = parseInt((document.getElementById("button5").children[0]).value);
    button6 = parseInt((document.getElementById("button6").children[0]).value);
    button7 = parseInt((document.getElementById("button7").children[0]).value);
    button8 = parseInt((document.getElementById("button8").children[0]).value);
    button9 = parseInt((document.getElementById("button9").children[0]).value);
    button10 = parseInt((document.getElementById("button10").children[0]).value);
    a = (!button1) && input1;
    b = (!button2) && input2;
    c = (!b) && (!button8);
    d = (!button3) && input3;
    e = (!button9) && (c && d);
    y = ((!button5) && (a || e))? 1: 0;
    f = (!button10) && (a || b);
    x = ((!button6) && (f))?1:0;
    g = (!button4) && input4;
    v = ((!button7) && (f || d || g))?1:0;
    if(y == 1){
        document.getElementById("bulb1").src = "images/on1.png";
    }
    else{
        document.getElementById("bulb1").src = "images/off1.png";
    }
    if(x == 1){
        document.getElementById("bulb2").src = "images/on1.png";
    }
    else{
        document.getElementById("bulb2").src = "images/off1.png";
    }
    if(v == 1){
        document.getElementById("bulb3").src = "images/on1.png";
    }
    else{
        document.getElementById("bulb3").src = "images/off1.png";
    }
}

function reset(){
    $("#tablebody tr").remove(); 
    count = 1;
}
