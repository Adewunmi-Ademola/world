
//-------------------------------The database for the search bar-------------------//

const blogPosts = [
    { title: 'The Rise of African Startups', description: 'Exploring the growth and challenges of tech startups in Africa.', link: '#startup' },
    { title: 'Agriculture in Africa', description: 'The impact of modern farming techniques on African agriculture.', link: '#agriculture' },
    { title: 'Technology Trends in Africa', description: 'Latest technology trends and innovations emerging from Africa.', link: '#technology' },
    { title: 'Cultural Heritage of Africa', description: 'A dive into the rich cultural heritage and traditions of African countries.', link: '#culture' },
    { title: 'Top Tourist Destinations in Africa', description: 'A guide to the must-visit places in Africa for tourists.', link: '#tourism' },
    { title: 'The Beauty of African Landscapes', description: 'Exploring the breathtaking landscapes and natural beauty of Africa.', link: '#landscapes' }
  ];
  
  const MIN_QUERY_LENGTH = 12;
  
  document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    if (query.length < MIN_QUERY_LENGTH) {
        displayResults([]);
        hideAlert();
        return;
    }
  
    const firstLetter = query[0];
    const nextLetter = String.fromCharCode(firstLetter.charCodeAt(0) + 1);
  
    const results = blogPosts.filter(post => 
        post.title.toLowerCase().startsWith(firstLetter) || 
        post.title.toLowerCase().startsWith(nextLetter)
    );
  
    if (results.length === 0) {
        if (query.length >= MIN_QUERY_LENGTH) {
            showAlert();
        } else {
            hideAlert();
        }
    } else {
        displayResults(results);
        hideAlert();
    }
  });
  
  function displayResults(results) {
    const resultsContainer = document.getElementById('results-container');
    if (results.length === 0) {
        resultsContainer.classList.add('hidden');
    } else {
        resultsContainer.classList.remove('hidden');
        resultsContainer.innerHTML = '';
        results.forEach(result => {
            const div = document.createElement('div');
            div.classList.add('result-item');
            div.innerHTML = `<a href="${result.link}"><strong>${result.title}</strong><p>${result.description}</p></a>`;
            resultsContainer.appendChild(div);
        });
    }
  }
  
  function showAlert() {
    const alertContainer = document.getElementById('alert-container');
    alertContainer.classList.remove('hidden');
  }
  
  function hideAlert() {
    const alertContainer = document.getElementById('alert-container');
    alertContainer.classList.add('hidden');
  }
  