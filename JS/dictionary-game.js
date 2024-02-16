var wrong_answers = {};

function setDictionarySelectCount() {
    var select_count = document.getElementById("select-count").value;
    setSelectCount(select_count);
}

function setSelectCount(select_count_value) {
    setCookie('selectedCount', select_count_value, 2);
    console.log("Ustawiono: " + select_count_value);
}

function setDictionarySelect() {
    var select = document.getElementById("select").value;
    setDictionary(select);
}

function setCookie(name, value, expiryHours) {
    var date = new Date();
    date.setTime(date.getTime() + (expiryHours * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log("Ustawiono na: " + expires);
}

// Funkcja do pobierania ciasteczka
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Funkcja do wyboru słownika
function setDictionary(dictionaryName) {
    // Zapisanie nazwy wybranego słownika w ciasteczku na 1 godzinę
    setCookie('selectedDictionary', dictionaryName, 2);
    console.log("Ustawiono: " + dictionaryName);
}

// Wywołanie funkcji setDictionary z wybranym słownikiem
//setDictionary('dictionary1');
console.log(getCookie('selectedDictionary'));

// Tworzenie zmiennej dictionary i przypisanie do niej słownika pobranego z ciasteczka
var selectedDictionaryName = getCookie('selectedDictionary');
var dictionary;

if (selectedDictionaryName) {
    dictionary = window[selectedDictionaryName];
} else {
    console.log("Nie znaleziono słownika w pliku cookie");
    dictionary = {
        "grande": "duży",
        "stesso": "ten sam",
        "bello": "piękny",
        "nuovo": "nowy",
        "certo": "pewny",
        "vero": "prawdziwy",
        "buono": "dobry",
        "italiano": "włoski",
        "vecchio": "stary",
        "ora": "teraz",
        "qui": "tutaj",
        "là": "tam",
        "sempre": "zawsze",
        "mai": "nigdy",
        "molto": "bardzo",
        "troppo": "zbyt",
        "bene": "dobrze",
        "male": "źle",
        "velocemente": "szybko",
        "lentamente": "powoli",
        "spesso": "często",
        "a volte": "czasami",
        "d’ora in poi": "od teraz",
        "amore": "miłość",
        "tempo": "czas",
        "uomo": "mężczyzna",
        "anno": "rok",
        "giorno": "dzień",
        "mano": "ręka",
        "occhio": "oko",
        "cosa": "rzecz",
        "parte": "część",
        "vita": "życie",
        "ora": "godzina",
        "madre": "matka",
        "padre": "ojciec",
        "figlio": "syn",
        "mondo": "świat",
        "casa": "dom",
        "posto": "miejsce",
        "lavoro": "praca",
        "settimana": "tydzień",
        "momento": "moment",
        "donna": "kobieta",
        "paese": "kraj",
        "amico": "przyjaciel",
        "piede": "stopa",
        "corpo": "ciało",
        "bambino": "dziecko",
        "problema": "problem"
    };
}

// Zmienna do przechowywania wyniku
var score = 0;

// Zmienna do przechowywania liczby prób
var attempts = 0;

var selectedWords = [];

// Funkcja do losowania 10 niepowtarzających się słów
/*function selectWords() {
    var keys = Object.keys(dictionary);
    while (selectedWords.length < 10) {
        var randomIndex = Math.floor(Math.random() * keys.length);
        var word = keys[randomIndex];
        if (!selectedWords.includes(word)) {
            selectedWords.push(word);
        }
    }
}*/
function selectWords(user_object_count) {
    var keys = Object.keys(dictionary);

    /*if (keys.length < user_object_count) {
        console.log("Obiekt 'dictionary' nie posiada wystarczającej liczby elementów.");
        return;
    }

    while (selectedWords.length < user_object_count) {
        var randomIndex = Math.floor(Math.random() * keys.length);
        var word = keys[randomIndex];
        if (!selectedWords.includes(word)) {
            selectedWords.push(word);
        }
    }*/
    if (keys.length >= user_object_count) {
        while (selectedWords.length < user_object_count) {
            var randomIndex = Math.floor(Math.random() * keys.length);
            var word = keys[randomIndex];
            if (!selectedWords.includes(word)) {
                selectedWords.push(word);
            }
        }
    } else {
        user_object_count = keys.length;
        //alert(keys.length);
        //alert(user_object_count);
        while (selectedWords.length < user_object_count) {
            var randomIndex = Math.floor(Math.random() * keys.length);
            var word = keys[randomIndex];
            if (!selectedWords.includes(word)) {
                selectedWords.push(word);
            }
        }
    }
    return user_object_count;
}
// Funkcja do wyświetlania słowa do przetłumaczenia
function displayWord() {
    var resultField = document.getElementById("wynik");
    //alert(user_object_count);
    if (attempts < user_object_count) {
        var word = dictionary[selectedWords[attempts]];
        document.getElementById("searched-word").innerText = word;
    } else {
        document.getElementById("wynik").innerText = "Your score is: " + score + "/" + user_object_count + " (" + Math.round(score/user_object_count*100) + "%)";

        var wynik = document.getElementById('wynik');

        for (var pole in wrong_answers) {
            if (wrong_answers.hasOwnProperty(pole)) {
                var paragraf = document.createElement('p');
                paragraf.innerHTML = '<span class="wrong">' + wrong_answers[pole].answer1 + '</span> ' +
                    '<span class="correct">' + wrong_answers[pole].answer2 + '</span> ' +
                    '<span style="color:grey;">' + wrong_answers[pole].answer3 + '</span>';
                wynik.appendChild(paragraf);
            }
        }

        document.getElementById("recommendation").innerText = "Summary";
        document.getElementById("user-word").style.display = "none";
        document.getElementById("submit").style.display = "none";
        document.getElementById("searched-word").style.display = "none";
        document.getElementById("character-map").style.display = "none";

        // Usuwanie poprzednich klas
        resultField.classList.remove("true");
        resultField.classList.remove("false");

        // Dodawanie klasy w zależności od wyniku
        if (Math.round(score/user_object_count*100) < 50) {
            resultField.classList.add("false");
        } else if (Math.round(score/user_object_count*100) > 50) {
            resultField.classList.add("true");
        }
    }
}

// Funkcja do sprawdzania poprawności tłumaczenia
var wrong_answers_index = 0;

function checkTranslation() {
    var searchedWord = document.getElementById("searched-word").innerText;
    var userWord = document.getElementById("user-word").value;
    var resultField = document.getElementById("wynik");

    // Usuwanie poprzednich klas
    resultField.classList.remove("true");
    resultField.classList.remove("false");

    if (Object.keys(dictionary).find(key => dictionary[key] === searchedWord).toLowerCase() === userWord.toLowerCase()) {
        score++;
        resultField.innerText = "Correct translation!";
        resultField.classList.add("true");
    } else {
        resultField.innerText = "Incorrect translation. The correct translation is: " + Object.keys(dictionary).find(key => dictionary[key] === searchedWord);
        var correct_answer = Object.keys(dictionary).find(key => dictionary[key] === searchedWord);
        var translate_answer = searchedWord;
        if (userWord != "") {
            var incorrect_answer = userWord;
        } else {
            var incorrect_answer = "-";
        }

        wrong_answers[wrong_answers_index] = {
            answer1: incorrect_answer,
            answer2: correct_answer,
            answer3: translate_answer
        };

        wrong_answers_index++;
        resultField.classList.add("false");
        console.log(wrong_answers);
    }

    attempts++;
    // Przejście do kolejnego słowa
    displayWord();
}

var user_object_count = getCookie('selectedCount');

if(user_object_count == null)
{
    var user_object_count = 10;
} 
// Wywołanie funkcji displayWord po załadowaniu strony
window.onload = function () {
    user_object_count = selectWords(user_object_count);
    displayWord();
};
function check() {
    checkTranslation();
    document.getElementById("user-word").value = "";
}
// Dodanie nasłuchiwania na zdarzenie 'keydown' dla pola "user-word"
document.getElementById("user-word").addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        checkTranslation();
        // Czyszczenie pola "user-word"
        document.getElementById("user-word").value = "";
    }
});