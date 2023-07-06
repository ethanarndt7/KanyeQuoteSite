function fetchQuote() {
    fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => {
        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.innerText = data.quote + ' - Kanye West';
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    generateButton.addEventListener('click', fetchQuote);
  });
  