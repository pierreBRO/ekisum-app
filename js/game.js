function game() {
  let artiste = "queen";
  let titre = "bohemian rhapsody";
  let artisteGuess = document.getElementById("artiste").value;
  let titreGuess = document.getElementById("titre").value;

  if (artiste === artisteGuess && titre === titreGuess) {
    showSuccessMessage();
  } else if (artiste === artisteGuess) {
    showArtisteMessage();
  } else if (titre === titreGuess) {
    showTitreMessage();
  } else {
    showPerduMessage();
  }
}

function showSuccessMessage() {
  const successMessage = document.querySelector(".gagne-message");

  successMessage.style.display = "block";
  setTimeout(function () {
    successMessage.style.display = "none";
  }, 5000);
}

function showArtisteMessage() {
  const artisteMessage = document.querySelector(".presque-artiste");

  artisteMessage.style.display = "block";
  setTimeout(function () {
    artisteMessage.style.display = "none";
  }, 5000);
}

function showTitreMessage() {
  const titreMessage = document.querySelector(".presque-titre");

  titreMessage.style.display = "block";
  setTimeout(function () {
    titreMessage.style.display = "none";
  }, 5000);
}

function showPerduMessage() {
  const perduMessage = document.querySelector(".perdu-message");

  perduMessage.style.display = "block";
  setTimeout(function () {
    perduMessage.style.display = "none";
  }, 5000);
}
