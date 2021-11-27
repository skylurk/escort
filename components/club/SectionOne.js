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
                <div className={ styles.com_left }>
                    <h4>Opening Hours</h4>
                    <div className={ styles.dates }>
                        <div className={styles.date_row}>
                            <div className={styles.date_day}>Monday</div>
                            <div className={styles.date_time}>11am - 3am</div>
                        </div>
                        <div className={styles.date_row}>
                            <div className={styles.date_day}>Monday</div>
                            <div className={styles.date_time}>11am - 3am</div>
                        </div>
                        <div className={styles.date_row}>
                            <div className={styles.date_day}>Monday</div>
                            <div className={styles.date_time}>11am - 3am</div>
                        </div>
                        <div className={styles.date_row}>
                            <div className={styles.date_day}>Monday</div>
                            <div className={styles.date_time}>11am - 3am</div>
                        </div>
                        <div className={styles.date_row}>
                            <div className={styles.date_day}>Monday</div>
                            <div className={styles.date_time}>11am - 3am</div>
                        </div>
                        <div className={styles.date_row}>
                            <div className={styles.date_day}>Monday</div>
                            <div className={styles.date_time}>11am - 3am</div>
                        </div>
                        <div className={styles.date_row}>
                            <div className={styles.date_day}>Monday</div>
                            <div className={styles.date_time}>11am - 3am</div>
                        </div>

                    </div>

                    <div className={styles.service_availability}>
                        <h5>Escort services require booking, but are theoritically available 24/7.</h5>
                    </div>
                </div>
                <div className={ styles.com_right }>
                    <h4>Contact Details</h4>
                    <div className={styles.address}>
                        <h5>Address</h5>
                        <h2>Turnerplatzstrasse 1 <br />5737 Meinziken <br />Aargau, Switzerland</h2>
                    </div>
                    <div className={styles.telephone}>
                        <h5>Telephone</h5>
                        <h2>Kontact Bar: +41 (0)79 330 31 61 <br />Escort: +41 (0)79 330 31 61</h2>
                    </div>
                    <div className={styles.online}>
                        <h5>Online Customer Service System: (Preferred way)</h5>
                        <h2>By clicking on this icon at the top of every page
you can ask questions to our customer service, book
either in-call or out-call appointments, ask questions 
to our ladies or initiate any previously booked voice or
video calls.</h2>
                    </div>
                </div>
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
