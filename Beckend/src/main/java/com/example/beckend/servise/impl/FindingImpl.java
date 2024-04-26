package com.example.beckend.servise.impl;

import com.example.beckend.dto.FindingDto;
import com.example.beckend.entity.Findings;
import com.example.beckend.entity.Region;
import com.example.beckend.entity.TypeOfLostItem;
import com.example.beckend.entity.User;
import com.example.beckend.project.FindingCountProjection;
import com.example.beckend.project.FindingsProjection;
import com.example.beckend.project.RegionProjection;
import com.example.beckend.repo.FindingsRepo;
import com.example.beckend.repo.RegionRepo;
import com.example.beckend.repo.TypeOfLostItemRepo;
import com.example.beckend.repo.UserRepo;
import com.example.beckend.servise.FindingsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FindingImpl implements FindingsService {
    private final FindingsRepo findingsRepo;
    private final RegionRepo regionRepo;
    private final UserRepo repo;
    private final TypeOfLostItemRepo typeOfLostItemRepo;
    @Override
    public List<FindingsProjection> getAllFindingsById(Long id) {
        return findingsRepo.getFindingsById(id);
    }

    @Override
    public List<FindingsProjection> getFindingsBySearchAll(Boolean lostOrFound, Integer lostPlaceId, Long typeOfLostItemId, String type, String series,int limit,int offset) {
        if (typeOfLostItemId != null && lostPlaceId != null && !type.isEmpty() && !series.isEmpty() ) {
            return findingsRepo.getFindingsBySearchAll(lostOrFound, lostPlaceId, typeOfLostItemId, type, series);
        } else {
            return findingsRepo.findingGetOfsetAndLimit(limit,offset);
        }
    }



    @Override
    public List<RegionProjection> getCounts() {
        return regionRepo.getFindingsBySearchAllSeriesRegion();
    }

    @Override
    public Findings postFindings(FindingDto dto) {
        User user = repo.findById(dto.owner()).orElseThrow();
        TypeOfLostItem typeOfLostItem = typeOfLostItemRepo.findById(dto.typeOfLostItem()).orElseThrow();
        Region region = regionRepo.findById(dto.lostPlace()).orElseThrow();
        Findings build = Findings.builder()
                   .lostOrFound(dto.lostOrFound())
                    .nameOfTheCenter(dto.nameOfTheCenter())
                    .centerEmployee(dto.centerEmployee())
                    .applicationNumber(dto.applicationNumber())
                    .serviceName(dto.serviceName())
                    .typeOfLostItem(typeOfLostItem)
                    .type(dto.type())
                    .description(dto.description())
                    .content(dto.content())
                    .timeOfProduction(dto.timeOfProduction())
                    .specialSigns(dto.specialSigns())
                    .seriesAndNumber(dto.seriesAndNumber())
                    .levelOfDamage(dto.levelOfDamage())
                    .ownerFullName(dto.ownerFullName())
                    .lostPlace(region)
                    .timeLost(dto.timeLost())
                    .paymentTime(dto.paymentTime())
                    .series(dto.series())
                    .condition(false)
                    .owner(user)
                    .build();
            return findingsRepo.save(build);
    }

    @Override
    public Findings pachFindings(Long id) {
        Findings findings = findingsRepo.findById(id).orElseThrow();
        findings.setCondition(!findings.isCondition());
        return findingsRepo.save(findings);
    }

    @Override
    public List<Findings> getAllFindings() {
        return findingsRepo.findAll();
    }

    @Override
    public List<Findings> getAllFindingsForAdmin() {
        return findingsRepo.findAll();
    }

    @Override
    public List<FindingCountProjection> getFindingsCounts() {
        return findingsRepo.getFindingsCounts();
    }


}
