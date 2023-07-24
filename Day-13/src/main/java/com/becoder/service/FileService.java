package com.becoder.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.becoder.model.FileEntity;
import com.becoder.repository.FileRepository;
@Service
public class FileService {

    private final FileRepository fileRepository;

    @Autowired
    public FileService(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    public void saveFile(String fileName, byte[] data) {
        FileEntity fileEntity = new FileEntity();
        fileEntity.setFileName(fileName);
        fileEntity.setData(data);
        fileRepository.save(fileEntity);
    }
}
//package com.becoder.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.becoder.model.FileEntity;
//import com.becoder.repository.FileRepository;
//
//import java.io.IOException;
//
//@Service
//public class FileService {
//    private final FileRepository fileRepository;
//
//    @Autowired
//    public FileService(FileRepository fileRepository) {
//        this.fileRepository = fileRepository;
//    }
//
//    public void saveFile(MultipartFile file) throws IOException {
//        String fileName = file.getOriginalFilename();
//        FileEntity fileEntity = new FileEntity(fileName, file.getBytes());
//        fileRepository.save(fileEntity);
//    }
//
//    public FileEntity getFileById(Long id) {
//        return fileRepository.findById(id).orElse(null);
//    }
//
//    // Add more methods for custom queries if needed.
//}
