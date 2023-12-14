
function displayText() {
    var text = "CERTIFICATIONS"; // Replace with your text
    var i = 0;
    var speed = 110; // Adjust the speed (in milliseconds) for letter display
  
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("heading_project2").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  }
  