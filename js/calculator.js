$(document).ready(function() {

	var tva = 19.6;
	var valtauxhoraire = 40;
	var valchargescoop = 10;
    var ht = 100;
    var ttc = 0;

    
    // Récupération options

    $("#valtva").on("keyup change", function() {
  	  tva = this.value; 
      })

    $("#valtauxhoraire").on("keyup change", function() {
      $(".resultat").text("Soit " + (ht / valtauxhoraire) + " heures travaillées pour " + valtauxhoraire + "€ de l'heure.");
  	  valtauxhoraire = this.value;
      })

    $("#valchargescoop").on("keyup change", function() {
  	  valchargescoop = this.value; 
      })

    // Calculs Formulaire

    $("#valht").on("keyup change", function() {
  	  ht = this.value; 
      ttc = ht * (1 + (tva / 100));
      $("#valttc").val(ttc.toFixed(2));
      $(".resultat").text("Soit " + (ht / valtauxhoraire) + " heures travaillées pour " + valtauxhoraire + "€ de l'heure.");
      })

    $("#valttc").on("keyup change", function() {
  	  ttc = this.value; 
      ht = ttc - ttc * (tva / 100);
      $("#valht").val(ht.toFixed(2));
      $(".resultat").text("Soit " + (ht / valtauxhoraire) + " heures travaillées pour " + valtauxhoraire + "€ de l'heure.");
      })







});

