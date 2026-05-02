let save = document.getElementById("Save");
let load = document.getElementById("Load");

function saveData() {

    localStorage.setItem("PanelPage", window.PanelPage);

    console.log(window.PanelPage);

}

function loadData() {
    let savedPage = localStorage.getItem("PanelPage");

    if (savedPage !== null) {
        window.PanelPage = Number(savedPage);

        document.getElementById("PageNumber").value = window.PanelPage;

        window.loadPanel();

        console.log(window.PanelPage);
    }
}

save.onclick = saveData;
load.onclick = loadData;