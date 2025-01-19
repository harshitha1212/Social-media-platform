// Fetch posts and display them
async function fetchPosts() {
    const response = await fetch("http://localhost:3000/api/posts");
    const posts = await response.json();
    const postsContainer = document.getElementById("postsContainer");
    
    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
        <p><strong>User:</strong> ${post.userId}</p>
        <p>${post.content}</p>
      `;
      postsContainer.appendChild(postElement);
    });
  }
  
  fetchPosts();
  