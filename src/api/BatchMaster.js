function api_request(smth) {
  return new Promise ((resolve, reject) => {
    console.log('api_request');
    resolve(smth);
  });
}

class BatchMaster {
  constructor() {
    this.request_count = 0;
    this.queue = [];
    this.promise = false;
    this.resolve = false;
  }
  setRequestCount (count) {
    this.request_count = count;
  }
  request(request_data) {
    this.addToQueue(request_data);
    return this.getPromise();

  }
  getPromise () {
    if (!this.promise) {
      this.promise =  new Promise((resolve, reject) => {
        this.resolve = resolve;
      });
    }
    console.log(this.promise);
    return this.promise;
  }
  addToQueue (request) {
    this.queue.push(request);
    console.log('request_count', this.request_count);
    if (this.queue.length === this.request_count) {
      this.sendInitRequest();
    }
  }
  sendInitRequest () {
    api_request(this.queue).then((result) => {
      this.resolve(result);
    });
  }
}

export default BatchMaster;
