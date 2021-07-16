const deepCopy =  function(obj){
    return JSON.parse(JSON.stringify(obj));
}

module.exports = deepCopy;
 
