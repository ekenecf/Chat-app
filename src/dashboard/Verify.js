import { Link } from "react-router-dom";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";
import { BiRightArrow } from "react-icons/bi";

const Verify = () => {
    // const getResponse = JSON.parse(localStorage.getItem('serverResponse'))

  return (
    <Maincontainer>
      <Card>
        <GoVerified style={{ color: "green", fontSize: "40px" }} />
        <Text>Your email address has been successfully verified.</Text>
        <Link to={`/dashboard/`}>
          <Back>
            Start chatting{" "}
            <BiRightArrow style={{ color: "blue", fontSize: "15px" }} />
          </Back>
        </Link>
      </Card>
    </Maincontainer>
  );
};

export default Verify;
const Back = styled.div`
  font-size: 15px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 5%;
`;
const Text = styled.div``;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
  min-width: 350px;
  height: 242px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  margin: 3% 0.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Maincontainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
`;
