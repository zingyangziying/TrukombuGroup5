package org.generation.TrukombuGroup5.component;

import java.io.*;
import java.nio.file.*;

import org.springframework.web.multipart.MultipartFile;

public class FileUploadUtil {

    //This class is only to save the uploaded image file thru the MultipartFile object to a file system
    public static void saveFile1(String uploadDir1, String fileName1, MultipartFile multipartFile1) throws IOException
    {
        //directory : productImages/images --- string convert to a Path
        Path uploadPath1 = Paths.get(uploadDir1);
        try (InputStream inputStream = multipartFile1.getInputStream()) {
            //getInputStream() method to read bytes from MultipartFile object
            //Then we will need to create a File and OutputStream to write the content

            //fileName : T-ShirtNew.jpg --- convert into a path
            //productImages/images/T-ShirtNew.jpg
            Path filePath1 = uploadPath1.resolve(fileName1);

            //Copy a file to a target file
            Files.copy(inputStream, filePath1, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException ioe) {
            throw new IOException("Could not save image file: " + fileName1, ioe);
        }
    }

    //This class is only to save the uploaded image file thru the MultipartFile object to a file system
    public static void saveFile2(String uploadDir2, String fileName2, MultipartFile multipartFile2) throws IOException
    {
        //directory : productImages/images --- string convert to a Path
        Path uploadPath2 = Paths.get(uploadDir2);
        try (InputStream inputStream = multipartFile2.getInputStream()) {
            //getInputStream() method to read bytes from MultipartFile object
            //Then we will need to create a File and OutputStream to write the content

            //fileName : T-ShirtNew.jpg --- convert into a path
            //productImages/images/T-ShirtNew.jpg
            Path filePath1 = uploadPath2.resolve(fileName2);

            //Copy a file to a target file
            Files.copy(inputStream, filePath1, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException ioe) {
            throw new IOException("Could not save image file: " + fileName2, ioe);
        }
    }
}

