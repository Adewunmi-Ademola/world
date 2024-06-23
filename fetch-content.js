document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:10010/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                    <h2>${post.title.rendered}</h2>
                    <div>${post.content.rendered}</div>
                `;
                content.appendChild(postElement);
            });
        });
});
