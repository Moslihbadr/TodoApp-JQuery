$(document).ready(function(){
  let taskList = $("ul")
  // fonction pour ajouter des tâches
  $(".fa-plus").click(function() {
    let task = $("input").val();
    taskList.append("<li>"+task+"<i title='tâche accomplie' class='fa-solid fa-check'></i><i title='Supprimer la tâche' class='fa-solid fa-trash'></i>"+"</li>");
  });
  // fonction pour accomplie une tâche
  taskList.on("click",".fa-check",function(){
    $(this).parent("li").addClass("accomplie");
  });
  // fonction pour suppimer une tâche
  taskList.on("click",".fa-trash",function(){
    $(this).parent("li").hide();
  });
})
