import React from 'react';
import Feature from '../components/feature/feature';
import chaticon from '../assets/img/icon-chat.png'
import securityicon from '../assets/img/icon-security.png'
import moneyicon from '../assets/img/icon-money.png'
import PropTypes from 'prop-types';
import './features.css';
function Features(props) {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <Feature icon={chaticon}
                iconalt='Chat Icon'
                featuretitle='You are our #1 priority'
                featurecontent=' Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes.
              ' />

            <Feature icon={securityicon}
                iconalt='Money Icon'
                featuretitle='More savings means higher rates'
                featurecontent=' The more you save with us, the higher your interest rate will be!' />

            <Feature icon={moneyicon}
                iconalt='Security Icon'
                featuretitle='Security you can trust'
                featurecontent='We use top of the line encryption to make sure your data and money
                is always safe.' />
        </section>

    )
}


export default Features;