sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent",
    "sap/m/MessageBox"

], (Controller, ODataModel, History, UIComponent, MessageBox) => {
    "use strict";


    return Controller.extend("sap.demo.infobox.myoffice.controller.LeaveApp", {

        onInit() {
            const oModel = new ODataModel({
                serviceUrl: "/odata/v4/leave/"
            });

            this.getView().setModel(oModel, "Employee");

            this.getView().bindElement({
                path: "/Employee('1')",
                model: "Employee"
            });

        },
        getRouter: function () {
            return UIComponent.getRouterFor(this);
        },
        onConfirm: function () {
            const oBindList = this.getView().getModel().bindList("/Leaves", undefined, undefined, undefined, undefined);
            const oView = this.getView();
            const startDate = oView.byId('DRS1').getDateValue();
            const endDate = oView.byId('DRS1').getSecondDateValue();
            const type = oView.byId('select').getSelectedKey();
            const oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "yyyy-MM-dd" });
            const oContext = oBindList.create({
                "employeeId_ID": "1f96fb5e-bece-4a6b-84b0-5f0634c7377b",
               "startDate": oDateFormat.format(startDate),
                "endDate": oDateFormat.format(endDate),
                "type": type,
                "status": "Pending"
            }, true);
            oContext.created().then(function () {
                MessageBox.success("Leave created successfully");
            }).catch(function (oError) {
                MessageBox.error("Error creating leave: " + oError.message);
            });
        },
            
    

        onBack: function () {
            this.getRouter().navTo("RouteMyOffice");
        },

        handleChange: function (oEvent) {
            console.log('prueba')
            var oCalendar = oEvent.getSource();

            let oSelectedDate = oCalendar.getSelectedDates()[0]
            console.log(oSelectedDate)
        }
    });
});