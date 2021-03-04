package com.codegym.demo.service;

import com.codegym.demo.entity.KhachHang;
import com.codegym.demo.entity.KyHan;
import com.codegym.demo.entity.SoTietKiem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ISoTietKiem {
    List<SoTietKiem> findAll();

    SoTietKiem  findById(Long id);

    void save(SoTietKiem soTietKiem);

    void update(SoTietKiem soTietKiem);

    void remove(Long id);

    List<KhachHang> findAllKhachHang();

    List<KyHan> findAllKyHan();

    Page<SoTietKiem> findAll(Pageable pageable);
//    Page<SoTietKiem> listAll(int pageNum, Optional<String> keyword);
}
