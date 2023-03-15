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

        <div className="p-10 ml-8 w-3/5">
          <div>
            <p>ADD NEW CLIENT</p>
            <ProgressTracker
              steps={Array(5)
                .fill()
                .map((a, index) => `Step ${index + 1}`)}
            />
          </div>

          <CollapsibleSection title="Overview">
            <div className="flex justify-between content-between">
              <div>
                <Dropdown
                  options={Array(5)
                    .fill()
                    .map((a, index) => ({
                      label: `Option ${index + 1}`,
                      value: `Option ${index + 1}`,
                    }))}
                  label="Company Name"
                  placeholder="placeholder"
                />

                <Dropdown
                  options={Array(5)
                    .fill()
                    .map((a, index) => ({
                      label: `Option ${index + 1}`,
                      value: `Option ${index + 1}`,
                    }))}
                  label="Subscription"
                  placeholder="placeholder"
                />
              </div>

              <Input label="eSpace Name" placeholder="eSpace Name" />
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Owner Information">
            <div className="flex justify-between content-between">
              <div>
                <Dropdown
                  options={Array(5)
                    .fill()
                    .map((a, index) => ({
                      label: `Option ${index + 1}`,
                      value: `Option ${index + 1}`,
                    }))}
                  label="Company Name"
                  placeholder="placeholder"
                />

                <Dropdown
                  options={Array(5)
                    .fill()
                    .map((a, index) => ({
                      label: `Option ${index + 1}`,
                      value: `Option ${index + 1}`,
                    }))}
                  label="Subscription"
                  placeholder="placeholder"
                />
              </div>

              <Input label="eSpace Name" placeholder="eSpace Name" />
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Location Information">
            <div className="flex justify-between content-between">
              <div>
                <Dropdown
                  options={Array(5)
                    .fill()
                    .map((a, index) => ({
                      label: `Option ${index + 1}`,
                      value: `Option ${index + 1}`,
                    }))}
                  label="Company Name"
                  placeholder="placeholder"
                />

                <Dropdown
                  options={Array(5)
                    .fill()
                    .map((a, index) => ({
                      label: `Option ${index + 1}`,
                      value: `Option ${index + 1}`,
                    }))}
                  label="Subscription"
                  placeholder="placeholder"
                />
              </div>

              <Input label="eSpace Name" placeholder="eSpace Name" />
            </div>
          </CollapsibleSection>

          <Button title="Button" />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
