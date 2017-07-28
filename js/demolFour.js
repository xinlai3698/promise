/**
 * catch ：出现异常，可以进行捕获
 * @return {[type]} [description]
 */
 function getNumber(){
 	var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            var num = Math.ceil(Math.random()*10); //生成1-10的随机数
            if(num<=5){
            	resolve(num);
            }
            else{
            	reject('数字太大了');
            }
          }, 2000);
      });
 	return p;            
 }

 function a1(){
 	var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
        	resolve('a');
        }, 1000);
      });
 	return p;            
 }
 function b1(){
 	var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
        	resolve('b');
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





 getNumber()
 .then(function(data){
 	console.log('resolved');
 	console.log(data);
 })
 .catch(function(reason){
 	console.log('rejected');
 	console.log(reason);
 });

/* a1()
 .then(function(data){
 	console.log('resolved');
 	console.log(data);
    console.log(somedata); //此处的somedata未定义
  })
 .catch(function(reason){
 	console.log('rejected');
 	console.log(reason);
 });*/

/* a1().then(function(data){
 	console.log(data);
 	return b1();
 }).then(function(data){
 	console.log(data);
  console.log(somedata); //此处的somedata未定义
  return c1();
})
 .catch(function(reason){
 	console.log('rejected');
 	console.log(reason);
 });*/