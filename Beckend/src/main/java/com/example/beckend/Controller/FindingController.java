package com.example.beckend.Controller;

import com.example.beckend.dto.FindingDto;
import com.example.beckend.entity.Findings;
import com.example.beckend.project.FindingCountProjection;
import com.example.beckend.project.FindingsProjection;
import com.example.beckend.project.RegionProjection;
import com.example.beckend.servise.FindingsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/finding")
public class FindingController {
    @Autowired
    FindingsService findingsService;

    @GetMapping
    public HttpEntity<?> getAllFinding(@RequestParam Boolean lostOrFound,
                                       @RequestParam Integer lostPlace,
                                       @RequestParam Long typeOfLostItemId,
                                       @RequestParam String type,
                                       @RequestParam String series,
                                       @RequestParam int limit,
                                       @RequestParam int offset
                                       ) {
        List<FindingsProjection> findingsBySearchAll = findingsService.getFindingsBySearchAll(lostOrFound, lostPlace,typeOfLostItemId, type, series,limit,offset);
        return ResponseEntity.ok(findingsBySearchAll);
    }

    @GetMapping("/byId")
    public HttpEntity<?> getById(@RequestParam Long id){
        List<FindingsProjection> allFindingsById = findingsService.getAllFindingsById(id);
        return ResponseEntity.ok(allFindingsById);
    }

    @GetMapping("/count")
    public HttpEntity<?> getByCount(){
        List<RegionProjection> counts = findingsService.getCounts();
        return ResponseEntity.ok(counts);
    }
    @GetMapping("/static")
    public HttpEntity<?> getByCountStatic(){
        List<FindingCountProjection> findingsCounts = findingsService.getFindingsCounts();
        return ResponseEntity.ok(findingsCounts);
    }

    @GetMapping("/all")
    public HttpEntity<?> getAllFindings(){
        List<Findings> allFindings =  findingsService.getAllFindings();
        return ResponseEntity.ok(allFindings);
    }

    @GetMapping("/admin")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    public HttpEntity<?> getAllFindingsAdmin() {
        List<Findings> allFindings = findingsService.getAllFindings();
        return ResponseEntity.ok(allFindings);
    }
    @GetMapping("/adminS")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    public HttpEntity<?> getAllFindingsAdmin(@RequestParam Boolean lostOrFound,
                                             @RequestParam Integer lostPlace,
                                             @RequestParam Long typeOfLostItemId,
                                             @RequestParam String type,
                                             @RequestParam String series,
                                             @RequestParam int limit,
                                             @RequestParam int offset
    ) {
        List<FindingsProjection> findingsBySearchAll = findingsService.getFindingsBySearchAll(lostOrFound, lostPlace,typeOfLostItemId, type, series,limit,offset);
        return ResponseEntity.ok(findingsBySearchAll);
    }
    @PostMapping("/post")
  @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN','ROLE_USER')")
    public HttpEntity<?> postFindings(@RequestBody FindingDto dto) {
            return ResponseEntity.ok(findingsService.postFindings(dto));
    }

    @PatchMapping("/patch")
   @PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_SUPER_ADMIN')")
    public HttpEntity<?> patchFindings(@RequestParam Long id) {
        Findings patchedFindings = findingsService.pachFindings(id);
       return ResponseEntity.ok(patchedFindings);
    }
}
