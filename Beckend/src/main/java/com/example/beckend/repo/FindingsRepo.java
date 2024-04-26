package com.example.beckend.repo;

import com.example.beckend.entity.Findings;
import com.example.beckend.project.FindingCountProjection;
import com.example.beckend.project.FindingsProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FindingsRepo extends JpaRepository<Findings,Long> {
    @Query(value = "select f.id as id, f.name_of_the_center as nameOfTheCenter , f.center_employee as centerEmployee , f.application_number as applicationNumber , f.service_name as serviceName , f.type_of_lost_item_id as typeOfLostItem , f.type as type , f.description as description , f.content as content , f.time_of_production as timeOfProduction , f.special_signs as specialSigns , f.series_and_number as seriesAndNumber, f.level_of_damage as levelOfDamage  , f.owner_full_name  as ownerFullName , r.name_of_the_center as lostPlace , f.time_lost as timeLost, f.payment_time as paymentTime, f.series as series , f.condition as condition , f.lost_or_found as lostOrFound , tl.name as nameIsTypeOfLostItem  from findings f  inner join region r on f.lost_place_id = r.id inner join type_of_lost_item tl on f.type_of_lost_item_id = tl.id where f.lost_or_found = :lostOrFound and f.lost_place_id=:lostPlaceId and (f.type_of_lost_item_id = :typeOfLostItemId and f.type = :type  and f.series = :series or f.lost_or_found=:lostOrFound ) ", nativeQuery = true)
    List<FindingsProjection> getFindingsBySearchAll(Boolean lostOrFound, Integer lostPlaceId, Long typeOfLostItemId, String type, String series);

    @Query(value = "select f.id as id, f.name_of_the_center as nameOfTheCenter , f.center_employee as centerEmployee , f.application_number as applicationNumber , f.service_name as serviceName , f.type_of_lost_item_id as typeOfLostItem , f.type as type , f.description as description , f.content as content , f.time_of_production as timeOfProduction , f.special_signs as specialSigns , f.series_and_number as seriesAndNumber, f.level_of_damage as levelOfDamage  , f.owner_full_name  as ownerFullName , r.name_of_the_center as lostPlace , f.time_lost as timeLost, f.payment_time as paymentTime, f.series as series , f.condition as condition , f.lost_or_found as lostOrFound , tl.name as nameIsTypeOfLostItem  from findings f  inner join region r on f.lost_place_id = r.id inner join type_of_lost_item tl on f.type_of_lost_item_id = tl.id GROUP BY f.id , r.id order by f.id", nativeQuery = true)
    List<FindingsProjection> getFindingsByAll();



    @Query(value = "select f.id as id, f.name_of_the_center as nameOfTheCenter , f.center_employee as centerEmployee , f.application_number as applicationNumber , f.service_name as serviceName , f.type_of_lost_item_id as typeOfLostItem , f.type as type , f.description as description , f.content as content , f.time_of_production as timeOfProduction , f.special_signs as specialSigns , f.series_and_number as seriesAndNumber, f.level_of_damage as levelOfDamage  , f.owner_full_name  as ownerFullName , r.name_of_the_center as lostPlace , f.time_lost as timeLost, f.payment_time as paymentTime, f.series as series , f.condition as condition , f.lost_or_found as lostOrFound , tl.name as nameIsTypeOfLostItem  from findings f  inner join region r on f.lost_place_id = r.id inner join type_of_lost_item tl on f.type_of_lost_item_id = tl.id where f.lost_or_found = :lostOrFound", nativeQuery = true)
    List<FindingsProjection> getFindingsBySearchLostOrFound(Boolean lostOrFound);

    @Query(value = "select f.id as id, f.name_of_the_center as nameOfTheCenter , f.center_employee as centerEmployee , f.application_number as applicationNumber , f.service_name as serviceName , f.type_of_lost_item_id as typeOfLostItem , f.type as type , f.description as description , f.content as content , f.time_of_production as timeOfProduction , f.special_signs as specialSigns , f.series_and_number as seriesAndNumber, f.level_of_damage as levelOfDamage  , f.owner_full_name  as ownerFullName , r.name_of_the_center as lostPlace , f.time_lost as timeLost, f.payment_time as paymentTime, f.series as series , f.condition as condition , f.lost_or_found as lostOrFound , tl.name as nameIsTypeOfLostItem  from findings f  inner join region r on f.lost_place_id = r.id inner join type_of_lost_item tl on f.type_of_lost_item_id = tl.id where f.type_of_lost_item_id = :typeOfLostItemId", nativeQuery = true)
    List<FindingsProjection> getFindingsBySearchAllTypeOfLostItemId(Long typeOfLostItemId);

    @Query(value = "select f.id as id, f.name_of_the_center as nameOfTheCenter , f.center_employee as centerEmployee , f.application_number as applicationNumber , f.service_name as serviceName , f.type_of_lost_item_id as typeOfLostItem , f.type as type , f.description as description , f.content as content , f.time_of_production as timeOfProduction , f.special_signs as specialSigns , f.series_and_number as seriesAndNumber, f.level_of_damage as levelOfDamage  , f.owner_full_name  as ownerFullName , r.name_of_the_center as lostPlace , f.time_lost as timeLost, f.payment_time as paymentTime, f.series as series , f.condition as condition , f.lost_or_found as lostOrFound , tl.name as nameIsTypeOfLostItem  from findings f  inner join region r on f.lost_place_id = r.id inner join type_of_lost_item tl on f.type_of_lost_item_id = tl.id where f.type = :type ", nativeQuery = true)
    List<FindingsProjection> getFindingsBySearchAllType(String type);

    @Query(value = "select f.id as id, f.name_of_the_center as nameOfTheCenter , f.center_employee as centerEmployee , f.application_number as applicationNumber , f.service_name as serviceName , f.type_of_lost_item_id as typeOfLostItem , f.type as type , f.description as description , f.content as content , f.time_of_production as timeOfProduction , f.special_signs as specialSigns , f.series_and_number as seriesAndNumber, f.level_of_damage as levelOfDamage  , f.owner_full_name  as ownerFullName , r.name_of_the_center as lostPlace , f.time_lost as timeLost, f.payment_time as paymentTime, f.series as series , f.condition as condition , f.lost_or_found as lostOrFound , tl.name as nameIsTypeOfLostItem  from findings f  inner join region r on f.lost_place_id = r.id inner join type_of_lost_item tl on f.type_of_lost_item_id = tl.id where f.series = :series", nativeQuery = true)
    List<FindingsProjection> getFindingsBySearchAllSeries(String series);

    @Query(value = "select f.id as id, f.name_of_the_center as nameOfTheCenter , f.center_employee as centerEmployee , f.application_number as applicationNumber , f.service_name as serviceName , f.type_of_lost_item_id as typeOfLostItem , f.type as type , f.description as description , f.content as content , f.time_of_production as timeOfProduction , f.special_signs as specialSigns , f.series_and_number as seriesAndNumber, f.level_of_damage as levelOfDamage  , f.owner_full_name  as ownerFullName , r.name_of_the_center as lostPlace , f.time_lost as timeLost, f.payment_time as paymentTime, f.series as series , f.condition as condition , f.lost_or_found as lostOrFound , tl.name as nameIsTypeOfLostItem  from findings f  inner join region r on f.lost_place_id = r.id inner join type_of_lost_item tl on f.type_of_lost_item_id = tl.id", nativeQuery = true)
    List<FindingsProjection> getAllFinding();


        @Query(value = """
    select
        f.id as id,
        sum(case when f.lost_or_found = true then 1 else 0 end) as countIsTrue,
        sum(case when f.lost_or_found = false then 1 else 0 end) as countIsFalse,
        sum(case when f.condition = true then 1 else 0 end) as countIsTrueCondition,
        sum(case when f.condition = false then 1 else 0 end) as countIsFalseCondition
    from  findings f group by f.id
    """, nativeQuery = true)
        List<FindingCountProjection> getFindingsCounts();


    @Query(value = "select f.id as id, f.name_of_the_center as nameOfTheCenter , f.center_employee as centerEmployee , f.application_number as applicationNumber , f.service_name as serviceName , f.type_of_lost_item_id as typeOfLostItem , f.type as type , f.description as description , f.content as content , f.time_of_production as timeOfProduction , f.special_signs as specialSigns , f.series_and_number as seriesAndNumber, f.level_of_damage as levelOfDamage  , f.owner_full_name  as ownerFullName , r.name_of_the_center as lostPlace , f.time_lost as timeLost, f.payment_time as paymentTime, f.series as series , f.condition as condition , f.lost_or_found as lostOrFound , tl.name as nameIsTypeOfLostItem  from findings f  inner join region r on f.lost_place_id = r.id inner join type_of_lost_item tl on f.type_of_lost_item_id = tl.id where  f.lost_place_id = :lostPlaceId", nativeQuery = true)
    List<FindingsProjection> getFindingsBySearchAllLostPlaseId(Integer lostPlaceId);
    @Query(value = "select f.id as id, f.name_of_the_center as nameOfTheCenter , f.center_employee as centerEmployee , f.application_number as applicationNumber , f.service_name as serviceName , f.type_of_lost_item_id as typeOfLostItem , f.type as type , f.description as description , f.content as content , f.time_of_production as timeOfProduction , f.special_signs as specialSigns , f.series_and_number as seriesAndNumber, f.level_of_damage as levelOfDamage  , f.owner_full_name  as ownerFullName , r.name_of_the_center as lostPlace , f.time_lost as timeLost, f.payment_time as paymentTime, f.series as series , f.condition as condition , f.lost_or_found as lostOrFound , tl.name as nameIsTypeOfLostItem  from findings f  inner join region r on f.lost_place_id = r.id inner join type_of_lost_item tl on f.type_of_lost_item_id = tl.id where f.id=:id ", nativeQuery = true)
    List<FindingsProjection> getFindingsById(Long id);

    @Query(value = "select f.id as id, f.name_of_the_center as nameOfTheCenter , f.center_employee as centerEmployee , f.application_number as applicationNumber , f.service_name as serviceName , f.type_of_lost_item_id as typeOfLostItem , f.type as type , f.description as description , f.content as content , f.time_of_production as timeOfProduction , f.special_signs as specialSigns , f.series_and_number as seriesAndNumber, f.level_of_damage as levelOfDamage  , f.owner_full_name  as ownerFullName , r.name_of_the_center as lostPlace , f.time_lost as timeLost, f.payment_time as paymentTime, f.series as series , f.condition as condition , f.lost_or_found as lostOrFound , tl.name as nameIsTypeOfLostItem  from findings f  inner join region r on f.lost_place_id = r.id inner join type_of_lost_item tl on f.type_of_lost_item_id = tl.id GROUP BY f.id , r.id, tl.id order by f.id LIMIT :limit OFFSET :offset ", nativeQuery = true)
    List<FindingsProjection> findingGetOfsetAndLimit(@Param("limit") int limit, @Param("offset") int offset);

}