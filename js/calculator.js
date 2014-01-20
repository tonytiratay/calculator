$(document).ready(function() {

//________________________________Système

$( ".switch, .switch-more" ).slideToggle("fast");

$( "#togglebutton" ).click(function() { // Ouvre et ferme les fonctions avancées
  $( ".switch" ).slideToggle( "slow");
});

$( "#togglebuttonmore" ).click(function() {// Ouvre et ferme les infos supplémentaires
  $( ".switch-more" ).slideToggle( "slow");
});

var rounded = function(value){ // Arrondi automatiquement chaque élément de l'array a x chiffres après la virgule
    return (Math.round(value * 100)/100);
}
//________________________________Initialisation des variables et fonctions de calcul
	
var params = {
  tva: 20,
  tauxhoraire: 25,
  chargescoop: 10,
  chargespat: 54,
  chargessal: 28,
  moispardefaut: 1
}

var resultats = {};

var fromht = function(val) {
  resultats.ht = val;
  resultats.ttc = resultats.ht * (1 + (params.tva / 100));
  resultats.tva = resultats.ttc - resultats.ht;
  resultats.valchargescoop = resultats.ht * (params.chargescoop/100);
  resultats.capital = resultats.ht - resultats.valchargescoop;
  resultats.charges =  (100 + parseInt(params.chargessal) + parseInt(params.chargespat)) / 100;
  resultats.salaire = resultats.capital / resultats.charges;
  resultats.chargessal = resultats.salaire * (params.chargessal / 100);
  resultats.chargespat = resultats.salaire * (params.chargespat / 100);
  resultats.heurestravail = resultats.salaire / params.tauxhoraire;
  
  
}


var fromttc = function(ttc) {
  resultats.ht = ttc * (100 / (100 + parseFloat(params.tva)));
  return resultats.ht;
  }

var fromtva = function(tva) {
  resultats.ht = (tva / params.tva) * 100;
  return resultats.ht;
  }

var fromchargescoop = function(chargescoop) {
  resultats.ht = params.chargescoop * chargescoop;
  return resultats.ht;
  }

var fromcapital = function(capital) {
  resultats.ht = parseInt(capital) + parseInt(params.chargescoop * 10);
  return resultats.ht;
  }

var fromchargessal = function(charge) {
  resultats.salaire = charge / (params.chargessal / 100);
  resultats.capital = resultats.charges * resultats.salaire;
  resultats.ht = parseInt(resultats.capital) + parseInt(params.chargescoop * 10);
  return resultats.ht;
  }

var fromchargespat = function(charge) {
  resultats.salaire = charge / (params.chargespat / 100);
  resultats.capital = resultats.charges * resultats.salaire;
  resultats.ht = parseInt(resultats.capital) + parseInt(params.chargescoop * 10);
  return resultats.ht;
  }

var fromsalaire = function(salaire) {
  resultats.capital = resultats.charges * (salaire * params.moispardefaut);
  resultats.ht = parseInt(resultats.capital) + parseInt(params.chargescoop * 10);
  return resultats.ht;
  }


//_____________________________________events
 $("#click").on("click", function() {
      $("#ht").val(rounded(resultats.ht));
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
      $(".resultat").text("Soit " + (rounded(resultats.heurestravail)) + " heures travaillées pour " + rounded(params.tauxhoraire) + "€ (net) de l'heure.");
      
})
 

 $("#ht").on("keyup", function(e) {
      val = this.value;
      console.log(val);
      fromht(val);
      resultats.ht =  val;
      $("#click").trigger("click");
    })

 $("#ttc").on("keyup", function() {
      val = this.value;
      fromht(fromttc(val));
      resultats.ttc = val;
      $("#click").trigger("click");
    })

 $("#capital").on("keyup", function() {
      val = this.value;
      fromht(fromcapital(val));
      resultats.capital = val;
      $("#click").trigger("click");
    })

 $("#salaire").on("keyup change", function() {
      val = this.value;
      fromht(fromsalaire(val));
      resultats.salaire = val;
      $("#click").trigger("click");
    })

  $("#chargespat").on("keyup change", function() {
      val = this.value;
      fromht(fromchargespat(val));
      resultats.chargespat = val;
      $("#click").trigger("click");
    })

 $("#chargessal").on("keyup change", function() {
      val = this.value;
      fromht(fromchargessal(val));
      resultats.chargessal = val;
      $("#click").trigger("click");
    })

 $("#tva").on("keyup change", function() {
      val = this.value;
      fromht(fromtva(val));
      resultats.tva = val;
      $("#click").trigger("click");
    })

 $("#paramstva").on("keyup change", function() {
      params.tva = this.value;
      fromht(resultats.ht);
      $("#click").trigger("click");
      console.log(resultats.ttc * (100 / (100 + parseInt(params.tva))));
    })
 $("#paramschargessal").on("keyup change", function() {
      params.chargessal = this.value;
      fromht(resultats.ht);
      $("#click").trigger("click");
    })
 $("#paramschargespat").on("keyup change", function() {
      params.chargespat = this.value;
      fromht(resultats.ht);
      $("#click").trigger("click");
    })
  $("#paramschargescoop").on("keyup change", function() {
      params.chargescoop = this.value;
      fromht(resultats.ht);
      $("#click").trigger("click");
    })
 $("#paramstauxhoraire").on("keyup change", function() {
      params.tauxhoraire = this.value;
      fromht(resultats.ht);
      $("#click").trigger("click");
    })
  $("#paramsheurestravail").on("keyup change", function() {
      resultats.heurestravail = this.value;
      params.tauxhoraire = resultats.salaire / resultats.heurestravail
      fromht(resultats.ht);
      resultats.heurestravail = this.value;
      $("#click").trigger("click");
    })

//______________________________________Tests




});

