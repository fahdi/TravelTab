document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.unsplash.com/photos/random?client_id=YOUR_UNSPLASH_ACCESS_KEY&query=travel')
    .then(response => response.json())
    .then(data => {
        document.getElementById('photo-container').innerHTML = `<img src="${data.urls.regular}" alt="Travel Photo">`;
    })
    .catch(err => console.log(err));
});