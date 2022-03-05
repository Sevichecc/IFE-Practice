'use strict';

let n, m;

document.write('<table>');
for (n = 1; n <= 9; n++) {
  document.write('<tr>');
  for (m = 1; m <= 9; m++) {
    let t = n * m;
    console.log(`${n}*${m}=${t}`);
    document.write(`<td>${n}*${m}=${t}</td>`);
  }
  document.write('</tr>');
}
