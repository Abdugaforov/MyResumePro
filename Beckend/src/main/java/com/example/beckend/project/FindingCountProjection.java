package com.example.beckend.project;

import javax.swing.*;

public interface FindingCountProjection {
    Long getId();
    Integer getCountIsTrue();
    Integer getCountIsFalse();
    Integer getCountIsTrueCondition();
    Integer getCountIsFalseCondition();
}
