package com.example.beckend.dto;

import com.example.beckend.entity.Region;
import com.example.beckend.entity.TypeOfLostItem;
import com.example.beckend.entity.User;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotEmpty;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record FindingDto(

         boolean lostOrFound,
         String nameOfTheCenter,
         String centerEmployee,
         Integer applicationNumber,
         String serviceName,
         Long typeOfLostItem,
          String type,
         String description,
                  String content,
         LocalDate timeOfProduction ,
                  String specialSigns,
                  String seriesAndNumber,
         @NotEmpty
         String levelOfDamage,
         @NotEmpty
         String ownerFullName,
                   Long lostPlace,
         @NotEmpty
         LocalDate timeLost,
         @NotEmpty
         LocalDate paymentTime,
                  String series,
         @NotEmpty
         Long owner
) {
}
