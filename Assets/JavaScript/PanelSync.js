window.PanelPage = 1;

let input = document.getElementById("PageNumber");

input.oninput = function () {
    window.PanelPage = Number(input.value);
    window.loadPanel();
};

function nextPanel() {
    window.PanelPage += 1;
    document.getElementById("PageNumber").value = window.PanelPage;
    window.loadPanel();
}