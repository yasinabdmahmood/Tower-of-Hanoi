import data from "./levelData.js"

const didWin=()=>{
if(Object.values(data.stackA).length===0&&Object.values(data.stackB).length===0){
    return true
}
else{
    return false
}
}

export default didWin;