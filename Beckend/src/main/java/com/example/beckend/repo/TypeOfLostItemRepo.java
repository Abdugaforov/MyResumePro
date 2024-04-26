package com.example.beckend.repo;

import com.example.beckend.entity.TypeOfLostItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeOfLostItemRepo extends JpaRepository<TypeOfLostItem,Long> {
}
