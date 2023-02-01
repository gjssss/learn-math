import Konva from "konva"
import compute from "./compute"
/**
 * 生成算式图片
 * @param {String} mode 生成的图片模式: `compute` `compare`
 * @param {Array} info 用于生成的图片的数据，`compute`: 90
 * @returns 返回负责生成的Promise
 */
export function generate(mode, info) {
    return new Promise(resolve => {
        let el = document.createElement('div')
        let canvas = new Konva.Stage({
            container: el,
            width: 2100,
            height: 2970
        })

        let background = new Konva.Layer()
        background.add(new Konva.Rect({
            x: 0,
            y: 0,
            width: 2100,
            height: 2970,
            fill: 'white'
        }))
        canvas.add(background)

        let textLayer
        if (mode == 'compute') {
            textLayer = compute(info)
        }
        canvas.add(textLayer)
        resolve(canvas.toDataURL())
        canvas.destroy()
        document.removeChild(el)
    })
}