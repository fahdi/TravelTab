document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.unsplash.com/photos/random?client_id=GKZDtbYEQvhLjgs5ttk4ioOcuK7Y5HZJGFNCBdVCapI&query=travel')
    .then(response => response.json())
    .then(data => {
      document.body.style.backgroundImage = `url(${data.urls.full})`;
      document.getElementById('photo-description').textContent = data.description || 'Exploring the beauty of the world';
      document.getElementById('photographer-name').textContent = data.user.name;
      document.getElementById('photographer-name').href = data.user.links.html;
    })
    .catch(err => console.log(err));
});
