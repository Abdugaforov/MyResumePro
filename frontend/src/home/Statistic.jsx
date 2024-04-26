import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import karopka from "../karopka.png";
import topilmalar from "../topilma.png";
import auksiyon from "../auksiyon.png";
import coundition from "../coundition.png";
import topilmalarUz from "../topilmalarUz.jpg";
import apicall from "../apicall/apicall.js";
import apicalEazy from "../apicall/apicall.js";
import {
    setStatisticData
} from './actions.jsx';
function Statistic() {
    const dispatch = useDispatch();
    const trueCount = useSelector(state => state.trueCount);
    const falseCount = useSelector(state => state.falseCount);
    const trueConditionCount = useSelector(state => state.trueConditionCount);

    useEffect(() => {
        apicalEazy('/finding/all', 'GET').then(() => {

        });
        getFindingCountStatic()
    }, []);


    function getFindingCountStatic() {
        apicall("/finding/static","GET")
            .then(response => {
                let trueCount = 0;
                let falseCount = 0;
                let trueConditionCount = 0;

                response.data.forEach(item => {
                    trueCount += item.countIsTrue;
                    falseCount += item.countIsFalse;
                    trueConditionCount += item.countIsTrueCondition;
                });

                dispatch(setStatisticData(trueCount, falseCount, trueConditionCount));
            })
            .catch(error => {
                console.error("Error occurred while fetching data:", error);
            });
    }

    return (
        <div className="row" style={{width: '1310px',height:'500px'}}>
            <div>
                <br/><br/><br/>
                <br/><br/>
                <div><h1 className={"h1FontSize"}>Statistic</h1></div>
                <div className={"static"}>
                    <div className={"staticDiv"}>
                        <img src={karopka} alt=""/>
                        <br/>
                        {trueCount}
                        <br/>
                        Topilgan ashyolar
                    </div>
                    <div className={"staticDiv staticDiv1"}>
                        <img src={topilmalar} alt=""/>
                        <br/>{falseCount}
                        <br/>
                        Yo`qolgan ashyolar
                    </div>
                    <div className={"staticDiv staticDiv1"}>
                        <img src={auksiyon} alt=""/>
                        <br/>
                        0
                        <br/>
                        Auksiyonga chiqarilgan
                    </div>
                    <div className={"staticDiv staticDiv1"}>
                        <img src={coundition} alt=""/>
                        <br/>
                        {trueConditionCount}
                        <br/>
                        Egasiga topshirilganlar
                    </div>
                </div>
            </div>
            <br/><br/>
            <div>
                <img src={topilmalarUz} alt=""/>
            </div>
        </div>
    );
}

export default Statistic;