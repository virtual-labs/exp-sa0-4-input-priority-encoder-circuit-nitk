var choice = [0,0,0,0,0];
var ans = [4,1,3,3,1];
var count = 0;
function change(num){
    choice[parseInt(num[0])-1] = parseInt(num[2]);
}

function submit(){
    for(i=0; i<5;i++){
        if(ans[i] == choice[i]){
            $(".question"+(i+1).toString()).css("color", "black");
            count++;
        }
        else{
            $(".question"+(i+1).toString()).css("color", "red");
        }
    }
    document.getElementById("result").innerHTML = count + " out of 5";
    count = 0;
}