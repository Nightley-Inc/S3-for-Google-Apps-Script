const MIME_JSON = "application/json"

/**
 * mock Blob class
 */
const BlobClass = function(data, mime){
  this.data = data || {}
  this.mime = mime || MIME_JSON
  this.name = ""
}
BlobClass.prototype.setName = function(name){
  this.name = name
}
BlobClass.prototype.getContentType = function(){
  return this.mime
}
BlobClass.prototype.getDataAsString = function(charset){
  return JSON.stringify(this.data)
}

const genHttpResponse = () => {
  // 使われている関数のみモック
  return {
    getAllHeaders() {
      return {}
    },
    getAs(contentType){
      return {}
    },
    getBlob() {
      return new BlobClass({
        mocking: "getDataAsString",
        charset: MIME_JSON
      }, MIME_JSON)
    },
    getContent() {
      return []
    },
    getContentText(charset) {
      return "mocking getContentText"
    },
    getHeaders() {
      return {}
    },
    getResponseCode() {
      return 299
    }
  }
}


const UrlFetchApp = {
  fetch(url, params) {
    return genHttpResponse()
  },
  fetchAll(requests) {
    return [...Array(requests.length)].map(() => genHttpResponse())
  },
  getRequest(url, params) {
    return {}
  }
}

const Utilities = {
  computeDigest(algo, payload, charset){
    return [1,2,3,4,5]
  },
  DigestAlgorithm: {
    SHA_256: "sha256"
  },
  Charset: {
    UTF_8: "utf8"
  },
  newBlob(jsonStr, mimeType){
    return new BlobClass(jsonStr, mimeType)
  }
}

module.exports = {
  // moduleFileExtensions: [
  //   "js", "ts"
  // ],
  // transform: {
  //   "^.+\\.(ts|js)$": "ts-jest"
  // },
  globals: {
    // "ts-jest": {
    //   "tsConfigFile": "tsconfig.json"
    // },
    UrlFetchApp,
    Utilities
  },
  // testMatch: [
  //   "**/__tests__/*.+ts"
  // ]
}
