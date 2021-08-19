import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import { connect } from 'react-redux';

const Directory= ({sections}) =>(
        <div className = 'directory-menu' >
        {sections.map(({id,...sectionProps}) =>{
            return <MenuItem key={id} {...sectionProps}  />
        })}
      </div>
);

const mapStateToProps = createStructuredSelector ({
  sections : selectDirectorySections
})
export  default connect(mapStateToProps)(Directory); 