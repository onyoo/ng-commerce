function Product(productShow, productRatings, ProductService) {
  var ctrl = this;

  ctrl.product = productShow.data;
  ctrl.ratings = productRatings.data;

  ctrl.uploadImage = function(image, invalid, id) {
    ProductService.uploadImage(image, invalid, id).then(function (resp) {
      ctrl.product.image_url = resp.data.url;
    }, function (resp) {
        console.log('Error status: ' + resp.status);
    }, function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    });
  };

};

angular
  .module('app')
  .controller('Product', Product);
