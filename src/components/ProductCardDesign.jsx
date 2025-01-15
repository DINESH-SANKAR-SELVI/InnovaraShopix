import React from 'react';
import '../styles/ProductCardDesign.css';
import '../styles/fonts.css'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const products = [
    {
        id: 1,
        name: 'Shopspark',
        description: 'A Shop Management System streamlines retail operations by integrating inventory, sales, and customer management for improved efficiency and decision-making.',
        features: [{ logoURL: 'feature-resources/integration-logo.png', description: 'Integration' }, { logoURL: 'feature-resources/export-logo.png', description: 'Export' }, { logoURL: 'feature-resources/analytics-logo.png', description: 'Analytics' }],
        status: "products.products[0].status",

        imageSrc: 'product-resources/shopspark-logo.png',
        productLogo: 'options-resources/verified-logo.png',
        price: '$99',
        clients: '100',
        members: '80',
        Collobration: '10',
        exploreLink: 'https://github.com/DINESH-SANKAR-SELVI',
    },
    {
        id: 2,
        name: 'InnovaraShopix',
        description: 'A Shop Management System streamlines retail operations by integrating inventory, sales, and customer management for improved efficiency and decision-making.',
        features: [{ logoURL: 'feature-resources/integration-logo.png', description: 'Integration' }, { logoURL: 'feature-resources/export-logo.png', description: 'Export' }, { logoURL: 'feature-resources/analytics-logo.png', description: 'Analytics' }],
        status: "products.products[1].status",

        imageSrc: 'product-resources/WelcomePage.png',
        productLogo: 'options-resources/verified-logo.png',
        price: '$149',
        clients: '100000',
        members: '1800',
        Collobration: '250',
        exploreLink: 'https://youtube.com',
    },
    {
        id: 3,
        name: 'hashveno',
        description: 'A Shop Management System streamlines retail operations by integrating inventory, sales, and customer management for improved efficiency and decision-making.',
        features: [{ logoURL: 'feature-resources/integration-logo.png', description: 'Integration' }, { logoURL: 'feature-resources/export-logo.png', description: 'Export' }, { logoURL: 'feature-resources/analytics-logo.png', description: 'Analytics' }],
        status: "products.products[2].status",

        imageSrc: 'product-resources/WelcomePage.png',
        productLogo: 'options-resources/verified-logo.png',
        price: '$149',
        clients: '500',
        members: '480',
        Collobration: '50',
        exploreLink: 'https://www.google.com',
    },
];

const ProductCardDesign = () => {

    const { t } = useTranslation();

    const openExploreLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <>
            <Helmet>
                <title>Product</title>
                <meta name="description" content="Product For InnovaraShopix" />
            </Helmet>
            <section id="products" className='text text-center cardo-regular'>
                <h2>{t('products.title')}</h2>
                <p className='text text-center'>{t('products.description')}</p>
                <div className="product-list">
                    {products.map((product) => (
                        <section key={product.id} className="product-card-design"> {/* Outline Structure */}
                            <div style={{ backgroundImage: `url(${product.imageSrc})` }} className='image-container' > {/* Image and etc Part */}
                                <div className='status-menu-container'>
                                    <div className='status'>
                                        <div style={{ backgroundImage: `url(options-resources/active-indicator-logo.png)` }} className='status-indicator'></div>
                                        <div className='status-indicator-description'>
                                            <p>Active{/*t('products.products[0]')*/} </p>
                                        </div>
                                    </div>
                                    <div style={{ backgroundImage: `url(options-resources/menu-logo.png)` }} className='menu'>

                                    </div>
                                </div>

                                <div className='sharelink-container'>
                                    <div style={{ backgroundImage: `url(social-media-resources/facebook-logo.png)` }} className='link-icon'></div>
                                    <div style={{ backgroundImage: `url(social-media-resources/whatsapp-logo.png)` }} className='link-icon'></div>
                                    <div style={{ backgroundImage: `url(social-media-resources/instagram-logo.png)` }} className='link-icon'></div>
                                </div>
                            </div>

                            <div className='product-detail-container'> { /* Product Details part */}
                                <div className='product-name-logo-container dm-serif-text-regular-italic' >
                                    <div className='product-name'>
                                        <p>{product.name}</p>
                                    </div>
                                    <div style={{ backgroundImage: `url(${product.productLogo})` }} className='product-logo'></div>
                                </div>

                                <div className='description-container' >
                                    {/* <div className='description-name'>
                                    <p>description</p>
                                </div> */}
                                    <div className='description-detail roboto-medium'>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='features-container'> {/* Features */}
                                <div className='title-container'>
                                    <div className='title-feature'>
                                        <p>features</p>
                                    </div>
                                </div>

                                <div className='features-details-container'>
                                    {product.features.map(feature => (
                                        <div className='feature'>
                                            <div style={{ backgroundImage: `url(${feature.logoURL})` }} className='feature-icon'></div>
                                            <div className='feature-name'>
                                                <p>{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='rating-container jersey-15-regular'> {/* Rating part */}

                                <div className='all-rating-holder'>
                                    <div className='rating-board'>
                                        <div className='rating-count'>
                                            <p>{product.clients}+</p>
                                        </div>
                                        <div className='rating-description'>
                                            <p>Clients</p>
                                        </div>
                                    </div>
                                    <div className='rating-board'>
                                        <div className='rating-count'>{product.members}+</div>
                                        <div className='rating-description'>MemberShip</div>
                                    </div>
                                    <div className='rating-board'>
                                        <div className='rating-count'>{product.Collobration}+</div>
                                        <div className='rating-description'>Collobration</div>
                                    </div>
                                </div>
                            </div>

                            <div className='other-part-container arial-sans-serif'> {/* Other Details */}
                                <div className='other-part since-project'>
                                    <div style={{ backgroundImage: `url(options-resources/since-logo.png)` }} className='other-part-logo'></div>
                                    <div className='other-part-detail'>
                                        <p>Jan 2025</p>
                                    </div>
                                </div>
                                <div onClick={() => openExploreLink(product.exploreLink)} className='other-part explore-project'>
                                    <div style={{ backgroundImage: `url(options-resources/explore-logo.png)` }} className='other-part-logo'></div>
                                    <div className='other-part-detail'>
                                        <p>ExploreMore</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProductCardDesign;