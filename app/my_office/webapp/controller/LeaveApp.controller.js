sap.ui.define([
    "sap/ui/core/mvc/Controller",    
    "sap/ui/model/odata/v4/ODataModel"
], (Controller, ODataModel) => {
    "use strict";



    return Controller.extend("sap.demo.infobox.myoffice.controller.LeaveApp", {
        onInit() {
            const oEmployeeModel = new ODataModel({
                serviceUrl: "/odata/v4/leave/"
            });

            this.getView().setModel(oEmployeeModel, "Employee");

            this.getView().bindElement({
                path: "/Employee('1')",
                model: "Employee"
            });

        }
    });
});