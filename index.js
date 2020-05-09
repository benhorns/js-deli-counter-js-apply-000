function takeANumber(line, name) {
var placeInLine = line.length + 1
line.push(name)
console.log(`Welcome, ${name}. You are number ${placeInLine} in line.`)
return line;
}
