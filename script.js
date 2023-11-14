function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '')
    let arrlength = str.length

    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[arrlength - 1 - i]) {
            return false
        }
    }
    return true
}

function arrayMaxMin(arr) {
    let arrayMin = arr[0] 
    let arrayMax = arr[0] 
  
   for(let i = 0; i < arr.length; i++){
        if(arr[i] < arrayMin){
            arrayMin = arr[i]
        }else if(arr[i] > arrayMax){
            arrayMax = arr[i]
        }
   }
   return [arrayMin, arrayMax]
}