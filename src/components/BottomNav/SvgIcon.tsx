import * as React from 'react';
import { FunctionComponent } from 'react';
import camelcase from 'camel-case';

const walkChildren = (children: any) => {
    return children.map((child: any, idx: number ) => {
        const { name, attribs: attribsMap, children: gchildren = null } = child;

        //fill, stroke
        const attribs = Object.keys(attribsMap)
            .filter( key => key !== 'fill' && key !== 'stroke' && attribsMap[key] !== 'none' )
            .reduce( (partial, key) => {

                partial[camelcase(key)] = attribsMap[key];
                return partial;
            }, {} );
        //special case, it has fill and stroke at the same time
        let merge = {};
        if ( attribsMap.fill === 'none' && attribsMap.stroke ) {
            merge = { fill: 'none', stroke: 'currentColor' };
        }
        return React.createElement(name, { key: idx, ...attribs, ...merge }, gchildren === null ? gchildren : walkChildren(gchildren));
    });
};

interface SvgIconProps {
    size?: number, 
    viewBox?: string, 
    title?: string, 
    style?: object,
    className?: string,
    icon: any; // React-icon-kit
}

export const SvgIcon: FunctionComponent<SvgIconProps>  = (props) => {

    const { size, viewBox, className, style } = props;
    const { children, attribs: svgAttribs = {} } = props.icon;
    
    const camelCasedAttribs = Object.keys(svgAttribs).reduce( (partial, key) => {
        partial[camelcase(key)] = svgAttribs[key]
        return partial
    }, {})
    return (
        <svg fill='currentColor' style={style} className={className} height={size} width={size} viewBox={viewBox}
            {...camelCasedAttribs }>
            { props.title ? <title>{props.title}</title> : null }
            { walkChildren(children) }
        </svg>
    );
};

SvgIcon.defaultProps = {
    size: 24, 
    viewBox: "0 0 24 24", 
    style: {},
    className: ''
};
export default SvgIcon;