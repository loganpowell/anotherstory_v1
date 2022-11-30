//
//  888                                  888   _                      ,e,            d8
//  888-~88e  888-~\  e88~~8e    /~~~8e  888 e~ ~  888-~88e   e88~-_   "  888-~88e _d88__  d88~\
//  888  888b 888    d888  88b       88b 888d8b    888  888b d888   i 888 888  888  888   C888
//  888  8888 888    8888__888  e88~-888 888Y88b   888  8888 8888   | 888 888  888  888    Y88b
//  888  888P 888    Y888    , C888  888 888 Y88b  888  888P Y888   ' 888 888  888  888     888D
//  888-_88"  888     "88___/   "88_-888 888  Y88b 888-_88"   "88_-~  888 888  888  "88_/ \_88P
//                                                 888
//
/**
 * https://styled-system.com/table/
 *
 * Used by:
 * - layout
 * - space
 */

export const breakpoints = ["640px", "768px", "1024px", "1280px"]

export const borderWidths = {
    px: "1px",
    "0": "0",
    "2": "2px",
    "4": "4px",
    "8": "8px",
}

export const baseColors = {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: [
        null,
        "#f7fafc",
        "#edf2f7",
        "#e2e8f0",
        "#cbd5e0",
        "#a0aec0",
        "#718096",
        "#4a5568",
        "#2d3748",
        "#1a202c",
    ],
    red: [
        null,
        "#fff5f5",
        "#fed7d7",
        "#feb2b2",
        "#fc8181",
        "#f56565",
        "#e53e3e",
        "#c53030",
        "#9b2c2c",
        "#742a2a",
    ],
    orange: [
        null,
        "#fffaf0",
        "#feebc8",
        "#fbd38d",
        "#f6ad55",
        "#ed8936",
        "#dd6b20",
        "#c05621",
        "#9c4221",
        "#7b341e",
    ],
    yellow: [
        null,
        "#fffff0",
        "#fefcbf",
        "#faf089",
        "#f6e05e",
        "#ecc94b",
        "#d69e2e",
        "#b7791f",
        "#975a16",
        "#744210",
    ],
    green: [
        null,
        "#f0fff4",
        "#c6f6d5",
        "#9ae6b4",
        "#68d391",
        "#48bb78",
        "#38a169",
        "#2f855a",
        "#276749",
        "#22543d",
    ],
    teal: [
        null,
        "#e6fffa",
        "#b2f5ea",
        "#81e6d9",
        "#4fd1c5",
        "#38b2ac",
        "#319795",
        "#2c7a7b",
        "#285e61",
        "#234e52",
    ],
    blue: [
        null,
        "#ebf8ff",
        "#bee3f8",
        "#90cdf4",
        "#63b3ed",
        "#4299e1",
        "#3182ce",
        "#2b6cb0",
        "#2c5282",
        "#2a4365",
    ],
    indigo: [
        null,
        "#ebf4ff",
        "#c3dafe",
        "#a3bffa",
        "#7f9cf5",
        "#667eea",
        "#5a67d8",
        "#4c51bf",
        "#434190",
        "#3c366b",
    ],
    purple: [
        null,
        "#faf5ff",
        "#e9d8fd",
        "#d6bcfa",
        "#b794f4",
        "#9f7aea",
        "#805ad5",
        "#6b46c1",
        "#553c9a",
        "#44337a",
    ],
    pink: [
        null,
        "#fff5f7",
        "#fed7e2",
        "#fbb6ce",
        "#f687b3",
        "#ed64a6",
        "#d53f8c",
        "#b83280",
        "#97266d",
        "#702459",
    ],
}

//
//                   888
//   e88~~\  e88~-_  888  e88~-_  888-~\  d88~\
//  d888    d888   i 888 d888   i 888    C888
//  8888    8888   | 888 8888   | 888     Y88b
//  Y888    Y888   ' 888 Y888   ' 888      888D
//   "88__/  "88_-~  888  "88_-~  888    \_88P
//
//
/**
 * Used by:
 * - color - https://styled-system.com/table/#color
 */

export const colors = {
    ...baseColors,
    grayDark: baseColors.gray[8],
    text: baseColors.gray[8],
    background: baseColors.white,
    primary: baseColors.blue[7],
    primaryHover: baseColors.blue[8],
    secondary: baseColors.gray[6],
    muted: baseColors.gray[3],
    success: baseColors.green[3],
    info: baseColors.blue[4],
    warning: baseColors.yellow[3],
    danger: baseColors.red[3],
    light: baseColors.gray[1],
    dark: baseColors.gray[8],
    textMuted: baseColors.gray[6],
}

const commonButtonStyles = {
    py: 2,
    px: 3,
    cursor: "pointer",
    fontSize: "100%",
    lineHeight: "inherit",
    whiteSpace: "nowrap",
}

export const buttons = {
    simple: {
        ...commonButtonStyles,
        backgroundColor: "primary",
        border: "none",
        color: "white",
        fontWeight: "bold",
        borderRadius: "default",
        "&:hover": {
            backgroundColor: "primaryHover",
            textDecoration: "none",
        },
    },
    pill: {
        ...commonButtonStyles,
        backgroundColor: "primary",
        border: "none",
        color: "white",
        fontWeight: "bold",
        borderRadius: "full",
        "&:hover": {
            backgroundColor: "primaryHover",
        },
    },
    outline: {
        ...commonButtonStyles,
        backgroundColor: "transparent",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "primary",
        color: "primary",
        fontWeight: "semibold",
        borderRadius: "default",
        "&:hover": {
            backgroundColor: "primary",
            color: "white",
            borderColor: "transparent",
        },
    },
    bordered: {
        ...commonButtonStyles,
        backgroundColor: "primary",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "primaryHover",
        color: "white",
        fontWeight: "bold",
        borderRadius: "default",
        "&:hover": {
            backgroundColor: "primaryHover",
        },
    },
    disabled: {
        ...commonButtonStyles,
        backgroundColor: "primary",
        border: "none",
        opacity: 0.5,
        cursor: "not-allowed",
        color: "white",
        fontWeight: "bold",
        borderRadius: "default",
    },
    "3D": {
        ...commonButtonStyles,
        backgroundColor: "primary",
        border: "none",
        borderBottomWidth: "4px",
        borderBottomStyle: "solid",
        borderBottomColor: "primaryHover",
        color: "white",
        fontWeight: "bold",
        borderRadius: "default",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            transform: "translateY(-1px)",
        },
    },
    elevated: {
        ...commonButtonStyles,
        backgroundColor: "white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "gray.4",
        color: "text",
        fontWeight: "bold",
        borderRadius: "default",
        boxShadow: "default",
        "&:hover": {
            backgroundColor: "gray.1",
        },
    },
}

export const baseFonts = {
    sans: '"Open Sans", system-ui',
    serif: "Merriweather, system-ui",
    mono: '"Fira Code",monospace',
}

//
//    88~\                     d8
//  _888__  e88~-_  888-~88e _d88__  d88~\
//   888   d888   i 888  888  888   C888
//   888   8888   | 888  888  888    Y88b
//   888   Y888   ' 888  888  888     888D
//   888    "88_-~  888  888  "88_/ \_88P
//
//
/**
 * Used by:
 * - typography: https://styled-system.com/table/#typography
 */
export const fonts = {
    ...baseFonts,
    body: baseFonts.sans,
    heading: baseFonts.serif,
    monospace: baseFonts.mono,
}
/**
 * Used by:
 * - typography: https://styled-system.com/table/#typography
 */
export const fontSizes = [
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.875rem",
    "2.25rem",
    "3rem",
    "4rem",
    "4.5rem",
]

export const baseFontWeights = {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
}
/**
 * Used by:
 * - typography: https://styled-system.com/table/#typography
 */
export const fontWeights = {
    ...baseFontWeights,
    body: baseFontWeights.normal,
    heading: baseFontWeights.bold,
}

const commonInputStyles = {
    py: 2,
    px: 3,
    fontSize: "100%",
    borderRadius: "default",
    appearance: "none",
    lineHeight: "tight",
}

export const inputs = {
    shadow: {
        ...commonInputStyles,
        border: "none",
        color: "gray.7",
        boxShadow: "default",
        "&:focus": {
            outline: "none",
            boxShadow: "outline",
        },
    },
    inline: {
        ...commonInputStyles,
        backgroundColor: "gray.2",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "gray.2",
        color: "gray.7",
        "&:focus": {
            outline: "none",
            borderColor: "primary",
            backgroundColor: "white",
        },
    },
    underline: {
        ...commonInputStyles,
        backgroundColor: "transparent",
        border: "none",
        borderBottomWidth: "2px",
        borderBottomStyle: "solid",
        borderBottomColor: "primary",
        borderRadius: "0px",
        color: "gray.7",
        "&:focus": {
            outline: "none",
            borderColor: "primary",
            backgroundColor: "white",
        },
    },
}
/**
 * Used by:
 * - typography: https://styled-system.com/table/#typography
 */
export const letterSpacings = {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
}

export const baseLineHeights = {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
}
/**
 * Used by:
 * - typography: https://styled-system.com/table/#typography
 */
export const lineHeights = {
    ...baseLineHeights,
    body: baseLineHeights.relaxed,
    heading: baseLineHeights.tight,
}

export const radii = {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    lg: "0.5rem",
    full: "9999px",
}

//
//         ,e,
//   d88~\  "   ~~~d88P  e88~~8e   d88~\
//  C888   888    d88P  d888  88b C888
//   Y88b  888   d88P   8888__888  Y88b
//    888D 888  d88P    Y888    ,   888D
//  \_88P  888 d88P___   "88___/  \_88P
//
//
/**
 * Used by:
 * - layout - https://styled-system.com/table/#layout
 *
 */
export const sizes = {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
    screenHeight: "100vh",
    screenWidth: "100vw",
}

export const shadows = {
    default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 0px 2px rgba(0, 0, 0, 0.03)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
    none: "none",
}

//
//
//   d88~\ 888-~88e    /~~~8e   e88~~\  e88~~8e
//  C888   888  888b       88b d888    d888  88b
//   Y88b  888  8888  e88~-888 8888    8888__888
//    888D 888  888P C888  888 Y888    Y888    ,
//  \_88P  888-_88"   "88_-888  "88__/  "88___/
//         888
//
/**
 * Used by:
 * - space - https://styled-system.com/table/#space
 * -
 */
export const space = [0, "0.25rem", "0.5rem", "1rem", "2rem", "4rem", "8rem", "16rem", "32rem"]

export const zIndices = {
    auto: "auto",
    "0": "0",
    "10": "10",
    "20": "20",
    "30": "30",
    "40": "40",
    "50": "50",
}

const heading = {
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "heading",
    mt: 4,
}

export const styles = {
    root: {
        fontFamily: "body",
        lineHeight: "body",
        fontWeight: "body",
    },
    p: {
        lineHeight: [1.75, 2],
        fontSize: [2, 3],
        mt: [3, 4],
    },
    a: {
        color: "primary",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
    strong: {
        fontWeight: "bold",
    },
    ul: {
        listStylePostition: "outside",
        mt: 3,
        mx: 4,
    },
    li: {
        listStyleType: "disc",
        lineHeight: 1.75,
        fontSize: [2, 3],
        mt: 3,
    },
    h1: {
        ...heading,
        fontSize: [6, 7],
        mt: 6,
    },
    h2: {
        ...heading,
        fontSize: [5, 6],
        pt: 5,
    },
    h3: {
        ...heading,
        fontSize: [4, 5],
        pt: 4,
    },
    h4: {
        ...heading,
        fontSize: [3, 4],
        pt: 4,
    },
    h5: {
        ...heading,
        fontSize: [2, 3],
    },
    h6: {
        ...heading,
        fontSize: [1, 2],
    },
    pre: {
        lineHeight: 1.75,
        my: 4,
        mx: -2,
    },
    code: {
        boxShadow: "inner",
        background:
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAJ0lEQVQIW2O8e/fufwYGBgZBQUEQxcCIIfDu3Tuwivfv30NUoAsAALHpFMMLqZlPAAAAAElFTkSuQmCC) repeat",
        color: "dark",
        fontSize: [0, 1],
        fontFamily: "mono",
        borderRadius: "default",
        p: 1,
    },
    hr: {
        background:
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAJ0lEQVQIW2O8e/fufwYGBgZBQUEQxcCIIfDu3Tuwivfv30NUoAsAALHpFMMLqZlPAAAAAElFTkSuQmCC) repeat",
        height: 1,
        width: "100vw",
        position: "relative",
        marginLeft: "-50vw",
        mt: 6,
        left: "50%",
    },
    blockquote: {
        background:
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAPUlEQVQYV2NkQAN37979r6yszIgujiIAU4RNMVwhuiQ6H6wQl3XI4oy4FMHcCJPHcDS6J2A2EqUQpJhohQDexSef15DBCwAAAABJRU5ErkJggg==) repeat",
        fontFamily: "mono",
        fontStyle: "italic",
        fontSize: [3, 4],
        lineHeight: 1.5,
        mx: -4,
        my: 4,
        p: 5,
    },
    table: {
        borderRadius: "default",
        overflow: "hidden",
        fontSize: [1, 2],
        width: "100%",
        mt: 4,
    },
    tr: {
        backgroundColor: "muted",
        "&:first-child": {
            fontWeight: "bold",
            backgroundColor: "dark",
            color: "muted",
        },
        lineHeight: [1.75, 2],
        "&:nth-child(2n)": {
            backgroundColor: "background",
        },
    },
    td: {
        p: 2,
    },
    img: {
        display: "block",
        my: [2, 3],
        width: "100%",
        maxHeight: "500px",
        objectFit: "cover",
        borderRadius: "default",
    },
}

export const theme = {
    borderWidths,
    breakpoints,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    sizes,
    shadows,
    space,
    radii,
    zIndices,
    styles,
    buttons,
    inputs,
}

export default theme
