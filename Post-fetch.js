document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        fetch(`http://localhost:10010/wp-json/wp/v2/posts/${postId}`)
            .then(response => response.json())
            .then(post => {
                const content = document.getElementById('post-content');
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                    <h2>${post.title.rendered}</h2>
                    <div>${post.content.rendered}</div>
                `;
                content.appendChild(postElement);
            });
    }
});
/**------------------------------------------------------------*/
