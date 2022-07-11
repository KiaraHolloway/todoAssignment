Template.addtask.events ({
    'click #js-add' (){
       let newTask = $("#newTask").val();
       if (validateTask(newTask)) {
            tododb.insert({
                "task": newTask
            });
                $("#newTask").val("");
    }
},

    'keypress #newTask'(event){
        if(event.keyCode == 13) {
                addNewTask();
            }
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
    },

});

        let validateTask = (task) => {
            let valid = true;
            if (task == "") {
                console.log("Cannot be empty");
                valid = false;
            }
            return valid;
        }