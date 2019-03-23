import styled from 'styled-components';

/**
 * AUTOMATIC CSS ADJUSTMENTS
 */

 interface Props {
    mobile?: any;
    tablet?: any;
    laptop?: any;
    desktop?: any;
 };
 

export const XCss = styled.div<Props>`
    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    /* Styles */
        ${props => props && props.mobile}
    }

    /* Smartphones (landscape) ----------- */
    @media only screen and (min-width : 321px) {
    /* Styles */
        ${props => props && props.mobile}
    }

    /* Smartphones (portrait) ----------- */
    @media only screen and (max-width : 320px) {
    /* Styles */
        ${props => props && props.mobile}
    }

    /* iPads (portrait and landscape) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    /* Styles */
        ${props => props && props.tablet}
    }

    /* iPads (landscape) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
    /* Styles */
        ${props => props && props.tablet}
    }

    /* iPads (portrait) ----------- */
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
    /* Styles */
        ${props => props && props.tablet}
    }
    /**********
    iPad 3
    **********/
    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
    /* Styles */
        ${props => props && props.tablet}
    }

    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
    /* Styles */
        ${props => props && props.tablet}
    }
    /* Desktops and laptops ----------- */
    @media only screen  and (min-width : 1224px) {
    /* Styles */
        ${props => props && props.laptop}
    }

    /* Large screens ----------- */
    @media only screen  and (min-width : 1824px) {
    /* Styles */
        ${props => props && props.desktop}
    }

`;