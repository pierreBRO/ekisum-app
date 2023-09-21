function game(){
    let artiste = 'test';
    let titre = '';
    let artisteGuess = document.getElementById('artiste').value;
    let titreGuess = document.getElementById('titre').value;

    if(artiste===artisteGuess){
        showSuccessMessage();
    } else {
        console.log('raté')
    }
}

function showSuccessMessage() {
    const successMessage = document.querySelector(".success-message");

    successMessage.style.display = "block";
    setTimeout(function() {
      successMessage.style.display = "none";
    }, 5000); 
}