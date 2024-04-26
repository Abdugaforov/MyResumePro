package com.example.beckend.Controller;

import com.example.beckend.entity.LostOrFound;
import com.example.beckend.entity.TypeOfLostItem;
import com.example.beckend.servise.LostOrFoundServise;
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
@RequestMapping("/LostOrFound")
public class LostOrFoundController {
    private final LostOrFoundServise servise;

    @GetMapping
    public HttpEntity<?> getAllLostOrFound(){
        List<LostOrFound> allTypes = servise.getAllLostOrFound();
        return ResponseEntity.ok(allTypes);
    }
}
