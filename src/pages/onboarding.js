import * as React from "react";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Button from "../components/button";

// Styles
import "../styles/pages/onboarding.scss";

const PressPage = () => {
  return (
    <Layout pageName="onboarding" seo={{ title: "Onboarding" }}>
      <PageTitle>GSF Member onboarding’</PageTitle>
      <section className="form-wrapper">
        <form
          action="https://forms.zohopublic.eu/gsf/form/MemberApplication/formperma/mI7ykSxhRb2bfWMYEEGA6BCIj3UlUI79dvzkPS79c5w/htmlRecords/submit"
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
            <p>
              Please use your company email ID. If you encounter any issues
              please reach our help desk.
            </p>
          </div>
          <div>
            <label>Company</label>
            <input
              type="text"
              name="SingleLine"
              fieldType="1"
              maxLength="255"
            />
          </div>
          <div>
            <label>Profile Image</label>
            <input
              type="file"
              accept="image/*"
              name="ImageUpload"
              checktype="c1"
            />
          </div>
          <div className="checkboxes-wrapper">
            <p>Working Groups</p>
            <div className="flex-align-center">
              <input
                type="checkbox"
                id="Checkbox_1"
                name="Checkbox"
                value="Standards"
              />
              <label for="Checkbox_1">Standards</label>
            </div>
            <div className="flex-align-center">
              <input
                type="checkbox"
                id="Checkbox_2"
                name="Checkbox"
                value="Trademark"
              />
              <label for="Checkbox_2">Trademark</label>
            </div>
            <div className="flex-align-center">
              <input
                type="checkbox"
                id="Checkbox_3"
                name="Checkbox"
                value="Innovation"
              />
              <label for="Checkbox_3">Innovation</label>
            </div>
            <div className="flex-align-center">
              <input
                type="checkbox"
                id="Checkbox_4"
                name="Checkbox"
                value="Community"
              />
              <label for="Checkbox_4">Community</label>
            </div>
          </div>
          <div>
            <label>Role</label>
            <input
              type="text"
              name="SingleLine1"
              fieldType="1"
              maxLength="255"
            />
          </div>
          <div>
            <label>Twitter URL</label>
            <input type="text" maxLength="2083" name="Website" />
          </div>
          <div>
            <label>Facebook URL</label>
            <input type="text" maxLength="2083" name="Website1" />
          </div>
          <div>
            <label>LinkedIn URL</label>
            <input type="text" maxLength="2083" name="Website2" />
          </div>
          <div>
            <label>GitHub Username</label>
            <input
              type="text"
              name="SingleLine2"
              fieldType="1"
              maxLength="255"
            />
          </div>
          <div>
            <label>Website</label>
            <input type="text" maxLength="2083" name="Website3" />
          </div>
          <div>
            <label>Primary Link</label>
            <select name="Dropdown">
              <option selected="true" value="-Select-">
                -Select-
              </option>
              <option value="Twitter">Twitter</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Website">Website</option>
              <option value="Facebook">Facebook</option>
            </select>
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
