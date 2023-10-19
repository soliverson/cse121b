let goatPicture = 'images/goats.jpg';

function calculateFutureDate() {
    const inputDateElement = document.getElementById("inputDate");
    const resultElement = document.getElementById("result");

    // Get the selected date from the input field
    const selectedDate = new Date(inputDateElement.value);

    if (isNaN(selectedDate)) {
        resultElement.textContent = "Invalid date. Please enter a valid date.";
        return;
    }

    // Calculate the future date by adding 150 days
    const futureDate = new Date(selectedDate);
    futureDate.setDate(selectedDate.getDate() + 150);

    // Format the future date as "YYYY-MM-DD"
    const formattedFutureDate = futureDate.toISOString().split('T')[0];

    resultElement.textContent = `Your goat will have babies around: ${formattedFutureDate}`;
}