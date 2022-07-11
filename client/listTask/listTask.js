Template.listTasks.helpers({
    theTasks() {
        return tododb.find();
    }
});

Template.listTasks.events({
        'click .js-trashthis'(){
            let taskID = this._id;
            tododb.update({ _id:taskID},{
                $set:{
                    "trashBin":true
                }

            })
        }
});