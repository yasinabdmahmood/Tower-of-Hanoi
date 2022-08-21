import data from "./levelData.js"
const setUpLevelData=(n)=>{
 for(let i=n;i>=1;--i){
    data.stackA.push(i)
 }
 console.log(data.stackA)
}

export default setUpLevelData;