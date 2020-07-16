$('#myTab a[href="#home"]').tab('show') // Select tab by name

// Set height to the main.
document.addEventListener("DOMContentLoaded", () => {
  const height = window.screen.height;
  const main = document.querySelector("main");
  main.style.minHeight = height + 'px';
  console.log(height);
});
