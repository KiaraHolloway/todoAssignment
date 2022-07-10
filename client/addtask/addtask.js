Template.addtask.events ({
    'click #js-add' (){
       let newtask = $("#newtask").val();
      tododb.insert({
        "task": newtask
      })
        $("#newtask").val("");
    },



    'click .privateTask'() {
        if ($(".fa-xmark").hasClass("d-none")) {
            $(".fa-check").addClass("d-none");
            $(".fa-xmark").removeClass("d-none");
        }
        else {
            $(".fa-check").removeClass("d-none");
            $(".fa-xmark").addClass("d-none");
        }
    },

    'click .js-trash'() {
        let taskId = this._id;
       tododb.update ({_id: listId},{
        set: {
            "trashBin" : true
        }
    
    });
    }

});