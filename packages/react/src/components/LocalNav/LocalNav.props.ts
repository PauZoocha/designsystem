import { LinkProps, ContextMenuProps } from "../ContextMenu/ContextMenu.props";

export interface LocalNavProps {
  /**
   * Props for the background colour of the LocalNav
   */
  background?: string;

  /**
   * Props for the logo of the LocalNav
   */
  logo?: Required<string>;

  /**
   * Props for the home url of the LocalNav
   */
  siteurl?: Required<string>;

  /**
   * Specify the primary items for the LocalNav
   */
  primarynav?: Required<PrimaryNavProps>;

  /**
   * Specify the main link for the LocalNav
   */
  mainlink?: LinkProps;

  /**
   * Specify the menu close label for the LocalNav
   */
  menucloselabel?: string;

  /**
   * Specify the language label for the LocalNav
   */
  languagelabel?: string;

  /**
   * Specify the language context menu for the LocalNav
   */
  languagecontextmenu?: ContextMenuProps;

  /**
   * Specify the state of a toggle hamburg context menu button for the LocalNav
   */
  isMenuOpen?: boolean;
}

interface PrimaryNavProps {
  /**
   * Specify the label for local nav
   */
  navlabel?: Required<string>;

  /**
   * Specify the close label for mobile local nav
   */
  mobilecloselabel?: Required<string>;

  /**
   * Specify the social links
   */
  items?: Required<Array<LinkProps>>;
}
