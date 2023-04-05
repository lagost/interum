window.onload = function () {
  const myElement = document.getElementById("ENGAGEMENT_CARDS-sectionLabel");
  myElement.style.color = "red";
};
(function () {
    // create dialog elements
    const dialog = document.createElement("ui5-dialog");
    const content = document.createElement("div");
    const footer = document.createElement("footer");
    const footerBtn = document.createElement("ui5-button");
    const myElement = document.getElementById("ENGAGEMENT_CARDS-sectionLabel");
  myElement.style.color = "red";
    // set attributes
    dialog.setAttribute("header-text", "Third Party JavaScript");
    footer.setAttribute("slot", "footer");
    // content
    content.innerHTML = "This dialog was created by 3 party JS file";
    content.style.padding = "1rem";
    // footer btn
    footerBtn.onclick = () => dialog.close();
    footerBtn.innerHTML = "Close";
    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    document.body.appendChild(dialog);
    // open dialog
    dialog.show();
})();
