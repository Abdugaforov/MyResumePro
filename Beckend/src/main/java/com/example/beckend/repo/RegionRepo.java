package com.example.beckend.repo;

import com.example.beckend.entity.Region;
import com.example.beckend.project.RegionProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RegionRepo extends JpaRepository<Region,Long> {
    @Query(value = """
    select
        r.id as id,
        r.name_of_the_center as regionName,
        sum(case when f.lost_or_found = true then 1 else 0 end) as countIsTrue,
        sum(case when f.lost_or_found = false then 1 else 0 end) as countIsFalse
    from
        region r
    left join  findings f on r.id = f.lost_place_id
    group by
        r.id;
    """, nativeQuery = true)
    List<RegionProjection> getFindingsBySearchAllSeriesRegion();
}
