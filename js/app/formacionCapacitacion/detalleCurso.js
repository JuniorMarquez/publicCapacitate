'use strict';


app.controller('detalleCursoCtrl', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig', 'toaster', '$state',function($scope,$http, $filter,$modal, MyService,filterFilter, datepickerConfig,toaster,$state) {
   $scope.toaster = {
    title: 'Exito',
    type: 'success',
    text: 'Miembro habilitado con exito'
  };

   // alert("hola");

   $scope.cargaCursos=function(){
      // $scope.capacitacionesFiltradas=[];
    var area = MyService.data.areaSeleccionada;
    http.get('http://54.202.62.62:1346/capacitacion/?area='+area).then(function (resp) {
      $scope.capacitaciones = resp.data.results;
      });
      for (var i = 0; i < $scope.capacitaciones.length; ++i){
          if ($scope.capacitaciones[i].area==area){
             $scope.capacitaciones[i].img="administracion/js/controllers/uploads/"+$scope.capacitaciones[i].img;          
            $scope.capacitacionesFiltradas.push($scope.capacitaciones[i]);
          }
       }
   };
$scope.carga=function(){
  var item=[];
  var identificador = MyService.data.idCapacitacion;
  // alert("identificador: "+identificador);
  $http.get('http://54.202.62.62:1346/capacitacion/'+identificador).success(function(respuesta){        
    item=respuesta;
    $scope.capacitacion=item;
    $scope.itemsContenido=item.itemsContenido;
  });
};
$scope.carga();
 // $scope.cargaCursos();

$scope.miembros = [];
    $scope.today = function() {
      $scope.fechaInicio = new Date();
    };
    // $scope.today();

    $scope.clear = function () {
      $scope.fechaFin = null;
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };
     $scope.open2 = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened2 = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = 'MM/dd/yyyy';
    $scope.tbOptionsPendientes = {
    filterText: ''};
    $scope.filter = '';
      $scope.tbOptionsPendientes = {
      bDestroy: true,
      pageLength: 150,
      data: []                                              
    };
    
    $scope.filter = '';
  

 

}]);
