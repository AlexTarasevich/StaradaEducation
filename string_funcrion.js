
function verticalView(str) {
    str.split('\n').forEach(line => {
      if (line.startsWith('s')) {
        line = 'S' + line.slice(1);
      }
      if (line.length > 7) {
        line = line.slice(0, 7);
      }
      for (let char of line) {
        console.log(char);
      }
    
    });
  }



verticalView("strada")
console.log("-----------");
verticalView("Strada")
console.log("-----------");
verticalView("StradaNewCourse")