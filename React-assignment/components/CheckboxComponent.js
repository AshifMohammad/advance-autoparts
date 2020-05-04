import React from "react";
import { boolean, func } from "prop-types";
export const CheckboxComponent = ({ checked, onChange }) => {
    return (
        <>
            <h1>Advance Autoparts</h1>
            <li>Checkbox react - test</li>
            <input
                name="parts-checked"
                type="checkbox"
                id="parts-checked"
                value="checked"
                checked={checked}
                onChange={onChange}
            />
            <label for="parts-checked">
                Please tick the checkbox to show message
            </label>
            {checked && (
                <div>Congrats - you have selected the right part for your vehicle</div>
            )}
        </>
    );
};

CheckboxComponent.propTypes = {
    checked: boolean,
    onChange: func
};

CheckboxComponent.defaultProps = {
    checked: false,
    onChange: () => {}
};
