var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeli.length + " in line.");
}

function nowServing(otherDeli){
  if (otherDeli.length === 0) return "There is nobody waiting to be served!";
  var cust = otherDeli.shift();
  return "Currently serving " + cust + ".";
}

function currentLine()