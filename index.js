var recipes = {} 

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({},object,{[key]: value})
}

function destructivelyUpdateWithKeyAndValue(object,key,value) {
  return Object.assign(object,{[key]: value})
}