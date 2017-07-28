/**
 * 1.resolve 如果执行成功，在then中进行捕获
 * 使用then这种链式操作方法，减少回调函数的层层嵌套形式
 * @return {[type]} [description]
 */
function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;            
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;            
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;            
}

runAsync1()
.then(function(data){
    console.log(data);
    return runAsync2();
})
.then(function(data){
    console.log(data);
    return runAsync3();
})
.then(function(data){
    console.log(data);
});


/**
 * 2.既可以返回Promise对象，也可以返回数据
 */

/*runAsync1()
.then(function(data){
    console.log(data);
    return runAsync2();
})
.then(function(data){
    console.log(data);
    return 'hello world';  //这里直接返回数据
})
.then(function(data){
    console.log(data);
});*/

/**
 * 3.扩展：将方法1的一个成功回调的数据返回给方法3
 */
var a,b;
function a1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            resolve('a');
        }, 1000);
    });
    return p;            
}
function b1(data){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            resolve(data);
        }, 1000);
    });
    return p;            
}
function c1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            resolve('c');
        }, 1000);
    });
    return p;            
}

/*a1()
.then(function(data){
    console.log(data);
    return b1(data);
})
.then(function(data){
    console.log(data);
    return c1(data);
})
.then(function(data){
    console.log(data);
});*/


/**
 * 使用 all方法
 */
/*Promise
.all([runAsync1(), runAsync2(), runAsync3()])
.then(function(results){
    console.log(results);
});*/