$(document).ready(function() {

//________________________________Système

    $( ".switch, .switch-more" ).slideToggle("fast");

    $( "#togglebutton" ).click(function() { // Ouvre et ferme les fonctions avancées
      $( ".switch" ).slideToggle( "slow");
    });

    $( "#togglebuttonmore" ).click(function() {// Ouvre et ferme les infos supplémentaires
      $( ".switch-more" ).slideToggle( "slow");
    });

    //_____________________________________events
    $("#click").on("click", function() {
      $("#ht").val(r.ht);
      $("#ttc").val(r.ttc);
      $("#capital").val(r.capital);
      $("#salaire").val(r.salaire);
      $("#chargespat").val(r.chargespat);
      $("#chargessal").val(r.chargessal);
      $("#tva").val(r.tva);
      $("#paramstva").val(params.tva);
      $("#paramstauxhoraire").val(params.tauxhoraire);
      $("#paramschargescoop").val(params.chargescoop);
      $("#paramschargespat").val(params.chargespat);
      $("#paramschargessal").val(params.chargessal);
      $("#paramsheurestravail").val(r.heurestravail); 
      $(".resultat").text("Soit " + (r.heurestravail)) + " heures travaillées pour " + params.tauxhoraire) + "€ (net) de l'heure.";
    })


    $("#ht").on("keyup", function(e) {
      val = this.value;
      console.log(val);
      fromht(val);
      r.ht =  val;
      $("#click").trigger("click");
    })

    $("#ttc").on("keyup", function() {
      val = this.value;
      fromht(fromttc(val));
      r.ttc = val;
      $("#click").trigger("click");
    })

    $("#capital").on("keyup", function() {
      val = this.value;
      fromht(fromcapital(val));
      r.capital = val;
      $("#click").trigger("click");
    })

    $("#salaire").on("keyup change", function() {
      val = this.value;
      fromht(fromsalaire(val));
      r.salaire = val;
      $("#click").trigger("click");
    })

    $("#chargespat").on("keyup change", function() {
      val = this.value;
      fromht(fromchargespat(val));
      r.chargespat = val;
      $("#click").trigger("click");
    })

    $("#chargessal").on("keyup change", function() {
      val = this.value;
      fromht(fromchargessal(val));
      r.chargessal = val;
      $("#click").trigger("click");
    })

    $("#tva").on("keyup change", function() {
      val = this.value;
      fromht(fromtva(val));
      r.tva = val;
      $("#click").trigger("click");
    })

    $("#paramstva").on("keyup change", function() {
      params.tva = this.value;
      fromht(r.ht);
      $("#click").trigger("click");
      console.log(r.ttc * (100 / (100 + parseInt(params.tva))));
    })
    $("#paramschargessal").on("keyup change", function() {
      params.chargessal = this.value;
      fromht(r.ht);
      $("#click").trigger("click");
    })
    $("#paramschargespat").on("keyup change", function() {
      params.chargespat = this.value;
      fromht(r.ht);
      $("#click").trigger("click");
    })
    $("#paramschargescoop").on("keyup change", function() {
      params.chargescoop = this.value;
      fromht(r.ht);
      $("#click").trigger("click");
    })
    $("#paramstauxhoraire").on("keyup change", function() {
      params.tauxhoraire = this.value;
      fromht(r.ht);
      $("#click").trigger("click");
    })
    $("#paramsheurestravail").on("keyup change", function() {
      r.heurestravail = this.value;
      params.tauxhoraire = r.salaire / r.heurestravail
      fromht(r.ht);
      r.heurestravail = this.value;
      $("#click").trigger("click");
    })
});