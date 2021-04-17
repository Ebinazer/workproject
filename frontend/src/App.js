import './App.css';
// import axios from 'axios'
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import {Pagination} from 'react-bootstrap'

function App() {
  // const Url="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo"
  // const FetchD =async()=>
  // {
  //   const response =await axios.get(Url)
  //   console.log(response)
  // }  
  return (
    <div className="App">
      <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src="QuikieAppsLogo.png"
        width="100"
        height="40"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>
  </Navbar>
  <Container>
  <Row>
    <Col class="col"><div class="content">GOOGL  <img
        src="GOOGL.png"
        width="80"
        height="50"
        className="img1"
        alt=""
      />
      </div><div class="b"><b >1515 USD</b></div></Col>
    <Col class="col" ><div class="content">FB
    <img
        src="FB.png"
        width="60"
        height="50"
        className="img2"
        alt=""
      /></div>
      <div class="b"><b >266 USD</b></div></Col>
    <Col class="col"><div class="content">AMZN
    <img
        src="AMZN.svg"
        width="100"
        height="50"
        className="img3"
        alt=""
      /></div><div class="b"><b >3116 USD</b></div></Col>
  </Row>
  <div class="borde">
  <Form>
  <Form.Group as={Row}>
    <Form.Label column sm="2">
     <b> Search Details Table</b>
    </Form.Label>
    <Col sm="4">
      <Form.Control type="text" placeholder="Search By Company Name" />
    </Col>
  </Form.Group>
</Form>


  <Table striped bordered hover>
  <thead>
    <tr>
      <th>Company Name</th>
      <th>Symbol</th>
      <th>Market Cap</th>
      <th> </th>
      <th>Current Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>141 Capital inc</td>
      <td>Symbol</td>
      <td>144k</td>
      <td><button>View</button></td>
      <td>data</td>
    </tr>
    <tr>
      <td>Cardlytics</td>
      <td>Symbol</td>
      <td>$1.8B</td>
      <td><button>View</button></td>
      <td>data</td>
    </tr>
    <tr> <td>Cardlytics</td>
      <td>Symbol</td>
      <td>$1.8B</td>
      <td><button>View</button></td>
      <td>data</td>
    </tr>
  </tbody>
</Table>
<Pagination className="Pagination">
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
</div>  
</Container>
    </div>
  );

}

export default App;
