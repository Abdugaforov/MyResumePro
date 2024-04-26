// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import apicall from "../apicall/apicall.js";

function FindingAll() {
    const [finding,setFinding] = useState([]);
    useEffect(() => {

        getAllFinding()
    }, []);

    function getAllFinding() {
        apicall('/finding/all', 'GET').then((response) => {
            setFinding(response.data);
        });
    }
    return (
        <div>
            <div className={"dFlexHome2"}>
                {finding.map((finding) => (
                    <div key={finding.id} className={"card divCard1"}>
                        <h2>{finding.ownerFullName}</h2>
                        <p>{finding.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FindingAll;