sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("fiori.fundamentos.controller.View1", {
        onInit() {  
        },
        aoPressionarFuncionario(oEvent){
            //resgata o list item da tela
            let oListItem = oEvent.getParameters().listItem;
            //acessa o item no modelo
            let oDados = oListItem.getBindingContext("dados");
            let sCaminhoFuncionario = oDados.getPath().substring(11);
            
            //acessa o Component.js para buscar o router
            let oComponent = this.getOwnerComponent();
            //acessa o Router
            let oRouter = oComponent.getRouter();
            //efetua a navegação para a Rota2, passando dois parâmetros:
            //nome da rota e um objeto com o id do funcionario na propriedade idFuncionario
            oRouter.navTo("RouteView2", {
                idFuncionario: sCaminhoFuncionario   
            });
        }
    });
});