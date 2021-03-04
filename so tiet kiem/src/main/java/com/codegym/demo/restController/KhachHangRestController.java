package com.codegym.demo.restController;

import com.codegym.demo.entity.KhachHang;
import com.codegym.demo.entity.SoTietKiem;
import com.codegym.demo.service.ISoTietKiem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api-khachHang")
@CrossOrigin(value = "*", allowedHeaders = "*")
public class KhachHangRestController {

    @Autowired
    private ISoTietKiem iSoTietKiem;

    @GetMapping
    public ResponseEntity<List<KhachHang>> getKhachHangList(){
        List<KhachHang> khachHangList = iSoTietKiem.findAllKhachHang();
        if(khachHangList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(khachHangList, HttpStatus.OK);
    }





}
