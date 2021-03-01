import { Component, OnInit } from '@angular/core';
import {SoTietKiem} from "../../model/so-tiet-kiem";
import {FormBuilder, FormGroup} from "@angular/forms";
import {KyHan} from "../../model/ki-han";
import {KhachHang} from "../../model/khach-hang";
import {SoTietKiemService} from "../../service/so-tiet-kiem.service";
import {ActivatedRoute, Router} from "@angular/router";
import {KyHanService} from "../../service/ky-han.service";
import {KhachHangService} from "../../service/khach-hang.service";
import {ShowMessage} from "../../common/showMessage";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public soTietKiem: SoTietKiem;

  public idSoTietKiem: any;

  public updateForm: FormGroup;

  public kyHanList: KyHan[];

  public khachHangList: KhachHang[];

  public check = false;

  constructor(private soTietKiemService: SoTietKiemService,
              private route: ActivatedRoute,
              private kyHanService: KyHanService,
              private khachHangService: KhachHangService,
              private showMessage: ShowMessage,
              private router: Router) {
  }

  ngOnInit(): void {

    this.getAllKyHan();

    this.getAllKhachHang();


    this.route.paramMap.subscribe(param => {
      this.idSoTietKiem = param.get('id');

      this.soTietKiemService.getById(this.idSoTietKiem).subscribe((data: SoTietKiem) => {
        this.soTietKiem = data;
      }, error => console.log(error));
    });

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
}
