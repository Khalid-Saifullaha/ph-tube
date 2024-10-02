// function getTime(time){
//     return `${time}second ago`;
// }
// console.log(getTime(4320));

function getTime(time){
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
     remainingSecond= remainingSecond % 60;
    
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}
console.log(getTime(7865));