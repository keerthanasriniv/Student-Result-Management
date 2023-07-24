package com.becoder.model;

//import javax.persistence.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name="files")
public class FileEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fileName;

    @Lob
    private byte[] data;

    public FileEntity() {
        // Default constructor required by JPA
    }

    public FileEntity(String fileName, byte[] data) {
        this.fileName = fileName;
        this.data = data;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}
    public FileEntity(Long id,String fileName,byte[] data)
    {
    	this.id=id;
    	this.fileName=fileName;
    	this.data=data;
    }
    // Getters and setters for id, fileName, and data

    // Add any other fields, methods, and annotations as needed.
}
