import { Button } from "../../atomic/atm.button/index";

export function LoginPage() {
  return (
    <div className="items-center justify-center h-screen flex flex-col w-full">
      <div className="p-md flex gap-sm">
        <Button variant="primary">Button Label</Button>
        <Button variant="primaryDestructive">Button Label</Button>
        <Button variant="secondary">Button Label</Button>
        <Button variant="secondaryDestructive">Button Label</Button>
        <Button variant="cta">Button Label</Button>
        <Button variant="link">Button Label</Button>
      </div>
      <div className="p-md flex gap-sm">
        <Button variant="primary" disabled={true}>
          Button Label
        </Button>
        <Button variant="primaryDestructive" disabled={true}>
          Button Label
        </Button>
        <Button variant="secondary" disabled={true}>
          Button Label
        </Button>
        <Button variant="secondaryDestructive" disabled={true}>
          Button Label
        </Button>
        <Button variant="cta" disabled={true}>
          Button Label
        </Button>
        <Button variant="link" disabled={true}>
          Button Label
        </Button>
      </div>
    </div>
  );
}
