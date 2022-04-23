const test = {};

const makeObject = (object, key, value) => {
  object[key] = value;
	console.log(object);
}
makeObject(test, 'nickname', 'naido');
