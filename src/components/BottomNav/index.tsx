import * as React from 'react';
import { useState } from 'react';
import SvgIcon from './SvgIcon';
//@ts-ignore
import Mod from 'react-icons-kit';
import { play } from 'react-icons-kit/icomoon/play';
import { film } from 'react-icons-kit/feather/film';
import { ic_ondemand_video } from 'react-icons-kit/md/ic_ondemand_video'
import { BottomNavWrapper } from './styles';

export const BottomNav = () => {
    const [selected, setSelected] = useState(0);

    let menusItems = [
        { icon: play, link: '', title: 'Recents' },
        { icon: film, link: '', title: 'Favorites' },
        { icon: ic_ondemand_video, link: '', title: 'Nearby' },
    ];

    return (
        <BottomNavWrapper selectedColor="red">
            {menusItems.map((item, i) => {
                return (
                    <a onClick={() => setSelected(i)} className={`bottom-nav__action ${i === selected ? 'bottom-nav__action--active' : ''}`} href="#" key={item.title}>
                        <SvgIcon className="bottom-nav__icon" icon={item.icon} />
                        <span className="bottom-nav__label">{item.title}</span>
                    </a>
                )
            })}
        </BottomNavWrapper>
    )
}

export default BottomNav;