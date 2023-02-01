import Konva from "konva"

export default info => {
    let textLayer = new Konva.Layer()

    for (let i in info) {
        i = Number(i)
        // 计算i一共几位数
        let width = 0, num = i + 1
        while (num > 0) {
            num = Math.floor(num / 10)
            width++
        }
        textLayer.add(new Konva.Text({
            text: String(i + 1) + '.',
            fontSize: 60,
            x: 250 + Math.floor(i / 30) * 900,
            y: 40 + (i % 30) * 97,
            textDecoration: 'underline'
        }))
        textLayer.add(new Konva.Text({
            text: info[i][0] + '_____' + info[i][1],
            fontSize: 60,
            x: 250 + Math.floor(i / 30) * 900 + (width + 1) * 33,
            y: 40 + (i % 30) * 97,
        }))
    }

    return textLayer
}