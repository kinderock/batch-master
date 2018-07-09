class BatchMaster {
  constructor() {
    this.request_count = 0;
    this.queue = [];
  }
  setRequestCount (count) {
    this.request_count = count;
  }
  request(request_data) {
    this.addToQueue(request_data);
    console.log();
  }
  addToQueue (request) {
    this.queue.push(request);
    console.log('this.request_count', this.request_count);
    console.log('this.queue', this.queue);
    if (this.queue.length === this.request_count) {
      console.log('FINISH');
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
