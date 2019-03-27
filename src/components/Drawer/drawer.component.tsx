import React, { Fragment } from 'react';
// @ts-ignore
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';

interface IDrawerProps {
  /** ClassName of the Drawer */
  className?: string;

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton?: Element;

  /** Set drawer width. Default value is 300px. */
  width?: string;

  /** Set drawer position left || right || top || bottom. */
  placement?: 'left' | 'right' | 'top' | 'bottom';

  /** drawerHandler could be button, icon, string or any component */
  drawerHandler?: any;
  children?: any;
  open?: boolean;
  toggleHandler?: () => any;
}

export const Drawer = ({
  className,
  children,
  closeButton,
  drawerHandler,
  toggleHandler,
  open,
  ...props
}: IDrawerProps) => {

  const defaultProps = {
    width: '300px',
    handler: false,
    level: null,
  };

  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // @ts-ignore
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onMaskClick={toggleHandler}
        className={addAllClasses.join(' ')}
        {...defaultProps}
        {...props}
      >
        <div className="reusecore-drawer__close" onClick={toggleHandler}>
          {closeButton}
        </div>
        {children}
      </RcDrawer>
      <div
        className="reusecore-drawer__handler"
        style={{ display: 'inline-block' }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </div>
    </Fragment>
  );
};
