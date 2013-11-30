$(document).ready(function() {
	var tva = 19.6
    var ht = 0
    var ttc = 0

    $("#valht").on("keyup change", function() {
   ttc = this.value; 
   newttc = ttc + ttc * (tva / 100);
   ttc = newttc
   $("#valttc").attr("placeholder", ttc);
});

});

