import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Icon } from 'leaflet'

const defaultLocations = [
    { 
        name: "โรงพยาบาลศิริราช", 
        coords: [13.7563, 100.4889], 
        description: "โรงพยาบาลเก่าแก่และใหญ่ที่สุดในไทย ตั้งอยู่ริมแม่น้ำเจ้าพระยา", 
        contactInfo: "02-419-7000" 
    },
    { 
        name: "โรงพยาบาลจุฬาลงกรณ์", 
        coords: [13.7333, 100.5322], 
        description: "โรงพยาบาลระดับแนวหน้าของไทย ภายใต้สภากาชาดไทย", 
        contactInfo: "02-256-4000" 
    },
    { 
        name: "โรงพยาบาลรามาธิบดี", 
        coords: [13.7664, 100.5241], 
        description: "โรงพยาบาลมหาวิทยาลัยแพทยศาสตร์ชั้นนำของไทย", 
        contactInfo: "02-201-1000" 
    }
    // ... เพิ่มได้ตามต้องการ
];

function MapLocations() {
    const [locations, setLocations] = useState([]);
    
    const hospitalMarker = new Icon({
        iconUrl: 'https://res.cloudinary.com/dhzksppsh/image/upload/v1742203600/xhj5ssk8sqrhulgspbhu.png',
        iconSize: [36, 36],
    });

    const getHospital = async () => {
        try {
            const rs = await axios.get("http://localhost:8888/api/hospital/hospital-location");
            const hospitals = rs.data?.data;
            console.log(hospitals);

            const formattedLocations = hospitals.map(hospital => {
                return {
                    name: hospital.name,
                    coords: [
                        hospital.location?.latitude || 13.7563,
                        hospital.location?.longitude || 100.5018
                    ],
                    description: `ที่อยู่: ${hospital.location?.address || 'ไม่พบข้อมูล'}`,
                    contactInfo: hospital.contactInfo || null,
                };
            });

            setLocations(formattedLocations);

        } catch (error) {
            console.log(error);
            const errMsg = error.response?.data?.error || error.message;
            toast.error(errMsg);

            setLocations(defaultLocations);
        }
    };

    useEffect(() => {
        getHospital();
    }, []);

    return (
        <MapContainer center={[13.7563, 100.5018]} zoom={12} className="h-[550px] w-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((place, index) => (
                <Marker key={index} position={place.coords} icon={hospitalMarker}>
                    <Popup>
                        <strong>{place.name}</strong><br />
                        {place.description}<br />
                        {place.contactInfo && <span><strong>ติดต่อ:</strong> {place.contactInfo}</span>}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapLocations;
