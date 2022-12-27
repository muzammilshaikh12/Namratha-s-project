function displayName1() {
  var originalName = document.getElementById("txtInputData").value;
  var originalmsg = document.getElementById("txtInputData1").value;
  
  if (originalName == "" || originalmsg == '') {
    alert("Please fill out the fields");
  }
  let myobj = {
    name : originalName,
    msg : originalmsg
  }
  localStorage.setItem(Math.random(),JSON.stringify(myobj))
  document.getElementById("txtInputData").value = ''
  document.getElementById("txtInputData1").value = ''
  const myitems = localStorage.getItem()
  console.log(myitems)
 
 }

