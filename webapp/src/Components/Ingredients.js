import {ListGroup, CloseButton, ToggleButton, Form} from 'react-bootstrap'

const Ingredients = ()=>{
    return(
        <div className="Left-side">
        <div className="Left-title">
          <h1>Current Groceries</h1>
        </div>
        <div className="Grocery-window">
        </div>
        <ListGroup>
          <ListGroup.Item>Cras justo odio
            <CloseButton/>
            <ToggleButton
              className="mb-2"
              id="toggle-check"
              type="checkbox"
              variant="outline-primary"
              // checked={checked}
              value="1"
              // onChange={(e) => setChecked(e.currentTarget.checked)}
            >
              Checked
            </ToggleButton>
          </ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Form>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Fridge View: Off"
          />
        </Form>
      </div>
    );
}

export default Ingredients;