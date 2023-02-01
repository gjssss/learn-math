import { computeGenerator } from "./computeGenerate";
export function compareGenerator(modes, range) {
    const c1 = computeGenerator(modes, range)
    const c2 = computeGenerator(modes, range)
    let ans
    if (Number(c1.ans) > Number(c2.ans)) {
        ans = '>'
    } else if (Number(c1.ans) < Number(c2.ans)) {
        ans = '<'
    } else {
        ans = "="
    }
    c1.str = `${c1.n1}${c1.signal}${c1.n2}`
    c2.str = `${c2.n1}${c2.signal}${c2.n2}`
    return {
        c1, c2, ans
    }
}