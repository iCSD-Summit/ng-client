export class NavItem {
  private _label: string;
  private _url: string;

  constructor(label: string, url: string) {
    this._label = label;
    this._url = url;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
