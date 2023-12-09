function getQuote() {
  const url = "./quotes.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const quotes = data.quotes;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex].quote;
      document.getElementById("quote").innerHTML = `"${quote}"`;
    });
}
