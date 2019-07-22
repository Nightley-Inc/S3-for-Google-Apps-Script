#Amazon S3 API Binding for Google Apps Script
An API binding for using AWS Simple Storage Service (S3) from Google Apps Script.

Main docs and instructions at [Amazon S3 API Binding for Google Apps Script](http://engetc.com/projects/amazon-s3-api-binding-for-google-apps-script/).

---

API V4対応のみたらいさんカスタムに手を入れて型定義を追加。

## Prepare

```sh
npm install
npm run build
```

## Usage

```js
import { getInstance } from "/path/to/s3-for-google-apps-script"

const s3 = getInstance(accessKeyId, secretAccessKey, options)
```