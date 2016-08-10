let myData = {  
  name: 'Mike',
  age: 35
};

let handler = {  
  get(target, key) {
    return Reflect.get(target, key);
  },
  set(target, key, value) {
  	if(key === 'age') {
  		console.warn(`You can't change your age no matter how much you want to sorry ${Reflect.get(target, 'name')}`);
  		return Reflect.set(target, key, target[key]);
  	}
  	else {
  		return Reflect.set(target, key, value);
  	}
  }
}

myData = new Proxy(myData, handler);
console.log('name', myData.name);
myData.name = 'Dave';
console.log('name', myData.name);
myData.age = 21;
console.log('age', myData.age);