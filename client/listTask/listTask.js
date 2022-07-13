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
        },


        'click .js-tick' (){
            let taskID = this._id;
            if (this.comp){
                tododb.update({ _id:taskID},{
                    $set:{
                        comp:false
                    }
            });

        } else{
            tododb.update({ _id:taskID},{
                $set:{
                    comp:true
                }
        });
            
        }

    }

});

