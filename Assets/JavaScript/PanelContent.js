window.PanelPage = window.PanelPage || 1;

let image = document.getElementById("PanelImage");
let text = document.getElementById("PanelText");
let next = document.getElementById("PanelNext");

function loadPanel() {
    let page = window.PanelPage;
    let file = page.toString().padStart(5, "0");

    let imgPath = "Assets/Panels/" + file + ".png";
    let jsonPath = "Assets/PanelInfo/" + file + ".json";

    fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
            image.src = imgPath;
            text.innerText = data.text;
            next.innerText = data.Next;
        });
}

window.loadPanel = loadPanel;
loadPanel();