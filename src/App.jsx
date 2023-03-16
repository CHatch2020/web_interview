import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";

const App = () => {
  const [company, setCompany] = useState([]);
  const [sub, setSub] = useState([]);
  const [name, setName] = useState([]);
  const [owner, setOwner] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const [street, setStreet] = useState([]);
  const [suite, setSuite] = useState([]);
  const [postal, setPostal] = useState([]);
  const [city, setCity] = useState([]);
  const [country, setCountry] = useState([]);

  const trackerArray = ["ClIENT INFO", "LOGO", "BRANDING", "APP STORE"];
  const companyArray = [
    "Microsoft",
    "EscapeSpace",
    "Apple",
    "REIS Contracting, INC",
  ];
  const subArray = ["Novice", "Intermediate", "Advanced", "Elite"];
  const countryArray = ["Germany", "Brazil", "United States", "Tokyo"];

  const companyChange = (e) => {
    setCompany(e);
    console.log(e);
  };
  const subChange = (e) => {
    setSub(e);
    // console.log(e);
  };
  const nameChange = (e) => {
    setName(e);
    // console.log(e);
  };
  const ownerChange = (e) => {
    setOwner(e);
    // console.log(e);
  };
  const phoneChange = (e) => {
    setPhone(e);
    // console.log(e);
  };
  const emailChange = (e) => {
    setEmail(e);
    // console.log(e);
  };
  const streetChange = (e) => {
    setStreet(e);
    // console.log(e);
  };
  const suiteChange = (e) => {
    setSuite(e);
    // console.log(e);
  };
  const postalChange = (e) => {
    setPostal(e);
    // console.log(e);
  };
  const cityChange = (e) => {
    setCity(e);
    // console.log(e);
  };
  const countryChange = (e) => {
    setCountry(e);
    // console.log(e);
  };

  const clearInputs = () => {
    setCompany(null);
    setSub(null);
    setName("");
    setOwner("");
    setPhone("");
    setEmail("");
    setStreet("");
    setSuite("");
    setPostal("");
    setCity("");
    setCountry(null);
  };

  const handleClick = () => {
    const userInfo = {
      eSpaceName: name,
      companyName: company,
      subscription: sub,
      owner: {
        o: owner,
        p: phone,
        e: email,
      },
      location: {
        s: street,
        su: suite,
        c: city,
        co: country,
        p: postal,
      },
    };
    console.log(userInfo);
    clearInputs();
  };

  return (
    <div className="bg-black h-full w-full overflow-auto">
      <div>
        <NavBar />

        <div className="p-10 pt-24 ml-8 w-3/5">
          <div>
            <div>
              <p className="mb-6">Back</p>
            </div>
            <p>ADD NEW CLIENT</p>
            <ProgressTracker steps={trackerArray.map((index) => `${index}`)} />
          </div>

          <CollapsibleSection title="Overview">
            <div className="flex justify-between content-between">
              <div className="pr-6">
                <Dropdown
                  options={companyArray.map((index) => ({
                    label: `${index}`,
                    value: `${index}`,
                  }))}
                  label="Company Name"
                  placeholder="Company Name"
                  value={company}
                  onChange={companyChange}
                />

                <Dropdown
                  options={subArray.map((index) => ({
                    label: `${index}`,
                    value: `${index}`,
                  }))}
                  label="Subscription"
                  placeholder="Subscription"
                  value={sub}
                  onChange={subChange}
                />
              </div>

              <Input
                className="ml-6"
                label="eSpace Name"
                type="text"
                placeholder="eSpace Name"
                value={name}
                onChange={nameChange}
              />
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Owner Information">
            <div className="flex justify-between content-between">
              <div>
                <Input
                  label="Primary Owner"
                  type="text"
                  placeholder="Primary Owner"
                  value={owner}
                  onChange={ownerChange}
                />

                <Input
                  label="Primary Owner Phone"
                  type="number"
                  placeholder="Primary Owner Phone"
                  value={phone}
                  onChange={phoneChange}
                />
              </div>

              <Input
                className="pl-8"
                label="Primary Owner Email"
                type="text"
                placeholder="Primary Owner Email"
                value={email}
                onChange={emailChange}
              />
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Location Information">
            <div className="flex justify-between content-between">
              <div>
                <Input
                  label="Street Address"
                  type="text"
                  placeholder="Street Address"
                  value={street}
                  onChange={streetChange}
                />

                <Input
                  label="Suite/Unit"
                  type="text"
                  placeholder="Suite/Unit"
                  value={suite}
                  onChange={suiteChange}
                />

                <Input
                  label="Postal Code"
                  type="number"
                  placeholder="Postal Code"
                  value={postal}
                  onChange={postalChange}
                />
              </div>

              <div>
                <Input
                  label="City"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={cityChange}
                />

                <Dropdown
                  options={countryArray.map((index) => ({
                    label: `${index}`,
                    value: `${index}`,
                  }))}
                  label="Country"
                  placeholder="Country"
                  value={country}
                  onChange={countryChange}
                />
              </div>
            </div>
          </CollapsibleSection>

          <Button onClick={handleClick} title="Button" />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
