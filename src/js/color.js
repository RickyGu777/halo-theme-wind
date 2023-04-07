function RandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ',' + g + ',' + b + ")";
}

export function RandomColor2() {
  return "hsl(" +
    Math.round(Math.random() * 360) + "," +
    Math.round(Math.random() * 50) + '%,' +
    Math.round(Math.random() * 20) + '%)';
}
