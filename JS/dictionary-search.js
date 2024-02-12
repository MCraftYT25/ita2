document.querySelector('#searchelement').addEventListener('input', function (e) {
    let searchValue = e.target.value.toLowerCase();
    let verbContainers = document.querySelectorAll('.word-cont');

    verbContainers.forEach(function (container) {
        let textValue = container.textContent || container.innerText;
        if (textValue.toLowerCase().indexOf(searchValue) > -1) {
            container.style.display = "";
        } else {
            container.style.display = "none";
        }
    });
});