import React, { useMemo } from "react";
import { Animated, View } from "react-native";
import { useBiblo } from "../hooks/Biblo.hook";
import { IndexHeader } from "../components/index/IndexHeader.component";
import { IndexOptions } from "../interfaces/IndexOptions.interface";
import { IndexSectionHeader } from "../components/index/IndexSectionHeader.component";
import { IndexItem } from "../components/index/IndexItem.component";
import { getViewStyles } from "../helpers/getStyles.helper";
import { BibloIndexSectionListProps } from "../interfaces/IndexProps.interface";

export const IndexScreen = () => {
    const {
        files,
        searchValue,
        enabledTags,
        indexOptions,
        disableDefaultStyles: disableDefaultStylesGlobal,
    } = useBiblo();
    const disableDefaultStyles =
        disableDefaultStylesGlobal || indexOptions.disableDefaultStyles;
    const filteredFiles: typeof files = useMemo(() => {
        const lowerCaseQuery = searchValue.toLowerCase();
        return lowerCaseQuery || enabledTags.length
            ? [...files].map((section) => ({
                  ...section,
                  data: section.data.filter((exports) => {
                      let skip = false;
                      if (enabledTags.length) {
                          skip = !enabledTags.some((tag) =>
                              exports.tags?.includes(tag),
                          );
                      }
                      if (lowerCaseQuery) {
                          skip =
                              skip ||
                              !(
                                  exports.title
                                      .toLowerCase()
                                      .includes(lowerCaseQuery) ||
                                  exports.subtitle
                                      ?.toLowerCase()
                                      .includes(lowerCaseQuery) ||
                                  exports.searchTerms?.some((term) =>
                                      term.includes(lowerCaseQuery),
                                  )
                              );
                      }
                      return !skip;
                  }),
              }))
            : files;
    }, [files, searchValue, enabledTags]);

    const Wrapper = (indexOptions.wrapperComponent || View) as NonNullable<
        IndexOptions["wrapperComponent"]
    >;
    const SectionFooter = (indexOptions.sectionFooterComponent ||
        View) as NonNullable<IndexOptions["sectionFooterComponent"]>;
    const Footer = (indexOptions.footerComponent || View) as NonNullable<
        IndexOptions["footerComponent"]
    >;

    return (
        <Wrapper
            headerTitle={indexOptions.headerTitle}
            style={getViewStyles(
                indexOptions.wrapperStyle,
                { flex: 1 },
                disableDefaultStyles,
            )}
        >
            <Animated.SectionList
                sections={filteredFiles}
                keyExtractor={(_, index) => `item-${index}`}
                stickySectionHeadersEnabled
                ListHeaderComponent={IndexHeader}
                ListFooterComponent={() => (
                    <Footer style={indexOptions.footerStyle} />
                )}
                renderSectionHeader={({ section }) => (
                    <IndexSectionHeader
                        title={section.title}
                        itemsCount={section.data.length}
                    />
                )}
                renderSectionFooter={({ section }) =>
                    section.data.length ? (
                        <SectionFooter
                            title={section.title}
                            itemsCount={section.data.length}
                            style={[
                                {
                                    height:
                                        indexOptions.sectionListItemHeight ||
                                        40,
                                },
                                indexOptions.sectionFooterStyle,
                            ]}
                        />
                    ) : null
                }
                renderItem={({ item }) => <IndexItem file={item} />}
                getItemLayout={(data, index) => ({
                    length: indexOptions.sectionListItemHeight || 40,
                    offset: (indexOptions.sectionListItemHeight || 40) * index,
                    index,
                })}
                {...(indexOptions.sectionListProps as BibloIndexSectionListProps)}
            />
        </Wrapper>
    );
};
