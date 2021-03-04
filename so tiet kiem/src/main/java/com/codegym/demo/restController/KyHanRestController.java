package com.codegym.demo.restController;

import com.codegym.demo.entity.KhachHang;
import com.codegym.demo.entity.KyHan;
import com.codegym.demo.service.ISoTietKiem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api-kyHan")
@CrossOrigin(value = "*", allowedHeaders = "*")
public class KyHanRestController {

    @Autowired
    private ISoTietKiem iSoTietKiem;

    @GetMapping
    public ResponseEntity<List<KyHan>> getKyHanList(){
        List<KyHan> kyHanList = iSoTietKiem.findAllKyHan();
        if(kyHanList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(kyHanList, HttpStatus.OK);
    }
}
