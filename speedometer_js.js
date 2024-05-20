function setSpeed() {
    const speedInput = document.getElementById("speedInput");
    const needle = document.getElementById("needle");

    const speed = parseFloat(speedInput.value);
    if (isNaN(speed)) {
        alert("Please enter a valid speed.");
        return;
    }

    // Calculate the rotation angle for the needle
    const maxSpeed = 220; // Maximum speed on the speedometer
    const angle = (speed / maxSpeed) * 180 - 90;

    // Set the rotation of the needle
    needle.style.transform = `rotate(${angle}deg)`;
}
