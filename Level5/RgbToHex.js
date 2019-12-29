/*
 * Implement an RGB to hex converter
 */

const rgb = (r, g, b) => [r, g, b]
    .map((val) => {
        if (val > 255) val = 255;
        if (val < 0) val = 0;
        
        const hex = val.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    })
    .join('')
    .toUpperCase();