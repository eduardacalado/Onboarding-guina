import { Button, Text } from "@/app/atomic";
import { deleteCardDivVariants } from "./delete-card.style";
import { deleteCardStrings } from "./delete-card.strings";

export function DeleteCardModal() {
  const { modalContainer, titlesContainer, buttonsContainer } =
    deleteCardDivVariants();
  return (
    <div className={modalContainer()}>
      <div className={titlesContainer()}>
        <Text>{deleteCardStrings.deleteCardTitle}</Text>
        <Text variant="body1">{deleteCardStrings.deleteCardSubTitle} "" ?</Text>
      </div>
      <div className={buttonsContainer()}>
        <Button variant="cta">{deleteCardStrings.ctaCancel}</Button>
        <Button variant="primaryDestructive">
          {deleteCardStrings.ctaDeleteCard}
        </Button>
      </div>
    </div>
  );
}
