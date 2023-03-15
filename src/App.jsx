import React from "react";
import ReactDOM from "react-dom";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";

const App = () => {
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
            <ProgressTracker
              steps={Array(5)
                .fill()
                .map((a, index) => `Step ${index + 1}`)}
            />
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
                placeholder="eSpace Name"
              />
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Owner Information">
            <div className="flex justify-between content-between">
              <div>
                <Input label="Primary Owner" placeholder="Primary Owner" />

                <Input
                  label="Primary Owner Phone"
                  placeholder="Primary Owner Phone"
                />
              </div>

              <Input
                className="pl-8"
                label="Primary Owner Email"
                placeholder="Primary Owner Email"
              />
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Location Information">
            <div className="flex justify-between content-between">
              <div>
                <Input label="Street Address" placeholder="Street Address" />

                <Input label="Suite/Unit" placeholder="Suite/Unit" />

                <Input label="Postal Code" placeholder="Postal Code" />
              </div>

              <div>
                <Input label="City" placeholder="City" />

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

          <Button title="Button" />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
