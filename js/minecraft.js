document.addEventListener("DOMContentLoaded", function() {
    const apiEndpoint = 'https://api.mcsrvstat.us/2/86.200.129.254:25615';

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            const playerCountElement = document.getElementById('player-count');
            if (data.players && data.players.online !== undefined) {
                playerCountElement.textContent = data.players.online;
            } else {
                playerCountElement.textContent = 'N/A';
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du nombre de joueurs en ligne:', error);
            const playerCountElement = document.getElementById('player-count');
            playerCountElement.textContent = 'Erreur';
        });
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Adresse IP copiée dans le presse-papiers : ', text);
        showPopup();
    }, function(err) {
        console.error('Erreur lors de la copie de l\'adresse IP : ', err);
    });
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 3000);
}
