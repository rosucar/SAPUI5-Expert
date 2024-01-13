sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";
         /**
        * 1º (desde models.js) Creamos un objeto, oData, que contendrá un objeto, recipient, que a su vez será un objeto con una clave / valor (JSON):
        * 2º (desde models.js) Creamos un objeto, oModel, de tipo JSON, que recibirá por parámetro el contenido del objeto anterior, oData:
        * 3º (desde el controlador View_ppal.controller.js) Desde este controlador, this, obtenemos la instancia de la vista, y pasamos a la vista el objeto JSON creado, para que pueda utilizar sus valores, en este caso name : "Word"
        */

        return {
            createDeviceModel: function () {
                var oData = {
                    recipient : {
                         name : "Word"
                    }
                  };
                return new JSONModel(oData);
        }
    };
});