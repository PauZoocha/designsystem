import { CardColor, CardSize } from "../../../types";
import { LinkProps } from "../../LinkList/LinkList.props";

export type StatCardProps = {
  /**
   * The title of the card
   */
  title: string;
  color?: CardColor;

  /**
   * How big should the card be
   */
  size?: Omit<CardSize, "narrow" | "wide">;

  /**
   * Introductory text in the card
   */
  intro?: string;
  source?: LinkProps;
};
