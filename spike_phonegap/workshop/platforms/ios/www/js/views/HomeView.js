var HomeView = function (adapter, template, listItemTemplate) {

    this.initialize = function () {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');

    };

    this.initialize();

    this.render = function() {
        this.el.html(template());
        this.el.on('keyup', '.search-key', this.findByName);
        return this;
    };

    this.findByName = function() {
        adapter.findByName($('.search-key').val()).done(
          function(employees) {
            $('.employee-list').html(listItemTemplate(employees));
          });
    };
}
