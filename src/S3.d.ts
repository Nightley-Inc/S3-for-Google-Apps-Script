import { S3RequestExecuteOptions, S3RequestAuthenticateOptions } from "./S3Request";

interface S3CreateBucketOptions{
  'x-amz-acl'?: 'private'
}

export declare function getInstance(accessKeyId: string, secretAccessKey: string, options?: object): S3

interface S3 {
  createBucket(bucket:string, options?: S3CreateBucketOptions): void
  deleteBucket(bucket: string, options?: S3RequestExecuteOptions): void
  putObject(bucket:string, objectName:string, object:string, options?: S3RequestExecuteOptions): void
  getObject(bucket: string, objectName:string, options?: S3RequestExecuteOptions): {[x:string]:any} | GoogleAppsScript.Base.Blob
  deleteObject(bucket:string,objectName:string,options?:S3RequestExecuteOptions): void
  getObjectNames(bucket: string, prefix: string, options?: S3RequestExecuteOptions): string[] | null | GoogleAppsScript.Base.Blob
  getSignedUrl(bucket:string, objectName:string,options?:S3RequestAuthenticateOptions): string
  getLastExchangeLog(): string
  logExchange_(request: any, response: GoogleAppsScript.URL_Fetch.HTTPResponse): void
}
