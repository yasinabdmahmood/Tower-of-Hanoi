import data from "./levelData.js"

const numberOfMoves=()=>{
    data.move+=1;
    document.querySelector('.move').innerHTML=`Move : ${data.move}`
}

export default numberOfMoves;