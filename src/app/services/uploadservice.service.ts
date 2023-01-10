import { Injectable } from '@angular/core';

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadserviceService {

  constructor() { }



  uploadFile(file) {
    const contentType = file.type;


    const bucket = new S3(
          {
              accessKeyId: 'AKIASDOVCLABURA2OT6M',
              secretAccessKey: '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',
              region: 'US West (N. California) us-west-1' 
          }
      );
      const params = {
          Bucket: 'angular8-upload-bucket',
          Key: 'File_upload',
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
//for upload progress   
/*bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });*/
}


}
