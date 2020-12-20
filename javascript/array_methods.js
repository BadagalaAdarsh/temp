/* ==== map() ==== */

list_a = [1,2,3,4]

console.log(
    list_a.map((num)=>{
        return num*num
    })
)

list_a = [
    {id:1},
    {id:2},
    {id:3},
    {id:4}
]

console.log(
    list_a.map((num)=>{
        return num.id*num.id
    })
)