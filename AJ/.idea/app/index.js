var myapp = angular.module("myApp",[]);
myapp.controller("cartController",function($scope) {
    $scope.cart = [
        {
            id: 1000,
            name: 'iphone5s',
            quantity: 3,
            price: 4300
        },
        {
            id: 1001,
            name: 'iphone6 plus',
            quantity: 6,
            price: 5800
        },
        {
            id: 1002,
            name: 'iphone7',
            quantity: 2,
            price: 6800
        },
        {
            id: 1003,
            name: 'mac',
            quantity: 1,
            price: 12000
        },
        {
            id: 1004,
            name: 'iwitch',
            quantity: 4,
            price: 3500
        },
    ];

    /**
     * 计算总价
     */
    $scope.totalPrice = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += item.quantity * item.price;
        })
        return total;
    }
    /**
     * 计算总两
     */
    $scope.totalQuntity = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += parseInt(item.quantity);
        })
        return total;
    }
    /**
     * 寻找一项的索引
     */
    var findIndex = function (id) {
        var index = -1;
        angular.forEach($scope.cart, function (item, key) {
            if (item.id === id) {
                index = key;
                return;
            }
        });
        return index;

    }
    /**
     *删除一项
     */
    $scope.remove = function (id) {
        var index = findIndex(id);
        if (index !== -1) {
            $scope.cart.splice(index, 1);
        }
    }
    $scope.$watch('cart', function (newValue, oldValue) {
        angular.forEach(newValue, function (item, key) {
            if (item.quantity < 1) {
                var returnKey = confirm("是否从购物车内删除该产品！");
                if (returnKey) {
                    $scope.remove(item.id);
                } else {
                    item.quantity = oldValue[key].quantity;
                }
            }
        })
    },true);
    /**
     * 添加数量1
     */
    $scope.add = function (id) {
        var index = findIndex(id);
        if (index !== -1) {
            ++$scope.cart[index].quantity;
        }
    }
    /**
     * 减少数量11
     */
    $scope.reduce = function (id) {
        var index = findIndex(id);
        if (index !== -1) {
            var item = $scope.cart[index];
            if (item.quantity > 1) {
                --item.quantity;
            }
            else {
                var returnKey = confirm("是否从购物车内删除该产品！");
                if (returnKey) {
                    $scope.remove(id);
                }
            }
        }
    }


});