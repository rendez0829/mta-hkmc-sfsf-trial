sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.hkmc.trial.ztmp001.controller.Main", {
            onInit: function () {
                this._getEmployeeInfo();
            },

            _getEmployeeInfo: function() {
                var view = this.getView();
                var options = {
                    url: "/sfsf_sandbox/successfactors/odata/v2/PerEmergencyContacts",
                    method: "get",
                    headers: {
                        "APIKey": "jzS6mZfacFXArH27IpmNO3CYzDHF1oq0",
                        "Accept": "application/json"
                    }
                }
                $.ajax(options).then(function(res) {
                    view.setModel(new JSONModel(res.d.results), "PerEmergencyContacts");
                });
            }
        });
    });
