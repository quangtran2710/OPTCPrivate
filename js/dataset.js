var dataSet = [
    [ "Monkey D. Luffy", 1, 5, 5, 5, 5, 0, 0, 0],
	[ "Mami", 1, 5, 5, 5, 5, 0, 0, 0],
 ];

//Dataset Name,ID,Heal,Despair,Bind,Special,Orb,Defense,Meat

$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "ID" },
            { title: "Auto Heal" },
            { title: "Anti Despair" },
            { title: "Anti Bind" },
            { title: "Special Reduce" },
			{ title: "Orb" },
			{ title: "Defense Up" },
			{ title: "Meat" },
        ]
    } );
} );