// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apicalEazy from '../apicall/apicall';
import img from "../asaasa.jpg";
import apicall from "../apicall/apicall";
import region from '../region.png';
import topilmalarUz from '../topilmalarUz.jpg'
import karopka from '../karopka.png';
import auksiyon from '../auksiyon.png';
import topilmalar from '../topilma.png'
import coundition from '../coundition.png'

function Home() {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [sliderData, setSliderData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [findingCount, setFindingCount] = useState([]);
    const [findingCountIsTrue, setFindingCountIsTrue] = useState(0);
    const [findingCountIsFalse, setFindingCountIsFalse] = useState(0);
    const [findingCountIsTrueCondition, setFindingCountIsTrueCondition] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        apicalEazy('/finding/all', 'GET').then((response) => {
            setSliderData(response.data);
        });
        getFindingCountStatic()
        getFindingCount();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [sliderData]);

    const handleSearchButtonClick = () => {
        navigate('/reyestr');
    };



    function getFindingCount() {
        apicall('/finding/count', 'GET').then((response) => {
            setFindingCount(response.data);
        });
    }

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

                setFindingCountIsTrue(trueCount);
                setFindingCountIsFalse(falseCount);
                setFindingCountIsTrueCondition(trueConditionCount);

                setLoading(false);
            })
            .catch(error => {
                console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
                setLoading(false);
            });
    }

    return (
        <div className={"bgColor"}>
            <div className={"dAssault"}>
                <div style={{width: '100%', padding: '60px'}}>
                    <div>
                        <h3>Topilmalar avtomatlashtirilgan qidiruv tizimi</h3>
                        <p> Topilmalar va yo‘qolgan ashyolarning elektron reyestridan qidirish</p>
                    </div>
                    <div className={"div1"}>
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Qidiruv..."
                            className="form-control" // Qo'shimcha klas
                        />
                        <button onClick={handleSearchButtonClick} className="btn btn-dark">Qidiruv</button> {/* Qo'shimcha klas */}
                    </div>
                </div>
                <div>
                    <img src={img} alt="img" style={{width: '100%'}}/>
                </div>
            </div>
            <div className={"dFlexHome"}>
                {sliderData.slice(currentSlide, currentSlide + 3).map((finding) => (
                    <div key={finding.id} className={"card divCard"}>
                        <h2>{finding.ownerFullName}</h2>
                        <p>{finding.description}</p>
                    </div>
                ))}
            </div>
            <br/>
            <div className={"d-flex justify-content-center w-100"}>
                <button className={"btn btn-outline-info buttonB"} onClick={()=>navigate("/all")}>Barchasi</button>
            </div>
            <br/>
            <br/>
            <br/>
            <h2 style={{textAlign: "center"}}>Viloyatlar kesimida</h2>
            <div className="divCountry">
                <div>
                    <img src={region} alt=""/>
                </div>
                <div className={"div2"}>
                    {findingCount.map((count) => (
                        <div key={count.id} className="card2">
                            <p>{count.regionName}</p>
                            <div style={{color: "black", display: "flex", padding: '2px'}}>
                                <p> * {count.countIsTrue}</p>
                                <p style={{marginLeft:"12px"}}> * {count.countIsFalse}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <br/><br/><br/>
                <div><h2 style={{textAlign: "center"}}>S t a t i s t i c</h2></div>
                <div className={"static"}>
                    <div className={"staticDiv"} >
                        <img src={karopka} alt=""/>
                        <br/>
                        {findingCountIsTrue}
                        <br/>
                        topilgan ashyolar
                    </div>
                    <div className={"staticDiv"} >
                        <img  src={topilmalar} alt=""/>
                        <br/>{findingCountIsFalse}
                        <br/>
                        yo`qolgan ashyolar
                    </div>
                    <div className={"staticDiv"} >
                        <img  src={auksiyon} alt=""/>
                        <br/>
                        0
                        <br/>
                        auksiyonga chiqarilgan
                    </div>
                    <div className={"staticDiv"} >
                        <img  src={coundition} alt=""/>
                        <br/>
                        {findingCountIsTrueCondition}
                        <br/>
                        Egasiga topshirilganlar
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            <div>
                <img src={topilmalarUz} alt=""/>
            </div>
        </div>
    );
}

export default Home;
