function isNumber(obj) {return /^-?[\d.]+(?:e-?\d+)?$/.test(obj); }
function isNonNegative(obj) { return (isNumber(obj) && obj>=0)}
