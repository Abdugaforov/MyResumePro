package com.example.beckend.servise;

import com.example.beckend.dto.FindingDto;
import com.example.beckend.entity.Findings;
import com.example.beckend.project.FindingCountProjection;
import com.example.beckend.project.FindingsProjection;
import com.example.beckend.project.RegionProjection;

import java.util.List;

public interface FindingsService
{
    List<FindingsProjection> getAllFindingsById(Long id);
    List<FindingsProjection> getFindingsBySearchAll(Boolean lostOrFound, Integer lostPlace, Long typeOfLostItemId, String type , String series,int limit,int offset);

    List<RegionProjection> getCounts();

    Findings postFindings(FindingDto dto);
    Findings pachFindings(Long id);


    List<Findings> getAllFindings();
    List<Findings> getAllFindingsForAdmin();
    List<FindingCountProjection> getFindingsCounts();
}
