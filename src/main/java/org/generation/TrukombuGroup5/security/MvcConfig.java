package org.generation.TrukombuGroup5.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Value("${image.folder}")
    private String imageFolder;

    //to configure Spring MVC and set up view controllers to expose these templates and static folders
    //e.g. HTMLs, CSS/Images/JS folders
    public void addViewControllers(ViewControllerRegistry registry) {
        //Map the browser's URL to a specific View (HTML) inside resources/templates directory
        registry.addViewController("/").setViewName("home");
        registry.addViewController("/home.html").setViewName("home");
        registry.addViewController("/aboutUs.html").setViewName("aboutUs");
        registry.addViewController("/productListing.html").setViewName("productListing");
        registry.addViewController("/product_info_form.html").setViewName("product_info_form");
        registry.addViewController("/login").setViewName("login");
        registry.addViewController("/logout").setViewName("home");

    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static")
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(0);

        exposeDirectory(registry);

    }

    private void exposeDirectory(ResourceHandlerRegistry registry) {

        Path uploadDir = Paths.get(imageFolder);
        String uploadPath = uploadDir.toFile().getAbsolutePath();
        System.out.println(uploadPath);

        //**, it will match all folders and files within that directory
        registry.addResourceHandler("/" + imageFolder + "/**")
                .addResourceLocations("file:" + uploadPath + "/")
                .setCachePeriod(0)
                .resourceChain(true)
                .addResolver(new PathResourceResolver());
    }


}
