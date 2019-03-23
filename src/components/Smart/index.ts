import styled from 'styled-components';


interface Props {
    desktop?: any;
    laptop?: any;
    mobile?: any;
    mobileLand?: any;
    tablet?: any;
    tabletLand?: any;
}

/**
 - desktop
 - laptop
 - tablet -> Land, Port
 - mobile -> Land, Port
 */
export const SmartCSS = styled.div<Props>`

/* 
##Device = Desktops
##Screen = 1281px to higher resolution desktops
desktop
*/
@media (min-width: 1281px) {
    ${props => props && props.desktop}
}

/* 
##Device = Laptops, Desktops
##Screen = B/w 1025px to 1280px
laptop
*/

@media (min-width: 1025px) and (max-width: 1280px) {
    ${props => props && props.laptop}
}

/* 
##Device = Tablets, Ipads (portrait)
##Screen = B/w 768px to 1024px
tablet
*/

@media (min-width: 768px) and (max-width: 1024px) {
    ${props => props && props.tablet}
}

/* 
##Device = Tablets, Ipads (landscape)
##Screen = B/w 768px to 1024px
tabletLand
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    ${props => props && props.tabletLand}
}

/* 
##Device = Low Resolution Tablets, Mobiles (Landscape)
##Screen = B/w 481px to 767px
mobileLand
*/

@media (min-width: 481px) and (max-width: 767px) {
    ${props => props && props.mobile}
    ${props => props && props.mobileLand}
}

/* 
##Device = Most of the Smartphones Mobiles (Portrait)
##Screen = B/w 320px to 479px
mobilePort
*/

@media (max-width: 480px) {
    ${props => props && props.mobile}
}
`;


export default SmartCSS;