import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const Services = () => {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Services</title>
                <meta name="description" content="Services Of InnovaraShopix" />
            </Helmet>
            <section id="services">
                <h2 className='cardo-regular'>{t('services.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('services.description') }} />

                <h3>{t('services.customSoftware')}</h3>
                <p>{t('services.customSoftwareDescription')}</p>

                <h3>{t('services.cloudApplications')}</h3>
                <p>{t('services.cloudApplicationsDescription')}</p>

                <h3>{t('services.integrationServices')}</h3>
                <p>{t('services.integrationServicesDescription')}</p>

                <h3>{t('services.support')}</h3>
                <p>{t('services.supportDescription')}</p>

                <h3>{t('services.consulting')}</h3>
                <p>{t('services.consultingDescription')}</p>

                <h3>{t('services.training')}</h3>
                <p>{t('services.trainingDescription')}</p>
            </section>
        </>
    );
};

export default Services;