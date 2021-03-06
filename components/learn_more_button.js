import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "./button";
import { logEvent } from "../utils/analytics";
import { globalTheme } from "../theme";

const anchorFocus = css`
  :focus {
    outline: 3px solid ${globalTheme.colour.focusColour};
  }
`;

const LearnMoreButton = props => {
  const { t, benefit } = props;
  const utm =
    "?utm_source=fbas&utm_medium=referral&utm_campaign=learn-more&utm_content=" +
    benefit.vacNameEn
      .split(" ")
      .join("-")
      .toLowerCase();
  const url =
    (t("current-language-code") === "en"
      ? benefit.benefitPageEn
      : benefit.benefitPageFr) + utm;

  const benefitName =
    t("current-language-code") === "en" ? benefit.vacNameEn : benefit.vacNameFr;

  return (
    <a
      css={anchorFocus}
      href={url}
      rel="noopener noreferrer"
      aria-label={t("benefits_b.learn_more", { x: benefitName })}
      onClick={() => {
        logEvent("Exit", "learn more", url);
      }}
    >
      <Button arrow={false} tabIndex="-1" mobileFullWidth={true}>
        {t("Find out more")}
      </Button>
    </a>
  );
};

LearnMoreButton.propTypes = {
  benefit: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default LearnMoreButton;
