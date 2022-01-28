import * as React from "react";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Button from "../components/button";

// Styles
import "../styles/pages/onboarding.scss";

const PressPage = () => {
  return (
    <Layout
      className="container"
      pageName="onboarding"
      seo={{ title: "Helpdesk" }}
    >
      <PageTitle>Helpdesk</PageTitle>
      <section className="form-wrapper">
        <form
          action="https://forms.zohopublic.eu/gsf/form/IssuesForm/formperma/xMpA4f6diF8xXgsmTpQSMuuPmPqPd9r2dOu97NQtZSw/htmlRecords/submit"
          name="form"
          method="POST"
          accept-charset="UTF-8"
          enctype="multipart/form-data"
        >
          <input type="hidden" name="zf_referrer_name" value="" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />
          <div>
            <label>
              First Name
              <span className="asterisk">*</span>
            </label>
            <input
              type="text"
              maxLength="255"
              name="Name_First"
              fieldType="7"
            />
          </div>
          <div>
            <label>
              Last Name
              <span className="asterisk">*</span>
            </label>
            <input type="text" maxLength="255" name="Name_Last" fieldType="7" />
          </div>
          <div>
            <label>
              Email
              <span className="asterisk">*</span>
            </label>
            <input type="text" maxLength="255" name="Email" fieldType="9" />
          </div>
          <div>
            <label>
              Company <span className="asterisk">*</span>
            </label>
            <input
              type="text"
              name="SingleLine1"
              fieldType="1"
              maxLength="255"
            />
          </div>

          <div>
            <label>
              Subject<span className="asterisk">*</span>
            </label>
            <input
              type="text"
              name="SingleLine"
              fieldType="1"
              maxLength="255"
            />
          </div>
          <div>
            <label>
              Description<span className="asterisk">*</span>
            </label>
            <textarea name="MultiLine" maxlength="65535"></textarea>
          </div>

          <Button color="primary" edgeColor="primary-dark" type="submit">
            Submit
          </Button>
        </form>
      </section>
    </Layout>
  );
};

export default PressPage;
