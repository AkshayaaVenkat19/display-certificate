import { Grid2 } from "@mui/material";
import Title from "../../components/certBody/title";
import SubTitle from "../../components/certBody/subTitle";
import Name from "../../components/certBody/name";
import Description from "../../components/certBody/description";
import Signature from "../../components/certBody/signature";

const CertBody = ({ data }) => {
  return (
    <Grid2 id="cert-body" container spacing={24}>
      <Grid2 item xs={4} id="body-grid">
        <Title />
        <SubTitle />
        <Name name={data.name} />
        <Description course={data.course} />
        <Signature data={data} />
      </Grid2>
    </Grid2>
  );
};

export default CertBody;
