$(document).ready(function() {
	var tva = 19.6
    var ht = 0
    var ttc = 0

    $("#valtva").on("keyup change", function() {
  	  tva = this.value; 
      });

    $("#valauxhoraire").on("keyup change", function() {
  	  tva = this.value; 
      });

    $("#valht").on("keyup change", function() {
  	  ht = this.value; 
      ttc = ht * (1 + (tva / 100));
      $("#valttc").val(ttc.toFixed(2));
      });

    $("#valttc").on("keyup change", function() {
  	  ttc = this.value; 
      ht = ttc - ttc * (tva / 100);
      $("#valht").val(ht.toFixed(2));
      });







});

