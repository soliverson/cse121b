let goatPicture = 'images/goats.jpg';

function calculateDate() {
    // Get the user's input date
    const inputDateElement = document.getElementById("inputDate");
    const inputDate = new Date(inputDateElement.value);

    // Calculate the date that is 150 days in the future
    const futureDate = new Date(inputDate);
    futureDate.setDate(futureDate.getDate() + 150);

    // Format the date as "month date year"
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = futureDate.toLocaleDateString(undefined, options);

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your Goat will have babies around: ${formattedDate}`;
}