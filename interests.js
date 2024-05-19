document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        searchBooks(query);
    } else {
        alert('Lütfen bir arama terimi girin.');
    }
});

function searchBooks(query) {
    const apiKey = 'YOUR_API_KEY'; // Google Books API anahtarınızı buraya ekleyin
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';

            if (data.items) {
                data.items.forEach(item => {
                    const book = item.volumeInfo;
                    const bookDiv = document.createElement('div');
                    bookDiv.classList.add('book');

                    const title = document.createElement('h3');
                    title.textContent = book.title;
                    bookDiv.appendChild(title);

                    const authors = document.createElement('p');
                    authors.textContent = 'Yazar: ' + (book.authors ? book.authors.join(', ') : 'Bilinmiyor');
                    bookDiv.appendChild(authors);

                    if (book.imageLinks && book.imageLinks.thumbnail) {
                        const thumbnail = document.createElement('img');
                        thumbnail.src = book.imageLinks.thumbnail;
                        bookDiv.appendChild(thumbnail);
                    }

                    const description = document.createElement('p');
                    description.textContent = book.description ? book.description : 'Açıklama yok';
                    bookDiv.appendChild(description);

                    resultsDiv.appendChild(bookDiv);
                });
            } else {
                resultsDiv.textContent = 'Sonuç bulunamadı.';
            }
        })
        .catch(error => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.textContent = 'Bir hata oluştu: ' + error.message;
            console.error('Hata:', error);
        });
}
