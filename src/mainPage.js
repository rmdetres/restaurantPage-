
function mainPage(content){

  const content = document.getElementById("content");
  content.innerText = "";
    
    const welcomeText = document.createElement("h1");
    const infoText = document.createElement("h2");
    const storeHours = document.createElement("h2");
  
    welcomeText.textContent = "Beary's Breakfast Bar!";
    infoText.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    storeHours.textContent = "Monday - Friday 6am-6pm"
  
  
    content.appendChild(welcomeText);
    content.appendChild(infoText);
    content.appendChild(storeHours);
  
  
  }

  export {mainPage};