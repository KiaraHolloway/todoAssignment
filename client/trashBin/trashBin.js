Template.trashBinn.helpers({
        theTasks (){
           return tododb.find({"trashBin": true}); 
        }
});

Template.trashBinn.events({
    'click .js-trashRestore'(){
        let taskID = this._id;
        tododb.update({ _id:taskID},{
            $set:{
                "trashBin":false
            }

        })
    },

        'click .js-deleteThis'() {
            let taskID = this._id;
        tododb.remove({ _id:taskID})
        }


});