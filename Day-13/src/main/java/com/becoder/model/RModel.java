package com.becoder.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="assign")
public class RModel {
private String name;
@Id
private String email;
private String assign;
private String des;
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getAssign() {
	return assign;
}
public void setAssign(String assign) {
	this.assign = assign;
}
public String getDes() {
	return des;
}
public void setDes(String des) {
	this.des = des;
}



}