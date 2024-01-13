sap.ui.define([ 
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
   /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.JSONModel} JSONModel
     */
   function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("logaligroup.invoices2.controller.View_ppal", {
       
       /**
        * 1º Creamos un objeto, oData, que contendrá un objeto, recipient, que a su vez será un objeto con una clave / valor (JSON):
        * 2º Creamos un objeto, oModel, de tipo JSON, que recibirá por parámetro el contenido del objeto anterior, oData:
        * 3º Desde este controlador, this, obtenemos la instancia de la vista, y pasamos a la vista el objeto JSON creado, para que pueda utilizar sus valores, en este caso name : "Word"
        */
        onInit: function () {
            var oData = {
                recipient : {
                     name : "Word"
                }
              };

            var oModel = new JSONModel(oData); 
            this.getView().setModel(oModel);               
        },

            onShowHello: function () {
               /**
                * alert("Hello Word");
                */ 
                MessageToast.show("Hello Word");
            }
        });
    });
