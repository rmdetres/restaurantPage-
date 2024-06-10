function about(){
    const content = document.getElementById("content");
    content.innerText = "";




    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about-section');  
    aboutSection.textContent = "This is a page about the eatery."

    content.appendChild(aboutSection);

}

export {about};