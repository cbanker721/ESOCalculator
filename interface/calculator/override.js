// Access values by key
class CalculatorOverrideManager {
    overrideCalculatorState = {}

    static applyInputOverrides() {
        const params = new URLSearchParams(window.location.search);
        const inputCalculatorOverride = params.get("modifiers");
        if (inputCalculatorOverride !== undefined) {
            overrideCalculatorState = {
                ...deserialize(inputOverride)
            }
        }
    }

    static computeExportOverride() {
        
    }
}
