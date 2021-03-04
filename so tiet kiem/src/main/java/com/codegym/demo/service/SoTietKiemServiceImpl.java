package com.codegym.demo.service;

import com.codegym.demo.entity.KhachHang;
import com.codegym.demo.entity.KyHan;
import com.codegym.demo.entity.SoTietKiem;
import com.codegym.demo.repository.KhachHangRepository;
import com.codegym.demo.repository.KyHanRepository;
import com.codegym.demo.repository.SoTietKiemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SoTietKiemServiceImpl implements ISoTietKiem {

    @Autowired
    private SoTietKiemRepository soTietKiemRepository;

    @Autowired
    private KyHanRepository kyHanRepository;

    @Autowired
    private KhachHangRepository khachHangRepository;


    @Override
    public List<SoTietKiem> findAll() {
        return this.soTietKiemRepository.findAll();
    }

    @Override
    public SoTietKiem findById(Long id) {
        return this.soTietKiemRepository.findById(id).orElse(null);
    }



    @Override
    public void save(SoTietKiem soTietKiem) {
        this.soTietKiemRepository.save(soTietKiem);

    }

    @Override
    public void update(SoTietKiem soTietKiem) {

    }

    @Override
    public void remove(Long id) {
        this.soTietKiemRepository.deleteById(id);

    }

    @Override
    public List<KhachHang> findAllKhachHang() {
        return this.khachHangRepository.findAll();
    }

    @Override
    public List<KyHan> findAllKyHan() {
        return this.kyHanRepository.findAll();
    }

    @Override
    public Page<SoTietKiem> findAll(Pageable pageable) {
        return this.soTietKiemRepository.findAll(pageable);
    }

//    @Override
//    public Page<SoTietKiem> listAll(int pageNum, Optional<String> keyword) {
//        return this;
//    }
}
