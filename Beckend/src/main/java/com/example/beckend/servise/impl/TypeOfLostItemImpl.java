package com.example.beckend.servise.impl;

import com.example.beckend.entity.TypeOfLostItem;
import com.example.beckend.repo.TypeOfLostItemRepo;
import com.example.beckend.servise.TypeOfLostItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TypeOfLostItemImpl implements TypeOfLostItemService {
    private final TypeOfLostItemRepo repo;
    @Override
    public List<TypeOfLostItem> getAllTypes() {
        return repo.findAll();
    }


}
