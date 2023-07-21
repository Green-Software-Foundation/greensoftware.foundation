import * as React from "react";
import { graphql, Link } from "gatsby";
import { useForm } from "react-hook-form";

// Countries
import countries from "../utils/countries.json";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Button from "../components/button";
import Disclaimer from "../components/disclaimer";

// Styles
import "../styles/pages/onboarding.scss";
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const OnboardingPage = ({
  data: {
    allDatoCmsCompany: { nodes },
  },
}) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const allCompanies = nodes.map((member) => member.companyName);
  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "onboarding", ...data }),
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
      seo={{ title: "Onboarding" }}
    >
      <PageTitle>Registration Form</PageTitle>
      <Disclaimer>
        If you are an employee of an{" "}
        <strong>existing member organization</strong> please use this form to
        register with the Foundation.
        <br />
        <br />
        Registering:-
        <ul>
          <li>
            Gives you access to member only spaces, emails and communication
            channels.
          </li>
          <li>
            Allows you to subscribe to working group and projects so you can
            join the meetings and are added to the member only email lists.
          </li>
          <li>Allows you to take part in voting and consensus.</li>
          <li>
            Informs your organization of your registration so you can act on
            behalf of your organization.
          </li>
        </ul>
        If you are having any difficulty using this form please email{" "}
        <a href="mailto:help@greensoftware.foundation">
          help@greensoftware.foundation
        </a>{" "}
        using your work email address with details and we will help.
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
            name="onboarding"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="hidden"
              name="form-name"
              value="onboarding"
              {...register("form-name")}
            />
            <div>
              <label>
                First Name: <span className="asterisk">*</span>
                <input
                  type="text"
                  name="firstName"
                  className={errors?.firstName ? "has-error" : ""}
                  {...register("firstName", { required: true })}
                />
              </label>
              {errors?.firstName && (
                <span class="error">This field is required</span>
              )}
            </div>
            <div>
              <label>
                Last Name: <span className="asterisk">*</span>
                <input
                  type="text"
                  name="lastName"
                  className={errors?.lastName ? "has-error" : ""}
                  {...register("lastName", { required: true })}
                />
              </label>
              {errors?.lastName && (
                <span class="error">This field is required</span>
              )}
            </div>
            <div>
              <label>
                Company: <span className="asterisk">*</span>
                <select
                  name="company"
                  className={errors?.company ? "has-error" : ""}
                  {...register("company", { required: true })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a company
                  </option>
                  {allCompanies.map((company) => (
                    <option key={company} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
              </label>
              {errors?.company && (
                <span class="error">This field is required</span>
              )}
            </div>
            {/* Select field with countries */}
            <div>
              <label>
                Country:{" "}
                <select
                  name="country"
                  className={errors?.country ? "has-error" : ""}
                  {...register("country")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </label>
              {errors?.country && (
                <span class="error">This field is required</span>
              )}
              <small>
                We use this data to connect people together geographically and
                to take into consideration time zones for meetings and events.
              </small>
            </div>
            {/* (Closest major) City */}
            <div>
              <label>
                City:{" "}
                <input
                  type="text"
                  name="city"
                  className={errors?.city ? "has-error" : ""}
                  {...register("city")}
                />
              </label>
              {errors?.city && (
                <span class="error">This field is required</span>
              )}
            </div>
            <div>
              <label>
                Role: <span className="asterisk">*</span>
                <input
                  type="text"
                  className={errors?.role ? "has-error" : ""}
                  name="role"
                  {...register("role", { required: true })}
                />
              </label>
              {errors?.role && (
                <span class="error">This field is required</span>
              )}
            </div>
            <div>
              <label>
                Work email: <span className="asterisk">*</span>
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
                It is essential that you use a work email to register, only
                email domains that are whitelisted by one of our member
                organizations will be approved.
              </small>
            </div>
            <div>
              <label>
                GitHub username: <span className="asterisk">*</span>
                <input
                  type="text"
                  name="githubUsername"
                  className={errors?.githubUsername ? "has-error" : ""}
                  {...register("githubUsername", {
                    required: true,
                    minLength: 3,
                    validate: async (value) => {
                      const response = await fetch(
                        `https://api.github.com/users/${value}`
                      );
                      return (
                        response.ok || "This username does not exist on GitHub"
                      );
                    },
                  })}
                />
              </label>
              {errors?.githubUsername && (
                <span class="error">
                  {errors.githubUsername.message || "This field is invalid"}
                </span>
              )}
              {/* add disclamer to this field */}
              <small>
                The GSF works almost entirely in the open via GitHub, your
                opportunities to engage will be very limited without a GitHub
                username, click this{" "}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </a>{" "}
                to create one if you do not already have one
              </small>
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
  query OnboardingPageQuery {
    allDatoCmsCompany(sort: { fields: companyName, order: ASC }) {
      nodes {
        companyName
      }
    }
  }
`;

export default OnboardingPage;
