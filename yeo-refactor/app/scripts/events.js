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