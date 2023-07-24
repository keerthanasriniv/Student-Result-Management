package com.becoder.repository;

	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;

import com.becoder.model.FileEntity;

	@Repository
	public interface FileRepository extends JpaRepository<FileEntity, Long> {
	    // You can add custom query methods here if needed.
	}

