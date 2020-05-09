function takeANumber(line, name) {
const placeInLine = line.length + 1
line.push(name)
return(`Welcome, ${name}. You are number ${placeInLine} in line.`)
}

function nowServing (katzDeliLine) {
const length = katzDeliLine.length;
katzDeliLine.shift()
return length === 0 ? 'There is nobody waiting to be served!' : `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine (katzDeliLine) {
  const length = katzDeliLine.length;
  let lineStr = '';
  katzDeliLine.forEach((item, index) => lineStr += `${index+1}. ${item}, `)
  return length === 0 ? 'The line is currently empty.' : `The line is currently: ${lineStr.substring(0, lineStr.length-2)}`
}
