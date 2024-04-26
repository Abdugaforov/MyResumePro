package com.example.beckend.project;

import com.example.beckend.entity.Region;

import java.time.LocalDate;
import java.time.LocalDateTime;

public interface FindingsProjection {
    Long getId();
    Long getIdF();
    String getNameOfTheCenter();
    Integer getCountIsTrue();
    Integer getCountIsFalse();
    Integer getCountIsTrueCondition();
    String getCenterEmployee();
    Integer getApplicationNumber();
    String getServiceName();
    Long getTypeOfLostItem();
    String getType();
    String getDescription();
    String getContent();
    LocalDate getTimeOfProduction ();
    String getSpecialSigns();
    String getSeriesAndNumber();
    String getLevelOfDamage();
    String getOwnerFullName();
    String getLostPlace();
    LocalDate getTimeLost();
    LocalDate getPaymentTime();
    String getSeries();
    boolean getCondition();
    boolean getLostOrFound();
    String getNameIsTypeOfLostItem();
    String getRegionName();
}
