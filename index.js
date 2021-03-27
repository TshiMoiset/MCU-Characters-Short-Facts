// Koden för knapparn chronological Order & Release Date Order.

function chronologicalOrder() {
    let buttonClick1 = document.getElementById("chronological");   
    if (buttonClick1.style.display === "none") {
      buttonClick1.style.display = "block";
    } else {
      buttonClick1.style.display = "none";
    }
  }

function releaseDateOrder() {
    let buttonClick2 = document.getElementById("dateOrder");
    if (buttonClick2.style.display === "none") {
      buttonClick2.style.display = "block";
    } else {
      buttonClick2.style.display = "none";
    }
  }