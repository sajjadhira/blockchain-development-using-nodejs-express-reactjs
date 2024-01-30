// require GENESIS_DATA
const { GENESIS_DATA } = require("./config");

class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  // genesis block
  static genesis() {
    return new this(GENESIS_DATA);
  }
}

// expot block
module.exports = Block;
