import * as React from "react";
import { useForm } from "react-hook-form";
import addToMailchimp from "gatsby-plugin-mailchimp";

// Components
import Button from "./button";

const NewsletterForm = ({
  placeholder,
  hasDarkBg,
  buttoncolor = "primary",
  buttonEdgeColor = "primary-darker",
  buttonTextColor = undefined,
}) => {
  const [mailchimpResult, setMailchimpResult] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ email }) => {
    const result = await addToMailchimp(email);
    setMailchimpResult(result);
  };
  if (mailchimpResult && mailchimpResult.result === "success") {
    return <p className="newsletter-success-msg">{mailchimpResult.msg}</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`newsletter-form `}>
      <div>
        <input
          style={errors.email ? { borderColor: "var(--danger-light)" } : {}}
          type="text"
          name="email"
          placeholder={placeholder}
          {...register("email", {
            required: true,
            pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
          })}
        />
        {errors.email?.type === "required" && (
          <small className={`error-msg ${hasDarkBg ? "hasDarkBg" : ""}`}>
            Email address is required
          </small>
        )}
        {errors.email?.type === "pattern" && (
          <small className={`error-msg ${hasDarkBg ? "hasDarkBg" : ""}`}>
            Email address not valid
          </small>
        )}
        {mailchimpResult?.result === "error" && (
          <small
            className={`error-msg ${hasDarkBg ? "hasDarkBg" : ""}`}
            dangerouslySetInnerHTML={{ __html: mailchimpResult.msg }}
          />
        )}
      </div>
      <Button
        type="submit"
        color={buttoncolor}
        edgeColor={buttonEdgeColor}
        textColor={buttonTextColor}
      >
        Sign up
      </Button>
    </form>
  );
};

export default NewsletterForm;
