function generateBulbs() {
    const bulbCount = document.getElementById('bulbCount').value;
    const bulbContainer = document.getElementById('bulbContainer');
    bulbContainer.innerHTML = ''; // Clear the container before generating new bulbs

    // Create bulbs according to the input
    for (let i = 0; i < bulbCount; i++) {
        const bulbDiv = document.createElement('div');
        bulbDiv.className = 'bulb';

        // Create bulb image
        const bulbImage = document.createElement('img');
        bulbImage.src = 'off.png'; // Path to the bulb image (off state)
        bulbImage.alt = 'Bulb';

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                bulbImage.src = 'glow.png'; // Path to the bulb image (on state)
                bulbImage.classList.add('glow');
            } else {
                bulbImage.src = 'off.png'; // Path to the bulb image (off state)
                bulbImage.classList.remove('glow');
            }
        });

        // Append the image and checkbox to the bulbDiv
        bulbDiv.appendChild(bulbImage);
        bulbDiv.appendChild(checkbox);

        // Append the bulbDiv to the container
        bulbContainer.appendChild(bulbDiv);
    }
}
