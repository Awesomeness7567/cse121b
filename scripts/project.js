function getQuote() {
    const url = "https://api.quotable.io/random";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const quote = data.content;
        document.getElementById("quote").innerHTML = `"${quote}"`;
      });
}