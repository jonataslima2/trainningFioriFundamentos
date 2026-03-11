sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/Fragment"
], (BaseController, Fragment) => {
  "use strict";

  return BaseController.extend("fiori.fundamentos.controller.View2", {
      onInit() {
          //resgata o Router
          let oRouter = this.getOwnerComponent().getRouter();

          //resgata uma rota específica (de detalhe)
          let oRouteView2 = oRouter.getRoute("RouteView2");

          //configura uma função a ser chamada pro evento PatternMatched
          oRouteView2.attachPatternMatched(this.rotaView2, this);
      },

      rotaView2(oEvent){

          //lê os "argumentos" (ou parâmetros) que estão na URL
          let oArguments = oEvent.getParameter('arguments');  
          //resgata o id do funcionário lendo a variável configurada na rota (manifest.json)
          let sIdFuncionario = oArguments.idFuncionario;
          
          
          //binding de elemento - vincula os dados do funcionário na página
          let oView = this.getView();
          let sPath = "/employees/" + sIdFuncionario;
          oView.bindElement({
              path: sPath,
              model: "dados"
          });

          if(!this.oFragmento){
          //instancia o fragmento em formato Promise
          var oPromessaDoFragmento = Fragment.load({
            id: this.getView().getId(),
            name: "fiori.fundamentos.view.fragment.detalhes",
            controller: this
          });

          //a Promise caso resolvida com sucesso, vai chamaar uma função que está associada ao método Then da promise
          oPromessaDoFragmento.then(oFragment => {
              //adiciona o fragmento como dependente da View
              this.getView().addDependent(oFragment);

              //exibe o fragmento na pagina
              this.getView().byId("page2").addContent(oFragment);

              //guardando como referência futura
              this.oFragmento = oFragment;
          });
        }
      }

  });
});