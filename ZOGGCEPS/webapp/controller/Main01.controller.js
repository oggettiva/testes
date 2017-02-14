sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
		"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("br.com.oggettiva.correiosBuscarCep.controller.Main01", {

		onEnviaCep: function(oEvent) {

			var svcep = this.byId("inputCEP").getValue();
			//console.log(svcep);

			var ApiURL = "https://viacep.com.br/ws/";
			var URLfull = ApiURL + svcep + "/json/";

			var oModel = new sap.ui.model.json.JSONModel(URLfull);
			this.getView().setModel(oModel);

		//	this.byId("inBairro").bindProperty("value", {
		//		path: '/bairro'
		//	});

			//	this.byId("InBairro").setValue(svcep);

	
		}
	});
});