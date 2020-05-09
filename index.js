function takeANumber(line, name) {
var placeInLine = line.length + 1
line.push(name)
return `Welcome, ${name}. You are number ${placeInLine} in line.`
}
