import { Text } from "../../atomic/index";

export function LoginPage() {
  return (
    <div className="items-center justify-center h-screen flex flex-col w-full">
      <div className="p-md flex flex-col gap-sm">
        <Text variant="display">Display</Text>
        <Text variant="heading1">heading1</Text>
        <Text variant="heading2">heading2</Text>
        <Text variant="heading3">heading3</Text>
        <Text variant="heading4">heading4</Text>
        <Text variant="body1">body1</Text>
        <Text variant="body2">body2</Text>
        <Text variant="link">link</Text>
        <Text variant="linkSmall">linkSmall</Text>
        <Text variant="inputLabel">inputLabel</Text>
        <Text variant="inputValue">inputValue</Text>
        <Text variant="inputCaption">inputCaption</Text>
      </div>
    </div>
  );
}
