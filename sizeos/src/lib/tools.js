

/**
  * 比较函数
  * @param {Object} param1 要比较的参数1
 * @param {Object} param2 要比较的参数2
 * @return {Number} 如果param1 > param2 返回 1
 *                     如果param1 == param2 返回 0
 *                     如果param1 < param2 返回 -1
 */
function compareFunc(param1,param2){
   //如果两个参数均为字符串类型
   if(typeof param1 == "string" && typeof param2 == "string"){
       return param1.localeCompare(param2);
   }
   //如果参数1为数字，参数2为字符串
   if(typeof param1 == "number" && typeof param2 == "string"){
       return -1;
   }
   //如果参数1为字符串，参数2为数字
   if(typeof param1 == "string" && typeof param2 == "number"){
       return 1;
   }
   //如果两个参数均为数字
   if(typeof param1 == "number" && typeof param2 == "number"){
       if(param1 > param2) return 1;
       if(param1 == param2) return 0;
       if(param1 < param2) return -1;
   }
}
Array.prototype.keysort=function(key,desc){
    this.sort(function(a,b){
      var n=compareFunc(a[key],b[key]);
      return desc?-n:n;
    });
    return this
}
