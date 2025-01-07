sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], (Controller, History, UIComponent) => {
    "use strict";

    return Controller.extend("sap.demo.infobox.myoffice.controller.MyOffice", {
        onInit() {
        },
        getRouter: function () {
            return UIComponent.getRouterFor(this);
        },

        onLeaveTilePress: function () {
            this.getRouter().navTo("RouteLeaveApp");
        }
    });
});