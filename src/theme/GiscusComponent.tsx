import React from 'react';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const {colorMode} = useColorMode();

  return (
    <Giscus
      repo="pandaymx/study-computer"
      repoId="R_kgDOPW51vg"
      category="Announcements"
      categoryId="DIC_kwDOPW51vs4Cf_em"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
