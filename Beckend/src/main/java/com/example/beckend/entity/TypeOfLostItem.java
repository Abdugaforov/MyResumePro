package com.example.beckend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "typeOfLostItem")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class TypeOfLostItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    public TypeOfLostItem(Long id) {
        this.id = id;
    }
}
