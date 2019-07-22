import {getInstance} from "../index"

describe('S3 test', () => {
  it('s3 methods', () => {
    const s3 = getInstance("access-key-id", "secret-access-key")

    expect(() => s3.createBucket("bucket")).not.toThrow()
    expect(() => s3.deleteBucket("bucket")).not.toThrow()

    const names = s3.getObjectNames("bucket", "prefix", {})
    expect(names).not.toBeNull()
    expect("getDataAsString" in names!).toBe(true)

    expect(() => s3.putObject("bucket", "objectName", "object")).not.toThrow()
    expect(() => s3.getObject("bucket", "objectName")).not.toThrow()
    expect(() => s3.deleteObject("bucket", "objectName")).not.toThrow()

    expect(typeof s3.getSignedUrl("bucket", "objectName")).toBe("string")
  })
})