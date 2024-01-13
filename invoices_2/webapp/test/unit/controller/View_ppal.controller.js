/*global QUnit*/

sap.ui.define([
	"invoices_2/controller/View_ppal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View_ppal Controller");

	QUnit.test("I should test the View_ppal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
