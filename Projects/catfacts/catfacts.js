



async function fetchCatFact() {
    try {
      const response = await fetch('https://catfact.ninja/fact', {
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch cat fact');
      }
      const data = await response.json();
      document.getElementById('catFact').innerText = data.fact;
    } catch (error) {
      document.getElementById('catFact').innerText = 'Could not fetch a cat fact. Try again later.';
      console.error(error);
    }
  }

  
  document.getElementById('fetchFactButton ')
addEventListener('click', fetchCatFact);