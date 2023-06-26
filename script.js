
function fetchJoke() {
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then(response => response.json())
      .then(data => {
        if (data.error === false && data.type === 'single') {
          const jokeTextElement = document.getElementById('joke-text');
          jokeTextElement.textContent = `"${data.joke}"`;
        } else {
          console.error('Error fetching joke:', data.error);
        }
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
      });
  }
  const newJokeBtn = document.getElementById('new-joke-btn');
  newJokeBtn.addEventListener('click', fetchJoke);
  
  fetchJoke();
  