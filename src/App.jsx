import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";

const App = () => {
  // const [company, setCompany] = useState([]);
  // const [sub, setSub] = useState([]);
  const [name, setName] = useState([]);
  const [owner, setOwner] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const [street, setStreet] = useState([]);
  const [suite, setSuite] = useState([]);
  const [postal, setPostal] = useState([]);
  const [city, setCity] = useState([]);
  // const [country, setCountry] = useState([]);

  const trackerArray = ["ClIENT INFO", "LOGO", "BRANDING", "APP STORE"];

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

  const handleClick = () => {
    let userInfo = {
      eSpaceName: name,
      owner: {
        owner: owner,
        phone: phone,
        email: email,
      },
      location: {
        street: street,
        suite: suite,
        city: city,
        postal: postal,
      },
    };
    console.log(userInfo);
    clearInputs();
  };

  let clearInputs = () => {
    setName("");
    setOwner("");
    setPhone("");
    setEmail("");
    setStreet("");
    setSuite("");
    setPostal("");
    setCity("");
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
                  options={Array(5)
                    .fill()
                    .map((a, index) => ({
                      label: `Option ${index + 1}`,
                      value: `Option ${index + 1}`,
                    }))}
                  label="Company Name"
                  placeholder="Company Name"
                />

                <Dropdown
                  options={Array(5)
                    .fill()
                    .map((a, index) => ({
                      label: `Option ${index + 1}`,
                      value: `Option ${index + 1}`,
                    }))}
                  label="Subscription"
                  placeholder="Subscription"
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
                  type="text"
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
                  type="text"
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
                  options={Array(5)
                    .fill()
                    .map((a, index) => ({
                      label: `Option ${index + 1}`,
                      value: `Option ${index + 1}`,
                    }))}
                  label="Country"
                  placeholder="Country"
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
