class SortedList {
  constructor() {
    this.items =[],
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> {
      if(a > b){
        return 1
      } else if(b > a){
        return -1
      } else{
        return 0
      }
      
        })
        this.length ++
  }

  get(pos) {
    let item 
    this.items.forEach((element, index)=>{
      if (index == pos){
           item = element
      }else if (pos > this.length) {
         throw new Error('OutOfBounds')
      }
    })
    return item
  }

  max() {
    if (this.length > 0){
      return Math.max(...this.items)
    } else {
      throw new Error ('EmptySortedList')
    }
    
  }

  min() {
    if (this.length > 0){
      return Math.min(...this.items)
    } else {
      throw new Error ('EmptySortedList')
    }
  }

  sum() {
    
    let total = this.items.reduce((acc, element, index)=>{
        return acc + element
    },0)
    if (this.length == 0){
      return 0
    }
    return total
  }

  avg() {
  
  if (this.length == 0){
    throw new Error ('EmptySortedList')
    }
  return this.sum()/this.length
}
}

module.exports = SortedList;
