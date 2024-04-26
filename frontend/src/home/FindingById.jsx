import React, { useEffect, useState } from 'react';
import apicall from '../apicall/apicall.js';

function FindingById() {
    const [findingsById, setFindingsById] = useState([]);

    let id = localStorage.getItem('findingId');

    useEffect(() => {
        getAllFinding();
    }, [id]);

    function getAllFinding() {
        apicall(`/finding/byId?id=${id}`, 'GET')
            .then((response) => {
                setFindingsById(response.data);
            })
            .catch(error => {
                console.error('Ma\'lumotlarni olishda xatolik yuz berdi:', error);
            });
    }

    return (
        <div style={{ width: '1310px' }}>
            <div style={{ width: '80%', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
                <h1 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '30px' }}>Findings Details</h1>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {id ? (
                        <div style={{ width: '100%', maxWidth: '800px' }}>
                            {findingsById.map((item, index) => (
                                <div key={index} style={{
                                    marginBottom: '20px',
                                    padding: '20px',
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',

                                }}>
                                    <h2 style={{
                                        marginBottom: '10px',
                                        fontSize: '24px',
                                        borderBottom: '2px solid #ccc',
                                        paddingBottom: '10px'
                                    }}>ID: {item.id}</h2>
                                    <p><strong>Name of the Center:</strong> {item.nameOfTheCenter}</p>
                                    <p><strong>Center Employee:</strong> {item.centerEmployee}</p>
                                    <p><strong>Application Number:</strong> {item.applicationNumber}</p>
                                    <p><strong>Service Name:</strong> {item.serviceName}</p>
                                    <p><strong>Type:</strong> {item.type}</p>
                                    <p><strong>Description:</strong> {item.description}</p>
                                    <p><strong>Content:</strong> {item.content}</p>
                                    <p><strong>Special Signs:</strong> {item.specialSigns}</p>
                                    <p><strong>Series And Number:</strong> {item.seriesAndNumber}</p>
                                    <p><strong>Level Of Damage:</strong> {item.levelOfDamage}</p>
                                    <p><strong>Owner Full Name:</strong> {item.ownerFullName}</p>
                                    <p><strong>Lost Place:</strong> {item.lostPlace}</p>
                                    <p><strong>Time Lost:</strong> {item.timeLost}</p>
                                    <p><strong>Payment Time:</strong> {item.paymentTime}</p>
                                    <p><strong>Series:</strong> {item.series}</p>
                                    <p><strong>Lost or Found:</strong> {item.lostOrFound ? 'Topildi' : 'yo`qolgan'}</p>
                                    <p><strong>Name Is Type Of Lost Item:</strong> {item.nameIsTypeOfLostItem}</p>
                                    <p><strong>Region Name:</strong> {item.lostPlace}</p>
                                    <p style={{    backgroundColor: item.condition ? 'green' : 'red',
                                        color: 'white'}}><strong>Condition:</strong> {item.condition ? 'Egasi topshirilgan' : 'Egasi kutmoqda'}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{ textAlign: 'center' }}>Ariza tanlang</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FindingById;
