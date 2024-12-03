import * as fs from 'fs'
import { parse } from 'path'


const a = fs.readFileSync('input.txt', 'utf8')


const b = a.split("\n")

let left: number[] = []
let right: number[] = []

for (let i = 0; i < b.length; i++) {
    const c = b[i].split("   ")
    left.push(parseInt(c[0],10))
    right.push(parseInt(c[1],10))
}
left.sort()
right.sort()

let t_diff = 0
for (let i = 0; i < left.length-1; i++) {
    let diff = 0
     if (left[i] <= right[i]) {
        diff = (right[i] - left[i])
     } else {
        diff = (left[i] - right[i])
    }
    t_diff += diff
}

console.log(t_diff)

const count: Record<number,number> = {}

right.forEach(num => {
    count[num] = (count[num] || 0) + 1
})

let t = 0
left.forEach( num => {
    const x = num * count[num] || 0
    t+=x
})

console.log(t)


