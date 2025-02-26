import { Text } from "../../atomic/index";

export function LoginPage() {
  return (
    <div className="items-center justify-center h-screen flex flex-col w-full">
      <div className="p-md flex flex-col gap-sm">
        <Text variant="display" tag="h1">
          Display
        </Text>
        <Text variant="heading1" tag="h2">
          heading1
        </Text>
        <Text variant="heading2" tag="h3">
          heading2
        </Text>
        <Text variant="heading3" tag="p">
          heading3
        </Text>
        <Text variant="heading4" tag="p">
          heading4
        </Text>
        <Text variant="body1" tag="p">
          body1
        </Text>
        <Text variant="body2" tag="p">
          body2
        </Text>
        <Text variant="link" tag="p">
          link
        </Text>
        <Text variant="linkSmall" tag="p">
          linkSmall
        </Text>
        <Text variant="inputLabel" tag="p">
          inputLabel
        </Text>
        <Text variant="inputValue" tag="p">
          inputValue
        </Text>
        <Text variant="inputCaption" tag="p">
          inputCaption
        </Text>
      </div>
    </div>
  );
}
