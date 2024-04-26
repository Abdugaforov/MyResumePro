package com.example.beckend.repo;

import com.example.beckend.entity.LostOrFound;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LostOrFoundRepo extends JpaRepository<LostOrFound,Long> {
}
