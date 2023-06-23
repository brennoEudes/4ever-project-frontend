import Form from "react-bootstrap/Form";
//import Button from 'react-bootstrap/Button';

export function SearchBar(props) {
  return (
    <form>
      <Form.Control OnChange={props.filterCapsOnDashboard} />
    </form>
  );
}

// Se quisermos button na SearchBar, inserir dentro do <form>: <Button variant="primary">Search</Button>{' '}
