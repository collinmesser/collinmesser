// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li className={styles['menu__list-item']}>
        <Link
          to='https://www.notion.so/collinmesser/work-journal-a6af7459c51f4aa4b6d33748a7bcf2c4'
          className={styles['menu__list-item-link']}
          activeClassName={styles['menu__list-item-link--active']}
        >
          work journal
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
