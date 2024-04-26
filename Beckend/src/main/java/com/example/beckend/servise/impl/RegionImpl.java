package com.example.beckend.servise.impl;

import com.example.beckend.entity.Region;
import com.example.beckend.repo.RegionRepo;
import com.example.beckend.servise.RegionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RegionImpl implements RegionService {
    private final RegionRepo repo;
    @Override
    public List<Region> getAllRegion() {
        return repo.findAll();
    }
}
