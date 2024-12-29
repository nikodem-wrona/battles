export abstract class Component<T> {
  protected readonly props: T;
  protected readonly element: HTMLElement;

  constructor(props: T) {
    this.props = props;
    const element = document.createElement("div");
    this.element = element;
  }

  protected appendToApp(): void {
    const app = document.getElementById("app");

    if (!app) {
      throw new Error("App element not found");
    }

    app.appendChild(this.element);
  }

  abstract render(): void;
}
