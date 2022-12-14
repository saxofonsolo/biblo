import React from "react";
import { Animated, StyleProp, TextStyle, ViewStyle } from "react-native";
import { BibloBio, BibloFile } from "./Biblo.interface";

export interface BibloControlsBaseProps {
    controlsShown: boolean;
    setControlsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BibloReaderWrapperProps {
    item: BibloFile;
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

export type BibloReaderScrollViewProps = React.ComponentProps<
    typeof Animated.ScrollView
>;

export interface BibloReaderHeaderProps extends BibloControlsBaseProps {
    bio: BibloBio;
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

export interface BibloReaderHeaderTitleProps {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    title: string;
    children: React.ReactNode;
}

export interface BibloReaderHeaderSubtitleProps {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    subtitle: string;
    children: React.ReactNode;
}

export interface BibloReaderHeaderDescriptionProps {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    description: React.ReactNode;
    children: React.ReactNode;
}

export interface BibloReaderHeaderTagsProps {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    tags: string[];
    children: React.ReactNode;
}

export interface BibloReaderControlsProps {
    shown: boolean;
    setShown: React.Dispatch<React.SetStateAction<boolean>>;
    parent: "header" | "item";
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    inputStyle?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

export interface BibloReaderSeparatorProps {
    index: number;
    isFirst: boolean;
    isLast: boolean;
    style?: StyleProp<ViewStyle>;
}

export interface BibloReaderItemProps extends BibloControlsBaseProps {
    index: number;
    isFirst: boolean;
    isLast: boolean;
    bio: BibloBio;
    title: string | null;
    originalTitle: string;
    description?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

export interface BibloReaderItemTitleProps {
    title: string | null;
    originalTitle: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

export interface BibloReaderItemDescriptionProps {
    description: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

export interface BibloReaderItemComponentWrapperProps {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}

export interface BibloReaderFooterProps {
    bio: BibloBio;
    style?: StyleProp<ViewStyle>;
}

export interface BibloReaderControlsToggleProps extends BibloControlsBaseProps {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}
