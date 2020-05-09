function takeANumber(line, name) {
const placeInLine = line.length + 1
line.push(name)
return(`Welcome, ${name}. You are number ${placeInLine} in line.`)
}

function nowServing (katzDeliLine) {
const length = katzDeliLine.length;
const nowServing = katzDeliLine[0]
katzDeliLine.shift()
  if(length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
  return `Currently serving ${nowServing}.`
  }
}

function currentLine (katzDeliLine) {
  const length = katzDeliLine.length
  let lineStr = ''
  if(length === 0 ) {
    return 'The line is currently empty.'
  } else {
    for(let i = 0; i < length; i++) {
      lineStr += `${i+1}. ${katzDeliLine[i]}, `
    }
  }
  return lineStr
}
