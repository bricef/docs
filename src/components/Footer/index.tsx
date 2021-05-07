import {Footer, RightFooter, LeftFooter, Social, Legal} from "./styles";
import {Container} from "../Container";
import ExternalLink from "../ExternalLink";
import * as links from "../../constants/links";
import * as img from "../../constants/img";

export default function DocsFooter() {
  return (
    <Container backgroundColor="color-ink-hv">
      <Footer>
        <LeftFooter>
          <img src="/logo-light.svg" />
          <div>
            <a href="/start">Getting Started</a>
            <ExternalLink href={links.DISCORD}>Support</ExternalLink>
          </div>
          <div>
            <h3>Community</h3>
            <ExternalLink href={links.COMMUNITY_EVENTS}>Events</ExternalLink>
            <ExternalLink href={links.COMMUNITY_POSTS}>Posts</ExternalLink>
            <ExternalLink href={links.COMMUNITY_CONTRIBUTORS}>
              Members
            </ExternalLink>
            <ExternalLink href={links.COMMUNITY_NEWSLETTERS}>
              Newsletters
            </ExternalLink>
          </div>
        </LeftFooter>
        <RightFooter>
          <Social>
            <ExternalLink anchorTitle="Twitter" href={links.TWITTER}>
              <img src="/twitter.svg" />
            </ExternalLink>
            <ExternalLink anchorTitle="Discord" href={links.DISCORD}>
              <img alt={img.DISCORD.alt} src={img.DISCORD.lightSrc} />
            </ExternalLink>
            <ExternalLink anchorTitle="GitHub" href={links.GITHUB}>
              <img src="/github-light.svg" />
            </ExternalLink>
          </Social>
          <Legal>
            <span>
              <img src="/aws.svg" />
              Amplify open source, documentation and community are supported by
              Amazon Web Services © 2020, Amazon Web Services, Inc. and its
              affiliates. All rights reserved. View the
              <ExternalLink href={links.TERMS}>site terms</ExternalLink>
              and
              <ExternalLink href={links.PRIVACY}>privacy policy</ExternalLink>.
              Flutter and the related logo are trademarks of Google LLC. We are
              not endorsed by or affiliated with Google LLC.
            </span>
          </Legal>
        </RightFooter>
      </Footer>
    </Container>
  );
}
