import xPathToCss from "xpath-to-css";

const convertxpathtocss = (xPath) => {
    const css = xPathToCss(xPath);
    return css;
}

module.exports = {
    convertxpathtocss
}