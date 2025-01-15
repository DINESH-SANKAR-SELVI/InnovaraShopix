import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import FAQ from './FAQ';

const About = () => {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('about.title')}</title>
                <meta name="description" content={t('about.description')} />
            </Helmet>
            <section id="about">
                <div style={{display:'flex'}}>
                <div>
                <h2 className='cardo-regular'>{t('about.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('about.welcome') }} />
                <p dangerouslySetInnerHTML={{ __html: t('about.description')}} />
                <h3>{t('about.mission')}</h3>
                <p>{t('about.missionDescription')}</p>
                <h3>{t('about.whatWeDo')}</h3>
                <p>{t('about.services')}</p>
                <ul>
                    <li><strong>{t('about.customSoftware')}</strong>: {t('about.customSoftwareDescription')}</li>
                    <li><strong>{t('about.cloudApplications')}</strong>: {t('about.cloudApplicationsDescription')}</li>
                    <li><strong>{t('about.integrationServices')}</strong>: {t('about.integrationServicesDescription')}</li>
                    <li><strong>{t('about.support')}</strong>: {t('about.supportDescription')}</li>
                </ul>
                <h3>{t('about.ourApproach')}</h3>
                <p>{t('about.ourApproachDescription')}</p>
                <h3>{t('about.whyChooseUs')}</h3>
                <ul>
                    <li><strong>{t('about.innovation')}</strong>: {t('about.innovationDescription')}</li>
                    <li><strong>{t('about.expertTeam')}</strong>: {t('about.expertTeamDescription')}</li>
                    <li><strong>{t('about.customerFocus')}</strong>: {t('about.customerFocusDescription')}</li>
                </ul>
                <h3>{t('about.joinUs')}</h3>
                <p>{t('about.joinUsDescription')}</p>
                <h3>{t('about.getInTouch')}</h3>
                <p>{t('about.contact')}</p>
                </div>
                <div>
                    <FAQ />
                </div>
                </div>
            </section>
        </>
    );
};

export default About;