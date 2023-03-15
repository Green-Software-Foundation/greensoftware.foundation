import * as React from "react";
import { graphql, Link } from "gatsby";
import { useForm } from 'react-hook-form';

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Button from "../components/button";

// Styles
import "../styles/pages/onboarding.scss";
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const SubscribePage = ({ data: { allDatoCmsProjectV2: { nodes } } }) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const projects = nodes.map(node => node.name).sort(
    (a, b) => a.localeCompare(b)
  );
  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "subscribe", ...data }),
    })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch(error => {
        setIsError(true);
      })
  };
  return (
    <Layout
      className="container"
      pageName="onboarding"
      seo={{ title: "Subscribe" }}
    >
      <PageTitle>Subscribe</PageTitle>
      <section className="form-wrapper">
        {isSubmitted ? (
          <div className="success-message">
            <h2>Thank you for your submission!</h2>
            <p>
              We will review your information and get back to you as soon as
              possible.
            </p>
          </div>
        ) : (

          <form
            name="subscribe"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="hidden" name="form-name" value="subscribe" {...register("form-name")} />
            <div>
              <label>
                Email:{" "}<span className="asterisk">*</span>
                <input
                  type="email"
                  name="email"
                  className={errors?.email ? "has-error" : ""}
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    maxLength: 50,
                  })}
                />
              </label>
              {errors?.email && (
                <span class="error">{errors.email.message || "This field is invalid"}</span>
              )}
            </div>
            <div className="checkboxes-wrapper">
              <p>Working Groups <span className="asterisk">*</span></p>
              <div className="flex-align-center">
                <input
                  type="checkbox"
                  id="Checkbox_1"
                  name="Working Groups"
                  value="Standards"
                  {...register("Working Groups", { required: true })}
                />
                <label htmlFor="Checkbox_1">Standards</label>
              </div>
              <div className="flex-align-center">
                <input
                  type="checkbox"
                  id="Checkbox_2"
                  name="Working Groups"
                  value="Policy"
                  {...register("Working Groups", { required: true })}
                />
                <label for="Checkbox_2">Policy</label>
              </div>
              <div className="flex-align-center">
                <input
                  type="checkbox"
                  id="Checkbox_3"
                  name="Working Groups"
                  value="Opensource"
                  {...register("Working Groups", { required: true })}
                />
                <label htmlFor="Checkbox_3">Opensource</label>
              </div>
              <div className="flex-align-center">
                <input
                  type="checkbox"
                  id="Checkbox_4"
                  name="Working Groups"
                  value="Community"
                  {...register("Working Groups", { required: true })}
                />
                <label for="Checkbox_4">Community</label>
              </div>
            </div>
            <div className="checkboxes-wrapper">
              <p>Projects <span className="asterisk">*</span></p>
              {projects.map((project, index) => (
                <div className="flex-align-center" key={index}>
                  <input
                    type="checkbox"
                    id={`Checkbox_${project}`}
                    name="Projects"
                    value={project}
                    {...register("Projects", { required: true })}
                  />
                  <label for={`Checkbox_${project}`}>{project}</label>
                </div>
              ))}
            </div>
            {isError && (
              <div className="error-message">
                <p className="error-title">Something went wrong!</p>
                <p>
                  Please try again later or contact us directly at{" "}
                  <Link to="/helpdesk">
                    our helpdesk
                  </Link>{" "}
                  if the problem persists.
                </p>
              </div>
            )}
            <div className="flex-start-center">
              <Button type="submit" color="primary" edgeColor="primary-dark" >Submit</Button>
            </div>

          </form>
        )}
      </section>
    </Layout>
  );
};


export const query = graphql`
  query  {
    allDatoCmsProjectV2(sort: {fields: name, order: ASC}) {
      nodes {
        name
      }
  }
  }
`;


export default SubscribePage;
