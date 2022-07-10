AccountsTemplates.configure ({
    forbidClientAccountCreation: false,
    // confirmpassword : false
});


let pwd = AccountsTemplates.removeField("password");
AccountsTemplates.removeField("email");
AccountsTemplates.addFields([
    {
    _id: 'username',
    type: 'text',
    required : true,
    displayName: "Username",
    // func: function(value){return value !== 'Full Name';},
    // errStr: 'Only "Full Name" allowed!',
    },

    {
    _id: "gender",
    type: "select",
    displayName: "Gender",
    select: [
        {
            text: "Male",
            value: "male",
        },
        {
            text: "Female",
            value: "female",
        },
    ],
    },
pwd

]);