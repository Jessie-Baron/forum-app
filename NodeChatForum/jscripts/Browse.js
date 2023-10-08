var roomNum = 1;

function addThread(){
  var input = document.getElementById("roomName");
console.log(roomName);
console.log(input.value);
if(input.value != ""){
  let newProductElement= createRoom(input.value);

  let element=document.createElement('div');
  element.innerHTML=newProductElement;

  let chatButtons= document.querySelector('.chat-rooms')
  chatButtons.append(element);
}

 }
 
 function createRoom(input){

    return `
    <div class="chat-content">
    <button type="button" class="button" onClick="hideOther">${input}</button>
    </div>
    `;
 }

 /*function hideOther(){
  this function needs to display a div element that contains chat records
  and hide all other text and button elements until a return button is clicked
 }
 */