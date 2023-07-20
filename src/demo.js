const a1 = [2,4,5,7,9]
const a2 = [3,4,4,6,8]


const a3 = [...a1,...a2]

const arr = []

for(let i = 0; i < a3.length; i++){
    let n = a3[i]
    for(let j = i+1; j < a3.length; j++){
        if(a3[j] < a3[i]) {
            n = a3[j]
        }
    }
    arr.push(n)
}