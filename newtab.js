document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('photo-credit').style.display = 'none';
    fetch('https://api.unsplash.com/photos/random?client_id=GKZDtbYEQvhLjgs5ttk4ioOcuK7Y5HZJGFNCBdVCapI&query=travel')
    .then(response => response.json())
    .then(data => {
      document.body.style.backgroundImage = `url(${data.urls.full})`;
      document.getElementById('photo-description').textContent = data.description || 'Exploring the beauty of the world';
      document.getElementById('photographer-name').textContent = data.user.name;
      document.getElementById('photographer-name').href = data.user.links.html;
      document.getElementById('photo-credit').style.display =  '';
    })
    .catch(err => console.log(err));
});
