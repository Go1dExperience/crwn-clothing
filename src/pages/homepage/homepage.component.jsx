import React from 'react';
//--Styles---------------------
import './homepage.styles.scss';
//--Components---------------------
import Directory from '../../components/directory/directory.component';


function HomePage() {
    return (
        <div className="homepage">
            <Directory></Directory>
        </div>
    )
}

export default HomePage
