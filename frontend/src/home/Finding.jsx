import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apicall from "../apicall/apicall.js";

function Finding() {
    const owner = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [typeOfLostItem, setTypeOfLostItem] = useState([]);
    const [lostPlace, setLostPlace] = useState([]);
    const [lostOrFound, setLostOrFound] = useState(false);
    const [nameOfTheCenter, setNameOfTheCenter] = useState('');
    const [centerEmployee, setCenterEmployee] = useState('');
    const [applicationNumber, setApplicationNumber] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [typeOfLostItemValue, setTypeOfLostItemValue] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [timeOfProduction, setTimeOfProduction] = useState('');
    const [specialSigns, setSpecialSigns] = useState('');
    const [seriesAndNumber, setSeriesAndNumber] = useState('');
    const [levelOfDamage, setLevelOfDamage] = useState('');
    const [ownerFullName, setOwnerFullName] = useState('');
    const [lostPlaceValue, setLostPlaceValue] = useState('');
    const [timeLost, setTimeLost] = useState('');
    const [paymentTime, setPaymentTime] = useState('');
    const [series, setSeries] = useState('');
    const [admin,setAdmin]= useState(false)

    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    useEffect(() => {
        getAllTypeOfLostItem();
        getAllLostPlace();
        getAllUsers()
    }, [refreshToken,accessToken]);


    function getAllUsers() {
        apicall('/finding/admin', 'GET',{}, { Authorization:accessToken }).then(() => {
            setAdmin(true)
        }).catch(() => {
            apicall("/refresh", "POST", {}, { Authorization : refreshToken })
                .then(res => {
                    localStorage.setItem("access_token", res.data);
                })
        });
    }

    const getAllTypeOfLostItem = () => {
        apicall('/typeOfLostItem', "GET")
            .then((res) => {
                setTypeOfLostItem(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getAllLostPlace = () => {
        apicall('/region', "GET")
            .then((res) => {
                setLostPlace(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            lostOrFound,
            nameOfTheCenter,
            centerEmployee,
            applicationNumber,
            serviceName,
            typeOfLostItem: typeOfLostItemValue,
            type,
            description,
            content,
            timeOfProduction,
            specialSigns,
            seriesAndNumber,
            levelOfDamage,
            ownerFullName,
            lostPlace: lostPlaceValue,
            timeLost,
            paymentTime,
            series,
            owner
        };

        apicall('/finding/post', 'POST', formData, { Authorization: localStorage.getItem("access_token") })
            .then((res) => {
                if (res.data) {
                    alert("arizangiz qabul qilindi")
                    navigate('/');
                }
            })
            .catch((error) => {
                // alert("iltimos ayta login qiling")
                // navigate('/login')
                console.error('Error occurred while submitting form:', error);
            });
    };

    return (
        <div style={{ width: '1310px', height: '100vh' }}>
            {owner ? (
                <div className={"container"}>
                    <div className={"card"} style={{ width: '600px' }}>
                        <h1 style={{textAlign:"center"}}>Ariza</h1>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <select value={lostOrFound} onChange={(e) => setLostOrFound(e.target.value)}>
                                    <option value={false}>Yo`qolgan</option>
                                    <option value={true}>Topilgan</option>
                                </select>
                                <input type="text" value={nameOfTheCenter} onChange={(e) => setNameOfTheCenter(e.target.value)} placeholder="Markaz nomi" />
                                <input type="text" value={centerEmployee} onChange={(e) => setCenterEmployee(e.target.value)} placeholder="Markaz hodimi" />
                                <input type="number" value={applicationNumber} onChange={(e) => setApplicationNumber(e.target.value)} placeholder="Ariza raqami" />
                                <input type="text" value={serviceName} onChange={(e) => setServiceName(e.target.value)} placeholder="Xizmat nomi" />
                                <select value={typeOfLostItemValue} onChange={(e) => setTypeOfLostItemValue(e.target.value)}>
                                    <option value="">Yo'qotilgan narsa turi tanlang</option>
                                    {typeOfLostItem.map((item) => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                                <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Turi" />
                                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ta'rif" />
                                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Qo`shimcha tarif" />
                                <input type="date" value={timeOfProduction} onChange={(e) => setTimeOfProduction(e.target.value)} placeholder="Ishlab chiqarilgan vaqt" />
                                <input type="text" value={specialSigns} onChange={(e) => setSpecialSigns(e.target.value)} placeholder="Maxsus belgilar" />
                                <input type="text" value={seriesAndNumber} onChange={(e) => setSeriesAndNumber(e.target.value)} placeholder="Seriyalar va raqamlar" />
                                <input type="text" value={levelOfDamage} onChange={(e) => setLevelOfDamage(e.target.value)} placeholder="Shikastlanganlik darajasi" />
                                <input type="text" value={ownerFullName} onChange={(e) => setOwnerFullName(e.target.value)} placeholder="Egasi to'liq ismi" />
                                <select value={lostPlaceValue} onChange={(e) => setLostPlaceValue(e.target.value)}>
                                    <option value="">Yo'qotilgan joyni tanlang</option>
                                    {lostPlace.map((place) => (
                                        <option key={place.id} value={place.id}>{place.nameOfTheCenter}</option>
                                    ))}
                                </select>
                                <input type="date" value={timeLost} onChange={(e) => setTimeLost(e.target.value)} placeholder="Yo'qotilgan vaqt" />
                                <input type="date" value={paymentTime} onChange={(e) => setPaymentTime(e.target.value)} placeholder="To'lov vaqti" />
                                <input type="text" value={series} onChange={(e) => setSeries(e.target.value)} placeholder="Seriyalar" />
                                <button type="submit">Yuborish</button>
                            </form>
                        </div>
                    </div>

                    {
                        admin&&<button style={{width:"130px", alignItems:"center"}} onClick={() => navigate("/admin")}>admin</button>

                    }
                </div>
            ) : (
                <div className={"findingNotUserDiv"}>
                    <h1>Iltimos ro'yxatdan o'ting</h1>
                    <button className={"buttonB"} onClick={() => navigate("/register")}>Ro'yxatdan o'tish</button>
                    <br />
                    <button className={"buttonD"} onClick={() => navigate("/login")}>Kirish</button>
                </div>
            )}
        </div>
    );
}

export default Finding;
