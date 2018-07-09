class BatchMaster {
  constructor() {
    this.request_count = 0;
    this.queue = [];
  }
  setRequestCount (count) {
    this.request_count = count;
  }
  request(request_data) {
    this.addToQueue(request);
  }
  addToQueue (request) {
    this.queue.push(request);
    if (this.queue.length === this.request_count) {
      this.sendInitRequest();
    }
  }
  sendInitRequest () {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve({'result': this.queue});
      }, 100);
    });
  }


}

export default BatchMaster;
