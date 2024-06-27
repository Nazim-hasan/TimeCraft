
import Text from "components/shared/text/Text";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { metrics } from "theme/metrics";


export const loginStyles = StyleSheet.create({
  svgStyles: {
    width: '100%',
    height: 350
  },
  buttonStyles: {
    borderRadius: 5,
  }
})

export const Slug = styled(Text)`
  margin-top: ${metrics.spacing.s}px;
`