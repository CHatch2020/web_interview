import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import cntl from "cntl";
import { BRAND_GREEN } from "../../../constants";

const stylesCN = (isShowingClear, isRequired) => cntl`
mb-6
${isRequired ? "border-brandRed" : "border-gray-200"}
${isShowingClear ? "pr-3" : ""}
`;

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "transparent",
    fontWeight: 600,
    height: "2.88em",
    borderRadius: 0,
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: "0.875rem",
    opacity: 0.7,
    fontWeight: 400,
    fontStyle: "italic",
    color: "white",
  }),
};

const customTheme = (base) => ({
  ...base,
  colors: {
    ...base.colors,
    primary: BRAND_GREEN,
    primary25: BRAND_GREEN.concat("41"),
    primary50: BRAND_GREEN.concat("80"),
    primary75: BRAND_GREEN.concat("c0"),
    neutral0: "black",
    neutral5: "#333333",
    neutral10: "#5c5c5c",
    neutral20: "#7d7d7d",
    neutral30: "#979797",
    neutral40: "#acacac",
    neutral50: "#A6A6A6",
    neutral60: "#cacaca",
    neutral70: "#d5d5d5",
    neutral80: "#dddddd",
    neutral90: "white",
  },
});

const labelCN = cntl`
  flex
  mb-2
  text-base
  text-gray-200
`;

const Dropdown = ({
  label,
  options,
  placeholder,
  defaultValue,
  value,
  isClearable,
  onChange,
  isDisabled,
  disableClear,
  isRequired,
}) => {
  console.log({ value, isRequired, disableClear });
  console.log(stylesCN(value > 0 && !disableClear, value === 0 && isRequired));
  return (
    <div>
      {label && (
        <div className={labelCN}>
          <p>{label}</p>
          {isRequired && (
            <>
              <p className="text-brandGreen text-sm">*</p>
              <p className="text-brandRed italic ml-2">Required</p>
            </>
          )}
        </div>
      )}
      <div
        className={stylesCN(
          value > 0 && !disableClear,
          value === 0 && isRequired
        )}
      >
        <Select
          theme={customTheme}
          styles={customStyles}
          isClearable={isClearable}
          options={options}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChange={(val) => onChange({ label: val?.label, value: val?.value })}
          isDisabled={isDisabled}
          isRequired={isRequired}
          maxMenuHeight={250}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </div>
    </div>
  );
};

const optionPropType = PropTypes.shape({
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
});
Dropdown.propTypes = {
  /**
   * classes to apply to the container div
   */
  // className: PropTypes.string,
  /**
   * the options that will be displayed in the dropdown (label, value pairs)
   */
  options: PropTypes.arrayOf(optionPropType),
  /**
   * the string to display above the dropdown
   */
  label: PropTypes.string,
  /**
   * string that acts as the placeholder and the "null" option
   */
  placeholder: PropTypes.string,
  /**
   * value to display on the initial load
   */
  defaultValue: PropTypes.shape(optionPropType),
  /**
   * controls the value in the dropdown
   */
  value: PropTypes.oneOfType(
    optionPropType[(PropTypes.string, PropTypes.number)]
  ),
  /**
   * toggles whether the field presents UI to clear it
   */
  isClearable: PropTypes.bool,
  /**
   * function called when a selection is changed, provides the selection
   */
  onChange: PropTypes.func,
  /**
   * disables the dropdown
   */
  isDisabled: PropTypes.bool,

  disableClear: PropTypes.bool,

  isRequired: PropTypes.bool,
};

Dropdown.defaultProps = {
  // className: null,
  options: [],
  label: null,
  placeholder: "Select an option...",
  defaultValue: null,
  value: 0,
  isClearable: true,
  onChange: null,
  isDisabled: false,
  disableClear: false,
  isRequired: false,
};

export default Dropdown;
