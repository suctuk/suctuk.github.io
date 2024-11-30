document.addEventListener("DOMContentLoaded", () => {
    // Mousemove cursor effect
    document.addEventListener("mousemove", (e) => {
      let cursor = document.createElement("div");
      cursor.classList.add("cursor");
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
      document.body.appendChild(cursor);
  
      setTimeout(() => cursor.remove(), 1000);
    });
});