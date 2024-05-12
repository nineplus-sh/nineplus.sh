document.addEventListener("DOMContentLoaded", async function() {
    let OS = await (new UAParser()).getOS().withClientHints();
    let thingToGrab;

    if(OS.name === "Windows") {
        thingToGrab = "win32";
    } else {
        return document.querySelector("#download").remove();
    }

    fetch(`https://roald.hakase.life/info/${thingToGrab}`).then(res => res.json()).then(function(res) {
        window.releaseData = res;
        document.querySelector("#download").innerHTML = `Download for <span id="downloadosname"></span><br><span id="downloadversion"></span>`;
        document.querySelector("#downloadosname").innerText = OS.name;
        document.querySelector("#downloadversion").innerText = `Desktop ${res.version}, ${res.size}MB`;
        document.querySelector("#downloadfilename").innerText = res.download.split("/").slice(-1)[0]
        document.querySelector("#download").classList.remove("disabled");
    })
})

function download() {
    if(document.querySelector("#download").classList.contains("disabled")) return;
    document.location.href = window.releaseData.download;
    document.querySelector("#downloadconfirm").showModal();
}