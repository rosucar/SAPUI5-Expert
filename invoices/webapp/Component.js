/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "logaligroup/invoices/model/models",
    "sap/ui/model/resource/ResourceModel"
],
    function (UIComponent, Device, models, ResourceModel) {
        "use strict";

        return UIComponent.extend("logaligroup.invoices.Component", {
            metadata: {
                manifest: "json"
                // ,
                // "rootView": {
                //     "viewName": "logaligroup.invoices.view.View_ppal",
                //     "type": "XML",
                //     "async": true,
                //     "id": "view_ppal"
                // }
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view:
                this.setModel(models.createDeviceModel());

                // set i18n model on the view:
                // si comento las siguientes dos líneas, también funciona, pero sólo para el idioma por defecto i18n
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.invoices.i18n.i18n_sp" });
                this.setModel(i18nModel, "i18n_sp"); // "118n" es el nombre de este modelo

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);