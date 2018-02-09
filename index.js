var recipes = {} 

function updateObjectWithKeyAndValue(object,key,value) {
  var obj =  Object.assign({},{key: value},object)
  return obj 
}