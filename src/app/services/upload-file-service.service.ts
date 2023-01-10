import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { BehaviorSubject } from 'rxjs'; 
@Injectable()
export class UploadFileService {

 
  FOLDER = 'jsa-s3/';

  constructor() { }

  uploadfile(file) {

    const bucket = new S3(
      {
        accessKeyId:'AKIASDOVCLABURA2OT6M',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );

      const params = {
        Bucket: 'angular8-upload-bucket',
        Key: this.FOLDER + file.name,
        Body: file,
        ACL: 'public-read'
      };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      alert('Successfully uploaded file.');
      return true;
    });
  }

}