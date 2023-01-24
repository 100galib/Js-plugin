function getLink() {

  var currentURL = window.location.href;
  if (currentURL.indexOf("iframe_url=") !== -1) {
    var iframeURL = currentURL.split("iframe_url=")[1];
    var container = document.createElement("div");
        container.style.position = "relative";
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", iframeURL);
    iframe.style.width = "550px";
    iframe.style.height = "450px";
    iframe.style.border = "none";
    var button = document.createElement("button");
    button.innerHTML = "Click Me";
    button.style.position = "absolute";
    button.style.cursor = 'pointer';
    button.style.width = "100px";
    button.style.height = "40px";
    button.style.border = "none";
    button.style.top = "0";
    button.style.left = "0";
    button.style.zIndex = "1";
    button.addEventListener("mouseover", function(){
      button.style.backgroundColor = "green";
    });
    button.addEventListener("mouseout", function(){
      button.style.backgroundColor = "";
    });
    container.appendChild(iframe);

    container.appendChild(button);

    
document.body.appendChild(container);
  }
}

document.addEventListener("DOMContentLoaded", getLink)
