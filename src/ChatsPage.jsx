import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from 'prop-types';

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='4e5ad2b3-b259-48fa-8bc9-bcc02016c11f'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired, // Espera que username seja uma string e seja obrigatório
    secret: PropTypes.string.isRequired // Espera que secret seja uma string e seja obrigatório
  }).isRequired // Espera que user seja um objeto e seja obrigatório
};

export default ChatsPage;
