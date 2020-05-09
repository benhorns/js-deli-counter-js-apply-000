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

  // length === 0 ? 'The line is currently empty.' : lineStr += katzDeliLine.forEach(function(item,index) {index+ ':' + item})
  length === 0 ? 'The line is currently empty.' : `this`
  // if(length === 0 ) {
  //   return 'The line is currently empty.'
  // } else {
  // katzDeliLine.forEach((item,index) => lineStr += `${index+1}. ${item}, `)
  //   }
  //
  // return `The line is currently: ${lineStr.substring(0, lineStr.length-2)}`
}
