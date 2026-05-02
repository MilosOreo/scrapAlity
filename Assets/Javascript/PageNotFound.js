document.addEventListener("DOMContentLoaded", function() {
    
    let image = document.getElementById("PanelImage")

    if (image.complete && image.naturalWidth === 0){

    let frame = document.createElement("iframe")

    frame.style.width = "600px"
    frame.style.height = "400px"

    frame.src="Assets/404.html"

    image.replaceWith(frame); }})

let image = document.getElementById("PanelImage")
