function mainPage() {
  const content = document.getElementById("content");
  content.innerText = "";

  // Add the home-section class to content
  content.classList.add("home-section");

  const welcomeText = document.createElement("h1");
  const infoText = document.createElement("h2");
  const storeHours = document.createElement("h2");

  welcomeText.textContent = "Beary's Breakfast Bar!";
  infoText.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  storeHours.textContent = "Monday - Friday 6am-6pm";

  // Add CSS classes
  welcomeText.classList.add("welcome-text");
  infoText.classList.add("info-text");
  storeHours.classList.add("store-hours");

  content.appendChild(welcomeText);
  content.appendChild(infoText);
  content.appendChild(storeHours);
}

export { mainPage };
