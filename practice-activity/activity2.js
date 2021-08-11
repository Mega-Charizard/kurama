function get_score()
{
    score=localStorage.getItem("score");
    document.getElementById("score").innerHTML=score;
}
