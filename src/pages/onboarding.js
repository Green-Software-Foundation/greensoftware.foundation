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

const OnboardingPage = ({ data: { datoCmsHomepage: { generalMembers, steeringMembers } } }) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const allCompanies = [...generalMembers, ...steeringMembers].map(member => member.companyName).sort(
    (a, b) => a.localeCompare(b)

  );
  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
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
      seo={{ title: "Onboarding" }}
    >
      <PageTitle>GSF Member onboarding</PageTitle>
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
            <input type="hidden" name="form-name" value="onboarding" {...register("form-name")} />
            <div>
              <label>
                First Name:{" "}
                <input
                  type="text"
                  name="firstName"
                  className={errors?.firstName ? "has-error" : ""}
                  {...register("firstName", { required: true })}
                />
              </label>
              {errors?.firstName && <span class="error">This field is required</span>}
            </div>
            <div>
              <label>
                Last Name:{" "}
                <input
                  type="text"
                  name="lastName"
                  className={errors?.lastName ? "has-error" : ""}
                  {...register("lastName", { required: true })}


                />
              </label>
              {errors?.lastName && <span class="error">This field is required</span>}
            </div>
            <div>
              <label>
                Company:{" "}
                <select
                  name="company"
                  className={errors?.company ? "has-error" : ""}
                  {...register("company", { required: true })}
                  defaultValue=""
                >
                  <option value="" disabled>Select a company</option>
                  {allCompanies.map(company => (
                    <option key={company} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
              </label>
              {errors?.company && <span class="error">This field is required</span>}
            </div>
            <div>
              <label>
                Role:{" "}
                <input
                  type="text"
                  className={errors?.role ? "has-error" : ""}
                  name="role"
                  {...register("role", { required: true })} />
              </label>
              {errors?.role && <span class="error">This field is required</span>}
            </div>
            <div>
              <label>
                Work email:{" "}
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
            <div>
              <label>
                GitHub username:{" "}
                <input
                  type="text"
                  name="githubUsername"
                  className={errors?.githubUsername ? "has-error" : ""}
                  {...register("githubUsername", {
                    required: true,
                    minLength: 3,
                    validate: async value => {
                      const response = await fetch(
                        `https://api.github.com/users/${value}`
                      )
                      return response.ok || "This username does not exist on GitHub"
                    },
                  })}
                />
              </label>
              {errors?.githubUsername && (
                <span class="error">{errors.githubUsername.message || "This field is invalid"}</span>
              )}
              {/* add disclamer to this field */}
              <small>The GSF works almost entirely in the open via GitHub, your opportunities to engage will be very limited without a GitHub username, click this
                {" "}<a href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >link</a> to create one if you do not already have one</small>
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
  query OnboardingPageQuery {
    datoCmsHomepage {
      steeringMembers {
        companyName
      }
      generalMembers {
        companyName
      }
    }
  }
`;


export default OnboardingPage;
