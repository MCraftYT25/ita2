function move(value) {
    switch (value) {
        case 1:
            document.getElementById('searchelement').value = '';
            var elements = document.querySelectorAll('.word-cont');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "";
            }

            document.getElementById('searchelement').focus();
            break;
        case 2:
            document.getElementById('searchelement').focus();
            break;
        case 3:
            document.getElementById('user-word').focus();
            break;
    }
}