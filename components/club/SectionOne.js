import React from 'react';
import styles from '../../styles/Club.module.scss';

export default function SectionOne() {
    return (
        <div className={ styles.club_section_one }>
            <div className={ styles.cso_top }>
                <button className={ styles.get_mobile_app}>
                    Get the Mobile App
                </button>
                <h4>The Club</h4>
                <div></div>
            </div>
            <div className={ styles.cso_mid }>
                <div className={ styles.com_left }></div>
                <div className={ styles.com_right }></div>
            </div>
            <div className={ styles.cso_bottom }>
                <div className={ styles.csb_one}>
                    <h5>HOURS & CONTACTS</h5>
                </div>
                <div className={ styles.csb_two}>
                    <h5>DIRECTIONS</h5>
                </div>
                <div className={ styles.csb_three }>
                    <h5>PHOTO GALLERY</h5>
                </div>
                <div className={ styles.csb_four}>
                    <h5>PRICES & SERVICES</h5>
                </div>
            </div>
        </div>
    )
}
