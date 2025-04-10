import { Button, Text } from "@/app/atomic";
import { deleteCardDivVariants } from "./delete-card.style";
import { deleteCardStrings } from "./delete-card.strings";
import { useDeleteCard } from "./delete-card.use-case";
import { toast } from "sonner";

type DeleteCardModalProps = {
  cardId: string;
  cardName: string;
  onCardDeleted: () => void;
  onClose: () => void;
};

export function DeleteCardModal({
  cardId,
  cardName,
  onCardDeleted,
  onClose,
}: DeleteCardModalProps) {
  const { modalContainer, titlesContainer, buttonsContainer } =
    deleteCardDivVariants();

  const { deleteCard, loading } = useDeleteCard({
    onCompleted() {
      toast.success(deleteCardStrings.succesMessage);
      onCardDeleted();
    },
    onError(error) {
      const errorMessage = error.message || deleteCardStrings.errorMessage;
      toast.error(errorMessage);
    },
  });

  function handleDeleteCard() {
    deleteCard({ cardId });
  }

  return (
    <div className={modalContainer()}>
      <div className={titlesContainer()}>
        <Text>{deleteCardStrings.deleteCardTitle}</Text>
        <Text variant="body1">
          {deleteCardStrings.deleteCardSubTitle} "{cardName}" ?
        </Text>
      </div>
      <div className={buttonsContainer()}>
        <Button variant="cta" onClick={onClose}>
          {deleteCardStrings.ctaCancel}
        </Button>
        <Button
          isLoading={loading}
          variant="primaryDestructive"
          onClick={handleDeleteCard}
        >
          {deleteCardStrings.ctaDeleteCard}
        </Button>
      </div>
    </div>
  );
}
