package com.codegym.demo.restController;

import com.codegym.demo.entity.SoTietKiem;
import com.codegym.demo.repository.KhachHangRepository;
import com.codegym.demo.repository.KyHanRepository;
import com.codegym.demo.service.ISoTietKiem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api-soTietKiem")
@CrossOrigin(value = "*", allowedHeaders = "*")

public class SoTietKiemRestController {

    @Autowired
    ISoTietKiem iSoTietKiem;

    @GetMapping("/detail/{id}")
    public ResponseEntity<SoTietKiem> getSoTietKiemById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        SoTietKiem soTietKiem = iSoTietKiem.findById(id);

        return ResponseEntity.ok().body(soTietKiem);
    }





    @GetMapping
    public ResponseEntity<List<SoTietKiem>> getSoTietKiemList(){
        List<SoTietKiem> soTietKiem = iSoTietKiem.findAll();
        if(soTietKiem.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(soTietKiem, HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Void> createSoTietKiem(@RequestBody SoTietKiem body) {
        iSoTietKiem.save(body);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteSoTietKiem(@PathVariable Long id) {
        iSoTietKiem.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }





    @PutMapping("/update/{id}")
    public ResponseEntity<SoTietKiem> updateSoTietKiem(@PathVariable(value = "id") Long id,
                                                    @RequestBody SoTietKiem soTietKiemUpdate)  {
        SoTietKiem soTietKiem = iSoTietKiem.findById(id);

        soTietKiem.setId(soTietKiemUpdate.getId());
        soTietKiem.setLaiXuat(soTietKiemUpdate.getLaiXuat());
        soTietKiem.setNgayGui(soTietKiemUpdate.getNgayGui());
        soTietKiem.setNgayMoSo(soTietKiemUpdate.getNgayMoSo());
        soTietKiem.setUuDai(soTietKiemUpdate.getUuDai());
        soTietKiem.setKhachHang(soTietKiemUpdate.getKhachHang());
        soTietKiem.setKyHan(soTietKiemUpdate.getKyHan());
        soTietKiem.setSoTienGui(soTietKiemUpdate.getSoTienGui());

        this.iSoTietKiem.save(soTietKiem);
        return new ResponseEntity<SoTietKiem>(HttpStatus.OK);
    }

}
