document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('photo-credit').style.display = 'none';
  fetch('https://api.unsplash.com/photos/random?client_id=GKZDtbYEQvhLjgs5ttk4ioOcuK7Y5HZJGFNCBdVCapI&query=travel')
    .then(response => response.json())
    .then(data => {
      document.body.style.backgroundImage = `url(${data.urls.full})`;
      document.getElementById('photo-description').textContent = data.description || 'Exploring the beauty of the world';
      document.getElementById('photographer-name').textContent = data.user.name;
      document.getElementById('photographer-name').href = data.user.links.html;
      document.getElementById('photo-credit').style.display = '';

      // Example quote, replace with your quote fetching mechanism if available
      const quotes = [
        { text: 'Life is either a daring adventure or nothing at all.', author: 'Helen Keller' },
        { text: 'Travel is the only thing you buy that makes you richer.', author: 'Anonymous' },
        { text: 'The world is a book, and those who do not travel read only one page.', author: 'St. Augustine' },
        { text: 'Adventure is worthwhile in itself.', author: 'Amelia Earhart' },
        { text: 'Not all those who wander are lost.', author: 'J.R.R. Tolkien' },
        { text: 'To Travel is to Live.', author: 'Hans Christian Andersen' },
        { text: 'The journey not the arrival matters.', author: 'T.S. Eliot' },
        { text: 'Live life with no excuses, travel with no regret.', author: 'Oscar Wilde' },
        { text: 'The world is a book, and those who do not travel read only one page.', author: 'Saint Augustine' },
        { text: 'Traveling – it leaves you speechless, then turns you into a storyteller.', author: 'Ibn Battuta' },
        {
          text: 'Do not follow where the path may lead. Go instead where there is no path and leave a trail.',
          author: 'Ralph Waldo Emerson'
        },
        { text: 'Life is short and the world is wide.', author: 'Simon Raven' },
        {
          text: 'Man cannot discover new oceans unless he has the courage to lose sight of the shore.',
          author: 'André Gide'
        }
      ];
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById('quote-text').textContent = quote.text;
      document.getElementById('quote-author').textContent = quote.author;
    })
    .catch(err => console.log(err));
});
