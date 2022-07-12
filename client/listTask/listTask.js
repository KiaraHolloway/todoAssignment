Template.listTasks.helpers({
    theTasks() {
        return tododb.find({"trashBin":false});
    }
});

Template.listTasks.events({
        'click .js-trashThis'(){
            let taskID = this._id;
            tododb.update({ _id:taskID},{
                $set:{
                    "trashBin":true
                }

            })
        }
});