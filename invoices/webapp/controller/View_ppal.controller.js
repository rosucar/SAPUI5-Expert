sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",  
   "logaligroup/invoices/model/models",
   "sap/ui/model/resource/ResourceModel"
   /**
    *  "sap/ui/model/json/JSONModel" 
    *  esta es la referencia al modelo JSON de SAP`, pero ahora tenemos definido esta referencia en nuestro propio models.js y lo hacemos referencia con:
    *  "logaligroup/invoices/model/models"
    */   
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resources.ResourceModel} ResourceModel
     */
     function (Controller, MessageToast,models,ResourceModel) {
        "use strict";

        return Controller.extend("logaligroup.invoices.controller.View_ppal", {
           /**
        * 1º (desde models.js) Creamos un objeto, oData, que contendrá un objeto, recipient, que a su vez será un objeto con una clave / valor (JSON):
        * 2º (desde models.js) Creamos un objeto, oModel, de tipo JSON, que recibirá por parámetro el contenido del objeto anterior, oData:
        * 3º Desde este controlador, this, obtenemos la instancia de la vista, y pasamos a la vista el objeto JSON creado, para que pueda utilizar sus valores, en este caso name : "Word"
        */
        onInit: function () {
            /**
             * El contenido  de esta función, ahora la trasladamos al archivo component.js, 
             * para que se pueda instanciar desde otros contenedores como el launchpad
             *  // set data model on the view:
             * this.getView().setModel(models.createDeviceModel() );     
             
             *  // set i18n model on the view:
             * // si comento las siguientes dos líneas, también funciona, pero sólo para el idioma por defecto i18n
             * var i18nModel = new ResourceModel({ bundleName : "logaligroup.invoices.i18n.i18n_sp"});
             * this.getView().setModel(i18nModel, "i18n_sp");// "118n" es el nombre de este modelo. el mismo que estamos utilizando en la vista
            
             */          
        },

            onShowHello: function () {
                /**
                 * alert("Hello Word");
                 */ 
                // read text fromi18n model:
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                // read property from data model:
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                // MessageToast.show("Hello Word");
                MessageToast.show(sMsg);
             }
 
        });
    });
