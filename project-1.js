
function displayText() {
  var text = "RECENT PROJECTS"; // Replace with your text
  var i = 0;
  var speed = 110; // Adjust the speed (in milliseconds) for letter display

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("section-title").textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}
