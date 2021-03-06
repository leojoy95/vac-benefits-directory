/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { globalTheme } from "../theme";

const skipLinkStyle = css`
  z-index: 3;
  text-align: center;
  position: absolute;
  top: 15px;
  left: 50%;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  display: inline-block;
  color: white;
  text-decoration: none;
  font-family: ${globalTheme.fontFamilySansSerif};

  :focus {
    width: auto !important;
    height: auto !important;
    outline: 3px solid ${globalTheme.colour.focusColour};
    outline-offset: 0;
  }
`;

const SkipToMainContent = props => {
  return (
    <a css={skipLinkStyle} href={props.skipLink} id="skipLink">
      {props.t("skipLink")}
    </a>
  );
};

SkipToMainContent.propTypes = {
  skipLink: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default SkipToMainContent;
