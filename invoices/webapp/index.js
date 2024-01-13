sap.ui.define([
  "sap/ui/core/mvc/XMLView",  
  "sap/ui/core/ComponentContainer"
],
/**
 * @param {typeof sap.ui.core.mvc.XMLView} XMLView
 * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
 */
   function (XMLView, ComponentContainer) {
   /*  
    XMLView.create({
        viewName : "logaligroup.invoices.view.View_ppal"
    }).then(function (oView){
        oView.placeAt("content");
    }); */

    new ComponentContainer({
        name : "logaligroup.invoices",
        settings: {
            id : "invoices"
        },
        async: true

    }).placeAt("content")
   
   } 
);