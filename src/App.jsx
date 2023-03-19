import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";
import Chevron from "./stories/Components/Chevron/Chevron";

const App = () => {
  const [company, setCompany] = useState(0);
  const [sub, setSub] = useState(0);
  const [name, setName] = useState([]);
  const [owner, setOwner] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const [street, setStreet] = useState([]);
  const [suite, setSuite] = useState([]);
  const [postal, setPostal] = useState([]);
  const [city, setCity] = useState([]);
  const [country, setCountry] = useState(0);

  const trackerArray = ["ClIENT INFO", "LOGO", "BRANDING", "APP STORE"];
  const companyArray = [
    "Microsoft",
    "EscapeSpace",
    "Apple",
    "REIS Contracting, INC",
  ];
  const subArray = ["Novice", "Intermediate", "Advanced", "Elite"];
  const countryArray = ["Germany", "Brazil", "United States", "Tokyo"];

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
            <div className="flex items-baseline">
              <Chevron className="w-4 h-4 transform rotate-180" />
              <p className="ml-4 mb-6">Back</p>
            </div>
            <p>ADD NEW CLIENT</p>
            <ProgressTracker steps={trackerArray.map((index) => `${index}`)} />
          </div>

          <CollapsibleSection title="Overview">
            <div className="grid grid-cols-2 grid-rows-1 justify-items-stretch space-x-10 border-b-2">
              <div>
                <Dropdown
                  options={companyArray.map((index) => ({
                    label: `${index}`,
                    value: `${index}`,
                  }))}
                  label="Company Name"
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e)}
                />

                <Dropdown
                  options={subArray.map((index) => ({
                    label: `${index}`,
                    value: `${index}`,
                  }))}
                  label="Subscription"
                  placeholder="Subscription"
                  value={sub}
                  onChange={(e) => setSub(e)}
                  isRequired
                />
              </div>

              <Input
                className="ml-6"
                label="eSpace Name"
                type="text"
                placeholder="eSpace Name"
                value={name}
                onChange={(e) => setName(e)}
                isRequired
              />
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Owner Information">
            <div className="grid grid-cols-2 grid-rows-1 justify-items-stretch space-x-10 border-b-2">
              <div>
                <Input
                  label="Primary Owner"
                  type="text"
                  placeholder="Primary Owner"
                  value={owner}
                  onChange={(e) => setOwner(e)}
                  isRequired
                />

                <Input
                  label="Primary Owner Phone"
                  type="number"
                  placeholder="Primary Owner Phone"
                  value={phone}
                  onChange={(e) => setPhone(e)}
                  isRequired
                />
              </div>

              <Input
                label="Primary Owner Email"
                type="text"
                placeholder="Primary Owner Email"
                value={email}
                onChange={(e) => setEmail(e)}
                isRequired
              />
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Location Information">
            <div className="grid grid-cols-2 grid-rows-1 justify-items-stretch space-x-10">
              <div>
                <Input
                  label="Street Address"
                  type="text"
                  placeholder="Street Address"
                  value={street}
                  onChange={(e) => setStreet(e)}
                  isRequired
                />

                <Input
                  label="Suite/Unit"
                  type="text"
                  placeholder="Suite/Unit"
                  value={suite}
                  onChange={(e) => setSuite(e)}
                />

                <Input
                  label="Postal Code"
                  type="number"
                  placeholder="Postal Code"
                  value={postal}
                  onChange={(e) => setPostal(e)}
                  isRequired
                />
              </div>

              <div>
                <Input
                  label="City"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e)}
                  isRequired
                />

                <Dropdown
                  options={countryArray.map((index) => ({
                    label: `${index}`,
                    value: `${index}`,
                  }))}
                  label="Country"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e)}
                />
              </div>
            </div>
          </CollapsibleSection>

          <Button onClick={handleClick} title="Save" />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
