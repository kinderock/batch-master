const api_request = function(request_data) {
  return new Promise ((resolve, reject) => {
    resolve(request_data);
  });
};

class BatchMaster {
  constructor() {
    this.request_count = 0;
    this.queue = [];
    this.promise = false;
    this.resolve = false;
  }

  setRequestCount(count) {
    this.request_count = count;
  }

  request(request_data) {
    this.addToQueue(request_data);
    return this.getPromise();
  }

  getPromise() {
    if (!this.promise) {
      this.promise =  new Promise((resolve, reject) => {
        this.resolve = resolve;
      });
    }

    return this.promise;
  }

  addToQueue(request) {
    this.queue.push(request);

    if (this.queue.length === this.request_count) {
      this.sendInitRequest();
    }
  }

  sendInitRequest() {
    api_request(this.queue).then((result) => {
      this.resolve(result);
    });
  }

  getCurrentComponentData(component, response) {
    let result = response.filter((item) => {
      return item.component === component
    })[0].data;

    return result;
  }
}

export default new BatchMaster();
