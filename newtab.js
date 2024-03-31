document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.unsplash.com/photos/random?client_id=GKZDtbYEQvhLjgs5ttk4ioOcuK7Y5HZJGFNCBdVCapI&query=travel')
    .then(response => response.json())
    .then(data => {
        document.getElementById('photo-container').innerHTML = `<img src="${data.urls.regular}" alt="Travel Photo">`;
    })
    .catch(err => console.log(err));
});