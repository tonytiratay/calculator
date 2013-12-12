$(document).ready(function() {

//________________________________Système


$( ".switch" ).slideToggle( "fast", function() {// AUTO Ouvre et ferme les fonctions avancées
});
$( ".switch-more" ).slideToggle( "fast", function() {// AUTO Ouvre et ferme les infos supplémentaires
});

$( "#togglebutton" ).click(function() { // Ouvre et ferme les fonctions avancées
$( ".switch" ).slideToggle( "fast", function() {
});
});

$( "#togglebuttonmore" ).click(function() {// Ouvre et ferme les infos supplémentaires
$( ".switch-more" ).slideToggle( "fast", function() {
});
});

var rounded = function(value){ // Arrondi automatiquement chaque élément de l'array a x chiffres après la virgule

    return value.toFixed(2);
    
}
//________________________________Initialisation des variables et fonctions de calcul
	
var params = {};
  params.tva = 19.6;
  params.tauxhoraire = 25;
  params.chargescoop = 10;
  params.chargespat = 0.54;
  params.chargessal = 0.28;
  params.moispardefaut = 1;

var resultats = {};

var fromht = function(val) {
  resultats.ht = val;
  resultats.ttc = resultats.ht * (1 + (params.tva / 100));
  resultats.tva = resultats.ttc - resultats.ht;
  resultats.valchargescoop = resultats.ht * 0.1;
  resultats.capital = resultats.ht - resultats.valchargescoop;
  resultats.salaire = resultats.capital / 1.82;
  resultats.chargessal = resultats.salaire * 0.28;
  resultats.chargespat = resultats.salaire * 0.54;
  resultats.heurestravail = resultats.salaire / params.tauxhoraire;
}


var fromttc = function(ttc) {
  resultats.ht = ttc * (100 / (100 + params.tva));
  return resultats.ht;
  }

var fromtva = function(tva) {
  resultats.ttc = (tva / params.tva) * 100;
  resultats.ht = fromttc(resultats.ttc);
  return resultats.ht;
  }

var fromchargescoop = function(chargescoop) {
  resultats.ht = 10 * chargescoop;
  return resultats.ht;
  }

var fromcapital = function(capital) {
  resultats.ht = params.chargescoop * capital / 9;
  return resultats.ht;
  }

var fromchargessal = function(charge) {
  resultats.salaire = charge / 0.28;
  resultats.capital = 1.82 * resultats.salaire;
  resultats.ht = params.chargescoop * resultats.capital / 9;
  return resultats.ht;
  }

var fromchargespat = function(charge) {
  resultats.salaire = charge / 0.54;
  resultats.capital = 1.82 * resultats.salaire;
  resultats.ht = params.chargescoop * resultats.capital / 9;
  return resultats.ht;
  }

var fromsalaire = function(salaire) {
  resultats.capital = 1.82 * (salaire * params.moispardefaut);
  resultats.ht = params.chargescoop * resultats.capital / 9;
  return resultats.ht;
  }


//_____________________________________events

 $("#ht").on("keyup change", function() {
      val = this.value;
      fromht(val);
      $("#ttc").val(rounded(resultats.ttc));
      $("#capital").val(rounded(resultats.capital));
      $("#salaire").val(rounded(resultats.salaire));
      $("#chargespat").val(rounded(resultats.chargespat));
      $("#chargessal").val(rounded(resultats.chargessal));
      $("#tva").val(rounded(resultats.tva));
      $("#paramstva").val(rounded(params.tva));
      $("#paramstauxhoraire").val(rounded(params.tauxhoraire));
      $("#paramschargescoop").val(rounded(params.chargescoop));
      $("#paramschargespat").val(rounded(params.chargespat));
      $("#paramschargessal").val(rounded(params.chargessal));
      $("#paramsheurestravail").val(rounded(resultats.heurestravail));      
      $(".resultat").text("Soit " + (rounded(resultats.heurestravail)) + " heures travaillées pour " + params.tauxhoraire + "€ (net) de l'heure.");
      })

 $("#ttc").on("keyup change", function() {
      val = this.value;
      fromht(fromttc(val));
      $("#ht").val(rounded(resultats.ht));
      $("#capital").val(rounded(resultats.capital));
      $("#salaire").val(rounded(resultats.salaire));
      $("#chargespat").val(rounded(resultats.chargespat));
      $("#chargessal").val(rounded(resultats.chargessal));
      $("#tva").val(rounded(resultats.tva));
      $("#paramstva").val(rounded(params.tva));
      $("#paramstauxhoraire").val(rounded(params.tauxhoraire));
      $("#paramschargescoop").val(rounded(params.chargescoop));
      $("#paramschargespat").val(rounded(params.chargespat));
      $("#paramschargessal").val(rounded(params.chargessal));
      $("#paramsheurestravail").val(rounded(resultats.heurestravail));      
      $(".resultat").text("Soit " + (rounded(resultats.heurestravail)) + " heures travaillées pour " + params.tauxhoraire + "€ (net) de l'heure.");
      })

 $("#capital").on("keyup change", function() {
      val = this.value;
      fromht(fromcapital(val));
      $("#ht").val(rounded(resultats.ht));
      $("#ttc").val(rounded(resultats.ttc));
      $("#salaire").val(rounded(resultats.salaire));
      $("#chargespat").val(rounded(resultats.chargespat));
      $("#chargessal").val(rounded(resultats.chargessal));
      $("#tva").val(rounded(resultats.tva));
      $("#paramstva").val(rounded(params.tva));
      $("#paramstauxhoraire").val(rounded(params.tauxhoraire));
      $("#paramschargescoop").val(rounded(params.chargescoop));
      $("#paramschargespat").val(rounded(params.chargespat));
      $("#paramschargessal").val(rounded(params.chargessal));
      $("#paramsheurestravail").val(rounded(resultats.heurestravail));      
      $(".resultat").text("Soit " + (rounded(resultats.heurestravail)) + " heures travaillées pour " + params.tauxhoraire + "€ (net) de l'heure.");
      })

 $("#salaire").on("keyup change", function() {
      val = this.value;
      fromht(fromsalaire(val));
      $("#ht").val(rounded(resultats.ht));
      $("#ttc").val(rounded(resultats.ttc));
      $("#capital").val(rounded(resultats.capital));
      $("#chargespat").val(rounded(resultats.chargespat));
      $("#chargessal").val(rounded(resultats.chargessal));
      $("#tva").val(rounded(resultats.tva));
      $("#paramstva").val(rounded(params.tva));
      $("#paramstauxhoraire").val(rounded(params.tauxhoraire));
      $("#paramschargescoop").val(rounded(params.chargescoop));
      $("#paramschargespat").val(rounded(params.chargespat));
      $("#paramschargessal").val(rounded(params.chargessal));
      $("#paramsheurestravail").val(rounded(resultats.heurestravail));      
      $(".resultat").text("Soit " + (rounded(resultats.heurestravail)) + " heures travaillées pour " + params.tauxhoraire + "€ (net) de l'heure.");
      })

  $("#chargespat").on("keyup change", function() {
      val = this.value;
      fromht(fromchargespat(val));
      $("#ht").val(rounded(resultats.ht));
      $("#ttc").val(rounded(resultats.ttc));
      $("#capital").val(rounded(resultats.capital));
      $("#salaire").val(rounded(resultats.salaire));
      $("#chargessal").val(rounded(resultats.chargessal));
      $("#tva").val(rounded(resultats.tva));
      $("#paramstva").val(rounded(params.tva));
      $("#paramstauxhoraire").val(rounded(params.tauxhoraire));
      $("#paramschargescoop").val(rounded(params.chargescoop));
      $("#paramschargespat").val(rounded(params.chargespat));
      $("#paramschargessal").val(rounded(params.chargessal));
      $("#paramsheurestravail").val(rounded(resultats.heurestravail));      
      $(".resultat").text("Soit " + (rounded(resultats.heurestravail)) + " heures travaillées pour " + params.tauxhoraire + "€ (net) de l'heure.");
      })

 $("#chargessal").on("keyup change", function() {
      val = this.value;
      fromht(fromchargessal(val));
      $("#ht").val(rounded(resultats.ht));
      $("#ttc").val(rounded(resultats.ttc));
      $("#capital").val(rounded(resultats.capital));
      $("#salaire").val(rounded(resultats.salaire));
      $("#chargespat").val(rounded(resultats.chargespat));
      $("#tva").val(rounded(resultats.tva));
      $("#paramstva").val(rounded(params.tva));
      $("#paramstauxhoraire").val(rounded(params.tauxhoraire));
      $("#paramschargescoop").val(rounded(params.chargescoop));
      $("#paramschargespat").val(rounded(params.chargespat));
      $("#paramschargessal").val(rounded(params.chargessal));
      $("#paramsheurestravail").val(rounded(resultats.heurestravail));      
      $(".resultat").text("Soit " + (rounded(resultats.heurestravail)) + " heures travaillées pour " + params.tauxhoraire + "€ (net) de l'heure.");
      })

 $("#tva").on("keyup change", function() {
      val = this.value;
      fromht(fromtva(val));
      $("#ht").val(rounded(resultats.ht));
      $("#ttc").val(rounded(resultats.ttc));
      $("#capital").val(rounded(resultats.capital));
      $("#salaire").val(rounded(resultats.salaire));
      $("#chargespat").val(rounded(resultats.chargespat));
      $("#chargessal").val(rounded(resultats.chargessal));
      $("#paramstva").val(rounded(params.tva));
      $("#paramstauxhoraire").val(rounded(params.tauxhoraire));
      $("#paramschargescoop").val(rounded(params.chargescoop));
      $("#paramschargespat").val(rounded(params.chargespat));
      $("#paramschargessal").val(rounded(params.chargessal));
      $("#paramsheurestravail").val(rounded(resultats.heurestravail));      
      $(".resultat").text("Soit " + (rounded(resultats.heurestravail)) + " heures travaillées pour " + params.tauxhoraire + "€ (net) de l'heure.");
      })

//______________________________________Tests

fromht(fromchargessal(900));
console.log("Param Charges Sal: " + params.chargessal);
console.log("ht: " + resultats.ht);
console.log("ttc: " + resultats.ttc);
console.log("capital: " + resultats.capital);
console.log("salaire: " + resultats.salaire);
console.log("charges salariales: " + resultats.chargessal);
console.log("charges patronales: " + resultats.chargespat);
console.log("total charges salaires: " + (resultats.chargessal + resultats.chargespat));


});

