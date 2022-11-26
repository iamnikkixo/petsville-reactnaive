import RenderNewClients from '../features/newclients/RenderNewClients';

const NewClientsInfoScreen = ({ route }) => {
    const { newClient } = route.params;
    return <RenderNewClients newClient={newClient} />;
};

export default NewClientsInfoScreen;