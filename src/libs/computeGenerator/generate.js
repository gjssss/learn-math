import { random } from "lodash-es";

/**
 * 根据配置生成算式
 * @param {string[]} modes 用于生成的配置
 * @param {number} range 用于生成的范围
 * @return {object} 包括算式字符串以及答案
 */
export function generate(modes, range) {
    /**
     * mode         为式子随机选中的计算模式
     * signal       为式子的符号
     * n1, n2, ans  分别为第一个数、第二个数和答案
     * range        为生成式子的计算范围（难易程度）1、2、3
     */
    let mode = modes[random(0, modes.length - 1)]
    let signal
    let n1, n2, ans
    range = Number(range)
    if (mode === 'plus') {
        signal = '＋'
        ans = random(0, Math.pow(10, range + 1) - 1)
        n1 = random(0, ans)
        n2 = ans - n1
    }
    else if (mode === 'minus') {
        signal = '–'
        n1 = random(0, Math.pow(10, range + 1) - 1)
        n2 = random(0, n1)
        ans = n1 - n2
    }
    else if (mode === 'mult') {
        signal = '×'
        n1 = random(1, Math.pow(10, range) - 1)
        n2 = random(1, Math.pow(10, range) - 1)
        ans = n1 * n2
    }
    else {
        signal = '÷'
        n2 = random(1, Math.pow(10, range) - 1)
        ans = random(1, Math.pow(10, range) - 1)
        n1 = n2 * ans
    }
    return {
        n1, n2, ans, mode, signal,
        str: `${n1}${signal}${n2}=`
    }
    //str 为式子字符串
}