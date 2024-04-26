package com.example.beckend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity(name = "findings")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Findings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private boolean lostOrFound;
    private String nameOfTheCenter;
    private String centerEmployee;
    private Integer applicationNumber;
    private String serviceName;
    @ManyToOne(fetch = FetchType.EAGER)
    private TypeOfLostItem typeOfLostItem;
    private String type;
    private String description;
    private String content;
    private LocalDate timeOfProduction ;
    private String specialSigns;
    private String seriesAndNumber;
    private String levelOfDamage;
    private  String ownerFullName;
    @ManyToOne
    private Region lostPlace;
    private LocalDate timeLost;
    private LocalDate paymentTime;
    private String series;
    private boolean condition;

    @ManyToOne
    private User owner;

    public Findings(boolean lostOrFound, String nameOfTheCenter, String centerEmployee, Integer applicationNumber, String serviceName, TypeOfLostItem typeOfLostItem, String type, String description, String content, LocalDate timeOfProduction, String specialSigns, String seriesAndNumber, String levelOfDamage, String ownerFullName, Region lostPlace, LocalDate timeLost, LocalDate paymentTime, String series, boolean condition, User owner) {
        this.lostOrFound = lostOrFound;
        this.nameOfTheCenter = nameOfTheCenter;
        this.centerEmployee = centerEmployee;
        this.applicationNumber = applicationNumber;
        this.serviceName = serviceName;
        this.typeOfLostItem = typeOfLostItem;
        this.type = type;
        this.description = description;
        this.content = content;
        this.timeOfProduction = timeOfProduction;
        this.specialSigns = specialSigns;
        this.seriesAndNumber = seriesAndNumber;
        this.levelOfDamage = levelOfDamage;
        this.ownerFullName = ownerFullName;
        this.lostPlace = lostPlace;
        this.timeLost = timeLost;
        this.paymentTime = paymentTime;
        this.series = series;
        this.condition = condition;
        this.owner = owner;
    }

    public Findings(boolean condition) {
        this.condition = condition;
    }
}
