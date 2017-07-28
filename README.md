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
- 

### Promise是对象？函数？数组？

## Promise原理分析

---

## Promise实例方法介绍
