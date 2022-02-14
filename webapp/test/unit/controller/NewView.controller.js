/*global QUnit*/

sap.ui.define([
	"facturalopos/factura/controller/NewView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("NewView Controller");

	QUnit.test("I should test the NewView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
