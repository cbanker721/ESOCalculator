
// Helper functions to serialize and deserialize the override object for URL-safe transport.
function serialize(obj) {
    // Using btoa for simple base64 encoding of the JSON string.
    return btoa(JSON.stringify(obj));
}

function deserialize(str) {
    // Using atob to decode base64.
    return JSON.parse(atob(str));
}

// Access values by key
class CalculatorOverrideManager {
    static overrideCalculatorState = {};

    /**
     * Reads the 'modifiers' URL parameter, deserializes it, and stores it.
     * This should be called on page load to apply any shared overrides.
     */
    static applyInputOverrides() {
        const params = new URLSearchParams(window.location.search);
        const inputCalculatorOverride = params.get("modifiers");
        if (inputCalculatorOverride) {
            try {
                this.overrideCalculatorState = deserialize(inputCalculatorOverride);
            } catch (e) {
                console.error("Failed to parse override data from URL:", e);
                this.overrideCalculatorState = {};
            }
            
        }
        console.log("Input overrides:", this.overrideCalculatorState);
    }

    static computeDefaultStateWithOverride(key) {
        console.log(`Computing default state for key: ${key} | Override value: ${CalculatorOverrideManager.overrideCalculatorState[key]} | Default config value: ${calculatorUiConfig[key]?.default}`);
        if (CalculatorOverrideManager.overrideCalculatorState[key] !== undefined) { 
            console.log(`Using override value for key ${key}:`, CalculatorOverrideManager.overrideCalculatorState[key]);
            return CalculatorOverrideManager.overrideCalculatorState[key] 
        } else {
            console.log(`No override for key ${key}, using default config value:`, calculatorUiConfig[key]?.default);
            return calculatorUiConfig[key]?.default;
        }
    }

    static computeDefaultStateWithoutOverride(key) {
        return calculatorUiConfig[key]?.default;  
    }

    /**
     * Compares the current calculator state with the default state to generate an override object.
     * This object contains only the values that differ from the default configuration.
     * @param {object} currentState - The current state of all options from the calculator.
     * @returns {object} An object containing only the values that differ from the default state.
     */
    static computeExportOverride(currentState) {
        const overrides = {};

        for (const key in currentState) {
            const currentValue = currentState[key];
            // Determine the default value. Use defaultState if available, otherwise assume false for booleans and 0 for numbers.
            const defaultValue = CalculatorOverrideManager.computeDefaultStateWithoutOverride(key);
            if (defaultValue === undefined) {
                if (currentState !== 0 && currentState !== false) {
                    overrides[key] = currentValue;
                }
            } else if (currentValue !== defaultValue) {
                overrides[key] = currentValue;
            }
        }
        console.log("Computed overrides:", overrides);
        return overrides;
    }
}
