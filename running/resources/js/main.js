
//first part of msg arr with possible run times function to return msg;
const Runarr = [30, 40, 60, 75, 90, 120, 150];

const firstPart = () => {
  let time = Runarr[Math.floor(Math.random()*Runarr.length)];

    let timeMsg = '';
    if (time < 60) {
        timeMsg = time + ' minutes'
    } else if (time === 60) {
        timeMsg = 'an hour';
    } else if (time === 120) {
        timeMsg = 'two hours'
    } else if (time > 60 && time < 120) {
        timeMsg = `an hour and ${time - 60} minutes`
    } else {
        timeMsg = `${Math.floor(time / 60)} hours and ${time % 60} minutes` 
    }

    return `Run for ${timeMsg}.`;
}

//middle msg how hard you run.


const secondPart = () => {
const easyOrHardarr = ['relaxed', 'easy', 'good', 'hard', 'all out'];
const howHard = easyOrHardarr[Math.floor(Math.random()*easyOrHardarr.length)]

if (howHard === 'relaxed') {
    return 'Run relaxed, this is time to recover while you run.'
} else if (howHard === 'easy') {
    return 'Run easy, this is your everyday run pace. Just out for a jog.'
} else if (howHard === 'good') {
    return 'Run at a good pace. Keep up a little bit of pace for a tempo-like run.'
} else if ( howHard === 'hard') {
    return 'Run at a hard pace. keep up that heart rate for this speed run, this will be at race pace.'
} else if (howHard === 'all out') {
    return 'Run all out and try not to die'
}
}

//last part run advice.

const thirdPart = () => {
    const adviceArr =[1,2,3,4]
    const adviceNum = adviceArr[Math.floor(Math.random()*adviceArr.length)]

    if (adviceNum === 1) {
        return 'Rest is particularly important when running. Your runs are getting tough but so are you.'
    } else if (adviceNum === 2) {
        return "If the weather's bad it's ok to change up your schedule. If you still go out make sure to dress properly for the weather. Wicking clothes and proper jackets can save your health."
    } else if (adviceNum === 3) {
        return 'Be flexible';
    } else if (adviceNum === 4) {
        return "Dress for the weather. Be a little cold when you first go out. You'll warm up a good deal and could get overheated in the middle of the run"
    }
}

//testing.
/*
console.log(firstPart());
console.log(secondPart());
console.log(thirdPart());
*/

//put it all together



const randomMsg = () => {
    return firstPart() + ' ' + secondPart() + ' ' + thirdPart();
}

const insertMsg = () =>{
document.getElementById("randomMessage").innerHTML= randomMsg();
console.log(randomMsg());
}

document.getElementById("runmsg").onclick = insertMsg