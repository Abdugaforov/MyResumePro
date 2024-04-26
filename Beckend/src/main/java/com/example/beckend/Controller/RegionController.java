package com.example.beckend.Controller;

import com.example.beckend.entity.Region;
import com.example.beckend.entity.TypeOfLostItem;
import com.example.beckend.servise.RegionService;
import com.example.beckend.servise.TypeOfLostItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/region")
public class RegionController {
    private final RegionService service;
    @GetMapping
    public HttpEntity<?> getAllRegion(){
        List<Region> allRegion = service.getAllRegion();
        return ResponseEntity.ok(allRegion);
    }
}
