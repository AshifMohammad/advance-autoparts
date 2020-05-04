import React, { useState } from "react";
import { CheckboxComponent } from "./checkboxComponent";
import "./styles.css";

export default function App() {
    const [checked, setChecked] = useState(false);
    return (
        <div className="App">
        <CheckboxComponent
    onChange={() => setChecked(!checked)}
    checked={checked}
    />
    </div>
);
}
