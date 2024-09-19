const menuHome = () => {
    document.getElementById("contentFrame").setAttribute("src", "home.html")
    document.getElementById("menuHome").style = "color: black; background-color: white;"
    document.getElementById("menuPlaylist").style = "color: white; background-color: #298eb5;"
    document.getElementById("menuGame").style = "color: white; background-color: #298eb5;"
}

const menuPlaylist = () => {
    document.getElementById("contentFrame").setAttribute("src", "playlist.html")
    document.getElementById("menuPlaylist").style = "color: black; background-color: white;"
    document.getElementById("menuHome").style = "color: white; background-color: #298eb5;"
    document.getElementById("menuGame").style = "color: white; background-color: #298eb5;"
}

const menuGame = () => {
    document.getElementById("contentFrame").setAttribute("src", "game.html")
    document.getElementById("menuGame").style = "color: black; background-color: white;"
    document.getElementById("menuPlaylist").style = "color: white; background-color: #298eb5;"
    document.getElementById("menuHome").style = "color: white; background-color: #298eb5;"
}