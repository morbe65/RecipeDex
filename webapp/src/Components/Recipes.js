import {Form, Tabs, Tab, Card, Button} from 'react-bootstrap'

const Recipes = ()=>{
    return(
        <div className='Right-side'>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="home" title="Pantry">
              <>
              <Form.Control
                placeholder='Add food item'
                id="fooditem"
                aria-describedby="passwordHelpBlock"
              />
            </> 
                <Card>
                <Card.Header>Dairy</Card.Header>
                <Card.Body>
                  <Button>Ice cream</Button>
                  <Button>Milk</Button>
                  <Button>Sour Cream</Button>
                  <Button>Cream Cheese</Button>
                  <Button>Cheese</Button>
                </Card.Body>
              </Card>  
              <Card>
                <Card.Header>Grain & Nuts</Card.Header>
                <Card.Body>
                  <Button>Ice cream</Button>
                  <Button>Milk</Button>
                  <Button>Sour Cream</Button>
                  <Button>Cream Cheese</Button>
                  <Button>Cheese</Button>
                </Card.Body>
              </Card>  
              <Card>
                <Card.Header>Herbs & Spices</Card.Header>
                <Card.Body>
                  <Button>Ice cream</Button>
                  <Button>Milk</Button>
                  <Button>Sour Cream</Button>
                  <Button>Cream Cheese</Button>
                  <Button>Cheese</Button>
                </Card.Body>
              </Card>  
              <Card>
                <Card.Header>Meat & Fish</Card.Header>
                <Card.Body>
                  <Button>Ice cream</Button>
                  <Button>Milk</Button>
                  <Button>Sour Cream</Button>
                  <Button>Cream Cheese</Button>
                  <Button>Cheese</Button>
                </Card.Body>
              </Card>  
              <Card>
                <Card.Header>Fruits & Vegtables</Card.Header>
                <Card.Body>
                  <Button>Ice cream</Button>
                  <Button>Milk</Button>
                  <Button>Sour Cream</Button>
                  <Button>Cream Cheese</Button>
                  <Button>Cheese</Button>
                </Card.Body>
              </Card>
              </Tab>
              <Tab eventKey="profile" title="Recipes">
              <>
              <Form.Control
                placeholder='Add food item'
                id="fooditem"
                aria-describedby="passwordHelpBlock"
              />
            </> 
              </Tab>
            </Tabs>
          </div>
    );
}

export default Recipes;