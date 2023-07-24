package com.becoder.controller;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
public class FileController {

    private static final long MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestPart("file") MultipartFile file) {
        if (file.isEmpty()) {
            return new ResponseEntity<>("Please select a file to upload.", HttpStatus.BAD_REQUEST);
        }

        if (file.getSize() > MAX_FILE_SIZE) {
            return new ResponseEntity<>("File size exceeds the limit of 10 MB.", HttpStatus.BAD_REQUEST);
        }

        // Here, you can implement the logic to save the file to a directory or perform any other operations.
        // For example:
         try {
             String fileName = file.getOriginalFilename();
             byte[] fileBytes = file.getBytes();
             // Save the fileBytes to a location on the server.
         } catch (IOException e) {
             return new ResponseEntity<>("Failed to upload the file.", HttpStatus.INTERNAL_SERVER_ERROR);
         }

        return new ResponseEntity<>("File uploaded successfully!", HttpStatus.OK);
    }
}

















//package com.becoder.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.becoder.service.FileService;
//
//import java.io.IOException;
//
//@RestController
//@CrossOrigin(origins="*")
//@RequestMapping("/files")
//
//public class FileController {
//
//    private final FileService fileService;
//
//    @Autowired
//    public FileController(FileService fileService) {
//        this.fileService = fileService;
//    }
//
//    @PostMapping("/upload")
//    
//    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
////        if (!file.isEmpty()) {
//            String fileName = file.getOriginalFilename();
//            byte[] data = file.getBytes();
//            fileService.saveFile(fileName, data);
//            return new ResponseEntity<>("File uploaded successfully", HttpStatus.OK);
//        //}
//// else {
////            return new ResponseEntity<>("File is empty", HttpStatus.BAD_REQUEST);
////        }
//    }
//}

