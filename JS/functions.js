function set_gui(gui_type)
{
    switch(gui_type)
    {
        case 1:
            //dodaj to do plików cookies żeby działało po odswierzaniu strony
            setCookie('selectedGui', gui_type, 2);
            console.log("Ustawiono: " + gui_type);
            break;
        case 2:
            setCookie('selectedGui', gui_type, 2);
            console.log("Ustawiono: " + gui_type);
            break;
        case 3:
            setCookie('selectedGui', gui_type, 2);
            console.log("Ustawiono: " + gui_type);
            break;
    }
}

function change_gui()
{
    var selectedGui = getCookie('selectedGui');
    if(selectedGui)
    {
        switch(selectedGui)
        {
            case "1":
                document.getElementsByClassName("symbols")[0].innerHTML = "à";
                document.getElementsByClassName("symbols")[1].innerHTML = "è";
                document.getElementsByClassName("symbols")[2].innerHTML = "ì";
                document.getElementsByClassName("symbols")[3].innerHTML = "ò";
                document.getElementsByClassName("symbols")[4].innerHTML = "ù";
                document.getElementsByClassName("symbols")[5].innerHTML = "’";
                document.getElementsByClassName("symbols")[6].innerHTML = "?";
                break;
            case "2":
                document.getElementsByClassName("symbols")[0].innerHTML = "ä";
                document.getElementsByClassName("symbols")[1].innerHTML = "Ä";
                document.getElementsByClassName("symbols")[2].innerHTML = "ö";
                document.getElementsByClassName("symbols")[3].innerHTML = "Ö";
                document.getElementsByClassName("symbols")[4].innerHTML = "ü";
                document.getElementsByClassName("symbols")[5].innerHTML = "Ü";
                document.getElementsByClassName("symbols")[6].innerHTML = "ß";
                break;
            case "3":
                document.getElementsByClassName("symbols")[0].innerHTML = "à";
                document.getElementsByClassName("symbols")[1].innerHTML = "è";
                document.getElementsByClassName("symbols")[2].innerHTML = "ì";
                document.getElementsByClassName("symbols")[3].innerHTML = "ò";
                document.getElementsByClassName("symbols")[4].innerHTML = "ù";
                document.getElementsByClassName("symbols")[5].innerHTML = "’";
                document.getElementsByClassName("symbols")[6].innerHTML = "?";
                break;
        }
    } else {
        document.getElementsByClassName("symbols")[0].innerHTML = "à";
        document.getElementsByClassName("symbols")[1].innerHTML = "è";
        document.getElementsByClassName("symbols")[2].innerHTML = "ì";
        document.getElementsByClassName("symbols")[3].innerHTML = "ò";
        document.getElementsByClassName("symbols")[4].innerHTML = "ù";
        document.getElementsByClassName("symbols")[5].innerHTML = "’";
        document.getElementsByClassName("symbols")[6].innerHTML = "?";
    }
}