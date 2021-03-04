package com.codegym.demo.entity;



import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "khachhang")
public class KhachHang implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    @Column(name = "name")
    private String name;


    @JsonBackReference
    @OneToMany(mappedBy = "khachHang", cascade = CascadeType.ALL)
    private List<SoTietKiem> soTietKiemList;

    public KhachHang() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<SoTietKiem> getSoTietKiemList() {
        return soTietKiemList;
    }

    public void setSoTietKiemList(List<SoTietKiem> soTietKiemList) {
        this.soTietKiemList = soTietKiemList;
    }
}
