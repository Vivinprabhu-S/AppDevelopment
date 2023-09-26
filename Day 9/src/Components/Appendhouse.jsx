import { useState } from "react";
import '../Assests/css/Appendhouse.css';

function Appendhouse() {
    const [formData, setFormData] = useState({
        homeid: "",
        homeaddress: "",
        familymembername: "",
        familycount: "",
        username: "",
        password: "",
        contact: "",
        emergencyContacts: [
            { name: "", contact: "" }
        ],
        digitalAppliances: [
            { name: "", insuranceId: "" }
        ]
    });

    const [houses, setHouses] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
    const [selectedHouseIndex, setSelectedHouseIndex] = useState(-1); // State to track the selected house for editing

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleEmergencyContactChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEmergencyContacts = [...formData.emergencyContacts];
        updatedEmergencyContacts[index] = {
            ...updatedEmergencyContacts[index],
            [name]: value
        };
        setFormData({
            ...formData,
            emergencyContacts: updatedEmergencyContacts
        });
    }

    const handleDigitalApplianceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedDigitalAppliances = [...formData.digitalAppliances];
        updatedDigitalAppliances[index] = {
            ...updatedDigitalAppliances[index],
            [name]: value
        };
        setFormData({
            ...formData,
            digitalAppliances: updatedDigitalAppliances
        });
    }

    const handleAddEmergencyContact = () => {
        setFormData({
            ...formData,
            emergencyContacts: [
                ...formData.emergencyContacts,
                { name: "", contact: "" }
            ]
        });
    }

    const handleAddDigitalAppliance = () => {
        setFormData({
            ...formData,
            digitalAppliances: [
                ...formData.digitalAppliances,
                { name: "", insuranceId: "" }
            ]
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.homeid && formData.homeaddress && formData.familymembername && formData.familycount && formData.username && formData.password && formData.contact) {
            if (selectedHouseIndex === -1) {
                // Add a new house
                setHouses([...houses, formData]);
            } else {
                // Edit an existing house
                const updatedHouses = [...houses];
                updatedHouses[selectedHouseIndex] = formData;
                setHouses(updatedHouses);
                setSelectedHouseIndex(-1); // Clear the selected house index
            }
            setFormData({
                homeid: "",
                homeaddress: "",
                familymembername: "",
                familycount: "",
                username: "",
                password: "",
                contact: "",
                emergencyContacts: [{ name: "", contact: "" }],
                digitalAppliances: [{ name: "", insuranceId: "" }]
            });
        }
    }

    // Function to set the selected house for editing
    const handleEditHouse = (index) => {
        setSelectedHouseIndex(index);
        const selectedHouse = houses[index];
        setFormData({
            ...selectedHouse,
            emergencyContacts: [...selectedHouse.emergencyContacts],
            digitalAppliances: [...selectedHouse.digitalAppliances]
        });
    }

    // Function to delete a house
    const handleDeleteHouse = (index) => {
        const updatedHouses = [...houses];
        updatedHouses.splice(index, 1);
        setHouses(updatedHouses);
    }

    // Filter houses based on the search term
    const filteredHouses = houses.filter((house) =>
        house.homeid.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="append-house-container">
                <form onSubmit={handleSubmit}>
                    <div className="append-icon"><i className='bx bx-building-house'></i></div>
                    <div className="login-text">{selectedHouseIndex === -1 ? "APPEND NEW HOUSE" : "EDIT HOUSE"}</div>
                    <input className="common-input-field" type="text" placeholder="Home ID" name="homeid" value={formData.homeid} onChange={handleOnChange} />
                    <input className="common-input-field" type="text" placeholder="Family Head name" name="familymembername" value={formData.familymembername} onChange={handleOnChange}/> 
                    <input className="common-input-field" type="number" placeholder="Family count" name="familycount" value={formData.familycount} onChange={handleOnChange}/> 
                    <input className="common-input-field" type="text" placeholder="Give Username" name="username" value={formData.username} onChange={handleOnChange}/> 
                    <input className="common-input-field" type="password" placeholder="Give Password" name="password" value={formData.password} onChange={handleOnChange}/>
                    <input className="common-input-field" type="text" placeholder="Contact" name="contact" value={formData.contact} onChange={handleOnChange}/> 
                    <input className="common-input-field" type="text" placeholder="Home Address" name="homeaddress" value={formData.homeaddress} onChange={handleOnChange} />
                    <p>Emergency Contacts</p>
                    {formData.emergencyContacts.map((contact, index) => (
                        <div key={index} className="emergency-contact">
                            <input className="common-input-field" type="text" placeholder="Emergency Contact Name" name="name" value={contact.name} onChange={(e) => handleEmergencyContactChange(index, e)} />
                            <input className="common-input-field" type="text" placeholder="Contact number" name="contact" value={contact.contact} onChange={(e) => handleEmergencyContactChange(index, e)} />
                        </div>
                    ))}
                    <button className="add-more-button" type="button" onClick={handleAddEmergencyContact}>Add Another Contact</button>
                    <p>Digital Appliances</p>
                    {formData.digitalAppliances.map((appliance, index) => (
                        <div key={index} className="digital-appliance">
                            <input className="common-input-field" type="text" placeholder="Appliance Name" name="name" value={appliance.name} onChange={(e) => handleDigitalApplianceChange(index, e)} />
                            <input className="common-input-field" type="text" placeholder="Insurance ID" name="insuranceId" value={appliance.insuranceId} onChange={(e) => handleDigitalApplianceChange(index, e)} />
                        </div>
                    ))}
                    <button className="add-more-button" type="button" onClick={handleAddDigitalAppliance}>Add Another Appliance</button>
                    <div className="button-group">
                        <button className="common-button" type="submit">{selectedHouseIndex === -1 ? "Add House" : "Save Changes"}</button>
                    </div>
                </form>
            </div>

            <div className="existing-house-container">
              <div className="search-bar">
                  <input type="text" placeholder="Search by Home ID" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
              </div>
                {filteredHouses.map((house, index) => (
                    <div key={index} className="house-card">
                        <h3>House ID: {house.homeid}</h3>
                        <p>Family member name: {house.familymembername}</p>
                        <p>Address: {house.homeaddress}</p>
                        <p>Username: {house.username}</p>
                        <p>Count: {house.familycount}</p>
                        <p>Contact: {house.contact}</p>
                        <h4>Emergency Contacts</h4>
                        {house.emergencyContacts.map((contact, idx) => (
                            <div key={idx}>
                                <p>Name: {contact.name}</p>
                                <p>Contact: {contact.contact}</p>
                            </div>
                        ))}
                        <h4>Digital Appliances</h4>
                        {house.digitalAppliances.map((appliance, idx) => (
                            <div key={idx}>
                                <p>Appliance Name: {appliance.name}</p>
                                <p>Insurance ID: {appliance.insuranceId}</p>
                            </div>
                        ))}
                        <div className="house-actions">
                            <button className="edit-button" onClick={() => handleEditHouse(index)}>Edit</button>
                            <button className="delete-button" onClick={() => handleDeleteHouse(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Appendhouse;