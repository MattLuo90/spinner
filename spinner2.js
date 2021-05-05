const element = ['\r|   ','\r/   ','\r-   ',  '\r\\   ' ]
const spinner = (arr) => {
  for (const i in arr) {
    setTimeout(() => {
      process.stdout.write(arr[i]);
    },100 + i * 200);
  }
}
setInterval(() => {
  spinner(element);
},800)