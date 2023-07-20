package com.becoder.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private Integer reg;

	private String name;

	private Integer sub1;

	private Integer sub2;
	private Integer sub3;
	private Integer sub4;
	private Integer sub5;

	public Integer getReg() {
		return reg;
	}

	public void setReg(Integer reg) {
		this.reg = reg;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getSub1() {
		return sub1;
	}

	public void setSub1(Integer sub1) {
		this.sub1 = sub1;
	}

	public Integer getSub2() {
		return sub2;
	}

	public void setSub2(Integer sub2) {
		this.sub2 = sub2;
	}

	public Integer getSub3() {
		return sub3;
	}

	public void setSub3(Integer sub3) {
		this.sub3 = sub3;
	}

	public Integer getSub4() {
		return sub4;
	}

	public void setSub4(Integer sub4) {
		this.sub4 = sub4;
	}

	public Integer getSub5() {
		return sub5;
	}

	public void setSub5(Integer sub5) {
		this.sub5 = sub5;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	

}