package com.codegym.demo.repository;

import com.codegym.demo.entity.SoTietKiem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SoTietKiemRepository extends JpaRepository<SoTietKiem,Long> {
}
