// Voeg een event listener toe aan het contactformulier om te reageren op het 'submit' event
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Voorkomt dat het formulier standaard naar de server wordt gestuurd
    event.preventDefault();

    // Haal de waarden van de invoervelden op
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Toon een bevestigingsmelding met de ingevulde gegevens
    alert(`Bedankt voor je bericht, ${name}! We nemen contact op via ${email}.`);

    // Extra functionaliteit kan hier worden toegevoegd, zoals het verzenden van de gegevens naar een server
    // Bijvoorbeeld met een fetch()-verzoek als de backend klaar is om gegevens te ontvangen
});