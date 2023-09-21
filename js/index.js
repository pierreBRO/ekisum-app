function switchCard() {
    const loginCard = document.querySelector('.container .card:nth-child(2)');
    const registerCard = document.querySelector('.container .card:nth-child(3)');
    const registerButton = document.querySelector('.container .bouton-switch:nth-child(5)')
    const loginButton = document.querySelector('.container .bouton-switch:nth-child(6)')
  
    if (loginCard.style.display === 'none') {
      loginCard.style.display = 'block';
      registerCard.style.display = 'none';
      loginButton.style.display = 'none';
      registerButton.style.display = 'block';
    } else {
      loginCard.style.display = 'none';
      registerCard.style.display = 'block';
      loginButton.style.display = 'block';
      registerButton.style.display = 'none';
    }
  }
  