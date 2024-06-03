
function displayText() {
    var text = "Hello! I am Hemanth.."; // Replace with your text
    var i = 0;
    var speed = 40; // Adjust the speed (in milliseconds) for letter display
  
    function typeWriter() {
      if (i < text.length) {
        document.getElementById("index_name").textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  }
  