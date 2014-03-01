var EmployeeView = function(adapter, template, employee) {
 
    this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();

    this.render = function() {
        this.el.html(template(employee));
        this.el.on('click', '.add-location-btn', this.addLocation);
        return this;
    };

    this.addLocation = function(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(
            function(position) {
                alert(position.coords.latitude + ',' + position.coords.longitude);
            },
            function() {
                alert('Error getting location');
            });
        return false;
    };
     
}
