import Text from "components/shared/text/Text";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { metrics } from "theme/metrics";

export const GreetingsWrapper = styled.View`
  flexDirection: row;
`
export const IconContainer = styled.Pressable`
  position: absolute;
  right: 0;
  top: 2px;
`
export const greetingStyles = StyleSheet.create({
  remainingTasks: {
    marginTop: metrics.spacing.s,
  }
})