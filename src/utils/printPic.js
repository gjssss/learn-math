/**
 *
 * @param {Array} urls
 * @returns
 */
function printPic(urls) {
    return new Promise(resolve => {
        const iframe = document.createElement('iframe')

        // iframe 不展示在页面
        iframe.style.height = 0
        iframe.style.visibility = 'hidden'
        iframe.style.width = 0

        let str = `<ht><body style="width:2100;height:${2970 * urls.length};">`
        for (let i in urls) {
            str += `<img src="${urls[i]}" style="width:2100;height:2970;vertical-align: top;" />`
        }
        str += '</body></html><style>*{margin:0;padding:0;}</style>'
        // 设置 iframe 内容
        iframe.setAttribute('srcdoc', str)
        document.body.appendChild(iframe)
        iframe.addEventListener('load', function () {
            iframe.contentWindow.print()
            resolve()
        })
        iframe.contentWindow.addEventListener('afterprint', function () {
            // 通过父级页面删除 iframe 自己
            iframe.parentNode.removeChild(iframe)
        })
    })
}

export { printPic }