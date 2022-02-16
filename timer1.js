const delay = process.argv.slice(2);
const timer = function(time){
  setTimeout(() => {
    console.log('x07');
  }, time * 1000)
}; 
console.log(delay)

const start= delay => {
  for (let i of delay) {
    timer(i)
  }
}
start(delay)