import {useContext} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {AuthContext} from '../../auth/contexts/AuthContext';
import {NavLink} from 'react-router-dom';

/**
 * Barre de navigation react-bootstrap
 * @return {jsx}
 */
function NavigationBar() {
  const {isAuth} = useContext(AuthContext);
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>Application React de Contacts</Navbar.Brand>
        <Nav className="ms-auto">
          {
            isAuth ? (
            <>
              <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
              <Nav.Link as={NavLink} to="/contacts">Liste de contacts</Nav.Link>
              <Nav.Link as={NavLink}>Déconnexion</Nav.Link>
            </>
            ) : (
            <>
              <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
              <Nav.Link as={NavLink} to="/login">Se connecter</Nav.Link>
            </>
            )
          }
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
