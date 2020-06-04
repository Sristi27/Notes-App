console.log("connected");
let addbtn = document.getElementById("addbtn");

let notesElm = document.getElementById('notescontent');


addbtn.addEventListener("click", function () {

  let addTitle = document.getElementsByClassName("addTitle");
  let addNote = document.getElementsByClassName("addNote");

  let title = localStorage.getItem("title");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];

  }
  else {
    notesObj = JSON.parse(notes);

  }
  if (title == null) {
    titleObj = [];
  }
  else {
    titleObj = JSON.parse(title);
  }
  notesObj.push(addNote[0].value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addNote[0].value = "";
  //console.log(notesObj);

  titleObj.push(addTitle[0].value);
  localStorage.setItem("title", JSON.stringify(titleObj));
  addTitle[0].value = "";
  //console.log(titleObj);

  //function to insert
  showNotes();
});

function showNotes() {


  let notes = localStorage.getItem("notes");
  let title = localStorage.getItem("title");
  if (notes == null) {
    notesObj = [];

  }
  else {
    notesObj = JSON.parse(notes);

  }
  if (title == null) {
    titleObj = [];
  }
  else {
    titleObj = JSON.parse(title);
  }

  let html = "";
  //add the notes
  //make cards
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width:18rem;">
        <div class="card-body">
          <h5 class="card-title" style="text-transform:uppercase;">${titleObj[index]}</h5>
         
          <p id="txtNote"> ${element}  </p>   
          <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
        </div></div>`



  });

  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else{
    notesElm.innerHTML=`Nothing to show! Use the "Add Note" option to create a new note.`;
  }
}

function deleteNote(index) {
  //console.log(index);
  //get the element u want to delte
  console.log('I am deleting',index);
  let notes = localStorage.getItem("notes");
  let title = localStorage.getItem("title");
  if (notes == null) {
    notesObj = [];

  }
  else {
    notesObj = JSON.parse(notes);

  }
  if (title == null) {
    titleObj = [];
  }
  else {
    titleObj = JSON.parse(title);
  }
  //remove that
  //splice method:for removing from the middle of array
  //array.splice(index,no of elemnets,replace value)
  notesObj.splice(index,1);
  titleObj.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(notesObj));
  localStorage.setItem("title",JSON.stringify(titleObj));
  showNotes();
}


let search=document.getElementById("searchText");
search.addEventListener("input",function(){
  console.log("fg");
   let inputval=search.value.toLowerCase();
   let notecards=document.getElementsByClassName("noteCard");
   Array.from(notecards).forEach(function(element){
     console.log(element);
     let cardTxt= element.getElementsByTagName("p")[0].innerText;
     if (cardTxt.includes(inputval)){
       //console.log("cnnc");
       element.style.display="block";
     }
     else{
      element.style.display="none";
     }

})


})