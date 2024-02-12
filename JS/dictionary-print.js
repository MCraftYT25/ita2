// Funkcja do wypisywania par klucz-wartość ze słownika do elementu o danym id
function printDictionaryToElement(dictionary, elementId) {
    // Pobranie elementu o danym id
    let element = document.getElementById(elementId);

    // Sprawdzenie czy element istnieje
    if (element) {
        // Wypisanie każdej pary klucz-wartość ze słownika do elementu
        for (let key in dictionary) {
            if (dictionary.hasOwnProperty(key)) {
                let wordCont = document.createElement("div");
                wordCont.className = "word-cont";

                let word = document.createElement("p");
                word.className = "word";
                word.textContent = key;

                let pause = document.createElement("p");
                pause.className = "pause";
                pause.textContent = "—";

                let translate = document.createElement("p");
                translate.className = "translate";
                translate.textContent = dictionary[key];

                wordCont.appendChild(word);
                wordCont.appendChild(pause);
                wordCont.appendChild(translate);

                element.appendChild(wordCont);
            }
        }
    } else {
        console.log("Element o id " + elementId + " nie istnieje.");
    }
}

// Wywołanie funkcji
printDictionaryToElement(dictionary, "dictionary");