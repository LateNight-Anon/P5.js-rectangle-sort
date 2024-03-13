class rectangle {
    constructor(val) {
      this.col = "black";
      this.val = val;
    }
  }
  
  let colSwitchIndex = 0;
  let arr = [];
  for (let i = 0; i < 400; i++)
    arr.push(new rectangle(Math.floor(Math.random() * 1000)));
  
  function bubbleSort(arr) {
    let swap;
    try {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].val > arr[i + 1].val) {
          swap = arr[i + 1].val;
          arr[i + 1].val = arr[i].val;
          arr[i].val = swap;
        }
      }
    } catch (err) {}
    return arr;
  }
  
  function setup() {
    createCanvas(500, 1000);
    noStroke();
  }
  
  function draw() {
    background(220);
    arr = bubbleSort(arr);
    for (let i = 0; i < arr.length; i++) {
      fill(arr[i].col);
      rect(1.25 * (i + 1),0,1.25,arr[i].val/2);
    }
    let isSorted = true;
    try {
      for (let i = 0; i < arr.length; i++)
        if (arr[i].val > arr[i + 1].val) isSorted = false;
    } catch (err) {}
    if (isSorted) {
      try {
        arr[colSwitchIndex].col = "green";
        colSwitchIndex += 1
      } catch (err) {
        noLoop();
      }  
    }
  }