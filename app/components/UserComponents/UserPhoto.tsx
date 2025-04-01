import React from "react";
import { Image, StyleSheet } from "react-native";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Image>

export function UserPhoto({ style, ...props }: Props) {
  return (
    <Image
      style={style}
      {...props}
    />
  )
}