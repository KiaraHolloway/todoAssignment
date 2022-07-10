Template.addtask.events ({
    'click #js-add' (){
       let newtask = $("#newtask").val();
      tododb.insert({
        "task": newtask
      })
        $("#newtask").val("");
    }

});