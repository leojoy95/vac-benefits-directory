// @flow

import React, { Component } from "react";

import { Grid } from "material-ui";
import { Card, Button } from "material-ui";

import { withI18next } from "../lib/withI18next";
import Layout from "../components/layout";
import { logEvent } from "../utils/analytics";
import Link from "next/link";

type Props = {
  i18n: mixed,
  t: mixed
};

class App extends Component<Props> {
  props: Props;

  changeLanguage = () => {
    this.props.i18n.changeLanguage(this.props.t("other-language-code"));
    logEvent("Language change", this.props.t("other-language"));
  };

  throwError = () => {
    throw new Error("test");
  };

  render() {
    const { i18n, t } = this.props; // eslint-disable-line no-unused-vars
    const serviceTypes = ["Veteran", "Family", "Not Sure"];

    return (
      <Layout i18n={i18n} t={t}>
        <div style={{ padding: 12 }}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <p style={{ textAlign: "center", fontSize: "1.5em" }}>
                {t("A2.What best describes your status?")}
              </p>
            </Grid>
          </Grid>

          {serviceTypes.map((service, i) => (
            <Grid
              container
              key={i}
              justify="center"
              spacing={24}
              style={{ marginTop: "1em" }}
            >
              <Grid item sm={4} xs={12}>
                <Card>
                  <Button fullWidth={true}>{t("A2." + service)}</Button>
                </Card>
              </Grid>
            </Grid>
          ))}

          <Grid
            container
            justify="center"
            spacing={24}
            style={{ marginTop: "3em" }}
          >
            <Grid item sm={4} xs={12}>
              <Card>
                <Button fullWidth={true}>{t("A2.See Results")}</Button>
              </Card>
            </Grid>
          </Grid>

          <Grid
            container
            justify="center"
            spacing={24}
            style={{ marginTop: "1em" }}
          >
            <Grid item sm={4} xs={12}>
              <p style={{ textAlign: "center", fontSize: "1em" }}>
                <Link href="all-benefits">
                  <a>{t("Show All Benefits")}</a>
                </Link>
              </p>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default withI18next(["common"])(App);