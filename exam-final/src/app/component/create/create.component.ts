import { Component, OnInit } from '@angular/core';
import {SoTietKiem} from "../../model/so-tiet-kiem";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {KyHan} from "../../model/ki-han";
import {KhachHang} from "../../model/khach-hang";
import {SoTietKiemService} from "../../service/so-tiet-kiem.service";
import {ActivatedRoute, Router} from "@angular/router";
import {KyHanService} from "../../service/ky-han.service";
import {KhachHangService} from "../../service/khach-hang.service";
import {ShowMessage} from "../../common/showMessage";
import {checkDay} from "../../validator/check-day";
import {checkEndDay} from "../../validator/check-end-day";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public soTietKiemList: SoTietKiem[];

  public kyHanList: KyHan[];

  public khachHangList: KhachHang[];

  public check = false;
  public createForm: FormGroup;

  constructor(private soTietKiemService: SoTietKiemService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private kyHanService: KyHanService,
              private khachHangService: KhachHangService,
              private showMessage: ShowMessage,
              private router: Router) {
  }

  ngOnInit(): void {

    this.getAllKyHan();

    this.getAllKhachHang();

    this.soTietKiemService.getAll().subscribe((data: SoTietKiem[]) =>{
      this.soTietKiemList = data;
          this.createForm = this.fb.group({
            ngayMoSo: ['', [Validators.required]],
            ngayGui: ['', [Validators.required, checkDay]],
            soTienGui: ['', [Validators.required, Validators.min(10000000), Validators.pattern('^\\d*$')]],
            uuDai: ['', [Validators.required]],
            laiXuat: ['', [Validators.required]],
            kyHan: ['', [Validators.required]],
            khachHang: ['', [Validators.required]],
          }, {validators: checkEndDay});



    }, error => console.log(error));
  }

  getAllKyHan() {
    this.kyHanService.getAll().subscribe((data: KyHan[]) => {
      this.kyHanList = data;
    });
  }


  getAllKhachHang() {
    this.khachHangService.getAll().subscribe((data: KhachHang[]) => {
      this.khachHangList = data;
    });
  }

  onSubmit() {
    console.log(this.createForm.value.khachHang);
    console.log(this.createForm.value.kyHan);

    if (this.createForm.invalid) {
      this.showMessage.createFailed();
      this.check = true;
      return;
    }

      let check = false;
      for (let c of this.khachHangList) {
        if (c.id == this.createForm.value.khachHang) {
          this.createForm.value.khachHang = c;
        }
      }

      for (let e of this.kyHanList) {
        if (e.id == this.createForm.value.kyHan) {
          this.createForm.value.kyHan = e;
        }
      };


      this.soTietKiemService.create(this.createForm.value).subscribe(data => {
          this.router.navigateByUrl('/list');
        }, error => console.log(error),
        () => {
          this.showMessage.createSuccess();
        });

    }




}
