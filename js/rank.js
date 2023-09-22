fetch("http://127.0.0.1:8000/api/user")
.then(response => {
    return response.json();
})
.then(users => {    
    users.sort((a, b) => b.points - a.points);
    for(i=0;i<8;i++){
        let pseudo = "pseudo";
        let score = "score";
        let l = i+1;
        let concatPseudo = pseudo + l;
        let concatScore = score + l;
        document.getElementById(concatPseudo).innerHTML = users[i]["name"];
        document.getElementById(concatScore).innerHTML = users[i]["points"];
    }
});

