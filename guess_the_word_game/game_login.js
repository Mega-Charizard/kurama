function add_user()
{
    player1_name=document.getElementById("Player1_name_input").value;
    player2_name=document.getElementById("Player2_name_input").value;

    localStorage.setItem("player1",player1_name);
    localStorage.setItem("player2",player2_name);

    window.location="game_page.html";
}

 