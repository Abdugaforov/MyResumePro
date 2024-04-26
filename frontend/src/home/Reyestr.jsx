import React, { useEffect, useState } from 'react';
import apicall from "../apicall/apicall.js";
import { FaBars } from 'react-icons/fa';
import eye from '../free-icon-eye-8051212 (1).png'
import {useNavigate} from "react-router-dom";

function Reyestr() {
    const [findings, setFindings] = useState([]);
    const [findingsAll, setFindingsAll] = useState([]);
    const [regions, setRegions] = useState([]);
    const [typesOfLostItems, setTypesOfLostItems] = useState([]);
    const [lostOrFound, setLostOrFound] = useState(false);
    const [typeOfLostItemId, setSelectedTypeOfLostItemId] = useState(0);
    const [type, setSelectedType] = useState('');
    const [series, setSelectedSeries] = useState('');
    const [lostPlaseId, setRegionsId] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const [offset, setOffset] = useState(0); // Default offset 0
    const [limit, setLimit] = useState(14); // Default limit 20
    const navigate = useNavigate()

    useEffect(() => {
        getAllFinding();
        getAllRegion();
        getAllTypesOfLostItem();
        getAllFindingAll();
    }, [lostOrFound, typeOfLostItemId, type, series, offset, limit]);

    function getAllFinding() {
        apicall(`/finding?lostOrFound=${lostOrFound}&lostPlace=${lostPlaseId}&typeOfLostItemId=${typeOfLostItemId}&type=${type}&series=${series}&limit=${limit}&offset=${offset}`, "GET")
            .then(response => {
                setFindings(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Ma\'lumotlarni olishda xatolik yuz berdi:', error);
            });
    }
    function getAllFindingAll() {
        apicall(`/finding/all`, "GET")
            .then(response => {
                setFindingsAll(response.data);
            })
            .catch(error => {
                console.error('Ma\'lumotlarni olishda xatolik yuz berdi:', error);
            });
    }

    function getAllRegion() {
        apicall('/region', "GET")
            .then(response => {
                setRegions(response.data);
            })
            .catch(error => {
                console.error('Regionlarni olishda xatolik yuz berdi:', error);
            });
    }

    function getAllTypesOfLostItem() {
        apicall('/typeOfLostItem', "GET")
            .then(response => {
                setTypesOfLostItems(response.data);
            })
            .catch(error => {
                console.error('Yo\'qotilgan narsalarni olishda xatolik yuz berdi:', error);
            });
    }

    function navigateFunk(id) {
        localStorage.setItem("findingId",id)
        navigate("/findingById")
    }

    return (
        <div className="container">
            <div className={"dsf"}>
                <div className={"dsfDiv"}>
                    <div>
                        <select id="lostOrFoundSelect" onChange={(e) => setLostOrFound(e.target.value === "true")}>
                            <option value="">Yo`qolgan yoki topilgan:</option>
                            <option value="false">Yo`qolgan</option>
                            <option value="true">Topilgan</option>
                        </select>
                    </div>
                    <div>
                        <select id="regionSelect" onChange={(e) => setRegionsId(e.target.value)}>
                            <option value="">Region:...</option>
                            {regions.map(region => (
                                <option key={region.id} value={region.id}>{region.nameOfTheCenter}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select id="typeOfLostItemSelect" onChange={(e) => setSelectedTypeOfLostItemId(e.target.value)}>
                            <option value="">Type of Lost Item..</option>
                            {typesOfLostItems.map(type => (
                                <option key={type.id} value={type.id}>{type.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select id="selectedType" onChange={(e) => setSelectedType(e.target.value)}>
                            <option value="">Selected Type......</option>
                            {findingsAll.map(item => (
                                <option key={item.id} value={item.type}>{item.type}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select id="seriesSelect" onChange={(e) => setSelectedSeries(e.target.value)}>
                            <option value="">Series.....</option>
                            {findingsAll.map(item => (
                                <option key={item.id} value={item.series}>{item.series}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
                    <FaBars/>
                </div>
            </div>
            {showMenu && (
                <div className="menu-dropdown">
                    <div>
                        <div>
                            <select id="lostOrFoundSelect" onChange={(e) => setLostOrFound(e.target.value === "true")}>
                                <option value="">Yo`qolgan yoki topilgan:</option>
                                <option value="false">Yo`qolgan</option>
                                <option value="true">Topilgan</option>
                            </select>
                        </div>
                        <div>
                            <select id="regionSelect" onChange={(e) => setRegionsId(e.target.value)}>
                                <option value="">Region:...</option>
                                {regions.map(region => (
                                    <option key={region.id} value={region.id}>{region.nameOfTheCenter}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select id="typeOfLostItemSelect"
                                    onChange={(e) => setSelectedTypeOfLostItemId(e.target.value)}>
                                <option value="">Type of Lost Item..</option>
                                {typesOfLostItems.map(type => (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select id="selectedType" onChange={(e) => setSelectedType(e.target.value)}>
                                <option value="">Selected Type......</option>
                                {findingsAll.map(item => (
                                    <option key={item.id} value={item.type}>{item.type}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select id="seriesSelect" onChange={(e) => setSelectedSeries(e.target.value)}>
                                <option value="">Series.....</option>
                                {findingsAll.map(item => (
                                    <option key={item.id} value={item.series}>{item.series}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            )}
            <div style={{overflowX: "auto", width: "auto"}}>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name of the Center</th>
                        <th>Center Employee</th>
                        <th>Application Number</th>
                        <th>Service Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Content</th>
                        <th>Special Signs</th>
                        <th>Series And Number</th>
                        <th>Level Of Damage</th>
                        <th>Owner Full Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {findings.map((finding, index) => (
                        <tr key={finding.id}>
                            <td>
                                <div style={{display: "flex"}}>
                                    <p>
                                        <button onClick={()=>navigateFunk(finding.id)} style={{backgroundColor:"white",marginTop:'-8px'}}>
                                            <img src={eye} alt=""/>
                                        </button>
                                    </p>
                                    <p>{finding.id}</p>
                                </div>
                            </td>
                            <td>{finding.nameOfTheCenter}</td>
                            <td>{finding.centerEmployee}</td>
                            <td>{finding.applicationNumber}</td>
                            <td>{finding.serviceName}</td>
                            <td>{finding.type}</td>
                            <td>{finding.description}</td>
                            <td>{finding.content}</td>
                            <td>{finding.specialSigns}</td>
                            <td>{finding.seriesAndNumber}</td>
                            <td>{finding.levelOfDamage}</td>
                            <td>{finding.ownerFullName}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div style={{justifyContent: 'flex-end', display: 'flex'}}>
                <button style={{width: '30px', marginRight: '10px'}} onClick={() => {
                    if (offset > 0) {
                        setOffset(offset - limit);
                        getAllFinding();
                    }
                }}>
                    &lt;
                </button>
                <button className={'btnOffset1 s'} onClick={() => {
                    setOffset(5);
                    setLimit(10);
                    getAllFinding();
                }}>5
                </button>
                <button className={'btnOffset1 s'} onClick={() => {
                    setOffset(10);
                    setLimit(10);
                    getAllFinding();
                }}>10
                </button>
                <button className={'btnOffset1 s'} onClick={() => {
                    setOffset(20);
                    setLimit(10);
                    getAllFinding();
                }}>20
                </button>
                <button className={'btnOffset1 s'} onClick={() => {
                    setOffset(30);
                    setLimit(10);
                    getAllFinding();
                }}>30
                </button>
                <button className={'btnOffset1 '} style={{marginRight: '10px'}} onClick={() => {
                    setOffset(40);
                    setLimit(10);
                    getAllFinding();
                }}>40
                </button>
                <button style={{width: '30px'}} onClick={() => {
                    setOffset(offset + limit);
                    getAllFinding();
                }}>
                    &gt;
                </button>
            </div>

        </div>
    );
}

export default Reyestr;
