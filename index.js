function takeANumber(line, name) {
const placeInLine = line.length + 1
line.push(name)
return(`Welcome, ${name}. You are number ${placeInLine} in line.`)
}

function nowServing (katzDeliLine) {
const length = katzDeliLine.length;
const nowServing = katzDeliLine[0]
katzDeliLine.shift()
return length === 0 ? 'There is nobody waiting to be served!' : `Currently serving ${nowServing}.`
  // if(length === 0) {
  //   return 'There is nobody waiting to be served!'
  // } else {
  // return `Currently serving ${nowServing}.`
  // }
}

function currentLine (katzDeliLine) {
  const length = katzDeliLine.length;
  let lineStr = '';
  katzDeliLine.forEach((item, index) => lineStr += `${index+1}. ${item}, `)
  return length === 0 ? 'The line is currently empty.' : `The line is currently: ${lineStr.substring(0, lineStr.length-2)}`
}
