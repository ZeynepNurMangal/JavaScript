// değişkenler
let addToDoButton = document.querySelector('.button');
let newInput = document.querySelector('#task');
let list = document.querySelector('ul');


// ekle butonuna tıklandığında çalışacak fonks
addToDoButton.addEventListener('click',function(){
    let listItem= document.createElement ('li') 

    list.appendChild(listItem)
    listItem.innerHTML = task.value 
    task.value= ""
    for (let i = 0; i < list.children.length; i++) {
        list.children[
          i
        ].innerHTML += `<button style="margin-right: 20px; margin-top:15px"class="close">&times</button></li>`;
      }
})

//tıklantığında listeden silinme fonks

list.addEventListener('click', function (e) {
  if (e.target.className == '' || e.target.className == 'checked') {
    e.target.classList.toggle('checked');
  } else {
    e.target.parentElement.remove();
  }
});




