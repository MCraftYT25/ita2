// Pobranie elementów
let symbols_table = document.getElementsByClassName("symbols");

// Dodanie nasłuchiwania na kliknięcie do każdego elementu
for (let i = 0; i < symbols_table.length; i++) {
    let symbol = symbols_table[i];

    symbol.addEventListener("click", function () {
        // Utworzenie obiektu Range i dodanie do niego naszego elementu
        let range = document.createRange();
        range.selectNode(symbol);

        // Usunięcie wszystkich zaznaczeń
        window.getSelection().removeAllRanges();

        // Dodanie naszego Range do zaznaczenia
        window.getSelection().addRange(range);

        try {
            // Próba skopiowania tekstu zaznaczenia do schowka
            document.execCommand('copy');
        } catch (err) {
            console.log('Nie udało się skopiować tekstu');
        }

        // Usunięcie zaznaczenia po skopiowaniu tekstu
        window.getSelection().removeAllRanges();

        // Dopisanie tekstu do istniejącego tekstu w polu input o id "user-word"
        let userInput = document.getElementById("user-word");
        if (userInput) {
            userInput.value += symbol.textContent;
            document.getElementById('user-word').focus();
        } else {
            console.log('Pole input o id "user-word" nie istnieje.');
        }
    });
}