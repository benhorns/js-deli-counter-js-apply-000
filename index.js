function takeANumber(line, name) {
var placeInLine = line.length + 1
line.push(name)
return(`Welcome, ${name}. You are number ${placeInLine} in line.`)
}

function nowServing (katzDeliLine) {
const currentLine = katzDeliLine.length;
const nowServing = katzDeliLine[0]
katzDeliLine.shift()
  if(currentLine === 0) {
    return 'There is nobody waiting to be served!'
  } else {
  return `Currently serving ${nowServing}.`
  }
}

function currentLine (katzDeliLine) {

}
