$(document).ready(function() {
alert(1);
var tva = 19.6;
var tauxhoraire = 40;
var chargessupp = 10;

// Récupération options

    $("#valtva").on("keyup change", function() {
  	  tva = this.value; 
      })

    $("#valtauxhoraire").on("keyup change", function() {
      $(".resultat").text("Soit " + (ht / valtauxhoraire).parseInt(2) + " heures travaillées pour " + valtauxhoraire + "€ de l'heure.");
  	  tauxhoraire = this.value;
      })

    $("#valchargesupp").on("keyup change", function() {
  	  chargessupp = this.value; 
      })

// A partir de HT

var fromHt = function htToResults(val) {
	var ht = val;
	var ttc = ht * (1 + (tva / 100));
	var val_tva = ttc - ht;
	var val_charges_supp = ht * 0.1;
	var capital = ht - val_charges_supp;
	var salaire1 = capital / 1.82;
	var charges_sal = salaire1 * 0.28;
	var charges_pat = salaire1 * 0.54;
	var heures_travail = ht / tauxhoraire;
	var resultats = [ht,ttc,val_tva,val_charges_supp,capital,salaire1,charges_sal,charges_pat,heures_travail];
	return resultats;
}

// Fonctions de conversions 

var fromTtc = function ttcToResults(ttc) {
	ht = ttc - ttx * (tva/100);
	return htToResults(ht);
	}

var fromTva = function tvaToResults(val_tva) {
	ttc = 100 * val_tva / 100;
	ht = ttc - ttx * (tva/100);
	return htToResults(ht);
	}

var fromChargesSupp = function chargesSuppToResults(val_charges_coop) {
	ht = 10 * val_charges_coop;
	return htToResults(ht);
	}

var fromCapital = function capitalToResults(capital) {
	ht = chargessupp * capital / 9;
	return htToResults(ht);
	}

var fromChargesSal = function chargesSalToResults(charge) {
	salaire = charge / 0.28;
	capital = 1.82 * salaire;
	ht = chargessupp * capital / 9;
	return htToResults(ht);
	}

var fromChargesPat = function chargespatToResults(charge) {
	salaire = charge / 0.54;
	capital = 1.82 * salaire;
	ht = chargessupp * capital / 9;
	return htToResults(ht);
	}

var fromSal = function salToResults(salaire,mois) {
	capital = 1.82 * (salaire * mois);
	ht = chargessupp * capital / 9;
	return htToResults(ht);
	}

// Système


var getResult = function extractResult(param,id){
	return (fromHt(param)[id]);
}

var arrondir = function(element,arrondi){
	$.each(element, function(i,v) {
		Math.round(number).toFixed(arrondi);
	})

		return arrondi;
}

 

    // Calculs Formulaire
    //Resultats  ht: 0 / ttc: 1 / val_tva: 2 / val_charges_supp: 3 / capital: 4 / salaire1: 5 / charges_sal:6 / charges_pat:7 / heures_travail: 8

    $("#valht").on("keyup change", function() {
  	  var param = this.value; 
      $("#valttc").val(getResult(param,1));
      $(".resultat").text("Soit " + getResult(param,8) + " heures travaillées pour " + tauxhoraire + "€ de l'heure.");
      })



});