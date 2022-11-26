import RenderServices from '../features/services/RenderServices';

const ServicesInfoScreen = ( { route } ) => {
    const { service } = route.params;
    return <RenderServices service={service} />;
};

export default ServicesInfoScreen;