export function download(ans) {
    let downfile = new File(ans, String((new Date).getTime()) + ".txt", { type: "text/plain" })
    const tmpLink = document.createElement("a");
    const objectUrl = URL.createObjectURL(downfile);

    tmpLink.href = objectUrl;
    tmpLink.download = downfile.name;
    document.body.appendChild(tmpLink);
    tmpLink.click();

    document.body.removeChild(tmpLink);
    URL.revokeObjectURL(objectUrl);
}