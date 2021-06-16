import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.styles";
import { Container } from "@material-ui/core";

export const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
};
