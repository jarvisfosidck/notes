//make a map to iterate in order



class G {
  constructor(var1) {
    this.var1 = var1;
    this.k = new Set();
    //The Set object lets you store unique values of any type, whether primitive values or object references.

    this.queue = Array();//an array is not really a queue
  }

  set(k, v) {
    const num = Number(v);
    if (isNaN(num)) throw new TypeError('"num" must be a number');
    //example of Error Messaging
    if (!this.k.has(k)) {
      this.k.add(k);
      this.queue.push({ k, num});
    } else {//update an existing element
      this.queue.map((element) => {
        if (element.k === k) {
          Object.assign(element, { num });
        }
        return element;
      });
    }
  }
  next() {
    const element = this.queue.shift();

    this.k.delete(element.k);
    return element;
  }
  isEmpty() {
   return Boolean(this.queue.length === 0);
  }
  has(k) {
    return this.k.has(k);
  }
  get(k) {
    return this.queue.find(element => element.k === k);
  }
  length() {
    return this.queue.length;
  }

}

module.exports = G;
