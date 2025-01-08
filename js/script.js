document.querySelector('#push').onclick = function (){
    if (document.querySelector('#newtask input').value.length == 0)
    {
        alert("Please enter a task");
        
    }
    else{
       var x=  document.querySelector('#newtask input').value;
       console.log(x);
       var li = `<li class="task">${x}
       <button type="submit" class="delete"><i class="far fa-trash-alt"></i>
       </button>
      
       </li>
       <hr>
          
         `;
       document.querySelector('#tasks ul').innerHTML += li;
      
    
 }
 var currentbutton = document.querySelectorAll('.delete');
  for (var i=0; i<currentbutton.length; i++){
    currentbutton[i].onclick = function(){
      this.parentNode.nextElementSibling.remove();
      this.parentNode.remove();
      
    }
  }
  document.querySelector('#newtask input').value = "";
  
  var currentTask = document.querySelectorAll('.task');
for (var i = 0; i < currentTask.length; i++) {
    currentTask[i].onclick = function() {
        // إضافة أو إزالة الخط عبر النص عند النقر
        this.classList.toggle('strike-through');
    }
}

    return ;
}
