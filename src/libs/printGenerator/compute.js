import Konva from "konva"

/**
 * @param {Array} info 生成页面的信息，一页90个
 */
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
            x: 250 + Math.floor(i / 30) * 600,
            y: 20 + (i % 30) * 100,
            textDecoration: 'underline'
        }))
        textLayer.add(new Konva.Text({
            text: info[i],
            fontSize: 60,
            x: 250 + Math.floor(i / 30) * 600 + (width + 1) * 33,
            y: 20 + (i % 30) * 100,
        }))
    }

    return textLayer
}