$(document).ready(function(){$(".switch, .switch-more").slideToggle("fast"),$("#togglebutton").click(function(){$(".switch").slideToggle("slow")}),$("#togglebuttonmore").click(function(){$(".switch-more").slideToggle("slow")});var a=function(a){return Math.round(100*a)/100},b={tva:20,tauxhoraire:25,chargescoop:10,chargespat:54,chargessal:28,moispardefaut:1},c={},d=function(a){c.ht=a,c.ttc=c.ht*(1+b.tva/100),c.tva=c.ttc-c.ht,c.valchargescoop=c.ht*(b.chargescoop/100),c.capital=c.ht-c.valchargescoop,c.charges=(100+parseInt(b.chargessal)+parseInt(b.chargespat))/100,c.salaire=c.capital/c.charges,c.chargessal=c.salaire*(b.chargessal/100),c.chargespat=c.salaire*(b.chargespat/100),c.heurestravail=c.salaire/b.tauxhoraire},e=function(a){return c.ht=a*(100/(100+parseFloat(b.tva))),c.ht},f=function(a){return c.ht=a/b.tva*100,c.ht},g=function(a){return c.ht=parseInt(a)+parseInt(10*b.chargescoop),c.ht},h=function(a){return c.salaire=a/(b.chargessal/100),c.capital=c.charges*c.salaire,c.ht=parseInt(c.capital)+parseInt(10*b.chargescoop),c.ht},i=function(a){return c.salaire=a/(b.chargespat/100),c.capital=c.charges*c.salaire,c.ht=parseInt(c.capital)+parseInt(10*b.chargescoop),c.ht},j=function(a){return c.capital=c.charges*a*b.moispardefaut,c.ht=parseInt(c.capital)+parseInt(10*b.chargescoop),c.ht};$("#click").on("click",function(){$("#ht").val(a(c.ht)),$("#ttc").val(a(c.ttc)),$("#capital").val(a(c.capital)),$("#salaire").val(a(c.salaire)),$("#chargespat").val(a(c.chargespat)),$("#chargessal").val(a(c.chargessal)),$("#tva").val(a(c.tva)),$("#paramstva").val(a(b.tva)),$("#paramstauxhoraire").val(a(b.tauxhoraire)),$("#paramschargescoop").val(a(b.chargescoop)),$("#paramschargespat").val(a(b.chargespat)),$("#paramschargessal").val(a(b.chargessal)),$("#paramsheurestravail").val(a(c.heurestravail)),$(".resultat").text("Soit "+a(c.heurestravail)+" heures travaillées pour "+a(b.tauxhoraire)+"€ (net) de l'heure.")}),$("#ht").on("keyup",function(){val=this.value,console.log(val),d(val),c.ht=val,$("#click").trigger("click")}),$("#ttc").on("keyup",function(){val=this.value,d(e(val)),c.ttc=val,$("#click").trigger("click")}),$("#capital").on("keyup",function(){val=this.value,d(g(val)),c.capital=val,$("#click").trigger("click")}),$("#salaire").on("keyup change",function(){val=this.value,d(j(val)),c.salaire=val,$("#click").trigger("click")}),$("#chargespat").on("keyup change",function(){val=this.value,d(i(val)),c.chargespat=val,$("#click").trigger("click")}),$("#chargessal").on("keyup change",function(){val=this.value,d(h(val)),c.chargessal=val,$("#click").trigger("click")}),$("#tva").on("keyup change",function(){val=this.value,d(f(val)),c.tva=val,$("#click").trigger("click")}),$("#paramstva").on("keyup change",function(){b.tva=this.value,d(c.ht),$("#click").trigger("click"),console.log(c.ttc*(100/(100+parseInt(b.tva))))}),$("#paramschargessal").on("keyup change",function(){b.chargessal=this.value,d(c.ht),$("#click").trigger("click")}),$("#paramschargespat").on("keyup change",function(){b.chargespat=this.value,d(c.ht),$("#click").trigger("click")}),$("#paramschargescoop").on("keyup change",function(){b.chargescoop=this.value,d(c.ht),$("#click").trigger("click")}),$("#paramstauxhoraire").on("keyup change",function(){b.tauxhoraire=this.value,d(c.ht),$("#click").trigger("click")}),$("#paramsheurestravail").on("keyup change",function(){c.heurestravail=this.value,b.tauxhoraire=c.salaire/c.heurestravail,d(c.ht),c.heurestravail=this.value,$("#click").trigger("click")})});