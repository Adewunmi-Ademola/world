document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch content based on ID
    function fetchContentById(id, callback) {
        fetch(`http://localhost:10010/wp-json/wp/v2/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                callback(data);
            });
    }

    // Add event listeners to headline links
    document.querySelectorAll('.custom-headline-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            const postId = link.getAttribute('data-id');
            fetchContentById(postId, (post) => {
                // Create a URL with the post ID to pass to the post.html page
                const postUrl = `post.html?id=${post.id}`;
                window.location.href = postUrl;
            });
        });
    });
});
/**---------------------------------------*/
