// @flow strict
import React from 'react';
import styles from './Copyright.module.scss';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <div className={styles['copyright']}>
    {copyright} <br />
    <a href="https://github.com/alxshelepenok/gatsby-starter-lumen">gatsby-starter-lumen <br />template @alxshelepenok</a>
  </div>
);

export default Copyright;
