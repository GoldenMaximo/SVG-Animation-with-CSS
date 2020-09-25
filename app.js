const logo = document.querySelectorAll('#logo path');

logo.forEach((e, i) => {
    console.log(`letter ${i + 1} is ${e.getTotalLength()}`);
});