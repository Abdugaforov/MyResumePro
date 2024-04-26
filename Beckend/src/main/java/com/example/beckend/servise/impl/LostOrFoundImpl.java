package com.example.beckend.servise.impl;

import com.example.beckend.entity.LostOrFound;
import com.example.beckend.repo.LostOrFoundRepo;
import com.example.beckend.servise.LostOrFoundServise;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class LostOrFoundImpl implements LostOrFoundServise {
    private final LostOrFoundRepo repo;
    @Override
    public List<LostOrFound> getAllLostOrFound() {
        return repo.findAll();
    }
}
