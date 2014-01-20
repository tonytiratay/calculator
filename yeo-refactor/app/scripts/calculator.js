var rounded = function(value){ // Arrondi automatiquement chaque élément de l'array a x chiffres après la virgule
  return (Math.round(value * 100)/100);
};
//________________________________Initialisation des variables et fonctions de calcul

var params = {
  tva: 20,
  tauxhoraire: 25,
  chargescoop: 10,
  chargespat: 54,
  chargessal: 28,
  moispardefaut: 1
};

var r = {};

var fromht = function(val) {
    r = {
              ht: val,
              get ttc(){rounded(this.ht * (1 + (params.tva / 100)))},
              get tva(){rounded(this.ttc - this.ht)},
              get valchargescoop(){rounded(this.ht * (params.chargescoop/100); )},
              get capital(){rounded(this.ht - this.valchargescoop)},
              get charges(){rounded((100 + parseInt(params.chargessal) + parseInt(params.chargespat)) / 100;)},
              get salaire(){rounded(this.capital / this.charges;)},
              get chargessal(){rounded(this.salaire * (params.chargespat / 100);)},
              get heurestravail(){rounded(this.salaire / params.tauxhoraire)}
        };
}
  // OLD
  // resultats.ht = val;
  // resultats.ttc = resultats.ht * (1 + (params.tva / 100));
  // resultats.tva = resultats.ttc - resultats.ht;
  // resultats.valchargescoop = resultats.ht * (params.chargescoop/100);
  // resultats.capital = resultats.ht - resultats.valchargescoop;
  // resultats.charges =  (100 + parseInt(params.chargessal) + parseInt(params.chargespat)) / 100;
  // resultats.salaire = resultats.capital / resultats.charges;
  // resultats.chargessal = resultats.salaire * (params.chargessal / 100);
  // resultats.chargespat = resultats.salaire * (params.chargespat / 100);
  // resultats.heurestravail = resultats.salaire / params.tauxhoraire;
  
  
}());


var fromttc = function(ttc) {
  r.ht = ttc * (100 / (100 + parseFloat(params.tva)));
  return r.ht;
}:

var fromtva = function(tva) {
  r.ht = (tva / params.tva) * 100;
  return r.ht;
}:

var fromchargescoop = function(chargescoop) {
  r.ht = params.chargescoop * chargescoop;
  return r.ht;
}:

var fromcapital = function(capital) {
  r.ht = parseInt(capital) + parseInt(params.chargescoop * 10);
  return r.ht;
}:

var fromchargessal = function(charge) {
  r.salaire = charge / (params.chargessal / 100);
  r.capital = r.charges * r.salaire;
  r.ht = parseInt(r.capital) + parseInt(params.chargescoop * 10);
  return r.ht;
}:

var fromchargespat = function(charge) {
  r.salaire = charge / (params.chargespat / 100);
  r.capital = r.charges * r.salaire;
  r.ht = parseInt(r.capital) + parseInt(params.chargescoop * 10);
  return r.ht;
}:

var fromsalaire = function(salaire) {
  r.capital = r.charges * (salaire * params.moispardefaut);
  r.ht = parseInt(r.capital) + parseInt(params.chargescoop * 10);
  return r.ht;
}: