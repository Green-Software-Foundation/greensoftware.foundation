import * as React from "react";
import { graphql, Link } from "gatsby";
import { useForm } from "react-hook-form";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Button from "../components/button";
import Disclaimer from "../components/disclaimer";

// Icons
import ExternalLink from "../assets/icons/external-link.inline.svg";

// Styles
import "../styles/pages/onboarding.scss";
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const SubscribePage = ({
  data: {
    allDatoCmsProjectV2: { nodes },
  },
}) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const projects = nodes
    .map((node) => {
      return { name: node.name, url: node.url };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  console.log(projects);
  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "subscribe", ...data }),
    })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        setIsError(true);
      });
  };
  return (
    <Layout
      className="container"
      pageName="onboarding"
      seo={{ title: "Subscribe" }}
    >
      <PageTitle>Subscription Form</PageTitle>
      <Disclaimer>
        <strong>Employees of member organizations</strong> an use this form to
        subscribe to specific working groups and projects.
        <br />
        <br />
        Subscribing:-
        <ul>
          <li>
            Adds you to any mailing lists for the working groups or projects.
          </li>
          <li>
            Automatically invites you to any meetings related to those working
            groups or projects.
          </li>
          <li>
            Sends you a weekly digest of the latest and most popular activities
            for the working groups and projects you've selected.
          </li>
          <li>
            Prior to using this form you must have completed the{" "}
            <Link to="/onboarding"> registration form </Link> and received a
            confirmation email.
          </li>
        </ul>
        If you are having any difficulty using this form please email{" "}
        <a href="mailto:help@greensoftware.foundation">
          help@greensoftware.foundation
        </a>{" "}
        using your work email address with details and we will help.
        <br />
        To find out more information about our working groups, projects and how
        we work please visit our{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://grnsft.org/wiki"
        >
          Wiki
        </a>
      </Disclaimer>

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
            <input
              type="hidden"
              name="form-name"
              value="subscribe"
              {...register("form-name")}
            />
            <div>
              <label>
                Work Email: <span className="asterisk">*</span>
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
                <span class="error">
                  {errors.email.message || "This field is invalid"}
                </span>
              )}
              <small>
                You must use the same work email you used to register with the
                Foundation
              </small>
            </div>
            <div className="checkboxes-wrapper">
              <p>
                Working Groups <span className="asterisk">*</span>
              </p>
              <div className="flex-align-center">
                <input
                  type="checkbox"
                  id="Checkbox_1"
                  name="Working Groups"
                  value="Standards"
                  {...register("Working Groups", { required: true })}
                />
                <label htmlFor="Checkbox_1">Standards</label>
                <a
                  href="https://standards.greensoftware.foundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  <ExternalLink />
                </a>
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
                <a
                  href="https://policy.greensoftware.foundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  <ExternalLink />
                </a>
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
                <a
                  href="https://opensource.greensoftware.foundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  <ExternalLink />
                </a>
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
                <a
                  href="https://community.greensoftware.foundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
            <div className="checkboxes-wrapper">
              <p>
                Projects <span className="asterisk">*</span>
              </p>
              {projects.map(({ name, url }, index) => (
                <div className="flex-align-center" key={index}>
                  <input
                    type="checkbox"
                    id={`Checkbox_${name}`}
                    name="Projects"
                    value={name}
                    {...register("Projects", { required: true })}
                  />
                  <label for={`Checkbox_${name}`}>{name}</label>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <ExternalLink />
                  </a>
                </div>
              ))}
            </div>
            {isError && (
              <div className="error-message">
                <p className="error-title">Something went wrong!</p>
                <p>
                  Please try again later or contact us directly at{" "}
                  <Link to="/helpdesk">our helpdesk</Link> if the problem
                  persists.
                </p>
              </div>
            )}
            <div className="flex-start-center">
              <Button type="submit" color="primary" edgeColor="primary-dark">
                Submit
              </Button>
            </div>
          </form>
        )}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allDatoCmsProjectV2(sort: { fields: name, order: ASC }) {
      nodes {
        name
        url
      }
    }
  }
`;

export default SubscribePage;
