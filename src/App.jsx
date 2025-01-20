import Form from "./Form";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";

const temp1Data = {
  fname: "saurav",
  lname: "sharma",
  designation: "frontend developer",
  email: "john.doe@example.com",
  countryCode: "1",
  phoneNumber: "1234567890",
  website: "www.johndoe.com",
  company: "Doe Industries",
  gst: "24AAACC1206D1ZM",
};
const temp2Data = {
  fname: "saurav",
  lname: "sharma",
  designation: "Frontend Engineer",
  phoneNumber: "1234567890",
  countryCode: "977 ",
  website: "www.businesscard.com",
  company: "Tech Corp",
};

function App() {
  return (
    <div className="App">
      <Template1 temp1Data={temp1Data} />
      <Template2 temp2Data={temp2Data} />
      <Form />
    </div>
  );
}

export default App;
