Session.set("filter", "All");

Template.profFilter.events({
    'click .js-Ascending'(event) {
        
        Session.set("filter", "Ascending");
    },
    'click .js-Descending'(event) {
        
        Session.set("filter", "Descending");
    },
    
});