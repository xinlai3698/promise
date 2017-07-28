# Promise

---

## Promise是什么

---

### 回调函数
```
setTimeout(function () {
   console.log('callback...');
}, 1000);
```
此延时定时器中的function就是我们常说的回调函数，回调函数常常满足三个特征
- 我们自己定义的
- 我们自己没去执行
- 最终被其它人（浏览器的ajax模块，定时器模块...）执行了

### 回调地狱
```javascript
  transformData(layersSource, function (protocoldata) {
		takePicture(event, function (pngData) {
				//dosomething();
		})
	});
```
- 说明：回调函数是异步的，在上面的代码中每一层的回调函数都需要依赖上一层的回调执行完，所以形成了层层嵌套的关系,如果回调层数过多最终形成回调地狱
- 弊端：代码阅读和维护比较麻烦
那有没有其它解决的办法呢？？？

### Promise是对象？函数？数组？
![](./img/promise.png)

## Promise原理分析

---

## Promise实例方法介绍
