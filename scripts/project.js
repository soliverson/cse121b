let goatPicture = 'images/goats.jpg';

function calculateDate() {
    const inputDate = new Date(document.getElementById("inputDate").value);
    if (!isValidDate(inputDate)) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    const futureDate = new Date(inputDate);
    futureDate.setDate(futureDate.getDate() + 150);

    const formattedDate = formatDate(futureDate);
    document.getElementById("result").innerText = `You can expect your goat to give birth around: ${formattedDate}`;
}

function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}