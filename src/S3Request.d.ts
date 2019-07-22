export interface S3RequestExecuteOptions {
  logRequests?: boolean
  echoRequestToUrl?:boolean
}

export interface S3RequestAuthenticateOptions {
  signatureTesting?:boolean
  region?: string
  expires?: number
}

export declare class S3Request {
  setContentType(contentType: string): this
  getContentType(): string
  setContent(content: string): this
  setHttpMethod(method: string): this
  setBucket(bucket: string): this
  setObjectName(objectName: string): this
  addHeader(name: string, value: string): this
  getUrl(): string
  execute(options: S3RequestExecuteOptions): GoogleAppsScript.URL_Fetch.HTTPResponse
  getSignedUrl(options: S3RequestAuthenticateOptions): string
  authenticate(options: S3RequestAuthenticateOptions, mode?: string): string
  bytearrayToHex_(byteArr: number[]): string
  unsignBytearray_(byteArr: number[]): number[]
  getSignatureKey_(key: string, dateStamp: string, regionName: string, serviceName: string): string
  getAuthHeader_(): string
  getContentMd5_(): string
  fixedEncodeURIComponent(str: string): string
}

