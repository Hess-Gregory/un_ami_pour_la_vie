import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { UserUpdateService } from './../../../admin/users/users-manager/user-update/user-update.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-drag-drop-unique',
  templateUrl: './drag-drop-unique.component.html',
  styleUrls: ['./drag-drop-unique.component.scss']
})
export class DragDropUniqueComponent implements OnInit {
  new = true;
  okmsg = false;
  fileArrValid = false;
  fileArr = [];
  fileArr2 = [];
  imgArr = [];
  fileObj = [];
  form: FormGroup;
  msg: string;
  progress = 0;
  DragdropService = 0;
  public id: string;

  constructor(
    private userservice: UserUpdateService,
    private activatedRoute: ActivatedRoute,
    public fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.form = this.fb.group({
      avatar: [null]
    });
    this.ngOnInit();
  }

  ngOnInit() {
    // const chaine = zone.value.replace(/^.*\\/, '');
    // const fichier = chaine.replace(/\.([a-z]+)$/, '');
    // const extension = RegExp.$1;
    // alert ("Fichier : " + fichier + "\nExtension : " + extension) ;
  }
  upload(e) {
    this.okmsg = false;
    const fileListAsArray = Array.from(e);
    fileListAsArray.forEach((item, i) => {
      const file = e as HTMLInputElement;
      const url = URL.createObjectURL(file[i]);
      this.imgArr.push(url);
      this.fileArr.push({ item, url: url });
    });
    this.fileArrValid = true;

    this.fileArr.forEach(item => {
      this.fileObj.push(item.item);
    });

    // Set files form control

    this.form.patchValue({
      avatar: this.fileObj
    });

    this.form.get('avatar').updateValueAndValidity();
  }
  titleImg(zone) {
    return zone.replace(/(.*)\.(.*?)$/, '$1');
  }

  onSubmit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userservice
      .addFiles(this.id, this.form.value.avatar)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('La demande a été faite!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Une en-tête de réponse a été reçu!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round((event.loaded / event.total) * 100);
            console.log(`Uploaded! ${this.progress}%`);
            this.fileArrValid = true;
            break;
          case HttpEventType.Response:
            console.log('Fichier téléchargé avec succès!', event.body);
            setTimeout(() => {
              this.progress = 0;
              this.fileArr = [];
              this.fileObj = [];
              this.okmsg = true;
              this.msg = 'Fichier téléchargé avec succès!';
              this.fileArrValid = false;
              this.new = false;
              this.router.routeReuseStrategy.shouldReuseRoute = function() {
                return false;
              };
              const currentUrl = this.router.url + '?';
              this.router.navigateByUrl(currentUrl).then(() => {
                this.router.navigated = false;
                this.router.navigate([this.router.url]);
              });
            }, 3000);
        }
      });
  }

  // Clean Url for showing image preview
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
