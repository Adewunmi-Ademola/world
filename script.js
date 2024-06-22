/**------------------------Dark mode-------------------------------------**/

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const darkModeBtn = document.getElementById('dark-mode-btn');
  const navbar = document.querySelector('.header .navbar');

  menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const searchContainer = document.querySelector('.header .navbar .search-container');
    if (searchContainer) {
      searchContainer.classList.toggle('active');
    }
  });

  darkModeBtn.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  });
});

/**---------------------------headline--------------------------------------**/

document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const headlines = document.querySelectorAll('.custom-headline-item');
  const changeHeadline = () => {
      headlines[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % headlines.length;
      headlines[currentIndex].classList.add('active');
  };
  setInterval(changeHeadline, 3000); // Change headline every 3 seconds
});

/**-----------------------------Like button-------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-button');

  likeButtons.forEach(button => {
      button.addEventListener('click', () => {
          const likeCount = button.querySelector('.like-count');
          let count = parseInt(likeCount.textContent, 10);
          if (button.classList.contains('liked')) {
              count -= 1;
              button.classList.remove('liked');
          } else {
              count += 1;
              button.classList.add('liked');
          }
          likeCount.textContent = count;
      });
  });
});

/**-------------------------increment of thumb--------------------------------------**
newContent.forEach(content => {
  const contentItem = document.createElement('div');
  contentItem.classList.add('content-item');

  const img = document.createElement('img');
  img.src = content.imgSrc;
  img.alt = 'Content Image';

  const contentDetails = document.createElement('div');
  contentDetails.classList.add('content-details');

  const subTopic = document.createElement('h3');
  subTopic.classList.add('content-sub-topic');
  subTopic.textContent = content.subTopic;

  const date = document.createElement('p');
  date.classList.add('content-date');
  date.textContent = content.date;

  const likeButton = document.createElement('button');
  likeButton.classList.add('like-button');
  likeButton.innerHTML = `<i class="fas fa-thumbs-up"></i> <span class="like-count">${content.likes}</span>`;
  likeButton.addEventListener('click', () => {
      const likeCount = likeButton.querySelector('.like-count');
      let count = parseInt(likeCount.textContent, 10);
      if (likeButton.classList.contains('liked')) {
          count -= 1;
          likeButton.classList.remove('liked');
      } else {
          count += 1;
          likeButton.classList.add('liked');
      }
      likeCount.textContent = count;
  });

  contentDetails.appendChild(subTopic);
  contentDetails.appendChild(date);
  contentDetails.appendChild(likeButton);

  contentItem.appendChild(img);
  contentItem.appendChild(contentDetails);

  contentContainer.appendChild(contentItem);

  const divider = document.createElement('hr');
  divider.classList.add('content-divider');
  contentContainer.appendChild(divider);
});

/**--------------------------nav blog post--------------------------------------**/

function displaySection(sectionId) {
  var sections = document.querySelectorAll('.content-section');
  var section = document.getElementById(sectionId);

  if (!section || section.innerHTML.trim() === "") {
      alert("No content added yet.");
      return;
  }

  sections.forEach(function(section) {
      section.classList.remove('active');
  });

  section.classList.add('active');
}



/**----------------------Thumb up  count server backend--------------------------------------**/

async function toggleLike(button, itemId) {
  const likeCountElement = button.querySelector('.like-count');
  let likeCount = parseInt(likeCountElement.textContent);

  likeCount = likeCount === 0 ? 1 : 0;

  likeCountElement.textContent = likeCount;

  // Update like count on the server
  await fetch(`http://localhost:3000/like-count/${itemId}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ count: likeCount })
  });
}

async function fetchLikeCounts() {
  const items = ['item1', 'item2'];
  for (const item of items) {
      const response = await fetch(`http://localhost:3000/like-count/${item}`);
      const data = await response.json();
      document.querySelector(`#${item} .like-count`).textContent = data.count;
  }
}

function showSection(sectionNumber) {
  const sections = document.querySelectorAll('.section-content');
  const selectedSection = document.getElementById(`section-${sectionNumber}`);
  
  sections.forEach(section => {
      section.style.display = 'none';
  });

  if (selectedSection) {
      selectedSection.style.display = 'block';
  } else {
      alert('Content has not been added yet.');
  }
}

window.onload = fetchLikeCounts;

/**--------------------------insight---------------------------- **/

function showMessage() {
    alert("This section is currently under development. Please check back soon for exciting updates and insights.");
}


/**----------------------wordpress fetch----------------------------------------------- */

fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts')
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

